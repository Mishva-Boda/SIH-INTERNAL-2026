import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Compass, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, showToast } = useApp();

  const [email, setEmail] = useState('jay.purohit@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email');
      return;
    }

    login(email);
    showToast('Welcome back! Loaded saved profile & recommendations. 🎉');
    navigate('/student'); // Direct to Dashboard for returning users!
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
        <h2 className="text-2xl font-extrabold text-solid-black font-heading">
          Student Portal Login
        </h2>
        <p className="text-xs text-[#374151] font-semibold">
          Log in to access your saved career assessment reports, colleges, & scholarships.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white border border-[#E5E7EB] py-8 px-6 shadow-xs rounded-3xl sm:px-10 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#374151] absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="jay.purohit@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            </div>

            <div>
              <label className="block font-extrabold text-[#000000] mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#374151] absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-[#111827] font-bold focus:outline-none focus:border-[#1769E8]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1769E8] hover:bg-[#1264D6] text-white font-extrabold rounded-full shadow-xs transition-all flex items-center justify-center gap-2 text-xs mt-2"
            >
              Login to Dashboard <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </form>

          <div className="text-center text-xs text-[#374151] font-semibold border-t border-[#E5E7EB] pt-4">
            New to CareerVerse AI?{' '}
            <Link to="/register" className="text-[#1769E8] font-extrabold hover:underline">
              Create account & start assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
