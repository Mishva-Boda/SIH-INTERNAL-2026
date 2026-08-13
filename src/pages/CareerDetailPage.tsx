import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Award,
  Building2,
  BookOpen,
  Youtube,
  Calendar,
  CheckCircle2,
  Bookmark,
  Share2,
} from 'lucide-react';
import careersData from '../data/careers.json';
import { useApp } from '../context/AppContext';

export const CareerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { savedCareers, toggleSaveCareer, showToast } = useApp();

  const career = careersData.find((c) => c.id === id) || careersData[0];
  const isSaved = savedCareers.includes(career.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Career details link copied to clipboard!');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Back Button */}
      <Link
        to="/recommendations"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Recommended Careers
      </Link>

      {/* Hero Banner Section */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/80 gradient-card-blue shadow-lg space-y-6 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-200">
                {career.category}
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                {career.matchScore}% Match Confidence
              </span>
              <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full border border-purple-200">
                {career.futureDemand}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {career.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {career.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => toggleSaveCareer(career.id)}
              className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 ${
                isSaved
                  ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4 fill-current" />
              {isSaved ? 'Saved' : 'Save to Wishlist'}
            </button>
            <button
              onClick={handleShare}
              className="p-3 bg-white text-slate-700 border border-slate-200 rounded-2xl hover:bg-slate-50 text-xs font-bold transition-all"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Overview: Salary & AI Resilience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Average Salary Scale</span>
          <p className="text-2xl font-extrabold text-slate-900">{career.salaryRange}</p>
          <p className="text-xs text-slate-500">Starts ₹12L fresh graduate to ₹38L+ senior lead.</p>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AI Automation Resilience</span>
          <p className="text-2xl font-extrabold text-emerald-600">{career.aiResilience}</p>
          <p className="text-xs text-slate-500">Requires complex human reasoning & strategic logic.</p>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Ideal Work Style</span>
          <p className="text-sm font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-xl w-fit mt-1">
            {career.workStyle}
          </p>
          <p className="text-xs text-slate-500">Perfect match for analytical problem solvers.</p>
        </div>
      </div>

      {/* 5-Year Step-by-step Career Progression Timeline */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Step-by-Step Educational Roadmap</h2>
            <p className="text-xs text-slate-500">Class 8 school prep through college graduation</p>
          </div>
          <Link
            to="/roadmap"
            className="text-xs font-bold text-brand-600 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-xl hover:bg-brand-100 transition-all"
          >
            Interactive Roadmap ➔
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {career.timeline.map((item, idx) => (
            <div key={idx} className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2 relative">
              <span className="text-[10px] font-extrabold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
                {item.phase}
              </span>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed pt-1">{item.task}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Entrance Exams & Top Colleges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Entrance Exams */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-500" /> Target Entrance Exams
          </h3>
          <div className="flex flex-wrap gap-2">
            {career.entranceExams.map((exam, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 bg-purple-50 text-purple-700 border border-purple-200 rounded-xl text-xs font-bold"
              >
                {exam}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500">National level exams for undergraduate admissions.</p>
        </div>

        {/* Top Colleges */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-brand-500" /> Premier Colleges in India
          </h3>
          <div className="flex flex-wrap gap-2">
            {career.topColleges.map((col, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 bg-brand-50 text-brand-700 border border-brand-200 rounded-xl text-xs font-bold"
              >
                {col}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500">Top NIRF ranked institutes offering specialized degrees.</p>
        </div>
      </div>

      {/* Hiring Companies & Recommended Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Companies */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" /> Top Recruiting Companies
          </h3>
          <div className="flex flex-wrap gap-2">
            {career.topCompanies.map((comp, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 bg-slate-100 text-slate-800 border border-slate-200 rounded-xl text-xs font-semibold"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-500" /> Recommended Books & Channels
          </h3>
          <div className="space-y-2 text-xs text-slate-700">
            {career.recommendedBooks.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-semibold">{b}</span>
              </div>
            ))}
            {career.youtubeChannels.map((yt, i) => (
              <div key={i} className="flex items-center gap-2 text-rose-600">
                <Youtube className="w-3.5 h-3.5" />
                <span className="font-semibold">{yt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
