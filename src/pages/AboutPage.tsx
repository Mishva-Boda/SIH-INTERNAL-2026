import React from 'react';
import { Sparkles, Compass, Target, Users, Award, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      {/* Banner */}
      <div className="glass-panel p-8 sm:p-12 rounded-32 border border-white/80 gradient-card-blue shadow-glass-lg text-center space-y-4">
        <span className="bg-[#E0F2FE] text-[#4F8EF7] text-xs font-extrabold px-3.5 py-1 rounded-full border border-[#7DD3FC] uppercase tracking-wider">
          About CareerVerse AI
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] max-w-2xl mx-auto leading-tight">
          Democratizing Career Counselling Across India
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium">
          Built for Smart India Hackathon 2026 to ensure every secondary school student (Classes 8–12) discovers their true potential using Artificial Intelligence.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-24 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E0F2FE] text-[#4F8EF7] flex items-center justify-center font-bold">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#0F172A]">Vision & Problem</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Addressing the career counselling deficit in secondary schools through accessible multi-dimensional psychometrics.
          </p>
        </div>

        <div className="glass-card p-6 rounded-24 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#F3E8FF] text-[#7C5CFC] flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#0F172A]">AI & Psychometrics</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Combining 12 aptitude vectors with real-world Indian industry growth metrics for 96.4% match confidence.
          </p>
        </div>

        <div className="glass-card p-6 rounded-24 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#A7F3D0]/50 text-emerald-700 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#0F172A]">National Impact</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Guiding 250,000+ students across 1,240+ partner schools and matching ₹14.2 Cr in verified educational scholarships.
          </p>
        </div>
      </div>
    </div>
  );
};
