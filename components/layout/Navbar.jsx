// components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle smooth scrolling with improved mobile support
  const handleNavClick = (href) => {
    // Prevent default behavior
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu
      setIsOpen(false);
      
      // Small delay to allow mobile menu to close first
      setTimeout(() => {
        // Get the target's position
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetTop = rect.top + scrollTop;
        
        // Scroll to the target
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <div>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-secondary/20' : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0 relative group">
              <Link href="#home" legacyBehavior>
                <a 
                  className="text-xl font-bold cursor-pointer flex items-center" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                >
                  <span className="text-secondary transition-all duration-300 group-hover:text-white">Ram</span>
                  <span className="text-white transition-all duration-300 group-hover:text-secondary">Tej</span>
                  
                  {/* Animated underline */}
                  <div 
                    className="absolute -bottom-1 left-0 h-0.5 bg-secondary"
                    style={{ width: 0 }}
                  />
                </a>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} legacyBehavior>
                    <a
                      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden group ${
                        activeSection === link.href.substring(1)
                          ? 'text-white' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {/* Background effect */}
                      <span className={`absolute inset-0 rounded-md transition-all duration-300 ${
                        activeSection === link.href.substring(1)
                          ? 'bg-secondary/30'
                          : 'bg-transparent group-hover:bg-secondary/20'
                      }`} />
                      
                      {/* Content */}
                      <span className="relative z-10">{link.icon}</span>
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Animated indicator */}
                      {activeSection === link.href.substring(1) && (
                        <span
                          className="absolute bottom-0 left-0 h-0.5 bg-secondary w-full"
                        />
                      )}
                    </a>
                  </Link>
                ))}
              </div>
              
              {/* Chat button in navbar */}
              <button
                onClick={toggleChat}
                className={`relative p-2 rounded-full focus:outline-none transition-all duration-300 ${
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
            
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden space-x-4">
              {/* Chat button in mobile */}
              <button
                onClick={toggleChat}
                className={`relative p-2 rounded-full focus:outline-none transition-all duration-300 ${
                  isChatOpen ? 'bg-secondary text-white' : 'bg-black/40 text-secondary hover:bg-secondary/20'
                }`}
                aria-label="Toggle chat"
              >
                <FaRobot size={20} />
                {isChatOpen ? (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
                ) : null}
              </button>
              
              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-secondary/30 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Navigation Menu - Completely Solid Black Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000000', // Pure black, completely opaque
            zIndex: 999,
            overflow: 'auto'
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-base font-medium text-left mb-2 ${
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
    </div>
  );
}
