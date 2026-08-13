import React, { useState } from 'react';
import { X, Plus, Sparkles, BookOpen, AlertCircle, CheckCircle } from 'lucide-react';
import { useApp, SkillRoadmapData } from '../../context/AppContext';

interface CustomSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomSkillModal: React.FC<CustomSkillModalProps> = ({ isOpen, onClose }) => {
  const { addCustomSkill, showToast } = useApp();

  const [skillName, setSkillName] = useState('');
  const [category, setCategory] = useState('Technical Skill');
  const [topicCount, setTopicCount] = useState(7); // Minimum = 7
  const [topicInputs, setTopicInputs] = useState<string[]>([
    'Fundamentals & Basic Concepts',
    'Core Syntax & Architecture',
    'Standard Libraries & Tooling',
    'Intermediate Control Flow',
    'Advanced Problem Solving',
    'Security & Optimization',
    'Capstone Hands-On Project',
  ]);

  if (!isOpen) return null;

  const handleTopicCountChange = (count: number) => {
    const validCount = Math.max(7, count); // Enforce minimum 7
    setTopicCount(validCount);

    const updated = [...topicInputs];
    while (updated.length < validCount) {
      updated.push(`Topic ${updated.length + 1} Module`);
    }
    setTopicInputs(updated.slice(0, validCount));
  };

  const handleTopicInputChange = (index: number, value: string) => {
    const updated = [...topicInputs];
    updated[index] = value;
    setTopicInputs(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!skillName.trim()) {
      showToast('Please enter a custom skill name');
      return;
    }

    if (topicInputs.length < 7) {
      showToast('Minimum 7 topics are required for custom skill roadmap');
      return;
    }

    const formattedTopics = topicInputs.map((t, idx) => ({
      name: t.trim() || `Module ${idx + 1}`,
      desc: `Master step ${idx + 1} core concepts, practice exercises, and real-world application.`,
    }));

    const newSkill: SkillRoadmapData = {
      skillName: skillName.trim(),
      category: category,
      topics: formattedTopics,
      isCustom: true,
    };

    addCustomSkill(newSkill);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#E5E7EB] rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-md my-8 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#1769E8] text-white flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#0B1220] font-heading">+ Add Custom Skill Roadmap</h3>
              <p className="text-xs text-[#374151] font-semibold">Define your custom learning path with at least 7 topics.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F8FAFC] text-[#374151] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Skill Name */}
          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Custom Skill Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Cybersecurity, Digital Marketing, Public Speaking"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Domain Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            >
              <option value="Technical Skill">Technical Skill</option>
              <option value="Creative & Design">Creative & Design</option>
              <option value="Business & Finance">Business & Finance</option>
              <option value="Soft Skill & Leadership">Soft Skill & Leadership</option>
              <option value="Academic Domain">Academic Domain</option>
            </select>
          </div>

          {/* Topic Count (Minimum 7 enforced) */}
          <div className="p-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <label className="font-extrabold text-[#000000]">
                How many topics would you like to add?
              </label>
              <span className="font-extrabold text-xs text-[#1769E8] bg-white px-2 py-0.5 rounded-md border border-[#BFDBFE]">
                Min: 7 Topics
              </span>
            </div>
            <input
              type="number"
              min="7"
              max="20"
              value={topicCount}
              onChange={(e) => handleTopicCountChange(parseInt(e.target.value) || 7)}
              className="w-24 p-2 bg-white border border-[#1769E8] text-[#1769E8] text-center font-extrabold rounded-lg focus:outline-none"
            />
          </div>

          {/* Topic Names List */}
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            <label className="block font-extrabold text-[#000000]">
              Topic Modules ({topicInputs.length} Topics Specified)
            </label>
            {topicInputs.map((topic, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-6 text-center font-extrabold text-[#1769E8] text-[11px] shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <input
                  type="text"
                  required
                  placeholder={`Topic ${idx + 1} Name`}
                  value={topic}
                  onChange={(e) => handleTopicInputChange(idx, e.target.value)}
                  className="w-full p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg text-[#111827] font-semibold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#374151] rounded-full font-bold hover:bg-[#EFF6FF]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full font-extrabold shadow-xs transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-white" /> Create Roadmap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
