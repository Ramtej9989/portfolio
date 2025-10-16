// components/sections/Journey.jsx
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaCertificate, FaChevronLeft, FaChevronRight, FaCode } from 'react-icons/fa';

// Timeline data
const timelineData = [
  {
    id: 1,
    date: 'Nov 2022',
    title: 'First Line of Code',
    category: 'beginning',
    description: 'Wrote my first “Hello World” program in C language, marking the beginning of my programming journey.',
    icon: FaCode,
    color: '#8A63F6',
    details: [
      'Explored the basics of C programming',
      'Understood how code runs on a computer',
      'Laid the foundation for problem-solving through code'
    ]
  },
  {
    id: 2,
    date: 'Apr 2023',
    title: 'Data Structures in C',
    category: 'education',
    description: 'Started learning core data structures using the C language, building a stronger foundation in programming and problem-solving.',
    icon: FaGraduationCap,
    color: '#D86779',
    details: [
      'Learned arrays, stacks, queues, and linked lists',
      'Practiced implementing data structures from scratch',
      'Solved structured coding problems to build logic'
    ]
  },
  {
    id: 3,
    date: 'Jun 2023',
    title: 'Algorithm Practice',
    category: 'education',
    description: 'Focused on improving logical thinking by solving algorithmic challenges.',
    icon: FaLaptopCode,
    color: '#C13584',
    details: [
      'Studied sorting and searching algorithms',
      'Improved problem-solving through coding contests',
      'Strengthened understanding of time and space complexity'
    ]
  },
  {
    id: 4,
    date: 'Sep 2023',
    title: 'Python Programming',
    category: 'skill',
    description: 'Started learning Python to explore modern programming concepts and enhance problem-solving skills.',
    icon: FaLaptopCode,
    color: '#A27FE6',
    details: [
      'Learned Python fundamentals like loops, functions, and OOP',
      'Practiced solving problems on online coding platforms',
      'Built small projects to strengthen logic and syntax understanding'
    ]
  },
  {
    id: 5,
    date: 'Dec 2023',
    title: 'Data Science Journey',
    category: 'skill',
    description: 'Explored the world of data science, working with data collection, analysis, and visualization techniques.',
    icon: FaBriefcase,
    color: '#F77FB3',
    details: [
      'Learned data cleaning and preprocessing',
      'Used Python libraries like Pandas and Matplotlib',
      'Gained hands-on experience with real-world datasets'
    ]
  },
  {
    id: 6,
    date: 'Feb 2024',
    title: 'Machine Learning',
    category: 'skill',
    description: 'Dived into machine learning to understand predictive modeling and intelligent systems.',
    icon: FaCertificate,
    color: '#9370DB',
    details: [
      'Explored supervised and unsupervised learning',
      'Worked with algorithms like Linear Regression and KNN',
      'Trained and evaluated ML models using Python'
    ]
  },
  {
    id: 7,
    date: 'Jul 2024',
    title: 'Deep Learning',
    category: 'skill',
    description: 'Expanded my data science skills by learning neural networks and deep learning techniques.',
    icon: FaLaptopCode,
    color: '#FF69B4',
    details: [
      'Learned the fundamentals of neural networks',
      'Explored libraries like TensorFlow and Keras',
      'Built simple deep learning models'
    ]
  },
  {
    id: 8,
    date: 'Dec 2024',
    title: 'Power BI & Visualization',
    category: 'skill',
    description: 'Learned to create powerful, interactive dashboards using Power BI for effective data storytelling.',
    icon: FaLaptopCode,
    color: '#BA55D3',
    details: [
      'Understood data visualization principles',
      'Created interactive Power BI dashboards',
      'Gained insights through data analytics'
    ]
  },
  {
    id: 9,
    date: 'Mar 2025',
    title: 'Next.js Development',
    category: 'skill',
    description: 'Started learning Next.js to build modern, fast, and scalable web applications.',
    icon: FaBriefcase,
    color: '#8B008B',
    details: [
      'Explored server-side rendering and static site generation',
      'Built dynamic full-stack projects',
      'Improved performance and SEO with Next.js features'
    ]
  },
  {
    id: 10,
    date: 'Aug 2025',
    title: 'ServiceNow',
    category: 'ongoing',
    description: 'Started learning ServiceNow to automate workflows and manage IT services efficiently.',
    icon: FaCode,
    color: '#DA70D6',
    details: [
      'Explored ServiceNow platform modules',
      'Practiced building workflows and automations',
      'Gained hands-on experience with IT service management'
    ]
  }
];


