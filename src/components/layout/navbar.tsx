import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, LogIn, Sparkles, GraduationCap, Building2, User, Home, LayoutDashboard } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { toastMessage, userProfile, isLoggedIn } = useApp();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] transition-all shadow-xs">
      {/* Toast Banner */}
      {toastMessage && (
        <div className="bg-[#1769E8] text-white text-xs py-1.5 px-4 text-center font-extrabold animate-fade-in shadow-xs">
          {toastMessage}
        </div>
      )}

      <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#1769E8] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-xl tracking-tight text-[#0B1220]">
                Career<span className="text-[#1769E8]">Verse</span>
              </span>
              <span className="bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                AI
              </span>
            </div>
            <p className="text-[10px] text-[#374151] font-semibold hidden sm:block">
              Indian Higher Education Guidance System
            </p>
          </div>
        </Link>

        {/* CENTER NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-1 bg-[#F8FAFC] p-1.5 rounded-full border border-[#E5E7EB]">
          {/* HOME BUTTON - ALWAYS Navigates to Landing Page (/) */}
          <Link
            to="/"
            className={`px-4 py-1.5 text-xs font-extrabold rounded-full transition-all flex items-center gap-1.5 ${
              location.pathname === '/'
                ? 'bg-[#1769E8] text-white shadow-xs'
                : 'text-[#374151] hover:text-[#0B1220] hover:bg-white'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>

          {isLoggedIn && (
            <Link
              to="/student"
              className={`px-4 py-1.5 text-xs font-extrabold rounded-full transition-all flex items-center gap-1.5 ${
                location.pathname === '/student'
                  ? 'bg-[#1769E8] text-white shadow-xs'
                  : 'text-[#374151] hover:text-[#0B1220] hover:bg-white'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Dashboard
            </Link>
          )}

          <Link
            to="/recommendations"
            className={`px-4 py-1.5 text-xs font-extrabold rounded-full transition-all ${
              location.pathname === '/recommendations'
                ? 'bg-[#1769E8] text-white shadow-xs'
                : 'text-[#374151] hover:text-[#0B1220] hover:bg-white'
            }`}
          >
            Career Paths
          </Link>

          <Link
            to="/colleges"
            className={`px-4 py-1.5 text-xs font-extrabold rounded-full transition-all flex items-center gap-1.5 ${
              location.pathname === '/colleges'
                ? 'bg-[#1769E8] text-white shadow-xs'
                : 'text-[#374151] hover:text-[#0B1220] hover:bg-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            College Finder
          </Link>

          <Link
            to="/scholarships"
            className={`px-4 py-1.5 text-xs font-extrabold rounded-full transition-all flex items-center gap-1.5 ${
              location.pathname === '/scholarships'
                ? 'bg-[#1769E8] text-white shadow-xs'
                : 'text-[#374151] hover:text-[#0B1220] hover:bg-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Scholarships
          </Link>
        </nav>

        {/* RIGHT: AUTH ACTIONS OR LOGGED IN PROFILE */}
        <div className="flex items-center gap-3 shrink-0">
          {!isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-4 py-2 text-xs font-extrabold text-[#1769E8] bg-[#EFF6FF] border border-[#BFDBFE] hover:bg-[#DBEAFE] transition-all rounded-full"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-xs font-extrabold text-white bg-[#1769E8] hover:bg-[#1264D6] rounded-full shadow-xs transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Sign Up
              </Link>
            </div>
          ) : (
            <Link
              to="/profile"
              className="flex items-center gap-2.5 p-1.5 pr-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-full hover:border-[#1769E8] transition-all shadow-xs group"
            >
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-[#1769E8]"
              />
              <div className="text-left leading-tight hidden sm:block">
                <p className="text-xs font-extrabold text-[#0B1220] group-hover:text-[#1769E8] transition-colors">
                  {userProfile.name}
                </p>
                <p className="text-[10px] text-[#374151] font-semibold">
                  Class {userProfile.classLevel} • {userProfile.city}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
