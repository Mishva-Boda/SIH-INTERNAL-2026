"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Cpu, Map, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Take the AI Assessment",
    description: "Complete our adaptive 45-minute assessment covering aptitude, personality (RIASEC), interests, and values. Our AI adapts questions in real-time based on your responses.",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    accent: "text-violet-400",
    border: "border-violet-500/30",
    details: ["Aptitude & IQ Analysis", "RIASEC Personality Mapping", "Interest Profiling", "Values Alignment Check"],
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Analyses Your Profile",
    description: "Gemini AI cross-references your results with data from 50,000+ students, industry trends, salary data, and career trajectories to build your unique career fingerprint.",
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    details: ["Pattern Matching with 50K+ profiles", "Industry Trend Mapping", "Salary Growth Analysis", "Success Factor Identification"],
  },
  {
    number: "03",
    icon: Map,
    title: "Explore Your Matches",
    description: "Browse your personalised career matches with detailed explanations. Explore skill gap analyses, college recommendations, and scholarship opportunities for each path.",
    color: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/30",
    accent: "text-pink-400",
    border: "border-pink-500/30",
    details: ["Top Career Matches with % scores", "College Shortlisting (1,200+)", "Scholarship Matching (300+)", "Peer Comparison Insights"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Follow Your Roadmap",
    description: "Get a week-by-week action plan from today to your first job offer. Track milestones, get reminders, and chat with our AI counsellor anytime you need guidance.",
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/30",
    accent: "text-amber-400",
    border: "border-amber-500/30",
    details: ["Week-by-week Action Plan", "Exam & Deadline Reminders", "24/7 AI Counsellor Chat", "Progress Tracking Dashboard"],
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative py-28 bg-[#020008] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/8 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm text-cyan-400 font-semibold">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
            From Confusion to
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Clarity in 4 Steps
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Our structured process ensures you never feel lost. Each step builds on the last to give you complete career clarity.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500/60 via-cyan-500/60 via-pink-500/60 to-amber-500/60"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Vertical connector - mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-full w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
                )}

                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl ${step.glow} shadow-lg group-hover:scale-110 transition-transform duration-400 relative z-10`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#020008] border border-white/10 flex items-center justify-center z-20">
                    <span className="text-xs font-black text-white/60">{step.number}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:${step.border} transition-all duration-400 group-hover:bg-white/[0.05]`}>
                  <h3 className={`text-lg font-bold text-white mb-2 group-hover:${step.accent} transition-colors duration-300`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4 group-hover:text-white/65 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Detail bullets */}
                  <ul className="space-y-1.5">
                    {step.details.map((detail, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + i * 0.15 + j * 0.06 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} flex-shrink-0`} />
                        <span className="text-xs text-white/40">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/onboarding"
            whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(139,92,246,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg shadow-xl shadow-violet-500/25"
          >
            <Rocket className="w-5 h-5" />
            Begin Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
