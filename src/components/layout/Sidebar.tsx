import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BrainCircuit,
  Compass,
  GraduationCap,
  Building2,
  BarChart3,
  User,
  ChevronLeft,
  ChevronRight,
  Target,
  Sparkles,
  MapPin,
  Map,
  Layers,
} from 'lucide-react';
import { useApp, FALLBACK_AVATAR_URL } from '../../context/AppContext';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const { userProfile, isSidebarCollapsed, toggleSidebarCollapse } = useApp();

  const navigationItems = [
    { name: 'Dashboard', path: '/student', icon: LayoutDashboard },
    { name: 'AI Assessment', path: '/assessment', icon: BrainCircuit },
    { name: 'Career Paths', path: '/recommendations', icon: Compass },
    { name: 'College Finder', path: '/colleges', icon: Building2 },
    { name: 'Cutoff Predictor', path: '/cutoff-simulator', icon: Target },
    { name: 'Scholarships', path: '/scholarships', icon: GraduationCap },
    { name: 'Skill Gap Analysis', path: '/skill-gap', icon: BarChart3 },
    { name: 'Stream Finder', path: '/stream-finder', icon: Layers },
    { name: 'Roadmap', path: '/roadmap', icon: Map },
    { name: 'My Profile', path: '/profile', icon: User },
  ];

  return (
    <aside
      className={`bg-white border-r border-[#E5E7EB] min-h-[calc(100vh-4rem)] p-4 hidden md:flex flex-col justify-between shadow-xs transition-all duration-300 shrink-0 ${
        isSidebarCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      <div className="space-y-6">
        {/* SIDEBAR HEADER: PROFILE CARD & COLLAPSE TOGGLE */}
        <div className="flex items-center justify-between gap-2">
          {!isSidebarCollapsed ? (
            <Link
              to="/profile"
              className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] shadow-xs flex items-center gap-3 hover:border-[#1769E8] transition-all group flex-1 overflow-hidden"
            >
              <img
                src={userProfile.avatar}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_AVATAR_URL;
                }}
                alt={userProfile.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#1769E8] shrink-0"
              />
              <div className="overflow-hidden min-w-0">
                <h4 className="font-heading font-extrabold text-xs text-[#0B1220] leading-tight truncate group-hover:text-[#1769E8] transition-colors">
                  {userProfile.name}
                </h4>
                <p className="text-[10px] text-[#374151] font-bold truncate mt-0.5">
                  Class {userProfile.classLevel} • {userProfile.stream}
                </p>
                <p className="text-[9px] text-[#1769E8] font-bold truncate">
                  {userProfile.schoolName || 'Add School'}
                </p>
              </div>
            </Link>
          ) : (
            <Link to="/profile" className="mx-auto" title={userProfile.name}>
              <img
                src={userProfile.avatar}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = FALLBACK_AVATAR_URL;
                }}
                alt={userProfile.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-[#1769E8]"
              />
            </Link>
          )}

          {/* TOGGLE BUTTON */}
          <button
            onClick={toggleSidebarCollapse}
            className="p-2 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] text-[#1769E8] hover:bg-[#EFF6FF] transition-all"
            title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-[#1769E8]" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-[#1769E8]" />
            )}
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="space-y-1">
          {!isSidebarCollapsed && (
            <p className="text-[10px] uppercase font-extrabold tracking-wider text-[#374151] px-3 mb-2 font-heading">
              Main Menu
            </p>
          )}
          <nav className="space-y-1.5">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  title={isSidebarCollapsed ? item.name : undefined}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSidebarCollapsed ? 'justify-center' : ''
                  } ${
                    isActive
                      ? 'bg-[#1769E8] text-white shadow-xs font-extrabold'
                      : 'text-[#111827] hover:text-[#1769E8] hover:bg-[#EFF6FF]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#1769E8]'}`} />
                  {!isSidebarCollapsed && <span className="truncate">{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* FOOTER BRAND BADGE */}
      {!isSidebarCollapsed && (
        <div className="p-3 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] shadow-xs text-[#0B1220] space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="bg-[#1769E8] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              CareerVerse
            </span>
            <span className="text-[10px] font-bold text-[#1769E8]">v2.5 SIH</span>
          </div>
          <h4 className="text-xs font-extrabold font-heading text-[#0B1220] pt-1">CareerVerse AI</h4>
          <p className="text-[10px] text-[#374151] font-semibold">Smart Education SaaS Engine</p>
        </div>
      )}
    </aside>
  );
};
