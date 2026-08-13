import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, RefreshCw, MessageSquare } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export const FloatingAIOrb: React.FC = () => {
  const { userProfile } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Requirement 8: Initial Messages
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: 'Hi there! 👋' },
    { sender: 'ai', text: "I'm NEXA AI, your CareerVerse career & education assistant." },
    { sender: 'ai', text: 'How can I help you today?' },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Requirement 9: Send Message to exact n8n Webhook
  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const textToSend = inputMsg.trim();
    if (!textToSend || isTyping) return;

    // Append User Message
    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    setInputMsg('');
    setIsTyping(true);

    try {
      // Send query to exact n8n webhook URL
      const response = await fetch(
        'https://mishvaboda1214.app.n8n.cloud/webhook/71a3092c-1ecc-4f4f-97a1-7b8f3e1bc9dd/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'sendMessage',
            chatInput: textToSend,
            sessionId: `session_${userProfile.email || 'guest'}`,
            userContext: {
              name: userProfile.name,
              classLevel: userProfile.classLevel,
              stream: userProfile.stream,
              city: userProfile.city,
              state: userProfile.state,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const aiOutput =
          data.output ||
          data.message ||
          data.text ||
          (Array.isArray(data) && data[0]?.output) ||
          'I am NEXA AI. I can guide you on streams, JEE/NEET/CUET cutoffs, college choices, and scholarships!';

        setMessages((prev) => [...prev, { sender: 'ai', text: aiOutput }]);
      } else {
        // Fallback intelligent response if server is warming up
        setMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: `Based on your profile in Class ${userProfile.classLevel} (${userProfile.stream}), I recommend exploring specialized pathways in AI & Data Systems or Top Universities in ${userProfile.state}. You can also use our Cutoff Predictor and Scholarship finder!`,
          },
        ]);
      }
    } catch (error) {
      // Graceful error handling
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `I'm NEXA AI. For Class ${userProfile.classLevel} (${userProfile.stream}), check our interactive Stream Finder, College Finder, and Cutoff Predictor modules!`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* 1. NEXA AI FLOATING PILL BUTTON */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[1000]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close NEXA AI' : 'Open NEXA AI'}
          className="nexa-ai-pill-btn px-4 sm:px-5 py-3 sm:py-3.5 rounded-full flex items-center gap-2 font-extrabold text-xs sm:text-sm font-heading cursor-pointer select-none"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
          <span>{isOpen ? 'NEXA AI ×' : 'NEXA AI'}</span>
        </button>
      </div>

      {/* 2. CHAT POPUP WINDOW */}
      {isOpen && (
        <div
          className="fixed bottom-[80px] sm:bottom-[96px] right-3 sm:right-6 z-[1001] w-[calc(100vw-24px)] sm:w-[400px] h-[calc(100vh-100px)] sm:h-[580px] bg-white border border-[#E5E7EB] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="NEXA AI Chat Window"
        >
          {/* Requirement 6: CHAT HEADER */}
          <div className="p-4 bg-[#1769E8] text-white flex items-center justify-between shadow-xs shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-xs shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold font-heading text-white flex items-center gap-2">
                  NEXA AI <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[10px] text-white/90 font-semibold">Your Career & Education Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close NEXA AI"
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Requirement 7: CHAT BODY */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F8FAFC] text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-xl bg-[#1769E8] text-white flex items-center justify-center shrink-0 text-[10px] font-bold shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed font-semibold leading-snug whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#1769E8] text-white rounded-tr-xs shadow-xs'
                      : 'bg-white text-[#111827] border border-[#E2E8F0] rounded-tl-xs shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-[#64748B] text-xs p-2">
                <Sparkles className="w-4 h-4 text-[#1769E8] animate-spin" />
                <span className="font-semibold italic">NEXA AI is analyzing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Requirement 13: CHAT INPUT */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-[#E2E8F0] flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Ask NEXA AI anything about careers or colleges..."
              className="flex-1 px-4 py-2.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-full text-xs text-[#111827] placeholder-[#64748B] font-semibold focus:outline-none focus:border-[#1769E8]"
            />
            <button
              type="submit"
              disabled={!inputMsg.trim() || isTyping}
              aria-label="Send Message"
              className={`p-2.5 rounded-full text-white transition-all shrink-0 ${
                !inputMsg.trim() || isTyping
                  ? 'bg-[#CBD5E1] cursor-not-allowed'
                  : 'bg-[#1769E8] hover:bg-[#1264D6] shadow-xs cursor-pointer'
              }`}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
