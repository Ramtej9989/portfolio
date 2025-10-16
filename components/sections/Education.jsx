// components/sections/Education.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { educationData } from '@/data/education';

export default function Education() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative"
        >
          {/* Timeline line - Important: Position differently for mobile vs desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary/20 rounded-full"></div>
          
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              // Different layout structure for mobile vs desktop
              className="relative mb-16"
            >
              {/* Mobile layout structure */}
              <div className="md:hidden flex flex-col ml-12 relative">
                {/* Timeline dot for mobile */}
                <motion.div 
                  className="absolute left-[-25px] top-4 h-6 w-6 rounded-full bg-secondary z-10"
                  animate={{ 
                    boxShadow: ['0 0 0 0 rgba(138, 43, 226, 0.6)', '0 0 0 10px rgba(138, 43, 226, 0)'] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                
                {/* Year for mobile */}
                <span className="text-secondary text-xl font-semibold mb-2">
                  {item.startYear} - {item.endYear}
                </span>
                
                {/* Content for mobile */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`bg-black/40 p-6 rounded-lg shadow-lg border border-secondary/30 hover:border-secondary/60 transition-all duration-300 ${
                    expandedId === item.id ? 'ring-2 ring-secondary' : ''
                  }`}
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                      <h4 className="text-secondary font-semibold mt-1">{item.degree} in {item.field}</h4>
                    </div>
                    
                    {item.logo && (
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-white p-1">
                        <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mt-3">{item.description}</p>
                  
                  {/* Expanded content for mobile */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedId === item.id ? 'auto' : 0,
                      opacity: expandedId === item.id ? 1 : 0 
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
                  
                  {/* Expand/collapse indicator for mobile */}
                  <div className="mt-3 flex justify-center">
                    <motion.button
                      animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                      className="text-secondary hover:text-white"
                    >
                      {expandedId === item.id ? '▲' : '▼'}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              {/* Desktop layout structure - hidden on mobile */}
              <div className={`hidden md:flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline dot for desktop */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 h-6 w-6 rounded-full bg-secondary z-10 mt-4"
                  animate={{ 
                    boxShadow: ['0 0 0 0 rgba(138, 43, 226, 0.6)', '0 0 0 10px rgba(138, 43, 226, 0)'] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                
                {/* Year for desktop */}
                <div className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'
                }`}>
                  <span className="text-secondary text-xl font-semibold">
                    {item.startYear} - {item.endYear}
                  </span>
                </div>
                
                {/* Content for desktop */}
                <motion.div 
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pl-16' : 'pr-16'
                  }`}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className={`bg-black/40 p-6 rounded-lg shadow-lg border border-secondary/30 hover:border-secondary/60 transition-all duration-300 ${
                      expandedId === item.id ? 'ring-2 ring-secondary' : ''
                    }`}
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                        <h4 className="text-secondary font-semibold mt-1">{item.degree} in {item.field}</h4>
                      </div>
                      
                      {item.logo && (
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-white p-1">
                          <img src={item.logo} alt={`${item.institution} logo`} className="w-full h-full object-contain" />
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-300 mt-3">{item.description}</p>
                    
                    {/* Expanded content for desktop */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedId === item.id ? 'auto' : 0,
                        opacity: expandedId === item.id ? 1 : 0 
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
                    
                    {/* Expand/collapse indicator for desktop */}
                    <div className="mt-3 flex justify-center">
                      <motion.button
                        animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                        className="text-secondary hover:text-white"
                      >
                        {expandedId === item.id ? '▲' : '▼'}
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
