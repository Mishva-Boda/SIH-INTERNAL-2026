import React, { useState } from 'react';
import { BrainCircuit, Compass, Target, GraduationCap, Award, BarChart3, Clock, Video, FileText } from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    { title: 'AI Psychometric Assessment', icon: BrainCircuit, desc: '5-minute adaptive testing evaluating 12 aptitude vectors.' },
    { title: 'Class 11 Stream Selector', icon: Compass, desc: 'PCM vs PCB vs Commerce vs Arts decision engine.' },
    { title: 'College Cutoff Predictor', icon: Target, desc: 'NIRF 2026 cutoff simulator for JEE, NEET, CUET & BITSAT.' },
    { title: 'Scholarship Matcher', icon: GraduationCap, desc: 'Instant eligibility verification for ₹14.2 Cr educational grants.' },
    { title: '1-on-1 Mentorship', icon: Video, desc: 'Direct video guidance with IIT, NID & IISc alumni.' },
    { title: 'AI Student Resume', icon: FileText, desc: 'Portfolio CV generator for college admissions.' },
  ];

  return (
    <div className="space-y-8 pb-16">
      <div className="glass-panel p-8 rounded-32 border border-white/80 gradient-card-blue shadow-glass text-center space-y-3">
        <span className="bg-[#E0F2FE] text-[#4F8EF7] text-xs font-extrabold px-3 py-1 rounded-full border border-[#7DD3FC]">
          Product Features Showcase
        </span>
        <h1 className="text-3xl font-extrabold text-[#0F172A]">Complete AI Career Ecosystem</h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Explore all 22 interactive tools designed for secondary students, parents, and teachers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div key={idx} className="glass-card p-6 rounded-24 space-y-3 glass-card-hover">
              <div className="w-10 h-10 rounded-2xl bg-[#E0F2FE] text-[#4F8EF7] flex items-center justify-center font-bold">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A]">{f.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
