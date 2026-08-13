import React, { useState, useMemo } from 'react';
import { Building2, Search, Filter, MapPin, ExternalLink, GraduationCap, Info, Sparkles, CheckCircle2, ShieldCheck, X, ArrowRight, Layers } from 'lucide-react';
import collegesData from '../data/colleges.json';
import { useApp } from '../context/AppContext';
import { CollegeDetailsModal, CollegeDetailData } from '../components/college/CollegeDetailsModal';

export const CollegeRecommendationPage: React.FC = () => {
  const { userProfile, showToast } = useApp();

  // Filters State
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [selectedExam, setSelectedExam] = useState('All Exams');
  const [sortBy, setSortBy] = useState<'match' | 'nirf' | 'fees' | 'placement'>('match');
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination State
  const [visibleCount, setVisibleCount] = useState(12);

  // Modal State
  const [selectedCollegeModal, setSelectedCollegeModal] = useState<CollegeDetailData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 28 Indian States & 8 Union Territories
  const indianStatesAndUTs = [
    'All States',
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
    'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  // Career Domains
  const domainList = [
    'All Domains',
    'Engineering & Technology',
    'Computer Science & IT',
    'Artificial Intelligence & Machine Learning',
    'Data Science & Analytics',
    'Healthcare & Medicine',
    'Pharmacy',
    'Commerce & Accounting',
    'Finance & Banking',
    'Business & Management',
    'Law & Judiciary',
    'Design',
    'UI/UX',
    'Architecture',
    'Media & Journalism',
    'Psychology',
    'Humanities & Liberal Arts',
    'Pure Sciences & Research'
  ];

  const collegeTypes = ['All Types', 'Government', 'Private', 'Deemed', 'Central University'];
  const examList = ['All Exams', 'JEE Main', 'JEE Advanced', 'GUJCET', 'MHT-CET', 'NEET UG', 'CUET UG', 'CLAT', 'BITSAT', 'CAT'];

  // Dynamically extract courses from dataset
  const courseList = useMemo(() => {
    const coursesSet = new Set<string>();
    collegesData.forEach((c) => c.coursesOffered?.forEach((crs) => coursesSet.add(crs)));
    return ['All Courses', ...Array.from(coursesSet)];
  }, []);

  // Dependent City List based on selected state
  const availableCities = useMemo(() => {
    if (selectedState === 'All States') {
      const citiesSet = new Set<string>();
      collegesData.forEach((c) => citiesSet.add(c.city));
      return ['All Cities', ...Array.from(citiesSet)];
    }
    const filteredCities = collegesData.filter((c) => c.state === selectedState).map((c) => c.city);
    return ['All Cities', ...Array.from(new Set(filteredCities))];
  }, [selectedState]);

  // Reset city if not available in state
  const handleStateChange = (st: string) => {
    setSelectedState(st);
    setSelectedCity('All Cities');
  };

  const clearAllFilters = () => {
    setSelectedDomain('All Domains');
    setSelectedState('All States');
    setSelectedCity('All Cities');
    setSelectedType('All Types');
    setSelectedCourse('All Courses');
    setSelectedExam('All Exams');
    setSearchTerm('');
    showToast('Cleared all college filters!');
  };

  // Active Filter Chips List
  const activeChips = [
    selectedDomain !== 'All Domains' && { label: `Domain: ${selectedDomain}`, clear: () => setSelectedDomain('All Domains') },
    selectedState !== 'All States' && { label: `State: ${selectedState}`, clear: () => setSelectedState('All States') },
    selectedCity !== 'All Cities' && { label: `City: ${selectedCity}`, clear: () => setSelectedCity('All Cities') },
    selectedType !== 'All Types' && { label: `Type: ${selectedType}`, clear: () => setSelectedType('All Types') },
    selectedCourse !== 'All Courses' && { label: `Course: ${selectedCourse}`, clear: () => setSelectedCourse('All Courses') },
    selectedExam !== 'All Exams' && { label: `Exam: ${selectedExam}`, clear: () => setSelectedExam('All Exams') },
    searchTerm && { label: `Search: "${searchTerm}"`, clear: () => setSearchTerm('') },
  ].filter(Boolean) as { label: string; clear: () => void }[];

  // Process & filter colleges
  const processedColleges = useMemo(() => {
    return collegesData
      .map((c) => {
        const isNearby = c.city.toLowerCase() === userProfile.city.toLowerCase();
        const isSameState = c.state.toLowerCase() === userProfile.state.toLowerCase();
        let matchScore = 82;

        if (isNearby) matchScore += 14;
        else if (isSameState) matchScore += 8;

        if (userProfile.stream && c.stream?.toLowerCase().includes(userProfile.stream.toLowerCase())) {
          matchScore += 4;
        }

        let admissionType: 'government' | 'institution' | 'offline' = (c.admissionType as any) || 'institution';
        let portalName = c.portalName || 'Official Website';
        let admissionUrl: string | undefined = c.admissionUrl || c.officialUrl;

        if (!admissionUrl || admissionUrl === '#') {
          admissionType = 'offline';
          admissionUrl = undefined;
        }

        return {
          ...c,
          isNearby,
          isSameState,
          matchScore: Math.min(99, matchScore),
          admissionType,
          portalName,
          admissionUrl,
        };
      })
      .filter((c) => {
        const matchesDomain = selectedDomain === 'All Domains' || (c.domains && c.domains.includes(selectedDomain)) || c.stream.toLowerCase().includes(selectedDomain.toLowerCase());
        const matchesState = selectedState === 'All States' || c.state === selectedState;
        const matchesCity = selectedCity === 'All Cities' || c.city === selectedCity;
        const matchesType = selectedType === 'All Types' || c.type === selectedType;
        const matchesCourse = selectedCourse === 'All Courses' || c.coursesOffered.some((crs) => crs.toLowerCase().includes(selectedCourse.toLowerCase()));
        const matchesExam = selectedExam === 'All Exams' || (c.admissionExam && c.admissionExam.toLowerCase().includes(selectedExam.toLowerCase()));
        const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.city.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesDomain && matchesState && matchesCity && matchesType && matchesCourse && matchesExam && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'nirf') return (a.nirfRank || 999) - (b.nirfRank || 999);
        if (sortBy === 'fees') return a.feesNumeric - b.feesNumeric;
        return b.matchScore - a.matchScore;
      });
  }, [selectedDomain, selectedState, selectedCity, selectedType, selectedCourse, selectedExam, searchTerm, sortBy, userProfile]);

  const displayedColleges = processedColleges.slice(0, visibleCount);

  // Categorize into location sections
  const nearYouColleges = displayedColleges.filter((c) => c.isNearby);
  const stateColleges = displayedColleges.filter((c) => c.isSameState && !c.isNearby);
  const nationalColleges = displayedColleges.filter((c) => !c.isSameState);

  const handleOpenDetails = (c: any) => {
    const detailData: CollegeDetailData = {
      id: c.id,
      name: c.name,
      city: c.city,
      state: c.state,
      location: c.location,
      type: c.type,
      nirfRank: c.nirfRank,
      naacGrade: c.naacGrade || 'A+',
      fees: c.fees,
      avgPlacement: c.avgPlacement,
      highestPlacement: c.highestPlacement,
      coursesOffered: c.coursesOffered,
      branches: c.branches,
      admissionExam: c.admissionExam,
      admissionMode: c.admissionType === 'offline' ? 'offline' : 'online',
      portalName: c.portalName,
      officialUrl: c.officialUrl,
      admissionPortalUrl: c.admissionUrl,
      contact: c.contact || '+91-1800-123-4567',
      email: c.email || `admissions@${c.id}.edu.in`,
      image: c.image,
    };

    setSelectedCollegeModal(detailData);
    setIsModalOpen(true);
  };

  const handleApplyClick = (e: React.MouseEvent, c: any) => {
    e.stopPropagation();
    if (c.admissionType === 'offline' || !c.admissionUrl) {
      showToast('This institute conducts offline admissions on campus.');
      return;
    }

    if (c.admissionType === 'government') {
      showToast(`Redirecting to official government portal: ${c.portalName}... 🚀`);
    } else {
      showToast(`Opening official institute website for ${c.name}... 🌐`);
    }

    window.open(c.admissionUrl, '_blank', 'noopener,noreferrer');
  };

  const renderCollegeCard = (c: any) => (
    <div
      key={c.id}
      onClick={() => handleOpenDetails(c)}
      className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-xs hover:border-[#1769E8] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
    >
      <div>
        <div className="relative h-44 overflow-hidden">
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
            {c.isNearby && (
              <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
                📍 Near You
              </span>
            )}
            <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              NIRF #{c.nirfRank}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-[#1769E8] text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-xs">
            {c.matchScore}% Match Score
          </div>
        </div>

        <div className="p-5 space-y-3">
          <div>
            <h3 className="text-base font-extrabold text-[#0B1220] font-heading group-hover:text-[#1769E8] transition-colors leading-tight">
              {c.name}
            </h3>
            <p className="text-xs text-[#374151] font-semibold flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#1769E8]" /> {c.city}, {c.state} ({c.type})
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {c.coursesOffered.slice(0, 3).map((crs: string, i: number) => (
              <span key={i} className="text-[10px] font-bold bg-[#EFF6FF] text-[#1769E8] px-2 py-0.5 rounded-md border border-[#BFDBFE]">
                {crs}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 p-2.5 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-xs">
            <div>
              <span className="text-[9px] uppercase font-bold text-[#374151] block">Expected Fees</span>
              <span className="font-extrabold text-[#1769E8]">{c.fees}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold text-[#374151] block">Avg Placement</span>
              <span className="font-extrabold text-[#0B1220]">{c.avgPlacement}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 border-t border-[#E5E7EB] flex items-center justify-between">
        <span className="text-[10px] font-extrabold text-[#374151]">Exam: {c.admissionExam}</span>
        {c.admissionType === 'offline' ? (
          <span className="px-3.5 py-1.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#374151] rounded-full text-xs font-bold">
            Offline Admissions
          </span>
        ) : c.admissionType === 'government' ? (
          <button
            onClick={(e) => handleApplyClick(e, c)}
            className="px-3.5 py-1.5 bg-[#1769E8] hover:bg-[#1264D6] text-white text-xs font-extrabold rounded-full transition-all shadow-xs flex items-center gap-1"
          >
            Apply Through {c.portalName} →
          </button>
        ) : (
          <button
            onClick={(e) => handleApplyClick(e, c)}
            className="px-3.5 py-1.5 bg-[#EFF6FF] hover:bg-[#1769E8] text-[#1769E8] hover:text-white text-xs font-extrabold rounded-full transition-all border border-[#BFDBFE] flex items-center gap-1"
          >
            Official Website →
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <Building2 className="w-3.5 h-3.5 text-[#1769E8]" />
            National College Recommendation Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            India-Wide <span className="text-[#1769E8]">College & University Finder</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl font-semibold">
            Discover verified institutes across 28 Indian States & 8 UTs tailored to your academic profile and exam rank.
          </p>
        </div>
      </div>

      {/* Comprehensive Filter Panel */}
      <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <h3 className="text-sm font-extrabold text-[#0B1220] font-heading flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#1769E8]" /> Comprehensive Filters (28 States & 8 UTs)
          </h3>
          {activeChips.length > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-xs font-extrabold text-rose-600 hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <div>
            <label className="font-extrabold text-[#000000] block mb-1">Career Domain</label>
            <select value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)} className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]">
              {domainList.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">State / UT</label>
            <select value={selectedState} onChange={(e) => handleStateChange(e.target.value)} className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]">
              {indianStatesAndUTs.map((st) => <option key={st} value={st}>{st}</option>)}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">City</label>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]">
              {availableCities.map((ct) => <option key={ct} value={ct}>{ct}</option>)}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">Course</label>
            <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]">
              {courseList.map((cr) => <option key={cr} value={cr}>{cr}</option>)}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">College Type</label>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]">
              {collegeTypes.map((tp) => <option key={tp} value={tp}>{tp}</option>)}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">Entrance Exam</label>
            <select value={selectedExam} onChange={(e) => setSelectedExam(e.target.value)} className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]">
              {examList.map((ex) => <option key={ex} value={ex}>{ex}</option>)}
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {activeChips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E5E7EB]">
            <span className="text-xs font-bold text-[#374151] self-center">Active Filters:</span>
            {activeChips.map((chip, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] rounded-full text-xs font-bold flex items-center gap-1"
              >
                {chip.label}
                <button onClick={chip.clear} className="hover:text-rose-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-[#374151] absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search college by name or city..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E7EB] rounded-full text-xs text-[#111827] font-semibold focus:outline-none focus:border-[#1769E8] shadow-xs"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#374151] font-bold">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="p-2 bg-white border border-[#E5E7EB] text-[#111827] text-xs font-bold rounded-full focus:outline-none focus:border-[#1769E8] shadow-xs"
          >
            <option value="match">Best Match Score</option>
            <option value="nirf">NIRF Ranking</option>
            <option value="fees">Lowest Expected Fees</option>
          </select>
        </div>
      </div>

      {/* Empty State */}
      {processedColleges.length === 0 ? (
        <div className="p-12 bg-white border border-[#E5E7EB] rounded-3xl text-center space-y-3">
          <Building2 className="w-10 h-10 text-[#1769E8] mx-auto" />
          <h4 className="text-base font-extrabold text-[#0B1220] font-heading">No Colleges Match Your Current Filters</h4>
          <p className="text-xs text-[#374151] max-w-md mx-auto font-medium">
            Try clearing state, course, or domain filters to view institutes across India.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-5 py-2 bg-[#1769E8] text-white rounded-full font-extrabold text-xs shadow-xs"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <>
          {/* SECTION 1: NEAR YOU */}
          {nearYouColleges.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-2">
                <span className="text-base font-extrabold text-solid-black font-heading">📍 Near You in {userProfile.city}</span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-200">
                  High Location Fit ({nearYouColleges.length})
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearYouColleges.map(renderCollegeCard)}
              </div>
            </div>
          )}

          {/* SECTION 2: RECOMMENDED IN YOUR STATE */}
          {stateColleges.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-2">
                <span className="text-base font-extrabold text-solid-black font-heading">🏛️ Recommended in {userProfile.state}</span>
                <span className="bg-[#EFF6FF] text-[#1769E8] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                  State Priority ({stateColleges.length})
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stateColleges.map(renderCollegeCard)}
              </div>
            </div>
          )}

          {/* SECTION 3: BEST MATCHES ACROSS INDIA */}
          {nationalColleges.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-2">
                <span className="text-base font-extrabold text-solid-black font-heading">⭐ Best Matches Across India</span>
                <span className="bg-white text-[#374151] border border-[#E5E7EB] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  All India NIRF Top Rankings ({nationalColleges.length})
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nationalColleges.map(renderCollegeCard)}
              </div>
            </div>
          )}

          {/* Requirement 30: Pagination / Load More */}
          {visibleCount < processedColleges.length && (
            <div className="pt-4 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="px-8 py-3 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all inline-flex items-center gap-2"
              >
                Load More Institutes ({processedColleges.length - visibleCount} remaining) <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}

      {/* College Details Modal */}
      <CollegeDetailsModal
        college={selectedCollegeModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
