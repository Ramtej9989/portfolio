// components/ui/AIChat.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { generateResponse, personalInfo } from '@/data/chatbot';

export default function AIChat({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: `Hello! I'm an AI assistant for ${personalInfo.basics.name}. How can I help you today?`, 
      isBot: true 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (inputText.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Generate and add bot response with a delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(inputText),
        isBot: true
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Icon Button - Only show when chat is closed */}
      {!isOpen && (
        <motion.button
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-secondary shadow-lg shadow-secondary/30 flex items-center justify-center z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Chat"
        >
          <FaRobot className="text-white text-2xl" />
        </motion.button>
      )}
      
      {/* Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-8 w-80 sm:w-96 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl border border-secondary/30 overflow-hidden z-50"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between bg-secondary p-4">
              <div className="flex items-center gap-2">
                <FaRobot className="text-white text-xl" />
                <h3 className="text-white font-semibold">AI Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes size={18} />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-black/80">
              <div className="space-y-4">
                {messages.map(message => (
                  <div 
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg py-2 px-4 ${
                        message.isBot 
                          ? 'bg-gray-800 text-white rounded-tl-none' 
                          : 'bg-secondary text-white rounded-tr-none'
                      }`}
                    >
                      {message.text.split('\n').map((line, i) => (
                        <p key={i} className={i > 0 ? 'mt-2' : ''}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800 text-white rounded-lg rounded-tl-none py-2 px-4 max-w-[80%]">
                      <div className="flex space-x-2 items-center h-6">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Auto-scroll anchor */}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-black/90 border-t border-secondary/20">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-black/60 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <motion.button
                  type="submit"
                  disabled={!inputText.trim()}
                  className={`rounded-full w-10 h-10 flex items-center justify-center transition-colors ${
                    inputText.trim() 
                      ? 'bg-secondary hover:bg-secondary/90' 
                      : 'bg-gray-700 cursor-not-allowed'
                  }`}
                  whileHover={inputText.trim() ? { scale: 1.05 } : {}}
                  whileTap={inputText.trim() ? { scale: 0.95 } : {}}
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-white text-sm" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
