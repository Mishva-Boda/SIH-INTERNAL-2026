import React from 'react';
import { Users, Sparkles, CheckCircle2, Calendar, TrendingUp, Heart, BookOpen, MessageSquare } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export const ParentDashboardPage: React.FC = () => {
  const chartData = [
    { subject: 'Maths', score: 92 },
    { subject: 'Physics', score: 84 },
    { subject: 'Coding', score: 88 },
    { subject: 'Aptitude', score: 96 },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 gradient-card-purple shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full border border-purple-200">
            Parent Supervision Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Aarav Sharma's <span className="gradient-text">Career Overview</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Class 11 Science (PCM) • Delhi Public School, R.K. Puram
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-2xl flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> On Track for JEE 2027
          </span>
        </div>
      </div>

      {/* Grid: Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Child's Career Match</span>
          <p className="text-3xl font-extrabold text-slate-900">96.4%</p>
          <p className="text-xs text-purple-600 font-bold">Top Fit: AI & ML Engineering</p>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Class 11 Academic Health</span>
          <p className="text-3xl font-extrabold text-emerald-600">91.8%</p>
          <p className="text-xs text-slate-500">Based on recent term exam evaluations.</p>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Matched Scholarships</span>
          <p className="text-3xl font-extrabold text-brand-600">2 Grants</p>
          <p className="text-xs text-slate-500">Total grant value up to ₹2,80,000.</p>
        </div>
      </div>

      {/* Performance Bar Chart */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
        <h3 className="text-base font-bold text-slate-900">Subject Competency Trend</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 11 }} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="score" fill="#7B61FF" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
