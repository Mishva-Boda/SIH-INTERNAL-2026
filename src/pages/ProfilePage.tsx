import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, School, Edit3, LogOut, Bookmark, BrainCircuit, MapPin, Building, BookOpen, Save, ShieldCheck, Phone, Sparkles, CheckSquare } from 'lucide-react';
import { useApp, DEFAULT_AVATAR_URL, FALLBACK_AVATAR_URL } from '../context/AppContext';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile, updateUserProfile, logout, showToast, savedCareers, savedScholarships } = useApp();
  const [isEditing, setIsEditing] = useState(false);

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

  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    age: userProfile.age || 17,
    schoolName: userProfile.schoolName || 'Add School',
    classLevel: userProfile.classLevel,
    stream: userProfile.stream,
    city: userProfile.city,
    state: userProfile.state,
    phone: userProfile.phone || '+91 98765 43210',
    academicPerformance: userProfile.academicPerformance || '88% / 9.2 CGPA',
    subjectsString: userProfile.subjects.join(', '),
    targetExams: userProfile.targetExams || ['JEE Main', 'BITSAT'],
    interestsString: userProfile.interests.join(', '),
    skillsString: userProfile.skills.join(', '),
    avatar: userProfile.avatar || DEFAULT_AVATAR_URL,
  });

  const getAgeRange = (cls: string) => {
    if (cls === '9') return { min: 13, max: 15, rec: 14 };
    if (cls === '10') return { min: 14, max: 16, rec: 15 };
    if (cls === '11') return { min: 15, max: 17, rec: 16 };
    return { min: 16, max: 19, rec: 17 };
  };

  const handleClassChange = (selectedClass: string) => {
    const range = getAgeRange(selectedClass);
    setFormData((prev) => ({
      ...prev,
      classLevel: selectedClass,
      age: range.rec,
    }));
  };

  const toggleTargetExam = (exam: string) => {
    if (formData.targetExams.includes(exam)) {
      setFormData((prev) => ({
        ...prev,
        targetExams: prev.targetExams.filter((e) => e !== exam),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        targetExams: [...prev.targetExams, exam],
      }));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const range = getAgeRange(formData.classLevel);

    if (formData.age < range.min - 2 || formData.age > range.max + 2) {
      showToast(`Notice: Class ${formData.classLevel} usually corresponds to ages ${range.min}–${range.max}.`);
    }

    const interestsArr = formData.interestsString.split(',').map((s) => s.trim()).filter(Boolean);
    const skillsArr = formData.skillsString.split(',').map((s) => s.trim()).filter(Boolean);
    const subjectsArr = formData.subjectsString.split(',').map((s) => s.trim()).filter(Boolean);

    updateUserProfile({
      name: formData.name,
      email: formData.email,
      age: formData.age,
      schoolName: formData.schoolName || 'Add School',
      classLevel: formData.classLevel,
      stream: formData.stream,
      city: formData.city,
      state: formData.state,
      phone: formData.phone,
      academicPerformance: formData.academicPerformance,
      subjects: subjectsArr,
      targetExams: formData.targetExams,
      interests: interestsArr,
      skills: skillsArr,
      avatar: formData.avatar,
    });

    setIsEditing(false);
    showToast('Profile updated successfully & recommendations recalculated! 🎉');
  };

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully.');
    navigate('/');
  };

  return (
    <div className="space-y-8 pb-12 max-w-4xl mx-auto">
      {/* Top Banner Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={userProfile.avatar}
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_AVATAR_URL;
            }}
            alt={userProfile.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-[#1769E8] shadow-xs shrink-0"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-[#0B1220] font-heading">{userProfile.name}</h1>
              <span className="bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                Student Profile
              </span>
            </div>
            <p className="text-xs text-[#374151] font-bold mt-1">
              Age {userProfile.age} • Class {userProfile.classLevel} ({userProfile.stream}) • {userProfile.city}, {userProfile.state}
            </p>
            <p className="text-xs text-[#1769E8] font-bold mt-0.5 flex items-center gap-1">
              <School className="w-3.5 h-3.5" /> School: {userProfile.schoolName || 'Add School'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-5 py-2.5 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full text-xs font-extrabold shadow-xs transition-all flex items-center gap-1.5"
          >
            <Edit3 className="w-4 h-4 text-white" /> {isEditing ? 'Cancel Editing' : 'Edit Profile'}
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] hover:bg-rose-50 text-rose-600 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>

      {/* Editable Form or Display */}
      {isEditing ? (
        <form onSubmit={handleSave} className="p-6 bg-white border border-[#E5E7EB] rounded-3xl space-y-6 shadow-xs text-xs">
          <h3 className="text-base font-extrabold text-[#0B1220] font-heading border-b border-[#E5E7EB] pb-3 flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-[#1769E8]" /> Edit Profile & Academic Parameters
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Student Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              />
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">School Name</label>
              <input
                type="text"
                placeholder="e.g. Delhi Public School, Vadodara"
                value={formData.schoolName === 'Add School' ? '' : formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              />
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              />
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Class Level</label>
              <select
                value={formData.classLevel}
                onChange={(e) => handleClassChange(e.target.value)}
                className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              >
                <option value="9">Class 9 (Rec. Age 13–15)</option>
                <option value="10">Class 10 (Rec. Age 14–16)</option>
                <option value="11">Class 11 (Rec. Age 15–17)</option>
                <option value="12">Class 12 (Rec. Age 16–19)</option>
              </select>
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Age (Years)</label>
              <input
                type="number"
                min="10"
                max="25"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 17 })}
                className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              />
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Academic Stream</label>
              <select
                value={formData.stream}
                onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              >
                <option value="Science">Science (PCM / PCB)</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts / Humanities</option>
              </select>
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Academic Performance (% / CGPA)</label>
              <input
                type="text"
                value={formData.academicPerformance}
                onChange={(e) => setFormData({ ...formData, academicPerformance: e.target.value })}
                className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              />
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">City & State</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            </div>
          </div>

          {/* Requirement 8: Target Exams Multi-Select */}
          <div className="space-y-2 p-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl">
            <label className="block font-extrabold text-[#0B1220] text-xs">
              Target Entrance Exams (Multi-Select):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {availableExamsList.map((exam) => {
                const isSelected = formData.targetExams.includes(exam);
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

          {/* Photo URL */}
          <div>
            <label className="block font-extrabold text-[#000000] mb-1">Profile Photo Image URL</label>
            <input
              type="text"
              value={formData.avatar}
              onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
              className="w-full p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-semibold focus:outline-none focus:border-[#1769E8]"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] text-[#374151] rounded-full font-bold hover:bg-[#EFF6FF]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#1769E8] hover:bg-[#1264D6] text-white rounded-full font-extrabold shadow-xs transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4 text-white" /> Save Changes & Recalculate Recommendations
            </button>
          </div>
        </form>
      ) : (
        /* Display Info Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl space-y-3 shadow-xs">
            <h3 className="text-sm font-extrabold text-[#0B1220] font-heading border-b border-[#E5E7EB] pb-2">
              Personal Information
            </h3>
            <div className="space-y-2 font-semibold">
              <p className="flex justify-between">
                <span className="text-[#374151]">Full Name:</span>
                <strong className="text-[#0B1220]">{userProfile.name}</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#374151]">School:</span>
                <strong className="text-[#1769E8]">{userProfile.schoolName || 'Add School'}</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#374151]">Email:</span>
                <strong className="text-[#0B1220]">{userProfile.email}</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#374151]">Age:</span>
                <strong className="text-[#1769E8]">{userProfile.age} Years</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#374151]">Location:</span>
                <strong className="text-[#0B1220]">{userProfile.city}, {userProfile.state}</strong>
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#E5E7EB] rounded-3xl space-y-3 shadow-xs">
            <h3 className="text-sm font-extrabold text-[#0B1220] font-heading border-b border-[#E5E7EB] pb-2">
              Academic & Target Exams
            </h3>
            <div className="space-y-2 font-semibold">
              <p className="flex justify-between">
                <span className="text-[#374151]">Class Level:</span>
                <strong className="text-[#0B1220]">Class {userProfile.classLevel}</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#374151]">Stream:</span>
                <strong className="text-[#1769E8]">{userProfile.stream}</strong>
              </p>
              <p className="flex justify-between">
                <span className="text-[#374151]">Academic Performance:</span>
                <strong className="text-[#0B1220]">{userProfile.academicPerformance}</strong>
              </p>
              <div className="space-y-1 pt-1">
                <span className="text-[#374151] block">Target Exams:</span>
                <div className="flex flex-wrap gap-1">
                  {userProfile.targetExams.map((ex, i) => (
                    <span key={i} className="px-2.5 py-0.5 bg-[#EFF6FF] text-[#1769E8] border border-[#BFDBFE] rounded-full text-[11px] font-bold">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
