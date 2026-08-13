import React from 'react';
import { Download, Sparkles, User, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import studentData from '../data/studentData.json';
import { useApp } from '../context/AppContext';

export const ResumeBuilderPage: React.FC = () => {
  const { showToast } = useApp();

  const handleExportPDF = () => {
    showToast('Exporting Student Portfolio Resume (PDF)...');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 gradient-card-blue shadow-sm flex items-center justify-between">
        <div>
          <span className="bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-200">
            Smart Resume Builder
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
            AI Student Portfolio <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xs text-slate-600">Generated for College Admissions & Scholarship Applications.</p>
        </div>

        <button
          onClick={handleExportPDF}
          className="px-5 py-3 bg-gradient-to-r from-brand-500 to-purple-600 text-white rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Download className="w-4 h-4" /> Download PDF CV
        </button>
      </div>

      {/* Live Resume Document Preview */}
      <div className="bg-white border border-slate-300 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 text-xs">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 flex items-start justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">{studentData.profile.name}</h2>
            <p className="text-slate-600 font-semibold">{studentData.profile.grade} • {studentData.profile.school}</p>
            <p className="text-slate-400">{studentData.profile.email}</p>
          </div>
          <div className="text-right space-y-1">
            <span className="bg-brand-50 text-brand-700 font-bold px-3 py-1 rounded-full border border-brand-200 inline-block">
              AI Career Match: 96.4%
            </span>
            <p className="text-[10px] text-slate-500">Target Exam: {studentData.profile.targetExam}</p>
          </div>
        </div>

        {/* Career Objective */}
        <div className="space-y-2">
          <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-brand-600">Career Aspirations</h3>
          <p className="text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
            Aspiring AI & Machine Learning Engineer targeting B.Tech CSE at premier institutes. High aptitude in Physics, Mathematics Calculus, and Python Data Analysis algorithms.
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-brand-600">Academic Records</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-800 block">Class 10 CBSE Board</span>
              <span className="text-emerald-600 font-extrabold">94.2% Distinction</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-800 block">Class 11 Science Stream</span>
              <span className="text-brand-600 font-extrabold">91.8% PCM Aggregate</span>
            </div>
          </div>
        </div>

        {/* Verified Skills */}
        <div className="space-y-2">
          <h3 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-brand-600">Verified Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {studentData.skills.map((s, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-800 font-semibold px-3 py-1 rounded-lg border border-slate-200">
                {s.skill} ({s.level}%)
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
