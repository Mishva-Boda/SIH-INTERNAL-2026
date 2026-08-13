import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, CheckSquare, Sparkles, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StudyPlannerPage: React.FC = () => {
  const { showToast } = useApp();
  const [secondsLeft, setSecondsLeft] = useState(25 * 60); // 25 min Pomodoro
  const [isActive, setIsActive] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Physics Integration');

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((sec) => sec - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
      showToast('Pomodoro Focus Session Completed! Take a 5-minute break. 🏆');
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(25 * 60);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 gradient-card-blue shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-200">
            Study Routine & Focus Engine
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            AI Focus Pomodoro & <span className="gradient-text">Study Planner</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Optimize your daily study hours for JEE Main & Board exams using structured 25-minute focus sprints.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pomodoro Timer Widget */}
        <div className="glass-card p-8 rounded-3xl space-y-6 flex flex-col items-center justify-center text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pomodoro Sprint</span>

          <div className="relative w-48 h-48 rounded-full border-8 border-brand-100 flex items-center justify-center bg-white shadow-inner">
            <span className="text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
              {formatTime(secondsLeft)}
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-800">Current Focus: {selectedSubject}</p>
            <p className="text-[10px] text-slate-400">25 Min Work • 5 Min Break</p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsActive(!isActive)}
              className="px-6 py-3 bg-gradient-to-r from-brand-500 to-purple-600 text-white rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              {isActive ? 'Pause Session' : 'Start Focus'}
            </button>
            <button
              onClick={handleReset}
              className="p-3 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 text-xs font-bold transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Timetable Schedule */}
        <div className="lg:col-span-2 glass-card p-6 sm:p-8 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-slate-900">Today's Optimized Study Timetable</h3>
          <div className="space-y-3 text-xs">
            {[
              { time: '04:00 PM - 05:30 PM', topic: 'Mathematics: Integration & Calculus Problems', status: 'Completed', color: 'bg-emerald-50 text-emerald-700' },
              { time: '06:00 PM - 07:30 PM', topic: 'Physics: Rotational Mechanics Numerical', status: 'Active Now', color: 'bg-brand-50 text-brand-700 font-bold border border-brand-200' },
              { time: '08:30 PM - 09:30 PM', topic: 'Python Coding & Data Science Project', status: 'Upcoming', color: 'bg-purple-50 text-purple-700' },
            ].map((slot, idx) => (
              <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">{slot.time}</span>
                  <h4 className="font-bold text-slate-900 text-xs mt-0.5">{slot.topic}</h4>
                </div>
                <span className={`text-[10px] px-2.5 py-1 rounded-full ${slot.color}`}>{slot.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
