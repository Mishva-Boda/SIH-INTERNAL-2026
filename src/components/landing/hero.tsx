"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Play, Sparkles, Zap, TrendingUp } from "lucide-react";

const floatingOrbs = [
  { size: 700, x: "-15%", y: "-25%", color: "from-violet-600/30 to-purple-900/10", delay: 0, duration: 20 },
  { size: 550, x: "55%", y: "5%", color: "from-cyan-500/20 to-blue-800/10", delay: 2, duration: 25 },
  { size: 450, x: "25%", y: "45%", color: "from-pink-600/15 to-rose-900/5", delay: 4, duration: 18 },
  { size: 380, x: "-8%", y: "55%", color: "from-indigo-600/20 to-violet-900/5", delay: 1, duration: 22 },
  { size: 320, x: "75%", y: "65%", color: "from-teal-500/15 to-cyan-900/5", delay: 3, duration: 30 },
];

const particles = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  x: `${(i * 137.5) % 100}%`,
  y: `${(i * 97.3) % 100}%`,
  size: (i % 3) + 1,
  duration: (i % 10) + 8,
  delay: (i % 5) * 1.2,
}));

const stats = [
  { icon: Sparkles, label: "Students Guided", value: "50K+", color: "from-violet-500 to-purple-600", glow: "shadow-violet-500/25" },
  { icon: TrendingUp, label: "Career Paths", value: "500+", color: "from-cyan-500 to-blue-600", glow: "shadow-cyan-500/25" },
  { icon: Zap, label: "AI Accuracy", value: "98%", color: "from-pink-500 to-rose-600", glow: "shadow-pink-500/25" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020008]"
    >
      {/* Aurora animated orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-radial ${orb.color} blur-3xl pointer-events-none`}
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{ x: [0, 40, -30, 20, 0], y: [0, -30, 40, -20, 0], scale: [1, 1.1, 0.95, 1.05, 1] }}
          transition={{ duration: orb.duration, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Particle field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/50"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
        style={{ y, opacity }}
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-violet-500/30 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-sm text-white/70 font-medium">India&apos;s #1 AI Career Counselling Platform</span>
            <span className="px-2 py-0.5 rounded-full bg-violet-500/25 text-violet-300 text-xs font-bold border border-violet-500/30">2025</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.04] tracking-tight mb-6"
          >
            <span className="block text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]">Discover Yourself.</span>
            <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(139,92,246,0.5)]">
              Design Your Future.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-white/55 leading-relaxed mb-10"
          >
            Get hyper-personalized career paths, college recommendations, scholarship matches, and step-by-step roadmaps — all powered by Gemini AI. Built for India&apos;s 300 million students.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.a
              href="/onboarding"
              whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(139,92,246,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="relative px-9 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold text-lg overflow-hidden group shadow-xl shadow-violet-500/25"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5" />
                Start For Free
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm text-white font-bold text-lg transition-all duration-300"
            >
              <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </span>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06, y: -5 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-xl ${stat.glow} cursor-default`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-white leading-none">{stat.value}</div>
                  <div className="text-xs text-white/45 font-medium mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Dashboard Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.8, type: "spring", bounce: 0.25 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          {/* Glow under card */}
          <div className="absolute inset-x-10 bottom-0 h-16 bg-violet-600/20 blur-2xl rounded-full" />

          {/* Main dashboard card */}
          <div className="relative rounded-3xl border border-white/10 bg-[#0a0015]/80 backdrop-blur-2xl p-6 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

            {/* Browser chrome */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 h-7 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-white/25 text-xs font-mono">app.careerverse.ai/dashboard</span>
              </div>
              <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center">
                <div className="w-3 h-0.5 bg-white/30 rounded" />
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-12 gap-4">

              {/* Left column */}
              <div className="col-span-12 md:col-span-4 space-y-3">
                <div className="rounded-2xl bg-gradient-to-br from-violet-600/25 to-purple-900/25 border border-violet-500/20 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-violet-300 font-semibold uppercase tracking-wider">AI Career Score</span>
                    <span className="text-xs text-white/30">Updated now</span>
                  </div>
                  <div className="text-5xl font-black text-white mb-2">
                    87<span className="text-xl text-white/30">/100</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-2">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <span className="text-xs text-white/40">Strong aptitude match · Top 12%</span>
                </div>

                {[
                  { role: "Software Engineer", match: "94%", sub: "B.Tech CSE", color: "from-cyan-500 to-blue-600", glow: "shadow-cyan-500/20" },
                  { role: "Data Scientist", match: "89%", sub: "B.Tech + ML", color: "from-pink-500 to-rose-600", glow: "shadow-pink-500/20" },
                  { role: "UX Designer", match: "82%", sub: "BDes", color: "from-amber-500 to-orange-500", glow: "shadow-amber-500/20" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.12, duration: 0.5 }}
                    className={`flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/5 p-3 shadow-md ${item.glow}`}
                  >
                    <div>
                      <div className="text-sm text-white/85 font-semibold">{item.role}</div>
                      <div className="text-xs text-white/35 mt-0.5">{item.sub}</div>
                    </div>
                    <div className={`px-2.5 py-1 rounded-lg bg-gradient-to-r ${item.color} text-white text-xs font-bold shadow-lg`}>
                      {item.match}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center column */}
              <div className="col-span-12 md:col-span-5 space-y-3">
                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4">
                  <div className="text-xs text-white/45 font-semibold uppercase tracking-wider mb-4">Skill Gap Analysis</div>
                  <div className="flex items-end gap-3 h-24">
                    {[
                      { skill: "Coding", pct: 78, color: "bg-violet-500" },
                      { skill: "Logic", pct: 92, color: "bg-cyan-500" },
                      { skill: "Creative", pct: 65, color: "bg-pink-500" },
                      { skill: "Comm.", pct: 84, color: "bg-amber-500" },
                      { skill: "Math", pct: 88, color: "bg-green-500" },
                      { skill: "Science", pct: 74, color: "bg-blue-500" },
                    ].map((s, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 flex-1">
                        <span className="text-[10px] text-white/50 font-medium">{s.pct}%</span>
                        <div className="w-full rounded-t-lg bg-white/5 flex flex-col-reverse overflow-hidden" style={{ height: 72 }}>
                          <motion.div
                            className={`w-full rounded-t-lg ${s.color}/80`}
                            initial={{ height: 0 }}
                            animate={{ height: `${s.pct}%` }}
                            transition={{ duration: 1.4, delay: 1.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                        <span className="text-[9px] text-white/30 text-center leading-tight">{s.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-4">
                  <div className="text-xs text-white/45 font-semibold uppercase tracking-wider mb-3">Your Roadmap</div>
                  <div className="space-y-2.5">
                    {[
                      { step: "Complete Aptitude Assessment", done: true },
                      { step: "Explore Career Matches", done: true },
                      { step: "Shortlist Top Colleges", done: false },
                      { step: "Apply for Scholarships", done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-green-500/90" : "bg-white/8 border border-white/10"}`}>
                          {item.done && <span className="text-white text-[10px] font-bold">✓</span>}
                        </div>
                        <span className={`text-xs ${item.done ? "text-white/40 line-through" : "text-white/75"}`}>{item.step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="col-span-12 md:col-span-3 space-y-3">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-900/20 border border-cyan-500/20 p-4">
                  <div className="text-xs text-cyan-300 font-semibold uppercase tracking-wider mb-2">Top College</div>
                  <div className="text-base text-white font-bold">IIT Bombay</div>
                  <div className="text-xs text-white/40 mb-3">B.Tech CSE · 2025</div>
                  <div className="w-full h-px bg-white/5 mb-3" />
                  <div className="text-sm text-cyan-300 font-bold">₹2.4L Scholarship</div>
                  <div className="text-xs text-white/35 mt-0.5">Available for you</div>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-pink-600/20 to-rose-900/20 border border-pink-500/20 p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span className="text-xs text-pink-300 font-semibold uppercase tracking-wider">AI Insight</span>
                  </div>
                  <p className="text-xs text-white/65 leading-relaxed">
                    &ldquo;Your logical reasoning places you in the top 8% nationally — consider IITs and NITs.&rdquo;
                  </p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-amber-600/15 to-orange-900/15 border border-amber-500/15 p-4">
                  <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider mb-2">Next Step</div>
                  <div className="text-xs text-white/65">Take the full RIASEC personality test to unlock 50+ more career recommendations.</div>
                  <div className="mt-3 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-semibold text-center cursor-pointer hover:bg-amber-500/30 transition-colors">
                    Start Now →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent chips */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-7 -right-4 md:-right-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/30 hidden sm:flex"
          >
            <Zap className="w-9 h-9 text-white drop-shadow" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute -bottom-7 -left-4 md:-left-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center shadow-2xl shadow-pink-500/30 hidden sm:flex"
          >
            <TrendingUp className="w-7 h-7 text-white drop-shadow" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-white/25 text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-white/25" />
      </motion.div>
    </section>
  );
}
