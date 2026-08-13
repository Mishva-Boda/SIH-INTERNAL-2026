import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight, BookOpen, BrainCircuit } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StreamFinderPage: React.FC = () => {
  const { showToast } = useApp();
  const [mathInterest, setMathInterest] = useState(90);
  const [scienceInterest, setScienceInterest] = useState(85);
  const [creativityInterest, setCreativityInterest] = useState(70);
  const [businessInterest, setBusinessInterest] = useState(40);

  // Recommended Stream Calculation
  const getRecommendedStream = () => {
    if (mathInterest >= 80 && scienceInterest >= 80) {
      return {
        stream: 'Science (PCM - Physics, Chemistry, Maths)',
        badge: '98% Best Match',
        desc: 'Ideal for Engineering, AI & Machine Learning, Robotics, Architecture, and Data Science careers.',
        color: 'from-brand-500 to-purple-600',
      };
    } else if (scienceInterest >= 85 && mathInterest < 75) {
      return {
        stream: 'Science (PCB - Physics, Chemistry, Biology)',
        badge: '95% Best Match',
        desc: 'Ideal for Medical Sciences, Biotechnology, Genomics, Pharmacy, and Bio-Engineering.',
        color: 'from-emerald-500 to-teal-600',
      };
    } else if (businessInterest >= 75) {
      return {
        stream: 'Commerce with Mathematics / Economics',
        badge: '92% Best Match',
        desc: 'Ideal for Fintech, Chartered Accountancy (CA), Investment Banking, and Business Analytics.',
        color: 'from-amber-500 to-orange-600',
      };
    } else {
      return {
        stream: 'Arts / Humanities & Product Design',
        badge: '90% Best Match',
        desc: 'Ideal for UX/UI Product Design, Digital Communications, Journalism, and Psychology.',
        color: 'from-purple-500 to-indigo-600',
      };
    }
  };

  const rec = getRecommendedStream();

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 gradient-card-purple shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full border border-purple-200">
            Class 10 Decision Assistant
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Class 11 Stream <span className="gradient-text">Selector Engine</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Adjust your subject interest levels to find whether PCM, PCB, Commerce, or Arts suits your long-term career goals.
          </p>
        </div>
      </div>

      {/* Sliders Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
          <h3 className="text-base font-bold text-slate-900">Subject Interest Sliders</h3>

          <div className="space-y-5 text-xs">
            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Mathematics & Analytical Logic</span>
                <span className="text-brand-600 font-extrabold">{mathInterest}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mathInterest}
                onChange={(e) => setMathInterest(parseInt(e.target.value))}
                className="w-full accent-brand-500"
              />
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Physical Sciences & Experiments</span>
                <span className="text-purple-600 font-extrabold">{scienceInterest}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={scienceInterest}
                onChange={(e) => setScienceInterest(parseInt(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Visual Design & Creative Arts</span>
                <span className="text-emerald-600 font-extrabold">{creativityInterest}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={creativityInterest}
                onChange={(e) => setCreativityInterest(parseInt(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>

            <div>
              <div className="flex justify-between font-bold text-slate-700 mb-1">
                <span>Economics, Business & Finance</span>
                <span className="text-amber-600 font-extrabold">{businessInterest}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={businessInterest}
                onChange={(e) => setBusinessInterest(parseInt(e.target.value))}
                className="w-full accent-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Instant AI Recommendation Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">AI Stream Fit Result</span>
            <div className={`p-6 rounded-2xl bg-gradient-to-r ${rec.color} text-white space-y-2 shadow-lg`}>
              <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {rec.badge}
              </span>
              <h2 className="text-xl font-extrabold">{rec.stream}</h2>
              <p className="text-xs text-white/90 leading-relaxed pt-1">{rec.desc}</p>
            </div>
          </div>

          <button
            onClick={() => showToast('Stream selection saved to your Career Profile!')}
            className="w-full py-3 bg-slate-900 text-white rounded-2xl text-xs font-bold shadow-md hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            Confirm Stream Choice <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
