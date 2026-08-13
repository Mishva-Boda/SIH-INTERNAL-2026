import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border-soft pt-12 pb-8 mt-20 shadow-soft-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border-soft">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-20 bg-warm-peach flex items-center justify-center text-accent-dark shadow-soft-sm border border-warm-beige">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-txt-primary">
                Career<span className="text-accent-dark">Verse</span>
              </span>
            </Link>
            <p className="text-xs text-txt-secondary leading-relaxed">
              Empowering secondary school students with AI-driven career counselling, personalized roadmaps, and scholarship guidance across India.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-txt-primary bg-warm-peach/60 border border-warm-beige px-3.5 py-1.5 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5 text-accent-dark" />
              Smart India Hackathon Prototype
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-bold text-txt-primary uppercase tracking-wider mb-3 font-heading">Platform</h4>
            <ul className="space-y-2 text-xs text-txt-secondary font-medium">
              <li><Link to="/assessment" className="hover:text-txt-primary transition-colors">AI Career Assessment</Link></li>
              <li><Link to="/recommendations" className="hover:text-txt-primary transition-colors">Career Pathways</Link></li>
              <li><Link to="/roadmap" className="hover:text-txt-primary transition-colors">Class 8-12 Roadmap</Link></li>
              <li><Link to="/colleges" className="hover:text-txt-primary transition-colors">College Finder</Link></li>
              <li><Link to="/scholarships" className="hover:text-txt-primary transition-colors">Scholarship Portal</Link></li>
            </ul>
          </div>

          {/* Dashboards */}
          <div>
            <h4 className="text-xs font-bold text-txt-primary uppercase tracking-wider mb-3 font-heading">Role Portals</h4>
            <ul className="space-y-2 text-xs text-txt-secondary font-medium">
              <li><Link to="/student" className="hover:text-txt-primary transition-colors">Student Dashboard</Link></li>
              <li><Link to="/parent" className="hover:text-txt-primary transition-colors">Parent Monitoring Portal</Link></li>
              <li><Link to="/teacher" className="hover:text-txt-primary transition-colors">Teacher & School Portal</Link></li>
              <li><Link to="/admin" className="hover:text-txt-primary transition-colors">SIH Admin Analytics</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xs font-bold text-txt-primary uppercase tracking-wider mb-3 font-heading">Connect</h4>
            <p className="text-xs text-txt-secondary mb-3">
              Built for SIH 2026 Problem Statement: AI Career Counselling for Secondary Schools.
            </p>
            <div className="p-3.5 bg-surface-cream rounded-20 border border-border-soft text-xs text-txt-secondary">
              <span className="font-semibold text-txt-primary">Need Live Demo?</span>
              <p className="text-[11px] text-txt-muted mt-0.5">Use top bar Judge Mode toggle to test role permissions.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-txt-secondary gap-4">
          <p>© 2026 CareerVerse AI. All rights reserved. Designed with precision for Smart India Hackathon.</p>
          <div className="flex items-center gap-1 font-medium">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Indian Secondary Education
          </div>
        </div>
      </div>
    </footer>
  );
};
