import React, { useEffect, useRef } from 'react';
import { Bot, Sparkles, HelpCircle } from 'lucide-react';
import { createChat } from '@n8n/chat';
import { useApp } from '../context/AppContext';

export const AIChatbotPage: React.FC = () => {
  const { userProfile } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;

    try {
      createChat({
        webhookUrl: 'https://mishvaboda1214.app.n8n.cloud/webhook/71a3092c-1ecc-4f4f-97a1-7b8f3e1bc9dd/chat',
        target: '#n8n-embedded-chat-container',
        mode: 'fullscreen',
        showWelcomeScreen: false,
        initialMessages: [
          `Hi ${userProfile.name}! 👋 I am NEXA AI.`,
          'Ask me anything about streams, entrance exams, cutoff ranks, or scholarships!'
        ],
        i18n: {
          en: {
            title: 'NEXA AI',
            subtitle: 'CareerVerse AI Assistant',
            footer: '',
            getStarted: 'New Conversation',
            inputPlaceholder: 'Ask NEXA AI anything about careers, streams, or colleges...',
          }
        }
      });
    } catch (err) {
      console.warn('n8n Embedded Chat error:', err);
    }
  }, [userProfile.name]);

  return (
    <div className="max-w-5xl mx-auto space-y-6 py-4 pb-12">
      {/* Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border border-[#E5E7EB] shadow-xs flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#1769E8] text-white flex items-center justify-center shadow-xs shrink-0">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white text-[#1769E8] rounded-full text-[10px] font-extrabold shadow-xs border border-[#BFDBFE] mb-1">
              <Sparkles className="w-3 h-3 text-[#1769E8]" /> Official CareerVerse Assistant
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0B1220] font-heading">
              NEXA AI Chatbot
            </h1>
            <p className="text-xs text-[#374151] font-semibold">
              Ask NEXA AI about career paths, Class 10/12 streams, JEE/NEET/CUET cutoffs, or scholarships.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded NEXA AI Container */}
      <div
        ref={containerRef}
        id="n8n-embedded-chat-container"
        className="w-full h-[650px] bg-white border border-[#E5E7EB] rounded-3xl shadow-xs overflow-hidden"
      />
    </div>
  );
};
