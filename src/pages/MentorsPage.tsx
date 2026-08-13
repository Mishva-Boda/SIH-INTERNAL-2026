import React, { useState } from 'react';
import { Users, Calendar, Star, CheckCircle2, ArrowRight, Video, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MentorsPage: React.FC = () => {
  const { showToast } = useApp();
  const [selectedMentor, setSelectedMentor] = useState<any>(null);

  const mentors = [
    {
      id: 1,
      name: 'Dr. Siddharth Mehta',
      role: 'Senior AI Engineer @ Google DeepMind',
      alumni: 'IIT Bombay (CSE 2021)',
      rating: 4.9,
      sessions: 340,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      domain: 'Engineering & AI',
    },
    {
      id: 2,
      name: 'Priya Nambiar',
      role: 'Principal UX Designer @ Swiggy',
      alumni: 'NID Ahmedabad (M.Des 2020)',
      rating: 4.95,
      sessions: 420,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      domain: 'Design & UX',
    },
    {
      id: 3,
      name: 'Dr. Rohan Kulkarni',
      role: 'Genomics Scientist & Biotech Lead',
      alumni: 'IISc Bangalore (PhD)',
      rating: 4.85,
      sessions: 210,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      domain: 'Life Sciences',
    },
  ];

  const handleBookSession = (mentor: any) => {
    showToast(`1-on-1 Counselling session booked with ${mentor.name}! Calendar invite sent.`);
    setSelectedMentor(null);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/80 gradient-card-purple shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full border border-purple-200">
            Verified Industry Experts
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            1-on-1 Expert <span className="gradient-text">Mentorship Sessions</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Book direct 30-minute virtual guidance sessions with IIT, NID & IISc alumni.
          </p>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mentors.map((m) => (
          <div key={m.id} className="glass-card p-6 rounded-3xl space-y-4 glass-card-hover flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={m.avatar} alt={m.name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-purple-200" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{m.name}</h3>
                  <p className="text-[11px] text-purple-700 font-semibold">{m.role}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{m.alumni}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl text-xs">
                <span className="font-bold text-amber-600 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" /> {m.rating} Rating
                </span>
                <span className="text-slate-500 font-medium">{m.sessions}+ Sessions</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedMentor(m)}
              className="w-full py-2.5 bg-gradient-to-r from-brand-500 to-purple-600 text-white rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Video className="w-3.5 h-3.5" /> Book 1-on-1 Session
            </button>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-slate-900">Confirm Mentorship Booking</h3>
            <p className="text-xs text-slate-600">30-Min Video Session with <strong>{selectedMentor.name}</strong></p>
            <div className="p-3 bg-purple-50 rounded-xl text-xs text-purple-800 font-semibold">
              Date: Tomorrow at 05:00 PM • Free SIH Student Pass
            </div>
            <div className="flex gap-2">
              <button onClick={() => setSelectedMentor(null)} className="w-1/3 py-2 bg-slate-100 rounded-xl text-xs font-bold">
                Cancel
              </button>
              <button onClick={() => handleBookSession(selectedMentor)} className="w-2/3 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold shadow-md">
                Confirm Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
