import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, CheckCircle2, ArrowRight, TrendingUp, Award, GraduationCap, ShieldCheck, Filter } from 'lucide-react';
import { detailedCareersData, DetailedCareer } from '../data/careerData';
import { useApp } from '../context/AppContext';

export const CareerRecommendationPage: React.FC = () => {
  const { userProfile, savedCareers, toggleSaveCareer } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Science' | 'Commerce' | 'Arts'>('All');

  // Stream-Restricted Filter & Scoring Logic
  const filteredCareers = detailedCareersData
    .filter((career) => {
      // 1. Stream Restriction Check
      const matchesUserStream = career.streamCompatibility.includes(userProfile.stream as any);
      const matchesFilter = selectedFilter === 'All' || career.streamCompatibility.includes(selectedFilter as any);

      return matchesUserStream && matchesFilter;
    })
    .map((career) => {
      // Calculate dynamic match score based on user profile interests & skills
      let dynamicScore = career.matchScore;

      const hasInterestMatch = userProfile.interests.some((interest) =>
        career.whyRecommended.some((rec) => rec.toLowerCase().includes(interest.toLowerCase()))
      );

      if (hasInterestMatch) dynamicScore = Math.min(99, dynamicScore + 2);

      return {
        ...career,
        dynamicScore,
      };
    })
    .sort((a, b) => b.dynamicScore - a.dynamicScore);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <Compass className="w-3.5 h-3.5 text-[#1769E8]" />
            Stream-Restricted Career Matching
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            Recommended <span className="text-[#1769E8]">Career Pathways</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl font-semibold">
            Filtered exclusively for your <strong className="text-[#1769E8]">{userProfile.stream} Stream</strong>, aptitude profile, subject interests, and market demand.
          </p>
        </div>

        {/* Student Stream Badge */}
        <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs text-right space-y-1 shrink-0">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#374151] block">Your Stream</span>
          <span className="text-sm font-extrabold text-[#1769E8] font-heading">{userProfile.stream} Stream</span>
          <p className="text-[10px] text-[#374151] font-bold">Class {userProfile.classLevel} • {userProfile.city}</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-3">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#1769E8]" />
          <span className="text-xs font-extrabold text-[#0B1220]">Stream Filter:</span>
          {['All', 'Science', 'Commerce', 'Arts'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedFilter(st as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all ${
                selectedFilter === st
                  ? 'bg-[#1769E8] text-white shadow-xs'
                  : 'bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#1769E8]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <span className="text-xs font-bold text-[#374151]">
          Found <strong className="text-[#1769E8]">{filteredCareers.length}</strong> compatible career pathways
        </span>
      </div>

      {/* Career Cards List */}
      <div className="space-y-6">
        {filteredCareers.length === 0 ? (
          <div className="p-8 bg-white border border-[#E5E7EB] rounded-2xl text-center space-y-3">
            <Compass className="w-8 h-8 text-[#1769E8] mx-auto" />
            <h4 className="text-base font-extrabold text-[#0B1220]">No Careers Found for Selected Filter</h4>
            <p className="text-xs text-[#374151] max-w-md mx-auto font-medium">
              Career recommendations strictly enforce stream compatibility ({userProfile.stream}). Please select "All" or match your registered stream.
            </p>
          </div>
        ) : (
          filteredCareers.map((career) => {
            const isSaved = savedCareers.includes(career.id);
            return (
              <div
                key={career.id}
                className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-3xl space-y-6 shadow-xs hover:border-[#1769E8] hover:shadow-md transition-all"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold text-[#1769E8] uppercase bg-[#EFF6FF] px-3 py-0.5 rounded-full border border-[#BFDBFE]">
                        {career.category}
                      </span>
                      <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {career.streamCompatibility.join(', ')} Aligned
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1220] font-heading">{career.title}</h3>
                    <p className="text-xs text-[#374151] font-semibold max-w-2xl">{career.description}</p>
                  </div>

                  {/* Match Score Badge */}
                  <div className="text-right shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl">
                      <Sparkles className="w-4 h-4 text-[#1769E8]" />
                      <span className="text-xl font-extrabold text-[#1769E8] font-heading">{career.dynamicScore}%</span>
                    </div>
                    <span className="text-[10px] font-extrabold text-[#374151] block mt-1">Match Compatibility</span>
                  </div>
                </div>

                {/* Grid Info: Transparent "Why Recommended" Checklist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  {/* Why Recommended Checklist */}
                  <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] space-y-2">
                    <h4 className="font-extrabold text-[#0B1220] font-heading flex items-center gap-1.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#1769E8]" /> Why Recommended for You:
                    </h4>
                    <ul className="space-y-1.5 font-semibold text-[#111827]">
                      {career.whyRecommended.map((reason, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs">
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Career Stats & Requirements */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB]">
                        <span className="text-[9px] uppercase font-bold text-[#374151] block">Average Package</span>
                        <span className="font-extrabold text-[#1769E8] text-sm">{career.avgPackage}</span>
                      </div>
                      <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB]">
                        <span className="text-[9px] uppercase font-bold text-[#374151] block">Market Demand</span>
                        <span className="font-extrabold text-[#0B1220] text-sm">{career.marketDemand} ({career.marketGrowth})</span>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <p className="font-bold text-[#0B1220]">
                        <strong className="text-[#374151]">Required Education:</strong> {career.requiredEducation}
                      </p>
                      <p className="font-bold text-[#0B1220]">
                        <strong className="text-[#374151]">Relevant Exams:</strong> {career.relevantExams.join(', ')}
                      </p>
                    </div>

                    {/* Core Skills Pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {career.coreSkills.map((sk, i) => (
                        <span key={i} className="text-[10px] font-bold bg-[#EFF6FF] text-[#1769E8] px-2.5 py-0.5 rounded-md border border-[#BFDBFE]">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
                  <button
                    onClick={() => toggleSaveCareer(career.id)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all border ${
                      isSaved
                        ? 'bg-amber-50 text-amber-700 border-amber-300'
                        : 'bg-[#F8FAFC] text-[#374151] border-[#E5E7EB] hover:bg-[#EFF6FF] hover:text-[#1769E8]'
                    }`}
                  >
                    {isSaved ? '★ Saved to Wishlist' : '☆ Save Career'}
                  </button>

                  <Link
                    to={`/career/${career.id}`}
                    className="px-6 py-2.5 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all flex items-center gap-1.5"
                  >
                    View Roadmap & Detailed Guide <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