export default function Journey() {
  const scrollContainerRef = useRef(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  // Set client-side flag to prevent SSR issues
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Calculate max scroll width and set event listeners
  useEffect(() => {
    if (!scrollContainerRef.current || !isClient) return;
    
    const calculateMaxScroll = () => {
      if (scrollContainerRef.current) {
        setMaxScroll(scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth);
      }
    };
    
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollLeft);
      }
    };
    
    calculateMaxScroll();
    window.addEventListener('resize', calculateMaxScroll);
    scrollContainerRef.current.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', calculateMaxScroll);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isClient]);

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="journey" className="py-16 md:py-24 relative">
      {/* No background changes - keep your existing dark purple background */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>
        
        {isClient && (
          <>
            {/* Timeline Controls */}
            <div className="flex justify-end mb-6 space-x-2">
              <button 
                onClick={scrollLeft}
                disabled={scrollPosition <= 0}
                className={`p-2 rounded-full ${scrollPosition <= 0 ? 'bg-gray-700 text-gray-500' : 'bg-secondary/20 text-secondary hover:bg-secondary/30'}`}
                aria-label="Scroll timeline left"
              >
                <FaChevronLeft size={16} />
              </button>
              <button 
                onClick={scrollRight}
                disabled={scrollPosition >= maxScroll}
                className={`p-2 rounded-full ${scrollPosition >= maxScroll ? 'bg-gray-700 text-gray-500' : 'bg-secondary/20 text-secondary hover:bg-secondary/30'}`}
                aria-label="Scroll timeline right"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line with gradient - ONLY THIS PART IS CHANGED */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 z-0"></div>
              
              {/* Timeline scroll container */}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto hide-scrollbar pb-6 pt-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex" style={{ minWidth: 'max-content', paddingLeft: '5%', paddingRight: '5%' }}>
                  {/* Timeline milestones */}
                  {timelineData.map((milestone, index) => {
                    const IconComponent = milestone.icon;
                    
                    return (
                      <div 
                        key={milestone.id} 
                        className="flex flex-col items-center mx-16 relative"
                        style={{ minWidth: '120px' }}
                      >
                        {/* Milestone node */}
                        <button
                          className={`w-6 h-6 rounded-full relative z-10 transition-all duration-300 border-2 ${
                            selectedMilestone?.id === milestone.id ? 'bg-black border-secondary' : 'bg-black/30 border-gray-600 hover:border-secondary'
                          }`}
                          onClick={() => setSelectedMilestone(selectedMilestone?.id === milestone.id ? null : milestone)}
                          aria-label={`Select milestone: ${milestone.title}`}
                          style={{ borderColor: selectedMilestone?.id === milestone.id ? milestone.color : undefined }}
                        >
                          {/* Icon in node */}
                          <div 
                            className={`absolute inset-0 flex items-center justify-center ${
                              selectedMilestone?.id === milestone.id ? 'opacity-100' : 'opacity-70'
                            }`}
                            style={{ color: milestone.color }}
                          >
                            <IconComponent size={12} />
                          </div>
                        </button>
                        
                        {/* Date */}
                        <div className="mt-4 text-xs text-gray-400">{milestone.date}</div>
                        
                        {/* Title */}
                        <div className={`mt-2 text-center transition-all duration-300 ${
                          selectedMilestone?.id === milestone.id ? 'text-secondary font-medium' : 'text-white'
                        }`}>
                          <h3 className="text-sm" style={{ maxWidth: '120px' }}>{milestone.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Progress bar with gradient */}
              <div className="h-1 bg-black/30 rounded overflow-hidden mt-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                  style={{ width: `${(scrollPosition / Math.max(maxScroll, 1)) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Selected milestone details */}
            {selectedMilestone && (
              <motion.div 
                className="mt-12 bg-black/20 backdrop-blur-sm border border-secondary/20 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-xs mr-2"
                        style={{ backgroundColor: `${selectedMilestone.color}20`, color: selectedMilestone.color }}
                      >
                        {selectedMilestone.category}
                      </span>
                      <span className="text-gray-400">{selectedMilestone.date}</span>
                    </div>
                    <button
                      onClick={() => setSelectedMilestone(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      &times;
                    </button>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{selectedMilestone.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedMilestone.description}</p>
                  
                  <h4 className="text-secondary font-medium mb-2">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {selectedMilestone.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </>
        )}
        
        {/* Loading placeholder for server-side rendering */}
        {!isClient && (
          <div className="h-64 bg-black/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <div className="text-gray-400">Loading journey timeline...</div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
