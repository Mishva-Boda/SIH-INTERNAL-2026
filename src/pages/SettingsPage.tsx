import React from 'react';
import { Settings, Bell, Lock, Users, Moon, Sun } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SettingsPage: React.FC = () => {
  const { showToast } = useApp();

  const handleToggle = (setting: string) => {
    showToast(`${setting} updated.`);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">Account & Preference Settings</h1>
        <p className="text-xs text-slate-500">Manage notification preferences, linked accounts, and privacy.</p>
      </div>

      <div className="glass-card p-6 rounded-3xl space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Bell className="w-4 h-4 text-brand-500" /> Notifications
          </h3>
          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl cursor-pointer">
              <span>Scholarship Deadline Alerts</span>
              <input type="checkbox" defaultChecked onChange={() => handleToggle('Scholarship Alerts')} className="rounded text-brand-500" />
            </label>
            <label className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl cursor-pointer">
              <span>JEE & Exam Schedule Updates</span>
              <input type="checkbox" defaultChecked onChange={() => handleToggle('Exam Updates')} className="rounded text-brand-500" />
            </label>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-500" /> Linked Parent Account
          </h3>
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl space-y-2 text-xs">
            <p className="font-bold text-purple-900">Parent Access Code: <span className="bg-white px-2 py-1 rounded font-mono text-purple-700">PAR-2026-8819</span></p>
            <p className="text-purple-700">Share this code with your parents so they can log into the Parent Monitoring Portal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
