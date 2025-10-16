// components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Handle scroll locking for mobile menu
  useEffect(() => {
    if (isOpen) {
      // Lock scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle smooth scrolling with improved mobile support
  const handleNavClick = (href) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu
      setIsOpen(false);
      
      // Small delay to allow mobile menu to close first
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetTop = rect.top + scrollTop;
        
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black shadow-lg shadow-secondary/20' : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <motion.div 
              className="flex-shrink-0 relative group"
              whileHover={{ scale: 1.05 }}
            >
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
                  
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-0.5 bg-secondary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Link>
            </motion.div>
            
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
                      <span className={`absolute inset-0 rounded-md transition-all duration-300 ${
                        activeSection === link.href.substring(1)
                          ? 'bg-secondary/30'
                          : 'bg-transparent group-hover:bg-secondary/20'
                      }`} />
                      
                      <span className="relative z-10">{link.icon}</span>
                      <span className="relative z-10">{link.name}</span>
                      
                      {activeSection === link.href.substring(1) && (
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-secondary"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </a>
                  </Link>
                ))}
              </div>
              
              {/* Chat button in navbar */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
              </motion.button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden space-x-4">
              {/* Chat button in mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
              </motion.button>
              
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
      
      {/* Mobile menu - Positioned fixed and completely separated from main nav */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black lg:hidden" style={{ top: '0', left: '0', right: '0', bottom: '0' }}>
          <div className="flex flex-col h-full">
            {/* Mobile header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="text-xl font-bold">
                <span className="text-secondary">Ram</span>
                <span className="text-white">Tej</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-secondary/30"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            {/* Mobile nav links */}
            <div className="flex-1 overflow-y-auto pt-8 px-4">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    className={`w-full py-4 px-6 flex items-center gap-4 rounded-md text-left text-lg transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'bg-secondary/20 text-white'
                        : 'text-white hover:text-secondary hover:bg-black'
                    }`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    <span className="text-secondary text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
