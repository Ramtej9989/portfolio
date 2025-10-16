// components/sections/Skills.jsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Skills data for both the orbit and table
const outerIcons = [
  { name: 'Artifical Intelligence', text: 'AI', color: '#61DAFB' },
  { name: 'ML', text: 'ML', color: '#38BDF8' },
  { name: 'DL', text: 'DL', color: '#8A2BE2' },
  { name: 'WebDevelopment', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'Data Visualization', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', color: '#11557C' },
  { name: 'Data Analysis', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' }
];

const innerIcons = [
  { name: 'Excel', src: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png', color: '#217346' },
  { name: 'Word', src: 'https://img.icons8.com/color/48/microsoft-word-2019--v1.png', color: '#2B579A' },
  { name: 'PowerPoint', src: 'https://img.icons8.com/color/48/microsoft-powerpoint-2019--v1.png', color: '#D24726' },
  { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
  { name: 'NumPy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243' },
  { name: 'Matplotlib', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', color: '#11557C' },
  { name: 'Power BI', src: 'https://img.icons8.com/color/48/power-bi.png', color: '#F2C811' }
];

// Skill levels for the table
const skillLevels = {
  'Artifical Intelligence': 85,
  'ML': 80,
  'DL': 75,
  'WebDevelopment': 90,
  'Data Visualization': 88,
  'Data Analysis': 92,
  'Python': 95,
  'SQL': 85,
  'MongoDB': 78,
  'Git': 88,
  'Excel': 95,
  'Word': 90,
  'PowerPoint': 92,
  'Pandas': 90,
  'NumPy': 85,
  'Matplotlib': 85,
  'Power BI': 80
};

export default function Skills() {
  const containerRef = useRef(null);
  const outerOrbitRef = useRef(null);
  const innerOrbitRef = useRef(null);
  const animationRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('core'); // 'core', 'tools', 'all'
  
  // Set isClient to true when component mounts (to avoid SSR issues)
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Setup the orbital skill animation
  useEffect(() => {
    if (!isClient || !outerOrbitRef.current || !innerOrbitRef.current) return;
    
    // Clean up previous animation if it exists
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    const outerOrbit = outerOrbitRef.current;
    const innerOrbit = innerOrbitRef.current;
    
    // Function to create orbit icons
    function createOrbitIcons() {
      // Clear existing icons
      while (outerOrbit.firstChild) {
        outerOrbit.removeChild(outerOrbit.firstChild);
      }
      while (innerOrbit.firstChild) {
        innerOrbit.removeChild(innerOrbit.firstChild);
      }
      
      const outerRadius = outerOrbit.offsetWidth / 2;
      const innerRadius = innerOrbit.offsetWidth / 2;
      
      // Calculate icon sizes based on viewport
      const isMobile = window.innerWidth < 768;
      const outerIconSize = isMobile ? 30 : 40;
      const innerIconSize = isMobile ? 25 : 35;
      
      // Create outer orbit icons
      outerIcons.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.className = `icon ${icon.name.toLowerCase().replace(/\s+/g, '-')}`;
        
        const angle = (index / outerIcons.length) * Math.PI * 2;
        const x = outerRadius + outerRadius * Math.cos(angle) - outerIconSize/2;
        const y = outerRadius + outerRadius * Math.sin(angle) - outerIconSize/2;
        
        // Set icon position and styles
        iconElement.style.left = `${x}px`;
        iconElement.style.top = `${y}px`;
        iconElement.style.width = `${outerIconSize}px`;
        iconElement.style.height = `${outerIconSize}px`;
        iconElement.style.backgroundColor = icon.background || 'rgba(0, 0, 0, 0.8)';
        iconElement.style.borderRadius = '8px';
        iconElement.style.border = '1px solid rgba(138, 43, 226, 0.3)';
        iconElement.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';
        iconElement.style.display = 'flex';
        iconElement.style.justifyContent = 'center';
        iconElement.style.alignItems = 'center';
        iconElement.style.zIndex = '10';
        iconElement.style.position = 'absolute';
        iconElement.style.cursor = 'pointer';
        
        // Add content to the icon (image or text)
        if (icon.src) {
          const img = document.createElement('img');
          img.src = icon.src;
          img.style.width = '70%';
          img.style.height = '70%';
          iconElement.appendChild(img);
        } else {
          iconElement.textContent = icon.text;
          iconElement.style.fontWeight = 'bold';
          iconElement.style.fontSize = isMobile ? '12px' : '14px';
          iconElement.style.color = icon.color;
        }
        
        // Create tooltip element - IMPROVED
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.textContent = icon.name;
        tooltip.style.position = 'absolute';
        tooltip.style.top = '-40px'; // Position higher to ensure visibility
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.background = 'rgba(138, 43, 226, 0.9)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '6px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.opacity = '0';
        tooltip.style.whiteSpace = 'nowrap'; // Prevent wrapping
        tooltip.style.fontSize = '12px';
        tooltip.style.fontWeight = 'bold';
        tooltip.style.pointerEvents = 'none'; // Prevent tooltip from blocking mouse events
        tooltip.style.zIndex = '100'; // Ensure it's above everything
        tooltip.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        tooltip.style.transition = 'opacity 0.2s ease-in-out';
        
        // Add directional arrow to tooltip
        const arrow = document.createElement('div');
        arrow.style.position = 'absolute';
        arrow.style.bottom = '-4px';
        arrow.style.left = '50%';
        arrow.style.marginLeft = '-4px';
        arrow.style.width = '8px';
        arrow.style.height = '8px';
        arrow.style.background = 'rgba(138, 43, 226, 0.9)';
        arrow.style.transform = 'rotate(45deg)';
        tooltip.appendChild(arrow);
        
        iconElement.appendChild(tooltip);
        
        // Improved hover effects
        iconElement.addEventListener('mouseenter', () => {
          iconElement.style.transform = 'scale(1.2)';
          iconElement.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.6)';
          iconElement.style.zIndex = '50';
          tooltip.style.opacity = '1';
        });
        
        iconElement.addEventListener('mouseleave', () => {
          iconElement.style.transform = '';
          iconElement.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';
          iconElement.style.zIndex = '10';
          tooltip.style.opacity = '0';
        });
        
        // Also add touch support for mobile
        iconElement.addEventListener('touchstart', (e) => {
          e.preventDefault(); // Prevent default touch behavior
          
          // Hide all other tooltips first
          document.querySelectorAll('.skill-tooltip').forEach(t => {
            t.style.opacity = '0';
          });
          
          // Show this tooltip
          iconElement.style.transform = 'scale(1.2)';
          iconElement.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.6)';
          iconElement.style.zIndex = '50';
          tooltip.style.opacity = '1';
          
          // Hide tooltip after 2 seconds
          setTimeout(() => {
            iconElement.style.transform = '';
            iconElement.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';
            iconElement.style.zIndex = '10';
            tooltip.style.opacity = '0';
          }, 2000);
        });
        
        outerOrbit.appendChild(iconElement);
        
        // Store the original position for animation
        iconElement.dataset.angle = angle;
        iconElement.dataset.radius = outerRadius;
        iconElement.dataset.iconSize = outerIconSize;
        iconElement.dataset.direction = "1"; // 1 for clockwise
      });
      
      // Create inner orbit icons with same improved tooltip behavior
      innerIcons.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.className = `icon ${icon.name.toLowerCase().replace(/\s+/g, '-')}`;
        
        const angle = (index / innerIcons.length) * Math.PI * 2;
        const x = innerRadius + innerRadius * Math.cos(angle) - innerIconSize/2;
        const y = innerRadius + innerRadius * Math.sin(angle) - innerIconSize/2;
        
        // Set icon position and styles
        iconElement.style.left = `${x}px`;
        iconElement.style.top = `${y}px`;
        iconElement.style.width = `${innerIconSize}px`;
        iconElement.style.height = `${innerIconSize}px`;
        iconElement.style.backgroundColor = icon.background || 'rgba(0, 0, 0, 0.8)';
        iconElement.style.borderRadius = '8px';
        iconElement.style.border = '1px solid rgba(138, 43, 226, 0.3)';
        iconElement.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';
        iconElement.style.display = 'flex';
        iconElement.style.justifyContent = 'center';
        iconElement.style.alignItems = 'center';
        iconElement.style.zIndex = '10';
        iconElement.style.position = 'absolute';
        iconElement.style.cursor = 'pointer';
        
        // Add content to the icon (image or text)
        if (icon.src) {
          const img = document.createElement('img');
          img.src = icon.src;
          img.style.width = '70%';
          img.style.height = '70%';
          iconElement.appendChild(img);
        } else {
          iconElement.textContent = icon.text;
          iconElement.style.fontWeight = 'bold';
          iconElement.style.fontSize = isMobile ? '10px' : '12px';
          iconElement.style.color = icon.color;
        }
        
        // Create tooltip element - IMPROVED
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.textContent = icon.name;
        tooltip.style.position = 'absolute';
        tooltip.style.top = '-40px'; // Position higher to ensure visibility
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.background = 'rgba(138, 43, 226, 0.9)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '6px 10px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.opacity = '0';
        tooltip.style.whiteSpace = 'nowrap'; // Prevent wrapping
        tooltip.style.fontSize = '12px';
        tooltip.style.fontWeight = 'bold';
        tooltip.style.pointerEvents = 'none'; // Prevent tooltip from blocking mouse events
        tooltip.style.zIndex = '100'; // Ensure it's above everything
        tooltip.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        tooltip.style.transition = 'opacity 0.2s ease-in-out';
        
        // Add directional arrow to tooltip
        const arrow = document.createElement('div');
        arrow.style.position = 'absolute';
        arrow.style.bottom = '-4px';
        arrow.style.left = '50%';
        arrow.style.marginLeft = '-4px';
        arrow.style.width = '8px';
        arrow.style.height = '8px';
        arrow.style.background = 'rgba(138, 43, 226, 0.9)';
        arrow.style.transform = 'rotate(45deg)';
        tooltip.appendChild(arrow);
        
        iconElement.appendChild(tooltip);
        
        // Improved hover effects
        iconElement.addEventListener('mouseenter', () => {
          iconElement.style.transform = 'scale(1.2)';
          iconElement.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.6)';
          iconElement.style.zIndex = '50';
          tooltip.style.opacity = '1';
        });
        
        iconElement.addEventListener('mouseleave', () => {
          iconElement.style.transform = '';
          iconElement.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';
          iconElement.style.zIndex = '10';
          tooltip.style.opacity = '0';
        });
        
        // Also add touch support for mobile
        iconElement.addEventListener('touchstart', (e) => {
          e.preventDefault(); // Prevent default touch behavior
          
          // Hide all other tooltips first
          document.querySelectorAll('.skill-tooltip').forEach(t => {
            t.style.opacity = '0';
          });
          
          // Show this tooltip
          iconElement.style.transform = 'scale(1.2)';
          iconElement.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.6)';
          iconElement.style.zIndex = '50';
          tooltip.style.opacity = '1';
          
          // Hide tooltip after 2 seconds
          setTimeout(() => {
            iconElement.style.transform = '';
            iconElement.style.boxShadow = '0 0 10px rgba(138, 43, 226, 0.3)';
            iconElement.style.zIndex = '10';
            tooltip.style.opacity = '0';
          }, 2000);
        });
        
        innerOrbit.appendChild(iconElement);
        
        // Store the original position for animation
        iconElement.dataset.angle = angle;
        iconElement.dataset.radius = innerRadius;
        iconElement.dataset.iconSize = innerIconSize;
        iconElement.dataset.direction = "-1"; // -1 for counter-clockwise
      });
    }
    
    // Animation function for revolving icons
    function animateIcons() {
      // Animate outer icons
      const outerIcons = outerOrbit.querySelectorAll('.icon');
      
      outerIcons.forEach(icon => {
        let angle = parseFloat(icon.dataset.angle);
        const radius = parseFloat(icon.dataset.radius);
        const direction = parseFloat(icon.dataset.direction);
        const iconSize = parseFloat(icon.dataset.iconSize);
        
        // Increased speed
        const speed = 0.015; 
        
        // Update the angle
        angle += speed * direction;
        if (angle >= Math.PI * 2) angle -= Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        
        icon.dataset.angle = angle;
        
        // Calculate new position - EXACTLY on the orbit line
        const x = radius + radius * Math.cos(angle) - iconSize/2;
        const y = radius + radius * Math.sin(angle) - iconSize/2;
        
        // Apply new position
        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
      });
      
      // Animate inner icons
      const innerIcons = innerOrbit.querySelectorAll('.icon');
      
      innerIcons.forEach(icon => {
        let angle = parseFloat(icon.dataset.angle);
        const radius = parseFloat(icon.dataset.radius);
        const direction = parseFloat(icon.dataset.direction);
        const iconSize = parseFloat(icon.dataset.iconSize);
        
        // Increased speed
        const speed = 0.015;
        
        // Update the angle
        angle += speed * direction;
        if (angle >= Math.PI * 2) angle -= Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        
        icon.dataset.angle = angle;
        
        // Calculate new position - EXACTLY on the orbit line
        const x = radius + radius * Math.cos(angle) - iconSize/2;
        const y = radius + radius * Math.sin(angle) - iconSize/2;
        
        // Apply new position
        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
      });
      
      animationRef.current = requestAnimationFrame(animateIcons);
    }
    
    // Initialize orbit icons
    createOrbitIcons();
    
    // Start animation
    animateIcons();
    
    // Handle window resize
    const handleResize = () => {
      createOrbitIcons();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  // Filter skills based on active tab
  const getFilteredSkills = () => {
    switch(activeTab) {
      case 'core':
        return outerIcons;
      case 'tools':
        return innerIcons;
      case 'all':
      default:
        return [...outerIcons, ...innerIcons];
    }
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Enhanced Skills Table */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center"
          >
            <div className="w-full rounded-lg">
              {/* Skill category tabs */}
              <div className="flex mb-6 gap-2">
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'all' 
                      ? 'bg-secondary text-white' 
                      : 'bg-black/40 text-white hover:bg-secondary/20'
                  }`}
                  onClick={() => setActiveTab('all')}
                >
                  All Skills
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'core' 
                      ? 'bg-secondary text-white' 
                      : 'bg-black/40 text-white hover:bg-secondary/20'
                  }`}
                  onClick={() => setActiveTab('core')}
                >
                  Core Skills
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'tools' 
                      ? 'bg-secondary text-white' 
                      : 'bg-black/40 text-white hover:bg-secondary/20'
                  }`}
                  onClick={() => setActiveTab('tools')}
                >
                  Tools & Libraries
                </button>
              </div>
              
              {/* Skills bars */}
              <div className="space-y-5">
                {filteredSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        {skill.src ? (
                          <div className="w-6 h-6 flex-shrink-0">
                            <img src={skill.src} alt={skill.name} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div 
                            className="w-6 h-6 flex-shrink-0 rounded-md flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                          >
                            <span style={{ color: skill.color, fontWeight: 'bold', fontSize: '10px' }}>{skill.text}</span>
                          </div>
                        )}
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-secondary font-bold">{skillLevels[skill.name]}%</span>
                    </div>
                    
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color} 0%, rgba(138, 43, 226, 0.8) 100%)`,
                          width: `${skillLevels[skill.name]}%` 
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skillLevels[skill.name]}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Skills Orbit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div 
              ref={containerRef}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Central Text */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-4xl font-bold text-secondary">Skills</h3>
              </div>
              
              {/* Outer Circle with Icons */}
              <div 
                ref={outerOrbitRef} 
                className="absolute inset-0 border border-secondary/20 rounded-full"
              ></div>
              
              {/* Inner Circle with Icons */}
              <div 
                ref={innerOrbitRef} 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 border border-secondary/20 rounded-full"
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
