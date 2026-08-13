import React from 'react';
import { CheckCircle2, Circle, ArrowDown, Sparkles, BookOpen, Layers, CheckSquare } from 'lucide-react';
import { useApp, SkillRoadmapData } from '../../context/AppContext';

interface SkillRoadmapProps {
  roadmap: SkillRoadmapData;
}

export const SkillRoadmap: React.FC<SkillRoadmapProps> = ({ roadmap }) => {
  const { skillProgressMap, toggleTopicProgress } = useApp();

  const totalTopics = roadmap.topics.length;
  const completedCount = roadmap.topics.filter((_, idx) => {
    const topicId = `${roadmap.skillName}-${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}`;
    return skillProgressMap[topicId];
  }).length;

  const progressPercentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Header Card: Skill Title & Dynamic Progress Percentage */}
      <div className="p-6 bg-white border border-[#E5E7EB] rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {roadmap.category}
            </span>
            {roadmap.isCustom && (
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                Custom Skill
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1220] font-heading">{roadmap.skillName} Roadmap</h2>
          <p className="text-xs text-[#374151] font-semibold mt-0.5">
            Complete topics step-by-step to boost your career readiness match score.
          </p>
        </div>

        {/* Dynamic Percentage Badge & Progress Circle */}
        <div className="flex items-center gap-4 bg-[#F8FAFC] p-4 rounded-xl border border-[#E5E7EB] shrink-0 w-full sm:w-auto justify-between sm:justify-start">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase text-solid-black block">Skill Progress</span>
            <span className="text-2xl font-extrabold text-solid-black font-heading">{progressPercentage}%</span>
            <p className="text-[10px] text-solid-black font-bold">
              {completedCount} of {totalTopics} Topics Completed
            </p>
          </div>

          <div className="w-14 h-14 relative flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="28" cy="28" r="22" stroke="#E5E7EB" strokeWidth="5" fill="transparent" />
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="#1769E8"
                strokeWidth="5"
                fill="transparent"
                strokeDasharray="138"
                strokeDashoffset={138 - (138 * progressPercentage) / 100}
                strokeLinecap="round"
              />
            </svg>
            <CheckSquare className="w-5 h-5 text-[#1769E8] absolute" />
          </div>
        </div>
      </div>

      {/* 🎯 ALTERNATING ZIG-ZAG VISUAL TIMELINE ROADMAP (Reference Image 3 Checklist + Reference Image 4 Blue SaaS) */}
      <div className="relative py-4">
        {/* Central Vertical Timeline Line */}
        <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-[#BFDBFE] transform -translate-x-1/2 hidden md:block rounded-full" />

        <div className="space-y-8 relative">
          {roadmap.topics.map((topic, idx) => {
            const stepNumber = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
            const topicId = `${roadmap.skillName}-${stepNumber}`;
            const isCompleted = !!skillProgressMap[topicId];
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Topic Card */}
                <div className="w-full md:w-1/2">
                  <div
                    onClick={() => toggleTopicProgress(topicId)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer shadow-xs hover:scale-[1.01] ${
                      isCompleted
                        ? 'bg-[#EFF6FF] border-[#BFDBFE] text-[#111827]'
                        : 'bg-white border-[#E5E7EB] text-[#111827] hover:border-[#1769E8]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold text-[#1769E8] bg-white border border-[#BFDBFE] px-2.5 py-0.5 rounded-md font-heading">
                            STEP {stepNumber}
                          </span>
                          <span className="text-[10px] font-bold text-[#374151]">
                            {isCompleted ? '✓ Completed' : 'In Progress'}
                          </span>
                        </div>
                        <h4 className="text-base font-extrabold text-[#0B1220] font-heading pt-1">{topic.name}</h4>
                        <p className="text-xs text-[#374151] font-medium leading-relaxed">{topic.desc}</p>
                      </div>

                      {/* Interactive Checkbox */}
                      <button
                        type="button"
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                          isCompleted ? 'bg-[#1769E8] text-white shadow-xs' : 'bg-[#F8FAFC] border border-[#E5E7EB] text-[#374151]'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-5 h-5 text-white" /> : <Circle className="w-5 h-5 text-[#9CA3AF]" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Center Node Circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#1769E8] text-white font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0 border-4 border-white hidden md:flex font-heading">
                  {stepNumber}
                </div>

                {/* Empty Spacer */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
