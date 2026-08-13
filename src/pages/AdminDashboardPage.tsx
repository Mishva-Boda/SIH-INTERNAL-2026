import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Edit3, Save, Users, Database, Layers, Sparkles, School } from 'lucide-react';
import { useApp, DEFAULT_AVATAR_URL } from '../context/AppContext';

export const AdminDashboardPage: React.FC = () => {
  const { userProfile, updateUserProfile, showToast } = useApp();

  const availableExamsList = [
    'JEE Main',
    'JEE Advanced',
    'NEET UG',
    'CUET Science / Commerce / Arts',
    'CLAT',
    'NATA',
    'BITSAT',
    'GUJCET',
    'MHT-CET',
    'CA Foundation',
    'CMA',
    'CS',
  ];

  const [adminFormData, setAdminFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    age: userProfile.age || 17,
    schoolName: userProfile.schoolName || 'Add School',
    city: userProfile.city,
    state: userProfile.state,
    classLevel: userProfile.classLevel,
    stream: userProfile.stream,
    targetExams: userProfile.targetExams || ['JEE Main', 'BITSAT'],
    interestsString: userProfile.interests.join(', '),
    skillsString: userProfile.skills.join(', '),
    avatar: userProfile.avatar || DEFAULT_AVATAR_URL,
  });

  const toggleTargetExam = (exam: string) => {
    if (adminFormData.targetExams.includes(exam)) {
      setAdminFormData((prev) => ({
        ...prev,
        targetExams: prev.targetExams.filter((e) => e !== exam),
      }));
    } else {
      setAdminFormData((prev) => ({
        ...prev,
        targetExams: [...prev.targetExams, exam],
      }));
    }
  };

  const handleAdminSave = (e: React.FormEvent) => {
    e.preventDefault();
    const interestsArr = adminFormData.interestsString.split(',').map((s) => s.trim()).filter(Boolean);
    const skillsArr = adminFormData.skillsString.split(',').map((s) => s.trim()).filter(Boolean);

    updateUserProfile({
      name: adminFormData.name,
      email: adminFormData.email,
      age: adminFormData.age,
      schoolName: adminFormData.schoolName || 'Add School',
      city: adminFormData.city,
      state: adminFormData.state,
      classLevel: adminFormData.classLevel,
      stream: adminFormData.stream,
      targetExams: adminFormData.targetExams,
      interests: interestsArr,
      skills: skillsArr,
      avatar: adminFormData.avatar,
    });

    showToast('Admin override successful: Student profile & recommendations recalculated! 🛡️');
  };

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Admin Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#1769E8] rounded-full text-xs font-extrabold shadow-xs border border-[#BFDBFE]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1769E8]" />
            Administrator Master Control Panel
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1220] font-heading">
            Admin <span className="text-[#1769E8]">Student Profile Control</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#374151] font-semibold max-w-xl">
            Edit student demographics, school, target exams, class, and stream. All updates immediately recalculate career & college recommendations.
          </p>
        </div>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleAdminSave} className="p-6 bg-white border border-[#E5E7EB] rounded-3xl space-y-6 shadow-xs text-xs">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <h3 className="text-base font-extrabold text-[#0B1220] font-heading flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-[#1769E8]" /> Modify Active Student Record ({userProfile.name})
          </h3>
          <span className="text-xs font-bold text-[#1769E8]">Admin Override Mode</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Student Name</label>
            <input
              type="text"
              required
              value={adminFormData.name}
              onChange={(e) => setAdminFormData({ ...adminFormData, name: e.target.value })}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            />
          </div>

          <div>
            <label className="block font-extrabold text-[#000000] mb-1">School Name</label>
            <input
              type="text"
              value={adminFormData.schoolName}
              onChange={(e) => setAdminFormData({ ...adminFormData, schoolName: e.target.value })}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            />
          </div>

          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Student Email</label>
            <input
              type="email"
              required
              value={adminFormData.email}
              onChange={(e) => setAdminFormData({ ...adminFormData, email: e.target.value })}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            />
          </div>

          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Class Level</label>
            <select
              value={adminFormData.classLevel}
              onChange={(e) => setAdminFormData({ ...adminFormData, classLevel: e.target.value })}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            >
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Age (Years)</label>
            <input
              type="number"
              min="10"
              max="25"
              value={adminFormData.age}
              onChange={(e) => setAdminFormData({ ...adminFormData, age: parseInt(e.target.value) || 17 })}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            />
          </div>

          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Stream</label>
            <select
              value={adminFormData.stream}
              onChange={(e) => setAdminFormData({ ...adminFormData, stream: e.target.value })}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
            >
              <option value="Science">Science (PCM/PCB)</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts / Humanities</option>
            </select>
          </div>
        </div>

        {/* Target Exams Multi-Select */}
        <div className="space-y-2 p-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl">
          <label className="block font-extrabold text-[#0B1220] text-xs">Target Entrance Exams:</label>
          <div className="flex flex-wrap gap-1.5">
            {availableExamsList.map((exam) => {
              const isSelected = adminFormData.targetExams.includes(exam);
              return (
                <button
                  key={exam}
                  type="button"
                  onClick={() => toggleTargetExam(exam)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#1769E8] text-white shadow-xs'
                      : 'bg-white border border-[#E5E7EB] text-[#374151] hover:border-[#1769E8]'
                  }`}
                >
                  {exam} {isSelected ? '✓' : '+'}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-[#1769E8] hover:bg-[#1264D6] text-white font-extrabold rounded-full shadow-xs transition-all flex items-center justify-center gap-2 text-xs"
        >
          <Save className="w-4 h-4 text-white" /> Save Admin Modifications & Recalculate System
        </button>
      </form>
    </div>
  );
};
