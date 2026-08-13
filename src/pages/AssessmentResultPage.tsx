import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, RefreshCw, Compass, Trophy, BrainCircuit, Building2, GraduationCap, Map, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useApp } from '../context/AppContext';

export const AssessmentResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile, showToast } = useApp();

  const assessmentData = userProfile.assessmentResults;

  if (!assessmentData) {
    return (
      <div className="max-w-xl mx-auto my-16 p-8 bg-white border border-[#E5E7EB] rounded-3xl text-center space-y-4 shadow-xs">
        <BrainCircuit className="w-12 h-12 text-[#1769E8] mx-auto" />
        <h3 className="text-xl font-extrabold text-[#0B1220] font-heading">No Saved Assessment Found</h3>
        <p className="text-xs text-[#374151] font-semibold">
          Complete the career discovery assessment to unlock 100% personalized recommendations & aptitude radar metrics.
        </p>
        <Link
          to="/assessment"
          className="px-6 py-3 bg-[#1769E8] hover:bg-[#1264D6] text-white font-extrabold text-xs rounded-full shadow-xs inline-flex items-center gap-2"
        >
          Start Career Discovery Assessment <ArrowRight className="w-4 h-4 text-white" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-6 pb-12">
      {/* Summary Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-[#1769E8] text-white mx-auto flex items-center justify-center shadow-xs">
          <Sparkles className="w-8 h-8 text-white" />
        </div>

        <div>
          <span className="bg-[#EFF6FF] text-[#1769E8] text-xs font-extrabold px-3.5 py-1 rounded-full border border-[#BFDBFE] uppercase">
            Career Profile Report • {assessmentData.completedAt}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] mt-3 font-heading">
            Primary Career Domain: <span className="text-[#1769E8]">{assessmentData.topCareers[0]?.career.category}</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl mx-auto mt-2 font-semibold leading-relaxed">
            Suggested Stream: <strong className="text-[#1769E8]">{assessmentData.suggestedStream} Stream</strong>. Key Strengths Detected: <strong className="text-[#0B1220]">{assessmentData.strengthsList.join(', ')}</strong>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/student"
            className="px-6 py-3 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all flex items-center gap-2"
          >
            Go to Student Dashboard <ArrowRight className="w-4 h-4 text-white" />
          </Link>
          <Link
            to="/assessment"
            className="px-5 py-3 bg-white border border-[#E5E7EB] text-[#374151] rounded-full text-xs font-bold hover:bg-[#EFF6FF] transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4 text-[#1769E8]" /> Retake Assessment
          </Link>
        </div>
      </div>

      {/* Dynamic Radar Chart & Strengths Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dynamic Radar Chart */}
        <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4">
          <h3 className="text-base font-extrabold text-[#0B1220] font-heading">Personalized Aptitude Radar</h3>
          <p className="text-xs text-[#374151] font-semibold">Calculated dynamically from your actual answer choices.</p>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={assessmentData.radarMetrics}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#0B1220', fontSize: 10, fontWeight: 700 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name={userProfile.name} dataKey="score" stroke="#1769E8" fill="#1769E8" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Academic Roadmap Alignment */}
        <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4">
          <h3 className="text-base font-extrabold text-[#0B1220] font-heading">Academic & Entrance Alignment</h3>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#374151] block">Recommended Stream</span>
            <span className="text-lg font-extrabold text-[#1769E8] font-heading block">{assessmentData.suggestedStream} Stream</span>
            <p className="text-xs text-[#374151] font-semibold">Matches your dominant aptitude and problem-solving preferences.</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0B1220] block">Recommended Target Entrance Exams:</span>
            <div className="flex flex-wrap gap-1.5">
              {assessmentData.suggestedExams.map((ex, i) => (
                <span key={i} className="px-3 py-1 bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] rounded-full text-xs font-bold">
                  {ex}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-[#0B1220] block">Recommended Degree Courses:</span>
            <div className="flex flex-wrap gap-1.5">
              {assessmentData.suggestedCourses.map((cr, i) => (
                <span key={i} className="px-3 py-1 bg-[#F8FAFC] text-[#0B1220] border border-[#E5E7EB] rounded-full text-xs font-bold">
                  {cr}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top 5 Personalized Career Matches List */}
      <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-6">
        <h3 className="text-lg font-extrabold text-[#0B1220] font-heading flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
          <Trophy className="w-5 h-5 text-[#1769E8]" /> Top 5 Personalized Career Recommendations
        </h3>

        <div className="space-y-4">
          {assessmentData.topCareers.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl space-y-3 hover:border-[#1769E8] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-extrabold text-[#1769E8] uppercase bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                    RANK #{idx + 1} • {item.career.category}
                  </span>
                  <h4 className="text-base font-extrabold text-[#0B1220] font-heading mt-1">{item.career.title}</h4>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xl font-extrabold text-[#1769E8] font-heading block">{item.matchPercentage}%</span>
                  <span className="text-[10px] font-bold text-[#374151]">Match Compatibility</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs">
                <span className="text-[10px] font-bold uppercase text-[#1769E8] block mb-0.5">Why This Matches You:</span>
                <p className="text-[#111827] font-semibold leading-relaxed">{item.whyRecommendedText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
