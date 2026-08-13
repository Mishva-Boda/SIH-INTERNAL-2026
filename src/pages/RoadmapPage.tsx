import React, { useState } from 'react';
import { Map, CheckCircle2, Sparkles, Compass, Trophy, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface RoadmapStep {
  stepNumber: string; // '01', '02'
  title: string;
  desc: string;
  category: string;
  done: boolean;
}

export const RoadmapPage: React.FC = () => {
  const { userProfile, showToast } = useApp();

  // Career-Specific Personalization based on stream
  const getInitialRoadmap = (): RoadmapStep[] => {
    if (userProfile.stream === 'Commerce') {
      return [
        { stepNumber: '01', title: 'Accounting & Bookkeeping Fundamentals', desc: 'Master Journal Entries, Ledger posting, Trial Balance, and Financial Statements.', category: 'Foundations', done: true },
        { stepNumber: '02', title: 'Corporate Law & Business Regulations', desc: 'Understand Indian Companies Act 2013, Partnership Act, and Contract Law.', category: 'Legal Framework', done: true },
        { stepNumber: '03', title: 'CA Foundation / CUET Commerce Prep', desc: 'Solve quantitative aptitude, logical reasoning, and business economics modules.', category: 'Entrance Prep', done: false },
        { stepNumber: '04', title: 'Financial Modeling & Excel Analytics', desc: 'Build DCF valuation models, 3-statement financial models, and pivot tables.', category: 'Practical Skill', done: false },
        { stepNumber: '05', title: 'Corporate Tax & GST Compliance', desc: 'Learn Direct & Indirect Tax laws, filing returns, and audit procedures.', category: 'Specialization', done: false },
        { stepNumber: '06', title: 'CA Articleship / Corporate Internship', desc: 'Complete 2-year practical training under a Chartered Accountant firm.', category: 'Industry Experience', done: false },
        { stepNumber: '07', title: 'CA Final / CFA Level 1 Certification', desc: 'Clear advanced audit, strategic financial management, and international finance.', category: 'Career Milestone', done: false },
      ];
    } else if (userProfile.stream === 'Arts') {
      return [
        { stepNumber: '01', title: 'Legal Aptitude & Verbal Reasoning', desc: 'Master English comprehension, logical reasoning, and constitution principles.', category: 'Foundations', done: true },
        { stepNumber: '02', title: 'CLAT / AILET Entrance Strategy', desc: 'Practice 120-minute timed mock tests for Top National Law Universities (NLUs).', category: 'Entrance Prep', done: true },
        { stepNumber: '03', title: 'Constitutional & Criminal Law', desc: 'Study IPC, CrPC, Evidence Act, and landmark Supreme Court verdicts.', category: 'Academic Core', done: false },
        { stepNumber: '04', title: 'Moot Court & Legal Drafting', desc: 'Draft commercial contracts, writ petitions, and participate in national moots.', category: 'Practical Skill', done: false },
        { stepNumber: '05', title: 'Corporate Internship at Law Firm', desc: 'Work under advocates at Tier-1 law firms or high court chambers.', category: 'Experience', done: false },
        { stepNumber: '06', title: 'AIBE Licensing & Specialization', desc: 'Pass All India Bar Exam and specialize in Intellectual Property / Tech Law.', category: 'Career Milestone', done: false },
      ];
    } else {
      // Default: Science (PCM / PCB)
      return [
        { stepNumber: '01', title: 'Python Fundamentals & Logic Building', desc: 'Master variables, loops, data structures, and algorithmic logic.', category: 'Programming', done: true },
        { stepNumber: '02', title: 'Advanced Mathematics & Calculus', desc: 'Differential equations, linear algebra, vectors, and probability theory.', category: 'Mathematics', done: true },
        { stepNumber: '03', title: 'JEE Main & BITSAT Entrance Prep', desc: 'Solve physics mechanics, organic chemistry, and math calculus problems.', category: 'Entrance Prep', done: true },
        { stepNumber: '04', title: 'SQL & Database Architecture', desc: 'Design relational schemas, execute complex joins, and optimize queries.', category: 'Database', done: false },
        { stepNumber: '05', title: 'NumPy & Pandas Data Manipulation', desc: 'Clean messy datasets, perform vector operations, and engineer features.', category: 'Data Analysis', done: false },
        { stepNumber: '06', title: 'Machine Learning Algorithms', desc: 'Implement Scikit-Learn regression, classification, decision trees, and XGBoost.', category: 'AI Core', done: false },
        { stepNumber: '07', title: 'Deep Learning & Neural Networks', desc: 'Train Convolutional & Recurrent Neural Networks using PyTorch & TensorFlow.', category: 'Deep Learning', done: false },
        { stepNumber: '08', title: 'Capstone AI Projects & Deployment', desc: 'Deploy LLM-powered applications using Docker, FastAPI, and Cloud APIs.', category: 'Portfolio', done: false },
      ];
    }
  };

  const [steps, setSteps] = useState<RoadmapStep[]>(getInitialRoadmap());

  const toggleStep = (index: number) => {
    const updated = [...steps];
    updated[index].done = !updated[index].done;
    setSteps(updated);
    showToast('Roadmap step progress saved! 🎯');
  };

  const completedCount = steps.filter((s) => s.done).length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <Map className="w-3.5 h-3.5 text-[#1769E8]" />
            Career-Specific Strategic Roadmap
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            Personalized <span className="text-[#1769E8]">Learning Timeline</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl font-semibold">
            Tailored step-by-step milestone plan for your <strong className="text-[#1769E8]">{userProfile.stream} Stream</strong> and target exams.
          </p>
        </div>

        {/* Progress Card */}
        <div className="p-5 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs text-right space-y-2 shrink-0">
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs font-extrabold text-solid-black">Roadmap Progress</span>
            <span className="text-base font-extrabold text-solid-black font-heading">{progressPercent}%</span>
          </div>
          <div className="w-48 h-2.5 bg-[#F1F5F9] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1769E8] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] font-bold text-solid-black block">
            {completedCount} of {steps.length} Milestones Completed
          </span>
        </div>
      </div>

      {/* Zig-Zag Visual Timeline */}
      <div className="p-6 sm:p-8 bg-white border border-[#E5E7EB] rounded-3xl shadow-xs space-y-8">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <h3 className="text-base font-extrabold text-[#0B1220] font-heading flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#1769E8]" /> Career Preparation Timeline
          </h3>
          <span className="text-xs font-extrabold text-[#1769E8]">
            Target Student: {userProfile.name}
          </span>
        </div>

        <div className="relative border-l-2 border-[#BFDBFE] ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Pill */}
              <div
                onClick={() => toggleStep(idx)}
                className={`absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                  step.done
                    ? 'bg-[#1769E8] border-[#1769E8] text-white shadow-xs'
                    : 'bg-white border-[#BFDBFE] text-[#1769E8] hover:border-[#1769E8]'
                }`}
              >
                {step.done ? <CheckCircle2 className="w-4 h-4 text-white" /> : <span className="text-[11px] font-extrabold">{step.stepNumber}</span>}
              </div>

              {/* Step Content Card */}
              <div
                onClick={() => toggleStep(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  step.done
                    ? 'bg-[#F8FAFC] border-[#E5E7EB] shadow-xs'
                    : 'bg-white border-[#E5E7EB] hover:border-[#1769E8] hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold text-[#1769E8] uppercase bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                      STEP {step.stepNumber}
                    </span>
                    <span className="text-[10px] font-bold text-[#374151] uppercase bg-[#F8FAFC] px-2.5 py-0.5 rounded-full border border-[#E5E7EB]">
                      {step.category}
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={step.done}
                    onChange={() => toggleStep(idx)}
                    className="w-4 h-4 accent-[#1769E8] rounded cursor-pointer"
                  />
                </div>

                <h4 className={`text-base font-extrabold font-heading ${step.done ? 'text-[#374151] line-through' : 'text-[#0B1220]'}`}>
                  {step.title}
                </h4>
                <p className="text-xs text-[#374151] font-semibold leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
