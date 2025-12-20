// components/sections/Projects.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaClock, FaFileDownload, FaServer } from 'react-icons/fa';

// Sample project data with performance metrics
const projectsData = [
  {
    id: 1,
    title: "Power BI Coffee Shop Performance Dashboard",
    image: "/images/projects/Coffee.png",
    description:
      "Interactive Power BI dashboard analyzing sales, customer behavior, and operational performance for a coffee shop business.",
    technologies: ["Power BI", "DAX", "SQL", "Excel"],
    github: "https://github.com/Ramtej9989/Coffee-Shop-Performance-Dashboard",
    demo: "https://drive.google.com/file/d/1DD8KJ0u98ZWg_WQQmjLpngfmC6z2DkoM/view?usp=sharing",
    details:
      "Designed a comprehensive Power BI dashboard to track revenue trends, top-selling products, peak hours, and customer purchasing behavior. Implemented advanced DAX calculations for KPIs such as average order value, profit margins, and daily sales growth, enabling data-driven decision-making for business optimization.",
    performance: {
      lighthouse: {
        performance: 95,
        accessibility: 96,
        bestPractices: 94,
        seo: 98
      },
      webVitals: {
        lcp: 1.6,
        fid: 40,
        cls: 0.04
      },
      optimizations: [
        {
          metric: "Dashboard Load Time",
          before: 4.2,
          after: 1.9,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "Query Execution Time",
          before: 3.1,
          after: 1.2,
          unit: "s",
          icon: FaServer
        },
        {
          metric: "Data Model Size",
          before: 1.4,
          after: 0.5,
          unit: "GB",
          icon: FaFileDownload
        }
      ]
    }
  },
  {
    id: 2,
  title: "Cyber Threat Intelligence & SOC Analytics Platform",
  image: "/images/projects/cyber.png",
  description:
    "A full-stack SOC analytics platform for monitoring cyber threats, analyzing incidents, and visualizing security intelligence.",
  technologies: ["Next.js", "MongoDB", "Python", "Data Analysis"],
  github: "https://github.com/Ramtej9989/Cyber-Threat-Intel-Frontend",
  demo: "https://cyber-threat-intel-frontend.vercel.app/",
  details:
    "Developed a cyber threat intelligence and SOC analytics platform using Next.js for the frontend, MongoDB for scalable data storage, and Python for data processing and analysis. The system aggregates security logs and threat data, performs analytical processing to identify attack patterns, and presents actionable insights through interactive dashboards to support faster incident response.",
  performance: {
      lighthouse: {
        performance: 90,
        accessibility: 94,
        bestPractices: 96,
        seo: 95
      },
      webVitals: {
        lcp: 2.1,
        fid: 55,
        cls: 0.06
      },
      optimizations: [
        {
          metric: "Threat Data Processing Time",
          before: 6.4,
          after: 2.2,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "Alert Correlation Rate",
          before: 62,
          after: 89,
          unit: "%",
          icon: FaServer
        },
        {
          metric: "False Positive Reduction",
          before: 38,
          after: 14,
          unit: "%",
          icon: FaFileDownload
        }
      ]
    }
  },
  {
    id: 3,
    title: "Employee Growth & Engagement Dashboard",
    image: "/images/projects/Employee.png",
    description:
      "Data-driven HR analytics dashboard tracking employee performance, growth, and engagement metrics.",
    technologies: ["Power BI", "SQL", "Excel", "HR Analytics"],
    github: "https://github.com/Ramtej9989/employee-growth-engagement-dashboard",
    demo: "https://drive.google.com/file/d/1na3rbSp-kakIvd8AFJfuMq37Z6S0N0jN/view?usp=sharing",
    details:
      "Developed an HR analytics dashboard to monitor employee growth, engagement, attrition, and performance trends. Leveraged SQL for data transformation and Power BI for interactive visualizations, enabling HR teams to identify skill gaps, predict attrition risks, and improve workforce planning.",
    performance: {
      lighthouse: {
        performance: 94,
        accessibility: 97,
        bestPractices: 95,
        seo: 99
      },
      webVitals: {
        lcp: 1.5,
        fid: 36,
        cls: 0.03
      },
      optimizations: [
        {
          metric: "Report Refresh Time",
          before: 4.8,
          after: 1.6,
          unit: "s",
          icon: FaClock
        },
        {
          metric: "Query Optimization",
          before: 3.9,
          after: 1.3,
          unit: "s",
          icon: FaServer
        },
        {
          metric: "Dataset Size",
          before: 1.9,
          after: 0.7,
          unit: "GB",
          icon: FaFileDownload
        }
      ]
    }
  },
  {
  id: 4,
  title: "Loan Default Risk Analysis (Finance / Banking EDA)",
  image: "/images/projects/finance-loan-eda.png",
  description:
    "Exploratory Data Analysis project analyzing loan default risk using multi-source banking data including customer demographics, credit history, and transaction behavior.",
  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "EDA"
  ],
  github: "https://github.com/Ramtej9989/finance-loan-default-risk-eda",
  demo: "https://drive.google.com/file/d/1TIqynX-SvYTAkyt_ctz6ztkCwe4pTNPj/view?usp=sharing",
  details:
    "Conducted an end-to-end exploratory data analysis on multi-source banking datasets to identify key drivers of loan default risk. Integrated customer demographics, loan details, credit history, and transaction data using relational joins. Performed data cleaning, missing value analysis, univariate, bivariate, and multivariate analysis, and engineered financial features such as loan-to-income ratio. Validated EDA insights using a baseline machine learning model to support data-driven risk assessment.",
  performance: {
    lighthouse: {
      performance: 93,
      accessibility: 96,
      bestPractices: 95,
      seo: 97
    },
    webVitals: {
      lcp: 1.7,
      fid: 42,
      cls: 0.04
    },
    optimizations: [
      {
        metric: "Data Integration Efficiency",
        before: 5.6,
        after: 2.1,
        unit: "s",
        icon: FaClock
      },
      {
        metric: "EDA Processing Time",
        before: 4.3,
        after: 1.8,
        unit: "s",
        icon: FaServer
      },
      {
        metric: "Feature Engineering Impact",
        before: 0.61,
        after: 0.78,
        unit: "Score",
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
      <div className="aspect-[16/9] overflow-hidden bg-black">
  <img 
    src={project.image} 
    alt={project.title} 
    className="w-full h-auto object-contain"
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

