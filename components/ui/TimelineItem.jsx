// components/ui/TimelineItem.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TimelineItem({ item, index, isEven }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`mb-16 relative flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot with pulse effect */}
      <motion.div 
        className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-6 w-6 rounded-full bg-secondary z-10 mt-4"
        animate={{ 
          boxShadow: ['0 0 0 0 rgba(138, 43, 226, 0.6)', '0 0 0 10px rgba(138, 43, 226, 0)'] 
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      
      {/* Year */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${
        isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
      }`}>
        <motion.span 
          className="text-secondary text-xl font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          {item.startYear} - {item.endYear}
        </motion.span>
      </div>
      
      {/* Content */}
      <motion.div 
        className={`ml-16 md:ml-0 mt-2 md:mt-0 md:w-1/2 ${
          isEven ? 'md:pl-16' : 'md:pr-16'
        }`}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className={`bg-black/40 p-6 rounded-lg shadow-lg border border-secondary/30 hover:border-secondary/60 transition-all duration-300 ${
            isExpanded ? 'ring-2 ring-secondary/50' : ''
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
          layout
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">{item.institution}</h3>
              <h4 className="text-secondary font-semibold mt-1">{item.degree} in {item.field}</h4>
            </div>
            
            {item.logo && (
              <div className="w-12 h-12 rounded-md overflow-hidden bg-white/10 p-1 flex-shrink-0">
                <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" />
              </div>
            )}
          </div>
          
          <p className="text-gray-300 mt-3">{item.description}</p>
          
          {/* Expanded content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {item.achievements && (
              <div className="mt-4 pt-3 border-t border-secondary/20">
                <h5 className="font-semibold text-white">Key Achievements:</h5>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="ml-2">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
          
          {/* Expand/collapse indicator */}
          <div className="mt-3 flex justify-center">
            <motion.button
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-secondary hover:text-white"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? '▲' : '▼'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
