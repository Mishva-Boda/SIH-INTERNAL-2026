import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Search, Filter, ShieldCheck, CheckCircle2, AlertCircle, Award, ExternalLink, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { cutoffDataset, CutoffRecord } from '../data/cutoffData';
import collegesData from '../data/colleges.json';
import { useApp } from '../context/AppContext';
import { CollegeDetailsModal, CollegeDetailData } from '../components/college/CollegeDetailsModal';

export const CutoffSimulatorPage: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile, showToast } = useApp();

  // Inputs State
  const [studentRank, setStudentRank] = useState<number>(450);
  const [selectedExam, setSelectedExam] = useState<string>('GUJCET');
  const [selectedCategory, setSelectedCategory] = useState<'General' | 'EWS' | 'OBC' | 'SC' | 'ST'>('General');
  const [selectedState, setSelectedState] = useState<string>('All States');
  const [selectedBranch, setSelectedBranch] = useState<string>('All Branches');
  const [selectedQuota, setSelectedQuota] = useState<string>('All Quotas');

  // Modal State
  const [selectedCollegeModal, setSelectedCollegeModal] = useState<CollegeDetailData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Supported Entrance Exams
  const supportedExams = [
    'GUJCET', 'JEE Main', 'JEE Advanced', 'NEET UG', 'CUET', 'BITSAT', 'MHT-CET',
    'WBJEE', 'KCET', 'COMEDK', 'CLAT', 'NID DAT'
  ];

  const categories: ('General' | 'EWS' | 'OBC' | 'SC' | 'ST')[] = ['General', 'EWS', 'OBC', 'SC', 'ST'];
  
  const indianStatesAndUTs = [
    'All States', 'Gujarat', 'Maharashtra', 'Delhi', 'Karnataka', 'Rajasthan', 'Tamil Nadu',
    'Uttar Pradesh', 'West Bengal', 'Telangana', 'Andhra Pradesh', 'Punjab', 'Kerala'
  ];

  // Exam-Specific Branch Filtering Logic (Requirement 6 & 8)
  const availableBranches = useMemo(() => {
    if (selectedExam === 'NEET UG') {
      return ['All Branches', 'Medicine & Surgery', 'Dentistry', 'Pharmacy', 'Nursing'];
    }
    if (selectedExam === 'CLAT') {
      return ['All Branches', 'Corporate Law', 'Constitutional Law', 'Criminal Law'];
    }
    if (selectedExam === 'NID DAT') {
      return ['All Branches', 'Industrial Design', 'Communication Design', 'Textile Design'];
    }
    if (selectedExam === 'CUET') {
      return ['All Branches', 'Commerce & Finance', 'Economics', 'Statistics'];
    }
    // Default Engineering Exams (JEE Main, JEE Advanced, GUJCET, MHT-CET, BITSAT)
    return [
      'All Branches',
      'Computer Science & Engineering',
      'AI & Machine Learning',
      'Electronics & Communication',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Chemical Engineering',
      'Civil Engineering'
    ];
  }, [selectedExam]);

  // Requirement 8 & 9: Cutoff Prediction & Probability Classification
  const evaluatedCutoffs = useMemo(() => {
    return cutoffDataset
      .filter((record) => {
        // Strict Exam Matching: Prevents showing medical/law colleges when filtering by JEE Main!
        const matchesExam = record.exam === selectedExam;
        const matchesCategory = record.category === selectedCategory;
        const matchesState = selectedState === 'All States' || record.state === selectedState;
        const matchesBranch = selectedBranch === 'All Branches' || record.branch.toLowerCase().includes(selectedBranch.toLowerCase());
        const matchesQuota = selectedQuota === 'All Quotas' || record.seatQuota === selectedQuota;

        return matchesExam && matchesCategory && matchesState && matchesBranch && matchesQuota;
      })
      .map((record) => {
        let predictionCategory: 'SAFE' | 'TARGET' | 'AMBITIOUS' = 'SAFE';
        let categoryColor = 'bg-emerald-50 text-emerald-700 border-emerald-300';
        let explanationText = 'Student rank is comfortably better than the historical closing rank.';

        if (studentRank <= record.closingRank * 0.8) {
          predictionCategory = 'SAFE';
          categoryColor = 'bg-emerald-50 text-emerald-700 border-emerald-300';
          explanationText = 'High admission probability (AIR rank well within historical closing rank).';
        } else if (studentRank <= record.closingRank) {
          predictionCategory = 'TARGET';
          categoryColor = 'bg-blue-50 text-[#1769E8] border-[#BFDBFE]';
          explanationText = 'Good admission chance (AIR rank close to historical closing range).';
        } else {
          predictionCategory = 'AMBITIOUS';
          categoryColor = 'bg-amber-50 text-amber-700 border-amber-300';
          explanationText = 'Challenging (AIR rank exceeds historical closing rank, subject to later rounds).';
        }

        return {
          ...record,
          predictionCategory,
          categoryColor,
          explanationText,
        };
      })
      .sort((a, b) => a.closingRank - b.closingRank);
  }, [studentRank, selectedExam, selectedCategory, selectedState, selectedBranch, selectedQuota]);

  const handleOpenCollegeDetails = (collegeId: string) => {
    const col = collegesData.find((c) => c.id === collegeId) || collegesData[0];
    const detailData: CollegeDetailData = {
      id: col.id,
      name: col.name,
      city: col.city,
      state: col.state,
      location: col.location,
      type: col.type,
      nirfRank: col.nirfRank,
      naacGrade: col.naacGrade || 'A+',
      fees: col.fees,
      avgPlacement: col.avgPlacement,
      highestPlacement: col.highestPlacement,
      coursesOffered: col.coursesOffered,
      admissionExam: col.admissionExam,
      admissionMode: col.admissionType === 'offline' ? 'offline' : 'online',
      portalName: col.portalName,
      officialUrl: col.officialUrl,
      admissionPortalUrl: col.admissionUrl,
      contact: col.contact || '+91-1800-123-4567',
      email: col.email || `admissions@${col.id}.edu.in`,
      image: col.image,
    };

    setSelectedCollegeModal(detailData);
    setIsModalOpen(true);
  };

  const handleTransferToCollegeFinder = () => {
    showToast(`Transferring ${selectedExam} filters into College Finder... 🚀`);
    navigate('/colleges');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <Target className="w-3.5 h-3.5 text-[#1769E8]" />
            Data-Driven Counselling Prediction Engine
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            Official Cutoff & <span className="text-[#1769E8]">Seat Predictor</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl font-semibold">
            Evaluate your AIR rank against verified historical opening and closing cutoffs across JoSAA, ACPC, CAP, and NEET counselling.
          </p>
        </div>

        <button
          onClick={handleTransferToCollegeFinder}
          className="px-5 py-3 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all flex items-center gap-2 shrink-0"
        >
          Explore All Matches in College Finder <Building2 className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Predictor Filters Card */}
      <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <h3 className="text-sm font-extrabold text-[#0B1220] font-heading flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#1769E8]" /> Rank & Counselling Configuration
          </h3>
          <span className="text-xs font-bold text-[#1769E8]">
            Student Stream: <strong className="text-[#0B1220]">{userProfile.stream}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          <div>
            <label className="font-extrabold text-[#000000] block mb-1">Entrance Exam</label>
            <select
              value={selectedExam}
              onChange={(e) => {
                setSelectedExam(e.target.value);
                setSelectedBranch('All Branches');
              }}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {supportedExams.map((ex) => (
                <option key={ex} value={ex}>{ex}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">Your All India Rank (AIR)</label>
            <input
              type="number"
              min="1"
              max="500000"
              value={studentRank}
              onChange={(e) => setStudentRank(parseInt(e.target.value) || 1)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] font-bold rounded-xl focus:outline-none focus:border-[#1769E8]"
            />
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">State / UT</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {indianStatesAndUTs.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-extrabold text-[#000000] block mb-1">Exam-Specific Branch</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] rounded-xl font-bold focus:outline-none focus:border-[#1769E8]"
            >
              {availableBranches.map((br) => (
                <option key={br} value={br}>{br}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Evaluated Cutoff Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2">
          <h3 className="text-base font-extrabold text-[#0B1220] font-heading">
            Predicted Seat Allotments for {selectedExam} ({evaluatedCutoffs.length})
          </h3>
          <span className="text-xs text-[#374151] font-bold">
            Target Rank: <strong className="text-[#1769E8]">AIR {studentRank}</strong>
          </span>
        </div>

        {evaluatedCutoffs.length === 0 ? (
          <div className="p-8 bg-white border border-[#E5E7EB] rounded-3xl text-center space-y-2">
            <AlertCircle className="w-8 h-8 text-[#1769E8] mx-auto" />
            <h4 className="text-base font-extrabold text-[#0B1220]">No verified cutoff records match this combination.</h4>
            <p className="text-xs text-[#374151] font-medium">Try selecting "All States" or "All Branches" to view broader results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evaluatedCutoffs.map((record) => (
              <div
                key={record.id}
                className="p-6 bg-white border border-[#E5E7EB] rounded-3xl space-y-4 shadow-xs hover:border-[#1769E8] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Category Badges & Data Type Label */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase ${record.categoryColor}`}>
                        {record.predictionCategory}
                      </span>
                      <span className="bg-[#F8FAFC] text-[#374151] border border-[#E5E7EB] text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {record.dataType}
                      </span>
                    </div>

                    <span className="text-[10px] text-[#1769E8] font-extrabold bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
                      {record.counsellingAuthority}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-[#0B1220] font-heading">{record.collegeName}</h4>
                    <p className="text-xs text-[#1769E8] font-bold mt-0.5">{record.course} • {record.branch}</p>
                    <p className="text-[11px] text-[#374151] font-semibold mt-1 flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5 text-[#1769E8]" /> {record.explanationText}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] text-xs text-center">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-[#374151] block">Opening Rank</span>
                      <span className="font-extrabold text-[#0B1220]">AIR {record.openingRank}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-[#374151] block">Closing Rank</span>
                      <span className="font-extrabold text-[#1769E8]">AIR {record.closingRank}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold text-[#374151] block">Your Rank</span>
                      <span className="font-extrabold text-[#0B1220]">AIR {studentRank}</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-[#374151] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1769E8]" /> Source: {record.source} ({record.verificationDate})
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleOpenCollegeDetails(record.collegeId)}
                    className="px-4 py-2 bg-[#EFF6FF] hover:bg-[#1769E8] text-[#1769E8] hover:text-white text-xs font-extrabold rounded-full transition-all border border-[#BFDBFE]"
                  >
                    View College Details
                  </button>

                  <button
                    onClick={handleTransferToCollegeFinder}
                    className="px-4 py-2 bg-[#1769E8] hover:bg-[#1264D6] text-white text-xs font-extrabold rounded-full transition-all shadow-xs"
                  >
                    Explore in College Finder →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CollegeDetailsModal
        college={selectedCollegeModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
