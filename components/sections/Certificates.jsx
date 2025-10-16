// components/sections/Certificates.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample certificate data - replace with your actual data
const certificatesData = [
  {
  id: 1,
  title: "Certified System Administrator",
  image: "/images/certificates/Certified System Administrator.png",
  issuer: "ServiceNow",
  date: "August 01, 2025",
  description: "Successfully earned the Certified System Administrator credential demonstrating foundational skills and knowledge of the ServiceNow platform.",
  skills: ["ServiceNow Platform", "System Administration", "User & Role Management", "Configuration & Customization", "Workflow Automation"]
},
  {
  id: 2,
  title: "Certified Application Developer",
  image: "/images/certificates/Certified Application Developer.png",
  issuer: "ServiceNow",
  date: "August 22, 2025",
  description: "Successfully earned the Certified Application Developer credential demonstrating the ability to design, build, and implement applications on the ServiceNow platform.",
  skills: ["ServiceNow Platform", "Application Development", "Scripting", "UI Policies & Actions", "Flow Designer", "Data Modeling"]
},
  {
  id: 3,
  title: "Web Development with HTML, CSS, JavaScript Essentials",
  image: "/images/certificates/Web.png",
  issuer: "IBM (Coursera)",
  date: "February 18, 2024",
  description: "Successfully completed the Web Development with HTML, CSS, and JavaScript Essentials course, gaining foundational knowledge in front-end web development.",
  skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "Front-End Development"]
},
  {
  id: 4,
  title: "Python for Data Science and AI",
  image: "/images/certificates/DataScienceAndAI.png",
  issuer: "IBM (Coursera)",
  date: "February 16, 2024",
  description: "Successfully completed the Python for Data Science and AI course, gaining foundational knowledge in Python programming, data analysis, and AI concepts.",
  skills: ["Python", "Data Science", "AI Fundamentals", "Data Analysis", "Jupyter Notebooks"]
},
{
  id: 5,
  title: "SQL and Relational Databases 101",
  image: "/images/certificates/sql.png",
  issuer: "Cognitive Class (IBM Developer Skills Network)",
  date: "January 12, 2025",
  description: "Successfully completed the SQL and Relational Databases 101 course, gaining foundational knowledge in SQL queries, relational database design, and data manipulation.",
  skills: ["SQL", "Relational Databases", "Database Design", "Data Manipulation", "Query Optimization"]
},
{
  id: 6,
  title: "Work Smarter with Microsoft Excel",
  image: "/images/certificates/Excel.png",
  issuer: "Microsoft (Coursera)",
  date: "January 7, 2025",
  description: "Successfully completed the 'Work Smarter with Microsoft Excel' online course, gaining practical knowledge in Excel tools, formulas, and productivity features.",
  skills: ["Microsoft Excel", "Data Analysis", "Spreadsheets", "Formulas & Functions", "Data Visualization"]
},
{
  id: 7,
  title: "Introduction to Cloud Computing",
  image: "/images/certificates/CloudComputing.png",
  issuer: "IBM (Coursera)",
  date: "February 18, 2024",
  description: "Successfully completed the Introduction to Cloud Computing course, gaining a strong foundation in cloud concepts, deployment models, and service models.",
  skills: ["Cloud Computing", "IaaS", "PaaS", "SaaS", "Cloud Deployment Models", "Virtualization"]
},
{
  id: 8,
  title: "Google Prompting Essentials",
  image: "/images/certificates/Google.png",
  issuer: "Google (Coursera)",
  date: "January 25, 2025",
  description: "Successfully completed the 'Google Prompting Essentials' online course, gaining practical knowledge of prompt engineering techniques and effective AI interaction strategies.",
  skills: ["Prompt Engineering", "Generative AI", "AI Tools", "Natural Language Processing", "Productivity Enhancement"]
}
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Toggle card flip
  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle document body overflow for modal
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (selectedCertificate) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedCertificate]);

  // Check scroll position to show/hide arrows
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
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

  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>
        
        {/* Desktop View - Grid Layout */}
        <div className="mt-12 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective-1000"
            >
              {/* Flip card container */}
              <div 
                className={`flip-card h-64 w-full cursor-pointer ${flippedCards[certificate.id] ? 'rotate-y-180' : ''}`}
                onClick={() => toggleFlip(certificate.id)}
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}
              >
                {/* Front side */}
                <div 
                  className="absolute inset-0 rounded-lg border border-secondary/30 overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
                    <p className="text-secondary font-medium">{certificate.issuer} • {certificate.date}</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-secondary/80 text-white text-xs px-2 py-1 rounded-full">
                    Click to flip
                  </div>
                </div>
                
                {/* Back side */}
                <div 
                  className="absolute inset-0 bg-black/80 rounded-lg border border-secondary/30 p-6 flex flex-col"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{certificate.title}</h3>
                  <p className="text-secondary font-medium mb-2">{certificate.issuer} • {certificate.date}</p>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">{certificate.description}</p>
                  
                  <div className="mt-auto">
                    <button 
                      className="w-full bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/50 py-2 rounded-md transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCertificate(certificate);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View - Horizontal Scroll with Navigation Arrows */}
        <div className="mt-12 md:hidden relative">
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
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificatesData.map((certificate, index) => (
              <div 
                key={certificate.id} 
                className="snap-start snap-always flex-shrink-0 w-[85%] mr-4"
              >
                <div 
                  className={`flip-card h-64 w-full cursor-pointer ${flippedCards[certificate.id] ? 'rotate-y-180' : ''}`}
                  onClick={() => toggleFlip(certificate.id)}
                  style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}
                >
                  {/* Front side */}
                  <div 
                    className="absolute inset-0 rounded-lg border border-secondary/30 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img 
                      src={certificate.image} 
                      alt={certificate.title} 
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
                      <p className="text-secondary font-medium">{certificate.issuer} • {certificate.date}</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-secondary/80 text-white text-xs px-2 py-1 rounded-full">
                      Click to flip
                    </div>
                  </div>
                  
                  {/* Back side */}
                  <div 
                    className="absolute inset-0 bg-black/80 rounded-lg border border-secondary/30 p-6 flex flex-col"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{certificate.title}</h3>
                    <p className="text-secondary font-medium mb-2">{certificate.issuer} • {certificate.date}</p>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{certificate.description}</p>
                    
                    <div className="mt-auto">
                      <button 
                        className="w-full bg-secondary/20 hover:bg-secondary/30 text-secondary border border-secondary/50 py-2 rounded-md transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCertificate(certificate);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certificate Detail Modal */}
        {selectedCertificate && (
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
              onClick={() => setSelectedCertificate(null)}
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
                  {selectedCertificate.title}
                </h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
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
              
              {/* Content */}
              <div style={{ padding: '24px' }}>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '24px'
                }}>
                  {/* Certificate Image */}
                  <div style={{ 
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={selectedCertificate.image} 
                      alt={selectedCertificate.title}
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                      }} 
                    />
                  </div>
                  
                  {/* Certificate Details */}
                  <div>
                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#8A2BE2', marginBottom: '8px' }}>Certificate</h4>
                      <p style={{ color: 'white', fontSize: '20px' }}>{selectedCertificate.title}</p>
                    </div>
                    
                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#8A2BE2', marginBottom: '8px' }}>Issuer</h4>
                      <p style={{ color: 'white' }}>{selectedCertificate.issuer}</p>
                    </div>
                    
                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#8A2BE2', marginBottom: '8px' }}>Date</h4>
                      <p style={{ color: 'white' }}>{selectedCertificate.date}</p>
                    </div>
                    
                    <div style={{ marginBottom: '16px' }}>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#8A2BE2', marginBottom: '8px' }}>Description</h4>
                      <p style={{ color: '#CCCCCC' }}>{selectedCertificate.description}</p>
                    </div>
                    
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#8A2BE2', marginBottom: '8px' }}>Skills</h4>
                      <div style={{ 
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                      }}>
                        {selectedCertificate.skills.map((skill, i) => (
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
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
