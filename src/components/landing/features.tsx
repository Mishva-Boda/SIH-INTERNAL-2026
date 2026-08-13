"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, BarChart2, Target, Building2, Award, Map } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Discovery",
    description: "Our Gemini-powered engine analyses your personality, aptitude, interests, and learning style to surface career paths you never considered — with deep explanations of why they fit.",
    gradient: "from-violet-500 to-purple-600",
    glow: "hover:shadow-violet-500/25",
    border: "hover:border-violet-500/40",
    tag: "Core AI",
    tagColor: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  },
  {
    icon: BarChart2,
    title: "Smart Assessment",
    description: "Adaptive RIASEC, MBTI-aligned, and aptitude tests that learn as you go. 45-minute comprehensive evaluation that outperforms traditional 3-hour tests.",
    gradient: "from-cyan-500 to-blue-600",
    glow: "hover:shadow-cyan-500/25",
    border: "hover:border-cyan-500/40",
    tag: "Assessment",
    tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  },
  {
    icon: Target,
    title: "Skill Gap Analysis",
    description: "Pinpoint exactly what skills you need for your dream career. Get a personalised learning roadmap with curated resources, timelines, and milestones.",
    gradient: "from-pink-500 to-rose-600",
    glow: "hover:shadow-pink-500/25",
    border: "hover:border-pink-500/40",
    tag: "Analytics",
    tagColor: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  },
  {
    icon: Building2,
    title: "College Recommender",
    description: "Match with 1,200+ colleges based on your scores, budget, location preferences, and career goals. Compare placements, fees, and culture side by side.",
    gradient: "from-emerald-500 to-green-600",
    glow: "hover:shadow-emerald-500/25",
    border: "hover:border-emerald-500/40",
    tag: "Colleges",
    tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  },
  {
    icon: Award,
    title: "Scholarship Finder",
    description: "Access 300+ scholarships worth ₹500 crore+ annually. AI matches you with scholarships you actually qualify for — from government, private, and international sources.",
    gradient: "from-amber-500 to-orange-500",
    glow: "hover:shadow-amber-500/25",
    border: "hover:border-amber-500/40",
    tag: "Funding",
    tagColor: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  },
  {
    icon: Map,
    title: "Career Roadmap",
    description: "Get a hyper-detailed, week-by-week career roadmap — from 10th grade to your first job. Includes entrance exams, internships, certifications, and industry contacts.",
    gradient: "from-purple-500 to-indigo-600",
    glow: "hover:shadow-purple-500/25",
    border: "hover:border-purple-500/40",
    tag: "Roadmap",
    tagColor: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative py-28 bg-[#020008] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      {/* Decorative glow orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm text-violet-400 font-semibold">Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Choose Right
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Six AI-powered tools working in harmony to give you complete clarity on your career journey — from self-discovery to your first job offer.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: i % 3 === 0 ? 2 : i % 3 === 1 ? 0 : -2,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`group relative p-6 rounded-3xl bg-white/[0.03] border border-white/8 backdrop-blur-sm ${feature.glow} ${feature.border} hover:shadow-2xl transition-all duration-400 cursor-default overflow-hidden`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} rounded-3xl`} style={{ opacity: 0 }}
              />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 bg-gradient-to-br ${feature.gradient} rounded-3xl pointer-events-none`} />

              {/* Top edge glow */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-500`} />

              {/* Tag */}
              <div className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-[11px] font-semibold tracking-wide mb-5 ${feature.tagColor}`}>
                {feature.tag}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-400`}>
                <feature.icon className="w-7 h-7 text-white drop-shadow" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Learn more link */}
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-white/30 group-hover:text-white/60 transition-colors duration-300">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
