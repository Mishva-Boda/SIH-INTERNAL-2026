import React from 'react';
import { BookOpen, Users, Award, TrendingUp, Search, Download } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export const TeacherDashboardPage: React.FC = () => {
  const students = [
    { name: 'Aarav Sharma', stream: 'Class 11 Science (PCM)', score: '96.4%', topCareer: 'AI & ML Engineer', status: 'Completed' },
    { name: 'Ananya Verma', stream: 'Class 11 Science (PCB)', score: '94.0%', topCareer: 'Biotech Geneticist', status: 'Completed' },
    { name: 'Rohan Gupta', stream: 'Class 11 Commerce', score: '91.2%', topCareer: 'Fintech Specialist', status: 'Completed' },
    { name: 'Sanya Kapoor', stream: 'Class 11 Arts', score: '89.5%', topCareer: 'UX Product Designer', status: 'In Progress' },
  ];

  const streamDistribution = [
    { name: 'Science (PCM)', value: 45, color: '#4F8EF7' },
    { name: 'Science (PCB)', value: 25, color: '#10B981' },
    { name: 'Commerce', value: 20, color: '#7B61FF' },
    { name: 'Arts & Design', value: 10, color: '#F59E0B' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 gradient-card-blue shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
            School & Teacher Analytics
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Class 11 Batch <span className="gradient-text">Career Analytics</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Delhi Public School, R.K. Puram • Total Students Assessed: 142 / 150 (94%)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-slate-900">Career Stream Interest Distribution</h3>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={streamDistribution} cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={4} dataKey="value">
                  {streamDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-slate-900">Class Performance Leaderboard</h3>
          <div className="space-y-2 text-xs">
            {students.map((s, idx) => (
              <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">{s.name}</h4>
                  <p className="text-[10px] text-slate-500">{s.stream}</p>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-brand-600 block">{s.score}</span>
                  <span className="text-[10px] text-purple-600 font-semibold">{s.topCareer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
