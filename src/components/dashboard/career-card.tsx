"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  DollarSign,
  TrendingUp,
  Star,
  ChevronRight,
} from "lucide-react";

interface CareerCardProps {
  rank: number;
  title: string;
  matchPercent: number;
  salaryMin: number;
  salaryMax: number;
  growthRate: string;
  growthLabel: string;
  requiredSkills: string[];
  description: string;
  icon?: string;
  color?: "violet" | "cyan" | "emerald" | "amber" | "rose";
  onExplore?: () => void;
}

const colorMap = {
  violet: {
    gradient: "from-surface to-surface-cream",
    border: "border-border-soft",
    glow: "shadow-soft-md",
    text: "text-txt-primary",
    bg: "bg-warm-peach/50",
    badgeBg: "bg-warm-peach/60",
    badgeText: "text-txt-primary",
    button: "bg-primary-soft hover:bg-primary-dark text-txt-primary hover:text-white",
    bar: "bg-muted-teal",
    ringColor: "ring-warm-beige",
  },
  cyan: {
    gradient: "from-surface to-surface-cream",
    border: "border-border-soft",
    glow: "shadow-soft-md",
    text: "text-txt-primary",
    bg: "bg-primary-soft/30",
    badgeBg: "bg-primary-soft/40",
    badgeText: "text-txt-primary",
    button: "bg-primary-soft hover:bg-primary-dark text-txt-primary hover:text-white",
    bar: "bg-muted-teal",
    ringColor: "ring-warm-beige",
  },
  emerald: {
    gradient: "from-surface to-surface-cream",
    border: "border-border-soft",
    glow: "shadow-soft-md",
    text: "text-txt-primary",
    bg: "bg-emerald-100/60",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    button: "bg-primary-soft hover:bg-primary-dark text-txt-primary hover:text-white",
    bar: "bg-emerald-600",
    ringColor: "ring-warm-beige",
  },
  amber: {
    gradient: "from-surface to-surface-cream",
    border: "border-border-soft",
    glow: "shadow-soft-md",
    text: "text-txt-primary",
    bg: "bg-amber-100/60",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    button: "bg-primary-soft hover:bg-primary-dark text-txt-primary hover:text-white",
    bar: "bg-amber-500",
    ringColor: "ring-warm-beige",
  },
  rose: {
    gradient: "from-surface to-surface-cream",
    border: "border-border-soft",
    glow: "shadow-soft-md",
    text: "text-txt-primary",
    bg: "bg-rose-100/60",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-800",
    button: "bg-primary-soft hover:bg-primary-dark text-txt-primary hover:text-white",
    bar: "bg-rose-500",
    ringColor: "ring-warm-beige",
  },
};

function formatSalary(lpa: number): string {
  if (lpa >= 100) return `₹${(lpa / 100).toFixed(1)}Cr`;
  return `₹${lpa}L`;
}

export function CareerCard({
  rank,
  title,
  matchPercent,
  salaryMin,
  salaryMax,
  growthRate,
  growthLabel,
  requiredSkills,
  description,
  icon = "💼",
  color = "violet",
  onExplore,
}: CareerCardProps) {
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-24 border ${c.border} bg-surface p-6 shadow-soft-sm hover:shadow-soft-md hover:border-warm-beige transition-all duration-300`}
    >
      {/* Rank badge */}
      <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-surface-cream border border-border-soft shadow-soft-sm">
        <span className="text-xs font-bold text-txt-primary">#{rank}</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 pr-10">
        <div className={`w-12 h-12 rounded-20 ${c.bg} border border-border-soft flex items-center justify-center text-2xl flex-shrink-0 shadow-soft-sm`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold font-heading text-txt-primary truncate group-hover:text-accent-dark transition-colors">{title}</h3>
          <p className="text-xs text-txt-secondary mt-0.5 line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Match Percentage Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span className="text-xs font-semibold text-txt-primary">AI Match</span>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">{matchPercent}%</span>
        </div>
        <div className="h-2 rounded-full bg-border-soft overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${matchPercent}%` }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className={`h-full rounded-full ${c.bar}`}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-20 bg-surface-cream border border-border-soft p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="w-3.5 h-3.5 text-txt-secondary" />
            <span className="text-[10px] font-semibold text-txt-secondary uppercase tracking-wide">
              Salary Range
            </span>
          </div>
          <p className="text-xs font-bold text-txt-primary">
            {formatSalary(salaryMin)} – {formatSalary(salaryMax)}
          </p>
          <p className="text-[10px] text-txt-secondary mt-0.5">per annum</p>
        </div>
        <div className="rounded-20 bg-surface-cream border border-border-soft p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            <span className="text-[10px] font-semibold text-txt-secondary uppercase tracking-wide">
              Growth
            </span>
          </div>
          <p className="text-xs font-bold text-emerald-700">{growthRate}</p>
          <p className="text-[10px] text-txt-secondary mt-0.5">{growthLabel}</p>
        </div>
      </div>

      {/* Required Skills */}
      <div className="mt-4">
        <p className="text-[10px] font-semibold text-txt-secondary uppercase tracking-wider mb-2">
          Key Skills Required
        </p>
        <div className="flex flex-wrap gap-1.5">
          {requiredSkills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-surface-cream text-txt-primary border border-border-soft"
            >
              {skill}
            </span>
          ))}
          {requiredSkills.length > 5 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-surface-cream text-txt-secondary border border-border-soft">
              +{requiredSkills.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Explore Button */}
      <button
        onClick={onExplore}
        className={`mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-full ${c.button} text-xs font-semibold shadow-soft-sm transition-all duration-200`}
      >
        <Briefcase className="w-4 h-4" />
        Explore Career Path
        <ChevronRight className="w-4 h-4 ml-auto" />
      </button>
    </motion.div>
  );
}
