import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-12 px-4">
      <div className="glass-panel p-8 sm:p-12 rounded-32 border border-white/80 gradient-card-blue shadow-glass-lg max-w-md text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#4F8EF7] to-[#7C5CFC] text-white mx-auto flex items-center justify-center shadow-lg animate-float-orb">
          <Compass className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-[#4F8EF7]">404</span>
          <h1 className="text-2xl font-bold text-[#0F172A]">Career Path Not Found</h1>
          <p className="text-xs text-slate-600">The page or assessment route you are looking for has moved or does not exist.</p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4F8EF7] to-[#7C5CFC] text-white rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
        >
          Return to Home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
