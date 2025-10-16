// components/ui/SkillBar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillBar({ name, level, color = "#8A2BE2", hoverContent }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-6 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-white">{name}</span>
        <span className="text-sm font-medium text-secondary">{level}%</span>
      </div>
      
      <div className="w-full h-2.5 bg-black/60 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      
      {/* Optional hover information tooltip */}
      {hoverContent && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-20 left-0 right-0 bg-black/90 border border-secondary/30 rounded-md p-3 shadow-lg z-10"
            >
              <div className="text-sm text-gray-200">
                {typeof hoverContent === 'string' ? (
                  <p>{hoverContent}</p>
                ) : (
                  hoverContent
                )}
              </div>
              <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-black/90 border-r border-b border-secondary/30"></div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

// If you want to use this component with the AnimatePresence
import { AnimatePresence } from 'framer-motion';
