import React from 'react';
import { X, Building2, MapPin, Award, ExternalLink, GraduationCap, DollarSign, Phone, Mail, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface CollegeDetailData {
  id: string;
  name: string;
  city: string;
  state: string;
  location?: string;
  type: string; // 'Government' | 'Private' | 'Deemed'
  nirfRank?: number | string | null;
  naacGrade?: string;
  fees: string;
  avgPlacement?: string;
  highestPlacement?: string;
  coursesOffered?: string[];
  branches?: string[];
  admissionExam?: string;
  admissionMode?: 'online' | 'offline' | 'counselling';
  portalName?: string;
  officialUrl?: string;
  admissionPortalUrl?: string;
  hostelAvailable?: boolean | string;
  contact?: string;
  email?: string;
  image?: string;
}

interface CollegeDetailsModalProps {
  college: CollegeDetailData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CollegeDetailsModal: React.FC<CollegeDetailsModalProps> = ({ college, isOpen, onClose }) => {
  const { showToast } = useApp();

  if (!isOpen || !college) return null;

  const handleApplyClick = (url?: string, portalName?: string) => {
    if (url && url !== '#') {
      showToast(`Redirecting to official portal: ${portalName || 'Admission Portal'}... 🚀`);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      showToast('This institute conducts offline admissions on campus.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#E5E7EB] rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-md my-8 animate-in fade-in zoom-in duration-200">
        {/* Header with image */}
        <div className="relative rounded-2xl overflow-hidden h-48 border border-[#E5E7EB]">
          <img
            src={college.image || "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"}
            alt={college.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 flex flex-col justify-end text-white">
            <div className="flex items-center gap-2">
              <span className="bg-[#1769E8] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                {college.type} Institute
              </span>
              {college.naacGrade && (
                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  NAAC {college.naacGrade}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white mt-1">{college.name}</h2>
            <p className="text-xs text-slate-200 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#1769E8]" /> {college.city}, {college.state}
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-900 transition-all shadow-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-center">
            <span className="text-[10px] uppercase font-bold text-[#374151] block">NIRF Rank</span>
            <span className="font-extrabold text-[#0B1220] text-sm">
              {college.nirfRank ? `#${college.nirfRank}` : 'Information not available'}
            </span>
          </div>

          <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-center">
            <span className="text-[10px] uppercase font-bold text-[#374151] block">Expected Fees</span>
            <span className="font-extrabold text-[#1769E8] text-sm">{college.fees || 'Information not available'}</span>
          </div>

          <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-center">
            <span className="text-[10px] uppercase font-bold text-[#374151] block">Avg Package</span>
            <span className="font-extrabold text-[#0B1220] text-sm">
              {college.avgPlacement || 'Information not available'}
            </span>
          </div>

          <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-center">
            <span className="text-[10px] uppercase font-bold text-[#374151] block">Admission Exam</span>
            <span className="font-extrabold text-[#0B1220] text-xs">
              {college.admissionExam || 'Information not available'}
            </span>
          </div>
        </div>

        {/* Essential Information Sections */}
        <div className="space-y-4 text-xs">
          {/* Courses & Branches */}
          <div>
            <h4 className="font-extrabold text-[#0B1220] font-heading mb-1.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#1769E8]" /> Courses & Specialized Branches
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {college.coursesOffered && college.coursesOffered.length > 0 ? (
                college.coursesOffered.map((c, i) => (
                  <span key={i} className="px-3 py-1 bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] font-bold rounded-lg">
                    {c}
                  </span>
                ))
              ) : (
                <span className="text-[#374151] italic">Information not available</span>
              )}
            </div>
          </div>

          {/* Admission Process */}
          <div>
            <h4 className="font-extrabold text-[#0B1220] font-heading mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1769E8]" /> Admission Process & Eligibility
            </h4>
            <p className="text-[#374151] font-semibold leading-relaxed">
              Admissions are conducted through merit scores in {college.admissionExam || 'national entrance exams'}.
              {college.naacGrade ? ` Institute accredited with NAAC Grade ${college.naacGrade}.` : ''}
            </p>
          </div>

          {/* Contact & Portals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB]">
            <div>
              <span className="text-[10px] font-bold uppercase text-[#374151] block">Contact & Email</span>
              <p className="font-bold text-[#0B1220]">Phone: {college.contact || 'Information not available'}</p>
              <p className="font-bold text-[#0B1220]">Email: {college.email || 'Information not available'}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-[#374151] block">Official Website</span>
              <a
                href={college.officialUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#1769E8] hover:underline flex items-center gap-1 mt-0.5"
              >
                <Globe className="w-3.5 h-3.5" /> {college.officialUrl || 'Information not available'}
              </a>
            </div>
          </div>
        </div>

        {/* 🎯 Official Admission Apply Button Logic */}
        <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
          <span className="text-[11px] text-[#374151] font-bold">
            Portal: {college.portalName || 'Official Admission Website'}
          </span>

          {college.admissionMode === 'offline' ? (
            <span className="px-5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#374151] rounded-full font-extrabold text-xs">
              Offline Admissions
            </span>
          ) : (
            <button
              onClick={() => handleApplyClick(college.admissionPortalUrl || college.officialUrl, college.portalName)}
              className="px-6 py-2.5 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full font-extrabold shadow-xs transition-all flex items-center gap-2 text-xs"
            >
              {college.portalName ? `Apply Through ${college.portalName} →` : 'Apply Through Official Portal →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
