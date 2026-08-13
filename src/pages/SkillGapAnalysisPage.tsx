import React, { useState } from 'react';
import { Layers, Plus, Sparkles, BookOpen, CheckSquare, BrainCircuit } from 'lucide-react';
import { useApp, SkillRoadmapData } from '../context/AppContext';
import { SkillRoadmap } from '../components/roadmap/SkillRoadmap';
import { CustomSkillModal } from '../components/roadmap/CustomSkillModal';

export const SkillGapAnalysisPage: React.FC = () => {
  const { userProfile, customSkills } = useApp();
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // Pre-configured Built-in Skill Roadmaps
  const builtInRoadmaps: SkillRoadmapData[] = [
    {
      skillName: 'Python',
      category: 'Core Technical Skill',
      topics: [
        { name: 'Python Basics', desc: 'Syntax, variables, data types, operators, and basic I/O.' },
        { name: 'Control Flow', desc: 'if/else conditional statements, for loops, and while loops.' },
        { name: 'Functions', desc: 'Function definitions, parameters, return values, and lambda expressions.' },
        { name: 'Data Structures', desc: 'Lists, tuples, sets, dictionaries, and list comprehensions.' },
        { name: 'Object-Oriented Programming (OOP)', desc: 'Classes, objects, inheritance, and polymorphism.' },
        { name: 'File Handling', desc: 'Reading, writing, and parsing text/JSON files.' },
        { name: 'Exception Handling', desc: 'try/except blocks, custom exceptions, and error debugging.' },
        { name: 'Modules & Packages', desc: 'Importing standard libraries, virtualenv, and pip packages.' },
        { name: 'NumPy & Pandas', desc: 'Data manipulation, arrays, DataFrames, and data analysis.' },
        { name: 'Projects & Portfolio', desc: 'Build a CLI data analysis tool and web scraper.' },
      ],
    },
    {
      skillName: 'AI & Data Systems',
      category: 'Technical Aptitude',
      topics: [
        { name: 'Linear Algebra & Statistics', desc: 'Vectors, matrices, probability, and mean/std dev.' },
        { name: 'Data Preprocessing', desc: 'Handling missing values, scaling, and feature engineering.' },
        { name: 'Supervised Learning', desc: 'Linear regression, decision trees, and classification models.' },
        { name: 'Unsupervised Learning', desc: 'K-Means clustering and PCA dimensionality reduction.' },
        { name: 'Neural Networks Basics', desc: 'Perceptrons, activation functions, and backpropagation.' },
        { name: 'Deep Learning Frameworks', desc: 'Introduction to PyTorch & TensorFlow APIs.' },
        { name: 'Model Evaluation', desc: 'Precision, recall, F1-score, and confusion matrix.' },
      ],
    },
    {
      skillName: 'Contract & Tech Drafting',
      category: 'Domain & Legal Skill',
      topics: [
        { name: 'Indian Contract Act 1872', desc: 'Offer, acceptance, consideration, and lawful object.' },
        { name: 'Tech Service Agreements', desc: 'SaaS SLAs, privacy policies, and terms of service.' },
        { name: 'IPR & Copyright Law', desc: 'Patents, trademarks, and software copyrights in India.' },
        { name: 'Drafting Clauses', desc: 'Indemnity, liability limitation, and termination clauses.' },
        { name: 'Regulatory Compliance', desc: 'DPDP Act 2023 and IT Act 2000 compliance checklists.' },
        { name: 'Negotiation & Review', desc: 'Redlining contracts and negotiating commercial terms.' },
        { name: 'Moot Court Drafting', desc: 'Drafting legal notices, petitions, and legal opinions.' },
      ],
    },
  ];

  // Combined Roadmaps: Built-in + Custom Skills
  const allRoadmaps = [...builtInRoadmaps, ...customSkills];
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

  const currentRoadmap = allRoadmaps[selectedSkillIndex] || allRoadmaps[0];

  return (
    <div className="space-[#111827] space-y-8 pb-12">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <Sparkles className="w-3.5 h-3.5 text-[#1769E8]" />
            Interactive Skill Roadmap System
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            Skill Gap Analysis & <span className="text-[#1769E8]">Learning Timeline</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] max-w-xl font-semibold">
            Track your topic-by-topic completion status on alternating zig-zag visual roadmaps to bridge skill gaps for target careers.
          </p>
        </div>

        {/* "+ Add Custom Skill" Button */}
        <button
          onClick={() => setIsCustomModalOpen(true)}
          className="px-5 py-3 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4 text-white" /> Add Custom Skill
        </button>
      </div>

      {/* Skill Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {allRoadmaps.map((rm, idx) => {
          const isSelected = selectedSkillIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedSkillIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all shrink-0 flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#1769E8] text-white shadow-xs'
                  : 'bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#1769E8]'
              }`}
            >
              <BookOpen className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#1769E8]'}`} />
              {rm.skillName}
              {rm.isCustom && <span className="text-[9px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full">Custom</span>}
            </button>
          );
        })}
      </div>

      {/* Active Skill Roadmap Visual Timeline Component */}
      <SkillRoadmap roadmap={currentRoadmap} />

      {/* Custom Skill Modal */}
      <CustomSkillModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />
    </div>
  );
};
