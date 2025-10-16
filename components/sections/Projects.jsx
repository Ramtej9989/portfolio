// components/sections/Projects.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaClock, FaFileDownload, FaServer } from 'react-icons/fa';

// Sample project data with performance metrics
const projectsData = [
  {
    id: 1,
    title: "Advanced React and Redux",
    image: "/images/projects/project1.jpg",
    description: "Comprehensive project using React and Redux for state management with modern application architecture.",
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
    details: "This project demonstrates advanced React patterns including custom hooks, context API, and Redux for global state management. It includes features like user authentication, form validation, and data persistence.",
    performance: {
      lighthouse: {
        performance: 96,
        accessibility: 98,
        bestPractices: 92,
        seo: 100
      },
      webVitals: {
        lcp: 1.8,
        fid: 42,
        cls: 0.05
      },
      optimizations: [
        {
          metric: "Page Load Time",
          before: 3.7,
          after: 1.9,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "Bundle Size",
          before: 1.2,
          after: 0.4,
          unit: "MB",
          icon: FaFileDownload
        },
        {
          metric: "HTTP Requests",
          before: 24,
          after: 9,
          unit: "",
          icon: FaServer
        }
      ]
    }
  },
  {
    id: 2,
    title: "AI-Enhanced Data Analysis Dashboard",
    image: "/images/projects/project2.jpg",
    description: "Interactive dashboard with AI-powered data visualization and insights generation.",
    technologies: ["Python", "TensorFlow", "React", "D3.js"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
    details: "An AI-powered dashboard that provides automated insights from complex datasets. The backend uses Python with TensorFlow for predictive analytics, while the frontend is built with React and D3.js for responsive visualizations.",
    performance: {
      lighthouse: {
        performance: 88,
        accessibility: 94,
        bestPractices: 95,
        seo: 97
      },
      webVitals: {
        lcp: 2.3,
        fid: 58,
        cls: 0.08
      },
      optimizations: [
        {
          metric: "Data Load Time",
          before: 5.2,
          after: 1.8,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "Rendering Time",
          before: 3.6,
          after: 1.2,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "API Requests",
          before: 18,
          after: 5,
          unit: "",
          icon: FaServer
        }
      ]
    }
  },
  {
    id: 3,
    title: "Full-Stack E-commerce Solution",
    image: "/images/projects/project3.jpg",
    description: "Complete e-commerce platform with product management, cart functionality, and payment processing.",
    technologies: ["Next.js", "MongoDB", "Stripe API", "Node.js"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
    details: "A fully-featured e-commerce platform built with Next.js and MongoDB. Features include product catalog management, user authentication, shopping cart functionality, and secure payment processing using Stripe API.",
    performance: {
      lighthouse: {
        performance: 92,
        accessibility: 97,
        bestPractices: 93,
        seo: 100
      },
      webVitals: {
        lcp: 1.4,
        fid: 38,
        cls: 0.03
      },
      optimizations: [
        {
          metric: "Time to Interactive",
          before: 4.5,
          after: 1.7,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "First Contentful Paint",
          before: 2.8,
          after: 0.9,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "Page Weight",
          before: 2.6,
          after: 0.8,
          unit: "MB",
          icon: FaFileDownload
        }
      ]
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Handle document body overflow using useEffect to avoid server-side rendering issues
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (selectedProject) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedProject]);

  // Reset tab when opening a new project
  useEffect(() => {
    if (selectedProject) {
      setActiveTab('overview');
    }
  }, [selectedProject]);

  // Check scroll position to show/hide arrows
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setScrollPosition(scrollLeft);
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="mt-12 relative">
          {/* Desktop View - Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
          
          {/* Mobile View - Horizontal Scroll with Navigation Arrows */}
          <div className="md:hidden relative">
            {/* Left Arrow */}
            {showLeftArrow && (
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg"
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                <FaChevronLeft size={16} />
              </button>
            )}
            
            {/* Right Arrow */}
            {showRightArrow && (
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <FaChevronRight size={16} />
              </button>
            )}
            
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {projectsData.map((project, index) => (
                <div 
                  key={project.id} 
                  className="snap-start snap-always flex-shrink-0 w-[85%] mr-4"
                >
                  <ProjectCard 
                    project={project} 
                    index={index}
                    onViewDetails={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <>
            {/* Overlay */}
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(4px)',
                zIndex: 50
              }}
              onClick={() => setSelectedProject(null)}
            ></div>
            
            {/* Modal */}
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '900px',
                maxHeight: '90vh',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                borderRadius: '8px',
                border: '1px solid rgba(138, 43, 226, 0.3)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                zIndex: 51,
                overflow: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div 
                style={{
                  position: 'sticky',
                  top: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  borderBottom: '1px solid rgba(138, 43, 226, 0.2)',
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 1
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s',
                    outline: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(138, 43, 226, 0.2)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <FaTimes style={{ color: 'white' }} />
                </button>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-secondary/20">
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === 'overview' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`px-4 py-3 text-sm font-medium ${activeTab === 'performance' ? 'text-secondary border-b-2 border-secondary' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab('performance')}
                >
                  Performance Metrics
                </button>
              </div>
              
              {/* Content */}
              <div style={{ padding: '24px' }}>
                {activeTab === 'overview' && (
                  <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px'
                  }}>
                    {/* Project Image */}
                    <div style={{ 
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover'
                        }} 
                      />
                    </div>
                    
                    {/* Project Details */}
                    <div>
                      <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#8A2BE2', marginBottom: '8px' }}>Description</h4>
                        <p style={{ color: '#CCCCCC' }}>{selectedProject.details || selectedProject.description}</p>
                      </div>
                      
                      <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#8A2BE2', marginBottom: '8px' }}>Technologies Used</h4>
                        <div style={{ 
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px'
                        }}>
                          {selectedProject.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              style={{
                                backgroundColor: 'rgba(138, 43, 226, 0.2)',
                                color: '#8A2BE2',
                                padding: '4px 12px',
                                borderRadius: '9999px',
                                fontSize: '14px'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div style={{ 
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px',
                        marginTop: '24px'
                      }}>
                        {selectedProject.github && (
                          <a 
                            href={selectedProject.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              backgroundColor: '#333333',
                              color: 'white',
                              padding: '8px 16px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              transition: 'background-color 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#444444'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#333333'}
                          >
                            <FaGithub />
                            <span>View Source Code</span>
                          </a>
                        )}
                        
                        {selectedProject.demo && (
                          <a 
                            href={selectedProject.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              backgroundColor: '#8A2BE2',
                              color: 'white',
                              padding: '8px 16px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              transition: 'background-color 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#7B25CD'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#8A2BE2'}
                          >
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'performance' && (
                  <ProjectPerformanceMetrics metrics={selectedProject.performance} />
                )}
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Additional CSS for hiding scrollbars */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index, onViewDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden h-full"
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Project Details */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="bg-secondary/20 text-secondary text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex space-x-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white opacity-80 hover:opacity-100 transition-opacity"
                aria-label="View GitHub repository"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white opacity-80 hover:opacity-100 transition-opacity"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
          
          <button 
            onClick={onViewDetails}
            className="text-secondary border border-secondary hover:bg-secondary/20 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Performance Metrics Component
function ProjectPerformanceMetrics({ metrics }) {
  const { lighthouse, webVitals, optimizations } = metrics;
  
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-lg font-semibold text-secondary mb-4">Performance Metrics</h4>
        
        {/* Lighthouse Scores */}
        <div className="mb-8">
          <h5 className="text-white font-medium mb-3">Lighthouse Scores</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ScoreGauge 
              score={lighthouse.performance} 
              label="Performance"
              icon={<FaClock />}
            />
            <ScoreGauge 
              score={lighthouse.accessibility} 
              label="Accessibility"
              icon={<FaGithub />} 
            />
            <ScoreGauge 
              score={lighthouse.bestPractices} 
              label="Best Practices"
              icon={<FaGithub />}
            />
            <ScoreGauge 
              score={lighthouse.seo} 
              label="SEO"
              icon={<FaGithub />}
            />
          </div>
        </div>
        
        {/* Core Web Vitals */}
        <div className="mb-8">
          <h5 className="text-white font-medium mb-3">Core Web Vitals</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <WebVitalMetric 
              name="LCP" 
              label="Largest Contentful Paint"
              value={webVitals.lcp} 
              target="2.5s" 
              isGood={webVitals.lcp <= 2.5}
            />
            <WebVitalMetric 
              name="FID" 
              label="First Input Delay"
              value={webVitals.fid} 
              target="100ms" 
              isGood={webVitals.fid <= 100}
            />
            <WebVitalMetric 
              name="CLS" 
              label="Cumulative Layout Shift"
              value={webVitals.cls} 
              target="0.1" 
              isGood={webVitals.cls <= 0.1}
            />
          </div>
        </div>
        
        {/* Optimization Results */}
        <div>
          <h5 className="text-white font-medium mb-3">Optimization Results</h5>
          <div className="space-y-3">
            {optimizations.map((opt, index) => (
              <OptimizationResult 
                key={index}
                metric={opt.metric}
                before={opt.before}
                after={opt.after}
                unit={opt.unit}
                icon={opt.icon || FaClock}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Helper Components for Performance Metrics
function ScoreGauge({ score, label, icon }) {
  // Calculate color based on score
  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 mb-2">
        {/* Background Circle */}
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
          />
          {/* Foreground Circle */}
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={score >= 90 ? "#10B981" : score >= 50 ? "#FBBF24" : "#EF4444"}
            strokeWidth="3"
            strokeDasharray={`${score}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${getScoreColor(score)} text-lg font-bold`}>{score}</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="text-secondary">{icon}</span>
        <span className="text-sm text-gray-300">{label}</span>
      </div>
    </div>
  );
}

function WebVitalMetric({ name, label, value, target, isGood }) {
  return (
    <div className="bg-black/30 p-4 rounded-lg border border-secondary/20">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col">
          <span className="font-medium text-white">{name}</span>
          <span className="text-xs text-gray-400">{label}</span>
        </div>
        <span className={`text-sm px-2 py-0.5 rounded ${isGood ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {isGood ? 'Good' : 'Needs Improvement'}
        </span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-sm text-gray-400">Target: {target}</span>
      </div>
    </div>
  );
}

function OptimizationResult({ metric, before, after, unit, icon: Icon }) {
  const improvement = ((before - after) / before * 100).toFixed(1);
  const isPositive = before > after;
  
  return (
    <div className="bg-black/30 p-4 rounded-lg border border-secondary/20">
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-secondary"><Icon /></span>
          <span className="font-medium text-white">{metric}</span>
        </div>
        <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '↓' : '↑'} {improvement}%
        </span>
      </div>
      <div className="relative h-2 bg-black/50 rounded overflow-hidden mb-2">
        {/* Before Bar */}
        <div className="absolute top-0 left-0 h-full bg-gray-600 w-full"></div>
        
        {/* After Bar */}
        <div 
          className="absolute top-0 left-0 h-full bg-secondary"
          style={{ width: `${(isPositive ? after/before : 1 - (after-before)/after) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1 text-xs text-gray-400">
        <span>Before: {before}{unit}</span>
        <span>After: {after}{unit}</span>
      </div>
    </div>
  );
}
