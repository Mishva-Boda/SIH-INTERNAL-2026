import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, User, Mic, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingAIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste Aarav! 👋 I am your VerseAI Counsellor. Ask me anything about streams, JEE/NEET prep, scholarships, or top careers after Class 10/12!',
    },
  ]);

  const quickPrompts = [
    'Should I pick PCM or PCMB after Class 10?',
    'What is the average salary of an AI Engineer in India?',
    'Show top scholarships for Class 11 Science students',
  ];

  const handleSend = (textToSend?: string) => {
    const msgText = textToSend || input;
    if (!msgText.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: msgText }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Mock AI response delay
    setTimeout(() => {
      let reply = `Based on your academic profile in Class 11 Science (PCM) and 94% aptitude score, `;
      if (msgText.toLowerCase().includes('pcm') || msgText.toLowerCase().includes('pcmb')) {
        reply += `PCM is ideal if you are focused on Engineering, AI, Robotics, or Architecture. PCMB opens up Biotechnology and Bioinformatics!`;
      } else if (msgText.toLowerCase().includes('salary')) {
        reply += `AI Engineers in India start between ₹12L - ₹18L per year, with experienced leads reaching ₹35L - ₹50L+ LPA.`;
      } else if (msgText.toLowerCase().includes('scholarship')) {
        reply += `The Reliance Foundation Undergraduate Scholarship (₹2 Lakhs) and INSPIRE DST Scholarship (₹80k/yr) are great matches for you!`;
      } else {
        reply += `I recommend taking our 5-minute AI Aptitude Assessment to pinpoint your top 3 matching career paths with 96% accuracy!`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-button p-3.5 sm:p-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full border border-white/40 flex items-center gap-2.5 cursor-pointer transition-all duration-300"
      >
        <Sparkles className="w-5 h-5 text-accent-dark animate-pulse" />
        <span className="text-xs font-bold font-heading tracking-wide pr-1 hidden sm:inline">
          VerseAI Assistant
        </span>
      </motion.button>

      {/* Floating Popup Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] sm:w-[400px] h-[520px] bg-surface border border-border-soft rounded-32 shadow-soft-lg flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-warm-peach border-b border-warm-beige text-txt-primary flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-20 bg-surface flex items-center justify-center text-accent-dark shadow-soft-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-heading flex items-center gap-1.5 text-txt-primary">
                    VerseAI Counsellor
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-txt-secondary font-medium">Online • AI Career Advisor</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-surface text-txt-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-surface-cream">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    m.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      m.sender === 'user'
                        ? 'bg-primary-soft text-txt-primary'
                        : 'bg-warm-peach text-accent-dark'
                    }`}
                  >
                    {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`max-w-[80%] p-3.5 rounded-24 text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-surface border border-border-soft text-txt-primary rounded-tr-none shadow-soft-sm'
                        : 'bg-surface border border-warm-beige text-txt-primary rounded-tl-none shadow-soft-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-txt-secondary text-2xs p-2">
                  <Bot className="w-4 h-4 text-accent-dark animate-bounce" />
                  <span className="italic">VerseAI is formulating guidance...</span>
                </div>
              )}
            </div>

            {/* Quick Prompts */}
            <div className="p-2.5 bg-surface border-t border-border-soft flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="px-3 py-1 bg-surface-cream text-txt-primary hover:bg-warm-peach/60 border border-border-soft rounded-full text-[10px] font-semibold shrink-0 transition-all flex items-center gap-1"
                >
                  {q} <ArrowRight className="w-2.5 h-2.5" />
                </button>
              ))}
            </div>

            {/* Input Box */}
            <div className="p-3 bg-surface border-t border-border-soft flex items-center gap-2">
              <button
                onClick={() => handleSend('Voice query: What are top engineering exams in India?')}
                className="p-2 text-txt-secondary hover:text-txt-primary hover:bg-surface-cream rounded-full transition-all"
                title="Voice Input Mock"
              >
                <Mic className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask VerseAI counselling question..."
                className="flex-1 text-xs bg-surface-cream px-3 py-2 rounded-full border border-border-soft focus:outline-none focus:border-warm-beige"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 bg-primary-soft text-txt-primary hover:bg-primary-dark hover:text-white rounded-full transition-all shadow-soft-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
