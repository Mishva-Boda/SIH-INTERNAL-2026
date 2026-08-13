import React, { useState } from 'react';
import { Map, CheckCircle2, ChevronRight, Sparkles, BookOpen, Award, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export const CareerRoadmapPage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(3); // Class 11 active

  const timelineStages = [
    {
      stage: 'Class 8-9',
      title: 'Foundation & Discovery',
      status: 'Completed',
      desc: 'Build foundational interest in Maths, Science, and Coding. Participate in Olympiads & Robofests.',
      tasks: ['Scored 92% in Class 8 Science', 'Won Regional Science Exhibition', 'Learned Python basics'],
      icon: BookOpen,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      stage: 'Class 10',
      title: 'Stream Selection & Board Exam',
      status: 'Completed',
      desc: 'Achieve 90%+ in CBSE Class 10 Board exams and select PCM (Physics, Chemistry, Maths) Stream.',
      tasks: ['Scored 94.2% in CBSE Class 10', 'Selected Science Stream (PCM)', 'Took 1st AI Psychometric Test'],
      icon: CheckCircle2,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    {
      stage: 'Class 11',
      title: 'Competitive Exam Core (Current)',
      status: 'Active Milestone',
      desc: 'Master Physics Mechanics & Calculus. Prepare for JEE Main 2027 & BITSAT.',
      tasks: ['Solving 15 Integration problems daily', 'Targeting 95%+ in Class 11 Finals', 'Figma & UI Design practice'],
      icon: Sparkles,
      color: 'bg-brand-50 text-brand-600 border-brand-200 ring-2 ring-brand-400',
    },
    {
      stage: 'Class 12',
      title: 'Board Finals & Entrance Exams',
      status: 'Upcoming 2027',
      desc: 'Appear for JEE Main, JEE Advanced, BITSAT, CUET & UCEED exams.',
      tasks: ['Complete Mock Tests', 'Target Top 1000 AIR in JEE Advanced', 'Apply for Reliance Foundation Grant'],
      icon: GraduationCap,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      stage: 'College (Years 1-4)',
      title: 'B.Tech CSE / AI Degree',
      status: 'Future Goal',
      desc: 'Enroll at IIT Bombay / BITS Pilani for B.Tech in CSE / AI-DS. Participate in hackathons & open source.',
      tasks: ['Maintain 8.5+ CGPA', 'Complete 2 Tech Internships', 'Build Generative AI open source app'],
      icon: Award,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      stage: 'Career & Job',
      title: 'AI Lead / Tech Unicorn',
      status: 'Dream Goal',
      desc: 'Join Google DeepMind, OpenAI, or build a deep-tech AI startup in India.',
      tasks: ['Achieve ₹24L+ fresh graduate offer', 'File AI research patent', 'Guide future students on CareerVerse'],
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 gradient-card-purple shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full border border-purple-200">
            5-Year AI Master Roadmap
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Class 8 to Dream Career <span className="gradient-text">Timeline</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Step-by-step academic goals, entrance exam deadlines, and skill targets personalized for Aarav Sharma.
          </p>
        </div>
      </div>

      {/* Interactive Horizontal/Vertical Timeline */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {timelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl border text-left transition-all space-y-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-500 to-purple-600 text-white shadow-lg shadow-brand-500/20'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-brand-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {stage.stage}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </div>
                <h4 className="text-xs font-bold leading-snug line-clamp-1">{stage.title}</h4>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Showcase */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-3xl border border-slate-200 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                Stage {activeStage + 1}: {timelineStages[activeStage].stage}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                {timelineStages[activeStage].title}
              </h2>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${timelineStages[activeStage].color}`}>
              {timelineStages[activeStage].status}
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {timelineStages[activeStage].desc}
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Milestones & Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {timelineStages[activeStage].tasks.map((task, i) => (
                <div key={i} className="p-4 bg-white border border-slate-200 rounded-2xl text-xs font-semibold text-slate-800 flex items-center gap-2.5 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {task}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
