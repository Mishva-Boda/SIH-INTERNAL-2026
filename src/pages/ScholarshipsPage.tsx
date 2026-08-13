import React, { useState } from 'react';
import { GraduationCap, Search, Filter, Award, ExternalLink, Calendar, CheckCircle2, DollarSign, Sparkles, X, AlertCircle } from 'lucide-react';
import scholarshipsData from '../data/scholarships.json';
import { useApp } from '../context/AppContext';

export const ScholarshipsPage: React.FC = () => {
  const { userProfile, showToast, savedScholarships, toggleSaveScholarship } = useApp();

  const [incomeFilter, setIncomeFilter] = useState('All Income');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [stateFilter, setStateFilter] = useState('All States');
  const [levelFilter, setLevelFilter] = useState('All Levels');
  const [searchTerm, setSearchTerm] = useState('');

  const incomeOptions = ['All Income', 'Below ₹2.5L / yr', 'Below ₹6.0L / yr', 'Below ₹15.0L / yr', 'Merit-Based (No Cap)'];
  const categoryOptions = ['All Categories', 'Government Merit', 'Merit-cum-Means', 'Private Need-Based', 'Corporate Need-Based', 'Women in STEM'];
  const stateOptions = ['All States', 'National (All India)', 'Gujarat', 'Maharashtra', 'Delhi', 'Karnataka'];
  const levelOptions = ['All Levels', 'Class 9-10', 'Class 11-12', 'Undergraduate', 'Postgraduate'];

  const filteredScholarships = scholarshipsData.filter((s) => {
    const matchesCategory = categoryFilter === 'All Categories' || s.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchesState = stateFilter === 'All States' || s.eligibilitySummary.toLowerCase().includes(stateFilter.toLowerCase()) || stateFilter === 'National (All India)';
    const matchesLevel = levelFilter === 'All Levels' || s.educationLevel.toLowerCase().includes(levelFilter.toLowerCase());
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.provider.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesState && matchesLevel && matchesSearch;
  });

  const handleApply = (url: string | undefined, title: string) => {
    if (!url || url === '#') {
      showToast('Official application link unavailable at this time.');
      return;
    }

    showToast(`Redirecting to official scholarship portal for ${title}... 🎓`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <GraduationCap className="w-3.5 h-3.5 text-[#1769E8]" />
            National Educational Grants Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            India-Wide <span className="text-[#1769E8]">Scholarships & Grants</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl font-semibold">
            Explore verified Central Govt, State Govt, and corporate foundation grants matched to your Class {userProfile.classLevel} profile.
          </p>
        </div>
      </div>

      {/* Filter Panel */}
      <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <h3 className="text-sm font-extrabold text-[#0B1220] font-heading flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#1769E8]" /> Scholarship Eligibility Filters
          </h3>
          <span className="text-xs font-bold text-[#374151]">
            Target Student: <strong className="text-[#1769E8]">{userProfile.name}</strong> (Class {userProfile.classLevel})
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="font-extrabold text-[#000000] mb-1 block">Family Income Limit</label>
            <select
              value={incomeFilter}
              onChange={(e) => setIncomeFilter(e.target.value)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {incomeOptions.map((inc) => (
                <option key={inc} value={inc}>{inc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] mb-1 block">Category / Type</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] mb-1 block">State / Scope</label>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {stateOptions.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] mb-1 block">Education Level</label>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {levelOptions.map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-[#374151] absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search scholarships by name or provider..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E7EB] rounded-full text-xs text-[#111827] font-semibold focus:outline-none focus:border-[#1769E8] shadow-xs"
          />
        </div>

        <p className="text-xs text-[#374151] font-bold">
          Found <strong className="text-[#1769E8]">{filteredScholarships.length}</strong> eligible grants
        </p>
      </div>

      {/* Cards List */}
      {filteredScholarships.length === 0 ? (
        <div className="p-8 bg-white border border-[#E5E7EB] rounded-3xl text-center space-y-2">
          <AlertCircle className="w-8 h-8 text-[#1769E8] mx-auto" />
          <h4 className="text-base font-extrabold text-[#0B1220]">No scholarships match your current filters.</h4>
          <p className="text-xs text-[#374151] font-medium">Try setting Category or State to "All".</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredScholarships.map((s) => {
            const isBookmarked = savedScholarships.includes(s.id);
            return (
              <div
                key={s.id}
                className="p-6 bg-white border border-[#E5E7EB] rounded-3xl space-y-4 shadow-xs hover:border-[#1769E8] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-extrabold text-[#1769E8] uppercase bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                        {s.category}
                      </span>
                      <h3 className="text-base font-extrabold text-[#0B1220] font-heading mt-2">{s.title}</h3>
                      <p className="text-xs text-[#374151] font-semibold">{s.provider}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base font-extrabold text-solid-black font-heading block">{s.amount}</span>
                      <span className="text-[10px] text-solid-black font-bold">Grant Amount</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-xs space-y-1">
                    <span className="text-[10px] font-bold uppercase text-[#374151] block">Eligibility Summary</span>
                    <p className="text-[#111827] font-semibold leading-relaxed">{s.eligibilitySummary}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                  <button
                    onClick={() => toggleSaveScholarship(s.id)}
                    className="text-xs font-bold text-[#374151] hover:text-[#1769E8]"
                  >
                    {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
                  </button>

                  {s.officialUrl && s.officialUrl !== '#' ? (
                    <button
                      onClick={() => handleApply(s.officialUrl, s.title)}
                      className="px-4 py-2 bg-[#1769E8] hover:bg-[#1264D6] text-white text-xs font-extrabold rounded-full transition-all shadow-xs flex items-center gap-1.5"
                    >
                      Apply Now →
                    </button>
                  ) : (
                    <span className="px-3.5 py-1.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#374151] rounded-full text-xs font-bold">
                      Official Application Link Unavailable
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
