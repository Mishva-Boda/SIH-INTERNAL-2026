import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Target,
  Compass,
  Building2,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  CheckSquare,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StudentDashboard: React.FC = () => {
  const { userProfile, hasCompletedAssessment } = useApp();

  // Single Source of Truth: Assessment Results
  const assessmentData = userProfile.assessmentResults;
  const topCareerObj = assessmentData?.topCareers?.[0];

  // Dynamic Top Career Match Values
  let topCareerTitle = 'AI & Machine Learning Engineer';
  let topMatchScore = 94;
  let topReasonText = 'High alignment with your Mathematics & Tech problem-solving preferences.';

  if (topCareerObj) {
    topCareerTitle = topCareerObj.career.title;
    topMatchScore = topCareerObj.matchPercentage;
    topReasonText = topCareerObj.whyRecommendedText;
  } else if (userProfile.stream === 'Commerce') {
    topCareerTitle = 'Chartered Accountant (CA) & Finance';
    topMatchScore = 91;
    topReasonText = 'High alignment with your Accountancy, Economics & Business decision-making preferences.';
  } else if (userProfile.stream === 'Arts') {
    topCareerTitle = 'Corporate Lawyer & Legal Specialist';
    topMatchScore = 88;
    topReasonText = 'High alignment with your Political Science, Law & Social Communication preferences.';
  }

  // Calculate SVG stroke offset dynamically for progress ring
  const strokeOffset = 213 - (213 * topMatchScore) / 100;

  return (
    <div className="space-y-8 pb-12">
      {/* Banner / Welcome Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <Sparkles className="w-3.5 h-3.5 text-[#1769E8]" />
            Smart India Hackathon (SIH) Personalized Dashboard
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            Welcome, <span className="text-[#1769E8]">{userProfile.name}</span>! 👋
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl font-semibold">
            Class {userProfile.classLevel} • {userProfile.stream} Stream • {userProfile.city}, {userProfile.state}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/assessment"
            className="px-5 py-2.5 bg-[#EFF6FF] hover:bg-[#1769E8] text-[#1769E8] hover:text-white text-xs font-extrabold rounded-full transition-all border border-[#BFDBFE] flex items-center gap-2"
          >
            <BrainCircuit className="w-4 h-4" /> Assessment Status
          </Link>
          <Link
            to="/recommendations"
            className="px-5 py-2.5 bg-[#1769E8] hover:bg-[#1264D6] text-white text-xs font-extrabold rounded-full transition-all shadow-xs flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-white" /> Explore Pathways
          </Link>
        </div>
      </div>

      {/* Top Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. TOP CAREER MATCH CARD (100% Dynamic from Assessment) */}
        <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4 flex flex-col justify-between hover:border-[#1769E8] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#1769E8] font-heading flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#1769E8]" /> Top Career Match
            </span>
            <span className="bg-[#EFF6FF] text-[#1769E8] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
              AI Calculated
            </span>
          </div>

          {!hasCompletedAssessment && !assessmentData ? (
            /* New User Uncompleted State */
            <div className="space-y-3 py-2 text-center">
              <BrainCircuit className="w-8 h-8 text-[#1769E8] mx-auto" />
              <h4 className="text-sm font-extrabold text-[#0B1220]">Complete your assessment to discover your top career match.</h4>
              <p className="text-xs text-[#374151] font-semibold">Evaluates aptitude, subject passions, and work-style preferences.</p>
              <Link
                to="/assessment"
                className="w-full py-2.5 px-4 bg-[#1769E8] text-white hover:bg-[#1264D6] font-extrabold text-xs rounded-full shadow-xs flex items-center justify-center gap-2 transition-all mt-2"
              >
                Start Assessment →
              </Link>
            </div>
          ) : (
            /* Dynamic Top Career Match Display */
            <div className="space-y-3">
              <div className="flex items-center gap-4 my-1">
                {/* Dynamic SVG Circular Progress Ring */}
                <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="34" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="#1769E8"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="213"
                      strokeDashoffset={strokeOffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute font-heading text-base font-extrabold text-solid-black">
                    {topMatchScore}%
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold font-heading text-[#0B1220] leading-snug">
                    {topCareerTitle}
                  </h3>
                  <p className="text-xs text-[#374151] font-semibold mt-1 leading-relaxed">
                    {topReasonText}
                  </p>
                </div>
              </div>

              <Link
                to="/recommendations"
                className="w-full py-2.5 px-4 bg-[#1769E8] text-white hover:bg-[#1264D6] font-extrabold text-xs rounded-full shadow-xs flex items-center justify-center gap-2 transition-all mt-2"
              >
                Explore Top Matches <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          )}
        </div>

        {/* 2. ASSESSMENT PROFILE SUMMARY CARD */}
        <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#374151] font-heading flex items-center gap-1.5">
              <BrainCircuit className="w-4 h-4 text-[#1769E8]" /> Assessment Profile
            </span>
            <span className="bg-[#F8FAFC] text-[#0B1220] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
              {assessmentData ? 'Completed' : 'Pending'}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-[#E5E7EB]">
              <span className="font-bold text-[#374151]">Academic Stream:</span>
              <span className="font-extrabold text-[#1769E8]">{assessmentData?.suggestedStream || userProfile.stream}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E5E7EB]">
              <span className="font-bold text-[#374151]">Primary Domain:</span>
              <span className="font-extrabold text-[#0B1220]">{topCareerObj?.career.category || 'Engineering & Tech'}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="font-bold text-[#374151]">Target Exams:</span>
              <span className="font-extrabold text-[#0B1220]">{userProfile.targetExams.slice(0, 2).join(', ')}</span>
            </div>
          </div>

          <Link
            to="/assessment"
            className="w-full py-2.5 px-4 bg-[#F8FAFC] text-[#374151] hover:bg-[#EFF6FF] hover:text-[#1769E8] font-extrabold text-xs rounded-full border border-[#E5E7EB] flex items-center justify-center gap-2 transition-all"
          >
            {assessmentData ? 'View Full Assessment Report →' : 'Take Career Assessment →'}
          </Link>
        </div>

        {/* 3. ROADMAP MILESTONE CARD */}
        <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#374151] font-heading flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#1769E8]" /> Roadmap Milestone
            </span>
            <span className="bg-[#EFF6FF] text-solid-black text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
              42% Completed
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between font-semibold text-[#111827]">
              <span>Python & Logic Basics</span>
              <span className="text-emerald-600 font-extrabold flex items-center gap-1"><CheckSquare className="w-3.5 h-3.5 text-emerald-600" /> Completed</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-[#111827]">
              <span>Mathematics & Calculus</span>
              <span className="text-emerald-600 font-extrabold flex items-center gap-1"><CheckSquare className="w-3.5 h-3.5 text-emerald-600" /> Completed</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-[#111827]">
              <span>SQL & Relational Databases</span>
              <span className="text-solid-black font-extrabold">60% In Progress</span>
            </div>
          </div>

          <Link
            to="/roadmap"
            className="w-full py-2.5 px-4 bg-[#1769E8] text-white hover:bg-[#1264D6] font-extrabold text-xs rounded-full shadow-xs flex items-center justify-center gap-2 transition-all"
          >
            View Full Roadmap →
          </Link>
        </div>
      </div>

      {/* Quick Access Modules Navigation Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-extrabold text-[#0B1220] font-heading">
          Explore CareerVerse Platform Modules
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            to="/recommendations"
            className="p-5 bg-white border border-[#E5E7EB] rounded-3xl hover:border-[#1769E8] hover:shadow-md transition-all space-y-2 group"
          >
            <Compass className="w-6 h-6 text-[#1769E8] group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-extrabold text-[#0B1220] font-heading">Career Paths</h4>
            <p className="text-[11px] text-[#374151] font-semibold">Explore 100+ mapped careers</p>
          </Link>

          <Link
            to="/colleges"
            className="p-5 bg-white border border-[#E5E7EB] rounded-3xl hover:border-[#1769E8] hover:shadow-md transition-all space-y-2 group"
          >
            <Building2 className="w-6 h-6 text-[#1769E8] group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-extrabold text-[#0B1220] font-heading">College Finder</h4>
            <p className="text-[11px] text-[#374151] font-semibold">28 States & UTs institutes</p>
          </Link>

          <Link
            to="/cutoff-simulator"
            className="p-5 bg-white border border-[#E5E7EB] rounded-3xl hover:border-[#1769E8] hover:shadow-md transition-all space-y-2 group"
          >
            <Target className="w-6 h-6 text-[#1769E8] group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-extrabold text-[#0B1220] font-heading">Cutoff Predictor</h4>
            <p className="text-[11px] text-[#374151] font-semibold">AIR rank counselling engine</p>
          </Link>

          <Link
            to="/scholarships"
            className="p-5 bg-white border border-[#E5E7EB] rounded-3xl hover:border-[#1769E8] hover:shadow-md transition-all space-y-2 group"
          >
            <GraduationCap className="w-6 h-6 text-[#1769E8] group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-extrabold text-[#0B1220] font-heading">Scholarships</h4>
            <p className="text-[11px] text-solid-black font-semibold">India-wide Govt & Corporate grants</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
