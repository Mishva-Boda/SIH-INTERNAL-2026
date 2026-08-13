import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, Sparkles, User, Mail, Lock, MapPin, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { signup, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    classLevel: '12',
    stream: 'Science',
    city: 'Vadodara',
    state: 'Gujarat',
    age: 17,
    interests: ['Coding', 'AI & Machine Learning', 'Physics', 'Mathematics'],
  });

  const availableInterests = [
    'Maths',
    'Coding',
    'AI & Machine Learning',
    'Physics',
    'Biology',
    'Economics',
    'Design & UI',
    'Law & Logic',
    'Accounts',
    'Psychology',
    'Aviation',
  ];

  // Calculate recommended age based on class selection
  const handleClassChange = (selectedClass: string) => {
    let recAge = 17;
    if (selectedClass === '9') recAge = 14;
    if (selectedClass === '10') recAge = 15;
    if (selectedClass === '11') recAge = 16;
    if (selectedClass === '12') recAge = 17;

    setFormData((prev) => ({
      ...prev,
      classLevel: selectedClass,
      age: recAge,
    }));
  };

  const toggleInterest = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showToast('Please fill in your name and email');
      return;
    }

    signup({
      name: formData.name,
      email: formData.email,
      classLevel: formData.classLevel,
      stream: formData.stream,
      city: formData.city,
      state: formData.state,
      age: formData.age,
      interests: formData.interests,
    });

    showToast('Account created! Mandatory AI Assessment starting... 🚀');
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link to="/" className="inline-flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#1769E8] flex items-center justify-center text-white shadow-xs">
            <Compass className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-extrabold text-2xl text-[#0B1220]">
            Career<span className="text-[#1769E8]">Verse</span>
          </span>
        </Link>
        <h2 className="text-2xl font-extrabold text-[#0B1220] font-heading">
          Create Your Student Account
        </h2>
        <p className="text-xs text-[#374151] font-semibold">
          Create an account to start your mandatory AI Career & Stream Assessment.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white border border-[#E5E7EB] py-8 px-6 shadow-xs rounded-3xl sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Full Name */}
            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#374151] absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Jay Purohit"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#374151] absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="e.g. jay.purohit@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            </div>

            {/* Class & Age Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-extrabold text-[#000000] mb-1">Current Class</label>
                <select
                  value={formData.classLevel}
                  onChange={(e) => handleClassChange(e.target.value)}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                >
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <div>
                <label className="block font-extrabold text-[#000000] mb-1">
                  Age <span className="text-[10px] text-[#1769E8]">(Auto-Validated)</span>
                </label>
                <input
                  type="number"
                  min="12"
                  max="22"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 17 })}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            </div>

            {/* Stream & City Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-extrabold text-[#000000] mb-1">Stream</label>
                <select
                  value={formData.stream}
                  onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                >
                  <option value="Science">Science (PCM/PCB)</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts / Humanities</option>
                </select>
              </div>

              <div>
                <label className="block font-extrabold text-[#000000] mb-1">City</label>
                <input
                  type="text"
                  placeholder="e.g. Vadodara"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            </div>

            {/* State */}
            <div>
              <label className="block font-extrabold text-[#000000] mb-1">State</label>
              <input
                type="text"
                placeholder="e.g. Gujarat"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
              />
            </div>

            {/* Subject Interests Pills */}
            <div>
              <label className="block font-extrabold text-[#000000] mb-1.5">Subject Interests</label>
              <div className="flex flex-wrap gap-1.5">
                {availableInterests.map((interest) => {
                  const selected = formData.interests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                        selected
                          ? 'bg-[#1769E8] text-white shadow-xs'
                          : 'bg-[#F8FAFC] border border-[#E5E7EB] text-[#374151] hover:border-[#1769E8]'
                      }`}
                    >
                      {interest} {selected ? '✓' : '+'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#1769E8] hover:bg-[#1264D6] text-white font-extrabold rounded-full shadow-xs transition-all flex items-center justify-center gap-2 text-xs mt-2"
            >
              Sign Up & Start Mandatory Assessment <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-[#374151] font-semibold">
            Already have an account?{' '}
            <Link to="/login" className="text-[#1769E8] font-extrabold hover:underline">
              Log in directly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
