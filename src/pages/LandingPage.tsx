import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  Compass,
  GraduationCap,
  Award,
  ChevronDown,
  Play,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Zap,
  Star,
  Activity,
  Building2,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { label: 'Students Guided Across India', value: '250,000+', change: 'Verified Across 28 States' },
    { label: 'Career Match Accuracy', value: '96%', change: 'Multi-Vector Aptitude Model' },
    { label: 'Scholarships & Grants Tracked', value: '₹15+ Cr', change: 'Live National Portal Data' },
    { label: 'Partner Schools & Colleges', value: '1,500+', change: 'CBSE, ICSE & State Boards' },
  ];

  const features = [
    {
      icon: BrainCircuit,
      title: 'AI Multi-Dimensional Assessment',
      description: 'Your career fit is evaluated across aptitude, interests, academic strengths, and real-world skill alignment.',
      badge: '96% Accuracy',
    },
    {
      icon: Compass,
      title: 'Class 11 Stream Selector Engine',
      description: 'Find your optimal Class 11 stream (PCM, PCB, Commerce, Arts) mapped to real Indian market growth trends.',
      badge: 'CBSE / ICSE Aligned',
    },
    {
      icon: Target,
      title: 'Cutoff Rank & Exam Predictor',
      description: 'Simulate admission chances for JEE Main, NEET, CUET, NATA & CLAT across top Indian NIRF universities.',
      badge: 'NIRF 2026 Data',
    },
    {
      icon: Award,
      title: 'Smart Scholarship Engine',
      description: 'Instant eligibility matching for national, corporate, and merit-cum-means educational grants across India.',
      badge: '₹2L Grant Value',
    },
  ];

  const categories = [
    { name: 'Healthcare & Medical', count: '24 Pathways', icon: '🩺' },
    { name: 'Law & Judiciary', count: '16 Pathways', icon: '⚖️' },
    { name: 'Finance & CA/CS', count: '20 Pathways', icon: '📊' },
    { name: 'Design & Architecture', count: '18 Pathways', icon: '🎨' },
    { name: 'Govt Exams & Defence', count: '15 Pathways', icon: '🏛️' },
    { name: 'Engineering & Tech', count: '30 Pathways', icon: '⚙️' },
  ];

  const faqs = [
    {
      q: 'How does CareerVerse AI evaluate career recommendations for Indian students?',
      a: 'Your career fit is evaluated across aptitude, interests, academic strengths, and real-world skill alignment using our multi-dimensional psychometric model mapped to Indian higher education requirements.',
    },
    {
      q: 'Is CareerVerse AI aligned with CBSE, ICSE, and State Board curriculum?',
      a: 'Yes! CareerVerse AI provides stream selection guidance for Class 10 students transitioning into Class 11 (PCM, PCB, Commerce, Arts) and aligns exam prep timelines for JEE, NEET, CUET, CLAT, NATA, and NDA.',
    },
    {
      q: 'Can parents and teachers monitor student progress?',
      a: 'Absolutely! Dedicated Parent and Teacher Dashboards allow real-time monitoring of assessment scores, career reports, exam milestones, and scholarship applications.',
    },
    {
      q: 'Does it help find scholarships and official application links?',
      a: 'Yes, our smart database tracks real Indian scholarships (NSP, Reliance Foundation, Tata Trust, INSPIRE) and provides direct links to official government application portals.',
    },
  ];

  return (
    <div className="space-y-16 pb-24 bg-[#F8FAFC]">
      {/* 🎯 HERO SECTION */}
      <section className="relative pt-8 lg:pt-14 overflow-hidden">
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0B1220] leading-[1.15] font-heading">
            Discover Yourself. <br />
            <span className="text-[#1769E8]">Design Your Future with AI.</span>
          </h1>

          {/* Subtitle - Exact CSS Match rule */}
          <p className="hero-subtitle max-w-3xl mx-auto text-[#000000] font-bold">
            Empowering secondary school students across India with AI-powered career counselling, stream selection, college cutoffs, and personalized academic roadmaps.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/register"
              className="w-full sm:w-auto px-8 py-4 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-base font-extrabold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2.5"
            >
              Start Free AI Assessment <ArrowRight className="w-5 h-5 text-white" />
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-4 bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#1769E8] border border-[#BFDBFE] rounded-full text-base font-extrabold transition-all flex items-center justify-center gap-2.5"
            >
              <Play className="w-4 h-4 text-[#1769E8] fill-[#1769E8]" /> <span className="text-solid-black">Login to Student Portal</span>
            </Link>
          </div>

          {/* Hero Image Showcase */}
          <div className="pt-8 relative max-w-5xl mx-auto">
            <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating with AI career guidance"
                className="w-full h-[360px] sm:h-[460px] object-cover rounded-2xl shadow-inner"
              />

              {/* Floating Badge 1: Match Score */}
              <div className="absolute top-10 left-8 bg-white/95 backdrop-blur-md border border-[#E5E7EB] p-4 rounded-2xl shadow-xs flex items-center gap-3.5 hidden sm:flex">
                <div className="w-11 h-11 rounded-xl bg-[#1769E8] text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  96%
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-[#0B1220]">AI Match Accuracy</p>
                  <p className="text-[10px] text-[#374151] font-semibold">12 Aptitude Vectors Analyzed</p>
                </div>
              </div>

              {/* Floating Badge 2: Students Guided */}
              <div className="absolute bottom-10 right-8 bg-white/95 backdrop-blur-md border border-[#E5E7EB] p-4 rounded-2xl shadow-xs flex items-center gap-3.5 hidden sm:flex">
                <div className="w-11 h-11 rounded-xl bg-[#1769E8] text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                  250K+
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-[#0B1220]">Students Guided</p>
                  <p className="text-[10px] text-[#1769E8] font-bold">Across 28 Indian States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 INDIA STATS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#1769E8] font-heading">{s.value}</p>
              <p className="text-xs font-extrabold text-[#0B1220] uppercase tracking-wider">{s.label}</p>
              <p className="text-[11px] font-bold text-[#374151]">{s.change}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 PRIMARY SECTION: BUILT FOR INDIAN SECONDARY EDUCATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] font-heading">
            Built for Indian Secondary Education
          </h2>
          <p className="text-sm text-[#111827] max-w-2xl mx-auto font-semibold">
            Your career fit is evaluated across aptitude, interests, academic strengths, and real-world skill alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-4 hover:border-[#1769E8] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1769E8] border border-[#DBEAFE] flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6 text-[#1769E8]" />
                  </div>
                  <span className="text-xs font-extrabold bg-[#EFF6FF] text-[#1769E8] px-3 py-1 rounded-full border border-[#BFDBFE]">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#0B1220] font-heading">{f.title}</h3>
                <p className="text-xs text-[#374151] leading-relaxed font-medium">{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAREER DOMAIN CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
              Explore All Major Career Domains in India
            </h2>
            <p className="text-xs text-[#374151] font-semibold mt-1">
              From Healthcare, Law, Finance to Design, Govt Exams, and Tech
            </p>
          </div>
          <Link
            to="/recommendations"
            className="text-xs font-extrabold text-[#1769E8] hover:underline flex items-center gap-1.5 shrink-0"
          >
            View All Careers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c, i) => (
            <Link
              key={i}
              to="/recommendations"
              className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs text-center space-y-2 hover:border-[#1769E8] hover:scale-[1.02] transition-all"
            >
              <div className="text-3xl">{c.icon}</div>
              <h4 className="text-xs font-extrabold text-[#0B1220] leading-snug">{c.name}</h4>
              <p className="text-[10px] text-[#1769E8] font-bold">{c.count}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-[#374151] font-semibold">Everything you need to know about CareerVerse AI</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-extrabold text-[#0B1220]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#374151] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#374151] leading-relaxed border-t border-[#E5E7EB] pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
