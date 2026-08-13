import React, { useState } from 'react';
import { Bell, CheckCircle2, GraduationCap, Calendar, MessageSquare, AlertCircle, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NotificationsPage: React.FC = () => {
  const { showToast } = useApp();
  const [filter, setFilter] = useState('All');

  const notifications = [
    { id: 1, type: 'Scholarship', title: 'Reliance Foundation Grant Deadline', desc: 'Deadline in 14 days. Complete your fast application.', time: '2 hours ago', icon: GraduationCap, color: 'text-[#4F8EF7] bg-[#E0F2FE]' },
    { id: 2, type: 'Exam', title: 'JEE Main 2027 Registration Portal Update', desc: 'NTA has released official domain syllabus for Physics & Chemistry.', time: '1 day ago', icon: Calendar, color: 'text-[#7C5CFC] bg-[#F3E8FF]' },
    { id: 3, type: 'AI Counsellor', title: 'VerseAI Assessment Report Ready', desc: 'Your 96.4% Career Aptitude Match report is compiled.', time: '2 days ago', icon: MessageSquare, color: 'text-emerald-700 bg-[#A7F3D0]/50' },
  ];

  const filteredNotifs = filter === 'All' ? notifications : notifications.filter(n => n.type === filter);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      <div className="glass-panel p-8 rounded-32 border border-white/80 gradient-card-blue shadow-glass flex items-center justify-between">
        <div>
          <span className="bg-[#E0F2FE] text-[#4F8EF7] text-xs font-extrabold px-3 py-1 rounded-full border border-[#7DD3FC]">
            Notifications Center
          </span>
          <h1 className="text-2xl font-extrabold text-[#0F172A] mt-1">Activity Alerts</h1>
          <p className="text-xs text-slate-600">Stay updated on exam dates, scholarships, and AI reports.</p>
        </div>

        <button
          onClick={() => showToast('Notifications cleared!')}
          className="px-4 py-2 bg-white border border-[#E2E8F0] text-slate-700 hover:text-rose-600 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
        >
          <Trash2 className="w-4 h-4" /> Clear All
        </button>
      </div>

      <div className="flex gap-2">
        {['All', 'Scholarship', 'Exam', 'AI Counsellor'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === f ? 'bg-[#4F8EF7] text-white' : 'bg-white border border-[#E2E8F0] text-slate-600 hover:bg-slate-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredNotifs.map((n) => {
          const Icon = n.icon;
          return (
            <div key={n.id} className="p-4 bg-white border border-[#E2E8F0] rounded-24 space-y-1 flex items-start gap-4 shadow-xs hover:border-[#4F8EF7]/40 transition-all">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${n.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-[#0F172A]">{n.title}</h3>
                  <span className="text-[10px] text-slate-400 font-medium">{n.time}</span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5">{n.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
