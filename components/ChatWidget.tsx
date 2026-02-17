import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { generateConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Loving Homes Concierge. How may I assist you and your furry friend today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateConciergeResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 p-4 rounded-full bg-[#FFFFF4] text-[#11120D] shadow-2xl flex items-center justify-center hover:bg-[#D8CFBC] transition-colors ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-8 right-8 w-[90vw] md:w-96 h-[500px] z-50 glass-panel rounded-2xl flex flex-col overflow-hidden border border-[#FFFFF4]/20 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#FFFFF4]/10 flex justify-between items-center bg-[#11120D]/50">
              <div className="flex items-center space-x-2">
                <Sparkles size={18} className="text-[#C5A059]" />
                <h3 className="text-[#FFFFF4] font-medium">Concierge AI</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#D8CFBC] hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#FFFFF4] text-[#11120D] rounded-tr-none' 
                      : 'bg-[#565449]/50 text-[#FFFFF4] rounded-tl-none border border-[#FFFFF4]/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-[#565449]/50 p-3 rounded-xl rounded-tl-none border border-[#FFFFF4]/10">
                     <div className="flex space-x-1">
                       <div className="w-2 h-2 bg-[#FFFFF4] rounded-full animate-bounce" />
                       <div className="w-2 h-2 bg-[#FFFFF4] rounded-full animate-bounce delay-75" />
                       <div className="w-2 h-2 bg-[#FFFFF4] rounded-full animate-bounce delay-150" />
                     </div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-[#11120D]/50 border-t border-[#FFFFF4]/10 flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our suites..."
                className="flex-1 bg-transparent border border-[#FFFFF4]/20 rounded-full px-4 py-2 text-sm text-[#FFFFF4] focus:outline-none focus:border-[#FFFFF4]/60"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="p-2 bg-[#FFFFF4] text-[#11120D] rounded-full hover:bg-[#D8CFBC] disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
