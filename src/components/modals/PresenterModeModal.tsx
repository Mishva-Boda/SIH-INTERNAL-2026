import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Award, Target, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PresenterModeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: 'Problem Statement & Impact',
      subtitle: 'Smart India Hackathon 2026 Problem Solver',
      content: (
        <div className="space-y-4 text-xs">
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl space-y-1">
            <h4 className="font-bold text-purple-900 text-sm">The Problem</h4>
            <p className="text-purple-700 leading-relaxed">
              Over 250 Million secondary school students in India make critical career and stream choices (Classes 8–12) without scientific aptitude testing, resulting in high career mismatch and stress.
            </p>
          </div>

          <div className="p-4 bg-brand-50 border border-brand-200 rounded-2xl space-y-1">
            <h4 className="font-bold text-brand-900 text-sm">CareerVerse AI Solution</h4>
            <p className="text-brand-700 leading-relaxed">
              A multi-dimensional AI counselling engine providing stream selection, scholarship discovery, college cutoff prediction, and step-by-step 5-year academic roadmaps.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'AI Architecture & Methodology',
      subtitle: 'Multidimensional Psychometric & Market Alignment',
      content: (
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-xs">
            <span className="font-bold text-brand-600 block">12 Aptitude Vectors</span>
            <p className="text-slate-600">Evaluates logic, math, verbal, visual design, and biological reasoning.</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-xs">
            <span className="font-bold text-purple-600 block">Indian Industry Data</span>
            <p className="text-slate-600">Calculates salary scale, future growth, and AI automation resilience.</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-xs">
            <span className="font-bold text-emerald-600 block">Cutoff Prediction Engine</span>
            <p className="text-slate-600">Simulates NIRF rank probability for JEE, NEET, CUET & BITSAT.</p>
          </div>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1 shadow-xs">
            <span className="font-bold text-amber-600 block">Multi-Role Governance</span>
            <p className="text-slate-600">Dedicated portals for Student, Parent, Teacher, and System Admin.</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Key Differentiators & Tech Stack',
      subtitle: 'Modern Lightweight React Architecture',
      content: (
        <div className="space-y-3 text-xs">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Light mode glassmorphism UI built with Tailwind CSS & Framer Motion.</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Client-side instant state transitions with Recharts analytics.</span>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Built-in Judge Mode role switcher for live demonstration.</span>
          </div>
        </div>
      ),
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="bg-brand-50 text-brand-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-brand-200">
                SIH Presenter Mode (Slide {slide + 1}/{slides.length})
              </span>
            </div>
            <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Content */}
          <div className="space-y-2 min-h-[220px]">
            <h2 className="text-xl font-extrabold text-slate-900">{slides[slide].title}</h2>
            <p className="text-xs font-semibold text-slate-500">{slides[slide].subtitle}</p>
            <div className="pt-2">{slides[slide].content}</div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <button
              onClick={() => setSlide(Math.max(0, slide - 1))}
              disabled={slide === 0}
              className="px-4 py-2 bg-slate-100 disabled:opacity-40 rounded-xl text-xs font-bold flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Prev Slide
            </button>

            <button
              onClick={() => {
                if (slide < slides.length - 1) setSlide(slide + 1);
                else onClose();
              }}
              className="px-5 py-2 bg-gradient-to-r from-brand-500 to-purple-600 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1"
            >
              {slide === slides.length - 1 ? 'Exit Pitch Mode' : 'Next Slide'}{' '}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
