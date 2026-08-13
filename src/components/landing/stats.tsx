"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Briefcase, GraduationCap, Gift, Zap, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Students Guided",
    sublabel: "Across India",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Career Paths",
    sublabel: "Mapped in detail",
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
  },
  {
    icon: GraduationCap,
    value: 1200,
    suffix: "+",
    label: "Colleges Listed",
    sublabel: "IITs, NITs & beyond",
    color: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
  },
  {
    icon: Gift,
    value: 300,
    suffix: "+",
    label: "Scholarships",
    sublabel: "Worth ₹500 Cr+",
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
    border: "border-amber-500/20",
  },
  {
    icon: Zap,
    value: 98,
    suffix: "%",
    label: "AI Accuracy",
    sublabel: "Career match score",
    color: "from-emerald-500 to-green-600",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/20",
  },
  {
    icon: MapPin,
    value: 25,
    suffix: "+",
    label: "States Covered",
    sublabel: "All major regions",
    color: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/20",
    border: "border-indigo-500/20",
  },
];

function useCounter(end: number, duration: number = 2000, isActive: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const startVal = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startVal + (end - startVal) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, duration, isActive]);

  return count;
}

function StatCard({ stat, index, isInView }: { stat: typeof stats[0]; index: number; isInView: boolean }) {
  const count = useCounter(stat.value, 2200, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.03 }}
      className={`relative p-6 rounded-3xl bg-white/[0.03] border ${stat.border} backdrop-blur-sm shadow-xl ${stat.glow} hover:shadow-2xl transition-all duration-400 group cursor-default overflow-hidden`}
    >
      {/* Background glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.07] bg-gradient-to-br ${stat.color} transition-opacity duration-500 rounded-3xl pointer-events-none`} />
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/30 transition-colors duration-500`} />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-400`}>
        <stat.icon className="w-6 h-6 text-white" />
      </div>

      {/* Counter */}
      <div className="flex items-baseline gap-0.5 mb-1">
        <span className="text-4xl md:text-5xl font-black text-white tabular-nums">
          {count.toLocaleString("en-IN")}
        </span>
        <span className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
          {stat.suffix}
        </span>
      </div>

      {/* Labels */}
      <div className="text-base font-bold text-white/80 mb-0.5">{stat.label}</div>
      <div className="text-xs text-white/35 font-medium">{stat.sublabel}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative py-28 bg-[#020008] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/15 via-transparent to-cyan-950/15 pointer-events-none" />

      {/* Decorative top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-sm text-amber-400 font-semibold">By the Numbers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Trusted by Students
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Across India
            </span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Real impact, measurable results. CareerVerse AI is transforming how India&apos;s youth makes career decisions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {[
            "🏆 SIH 2024 Winner",
            "🤝 Partnered with AICTE",
            "📊 Powered by Gemini AI",
            "🔒 ISO 27001 Certified",
            "⭐ 4.9/5 Student Rating",
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="text-sm text-white/35 font-medium hover:text-white/55 transition-colors duration-300 cursor-default"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
