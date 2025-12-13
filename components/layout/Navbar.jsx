// components/layout/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  FaBars, 
  FaTimes, 
  FaRobot, 
  FaHome, 
  FaGraduationCap,
  FaCode,
  FaCertificate,
  FaProjectDiagram,
  FaEnvelope,
  FaRoute 
} from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
  { name: 'Skills', href: '#skills', icon: <FaCode /> },
  { name: 'Journey', href: '#journey', icon: <FaRoute /> },
  { name: 'Certificates', href: '#certificates', icon: <FaCertificate /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
];

export default function Navbar({ toggleChat, isChatOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  
  // Handle scroll events with throttling for performance
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateScrolled = () => {
      setScrolled(window.scrollY > 10);
      
      // Find active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      
      ticking = false;
    };
    
    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrolled();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Add event listener with passive option for better performance
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  // Prevent body scrolling when menu is open
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
      body.style.height = '100vh';
      body.style.touchAction = 'none';
    } else {
      body.style.overflow = '';
      body.style.height = '';
      body.style.touchAction = '';
    }
    
    return () => {
      body.style.overflow = '';
      body.style.height = '';
      body.style.touchAction = '';
    };
  }, [isOpen]);
  
  // Handle smooth scrolling with improved behavior
  const handleNavClick = (href) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      
      // Wait for menu closing animation
      setTimeout(() => {
        const headerOffset = navbarRef.current ? navbarRef.current.offsetHeight : 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 10);
    }
  };

  return (
    <>
      <header 
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 will-change-transform"
        style={{
          position: '-webkit-sticky', // For iOS Safari
          transition: 'background-color 0.3s ease',
          WebkitBackfaceVisibility: 'hidden', // Prevent flickering on scroll
          backfaceVisibility: 'hidden'
        }}
      >
        <nav 
          className={`transition-all duration-300 ${
            scrolled ? 'bg-black shadow-lg' : 'bg-black/70 backdrop-blur-sm'
          }`}
          style={{ 
            transform: 'translate3d(0,0,0)', // Hardware acceleration
            WebkitTransform: 'translate3d(0,0,0)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Name */}
              <div className="flex-shrink-0">
                <Link href="#home" legacyBehavior>
                  <a 
                    className="text-xl font-bold cursor-pointer flex items-center" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#home');
                    }}
                  >
                    <span className="text-secondary transition-colors duration-300">Ram</span>
                    <span className="text-white transition-colors duration-300">Tej</span>
                  </a>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="flex items-baseline space-x-4">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} legacyBehavior>
                      <a
                        className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${
                          activeSection === link.href.substring(1)
                            ? 'text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                      >
                        <span className={`absolute inset-0 rounded-md transition-all duration-300 ${
                          activeSection === link.href.substring(1)
                            ? 'bg-secondary/30'
                            : 'bg-transparent hover:bg-secondary/20'
                        }`} />
                        
                        <span className="relative z-10">{link.icon}</span>
                        <span className="relative z-10">{link.name}</span>
                        
                        {activeSection === link.href.substring(1) && (
                          <span className="absolute bottom-0 left-0 h-0.5 bg-secondary w-full" />
                        )}
                      </a>
                    </Link>
                  ))}
                </div>
                
                <button
                  onClick={toggleChat}
                  className={`relative p-2 rounded-full focus:outline-none transition-colors duration-300 ${
                    isChatOpen ? 'bg-secondary text-white' : 'bg-black/40 text-secondary hover:bg-secondary/20'
                  }`}
                  aria-label="Toggle chat"
                >
                  <FaRobot size={20} />
                  {isChatOpen ? (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
                  ) : null}
                </button>
              </div>
              
              {/* Mobile menu icons - Fixed and perfectly aligned */}
              <div className="flex items-center lg:hidden">
                {/* Chat button */}
                <div className="relative mr-2">
                  <button
                    onClick={toggleChat}
                    className="p-2 rounded-full text-secondary focus:outline-none"
                    aria-label="Toggle chat"
                  >
                    <FaRobot size={22} />
                  </button>
                  {isChatOpen && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                  )}
                </div>
                
                {/* Menu toggle button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-full text-white focus:outline-none"
                  aria-expanded={isOpen}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Content spacer to prevent content from being hidden under the navbar */}
      <div style={{ height: '64px' }} aria-hidden="true"></div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black"
          style={{ top: '64px', overscrollBehavior: 'contain' }}
        >
          <div className="p-4 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium mb-3 ${
                  activeSection === link.href.substring(1)
                    ? 'bg-secondary/30 text-white'
                    : 'text-white hover:bg-secondary/20'
                }`}
                onClick={() => handleNavClick(link.href)}
              >
                <span className="text-secondary">{link.icon}</span>
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
