// src/components/SkillsOrbit.js
'use client';
import { useEffect, useRef } from 'react';

export default function SkillsOrbit() {
  const outerOrbitRef = useRef(null);
  const innerOrbitRef = useRef(null);

  useEffect(() => {
    // Define our tech icons for outer orbit
    const outerIcons = [
      { name: 'react', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { name: 'node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#8CC84B' },
      { name: 'js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
      { name: 'ts', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
      { name: 'vue', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
      { name: 'angular', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
      { name: 'mongodb', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#4DB33D' },
      { name: 'ex', text: 'ex', color: '#000000' },
      { name: 'next', text: 'N', color: '#000000' },
      { name: 'wave', text: '~', color: '#38BDF8' }
    ];

    // Define icons for inner orbit
    const innerIcons = [
      { name: 'py', text: 'Py', color: '#3776AB' },
      { name: 'css', text: 'CSS', color: '#1572B6' },
      { name: 'html', text: 'HTML', color: '#E34F26' },
      { name: 'docker', text: '🐳', color: '#2496ED' },
      { name: 'git', text: 'Git', color: '#F05032' },
      { name: 'react-small', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { name: 'graph', text: 'GQL', color: '#E535AB' }
    ];
    
    // Function to update orbit sizes and positions responsively
    function updateOrbitSizesAndPositions() {
      if (outerOrbitRef.current && innerOrbitRef.current) {
        const outerOrbit = outerOrbitRef.current;
        const innerOrbit = innerOrbitRef.current;
        const outerRadius = outerOrbit.offsetWidth / 2;
        const innerRadius = innerOrbit.offsetWidth / 2;
        
        // Create and position outer icons if they don't exist yet
        if (outerOrbit.children.length === 0) {
          // Create outer orbit icons
          outerIcons.forEach((icon, index) => {
            createOrbitIcon(icon, index, outerOrbit, outerIcons.length, outerRadius, "1");
          });
          
          // Create inner orbit icons
          innerIcons.forEach((icon, index) => {
            createOrbitIcon(icon, index, innerOrbit, innerIcons.length, innerRadius, "-1");
          });
        } else {
          // Update positions of existing icons
          updateIconPositions(outerOrbit, outerRadius);
          updateIconPositions(innerOrbit, innerRadius);
        }
      }
    }
    
    function createOrbitIcon(icon, index, orbit, totalIcons, radius, direction) {
      const iconElement = document.createElement('div');
      iconElement.className = `icon ${icon.name}`;
      
      // Calculate position on the circle
      const angle = (index / totalIcons) * Math.PI * 2; // Distribute evenly
      
      // Determine icon size based on orbit size
      const iconSize = Math.max(20, Math.min(40, radius / 5));
      iconElement.style.width = `${iconSize}px`;
      iconElement.style.height = `${iconSize}px`;
      
      // Calculate and set position
      const x = radius + (radius - iconSize/2) * Math.cos(angle) - iconSize/2;
      const y = radius + (radius - iconSize/2) * Math.sin(angle) - iconSize/2;
      
      iconElement.style.left = `${x}px`;
      iconElement.style.top = `${y}px`;
      
      // Add content to the icon (image or text)
      if(icon.src) {
        const img = document.createElement('img');
        img.src = icon.src;
        iconElement.appendChild(img);
      } else {
        iconElement.textContent = icon.text;
        iconElement.style.fontWeight = 'bold';
        iconElement.style.fontSize = `${iconSize * 0.4}px`; // Proportional font size
        iconElement.style.color = icon.color;
      }
      
      orbit.appendChild(iconElement);
      
      // Store the original position for animation
      iconElement.dataset.angle = angle;
      iconElement.dataset.radius = radius;
      iconElement.dataset.direction = direction; // 1 for clockwise, -1 for counter-clockwise
    }
    
    function updateIconPositions(orbit, radius) {
      const icons = orbit.querySelectorAll('.icon');
      icons.forEach((icon) => {
        let angle = parseFloat(icon.dataset.angle);
        
        // Adjust icon size based on orbit size
        const isOuterOrbit = orbit === outerOrbitRef.current;
        const iconSize = Math.max(isOuterOrbit ? 20 : 15, Math.min(isOuterOrbit ? 40 : 30, radius / 5));
        icon.style.width = `${iconSize}px`;
        icon.style.height = `${iconSize}px`;
        
        // Update any text font size
        if (!icon.querySelector('img')) {
          icon.style.fontSize = `${iconSize * 0.4}px`;
        }
        
        // Recalculate position
        const x = radius + (radius - iconSize/2) * Math.cos(angle) - iconSize/2;
        const y = radius + (radius - iconSize/2) * Math.sin(angle) - iconSize/2;
        
        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
        
        // Update stored radius for animation
        icon.dataset.radius = radius;
      });
    }
    
    // Animation function for revolving icons
    function animateIcons() {
      const outerOrbit = outerOrbitRef.current;
      const innerOrbit = innerOrbitRef.current;
      
      if (!outerOrbit || !innerOrbit) return;
      
      // Animate outer icons
      const outerIcons = outerOrbit.querySelectorAll('.icon');
      
      outerIcons.forEach(icon => {
        let angle = parseFloat(icon.dataset.angle);
        const radius = parseFloat(icon.dataset.radius);
        const direction = parseFloat(icon.dataset.direction);
        const speed = 0.003; // Increased speed for outer orbit
        
        // Update the angle
        angle += speed * direction;
        if (angle >= Math.PI * 2) {
          angle -= Math.PI * 2;
        }
        if (angle < 0) {
          angle += Math.PI * 2;
        }
        icon.dataset.angle = angle;
        
        // Get current icon size
        const iconSize = parseFloat(icon.style.width) || 40;
        
        // Calculate new position
        const x = radius + (radius - iconSize/2) * Math.cos(angle) - iconSize/2;
        const y = radius + (radius - iconSize/2) * Math.sin(angle) - iconSize/2;
        
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
        const speed = 0.005; // Faster speed for inner orbit
        
        // Update the angle
        angle += speed * direction;
        if (angle >= Math.PI * 2) {
          angle -= Math.PI * 2;
        }
        if (angle < 0) {
          angle += Math.PI * 2;
        }
        icon.dataset.angle = angle;
        
        // Get current icon size
        const iconSize = parseFloat(icon.style.width) || 30;
        
        // Calculate new position
        const x = radius + (radius - iconSize/2) * Math.cos(angle) - iconSize/2;
        const y = radius + (radius - iconSize/2) * Math.sin(angle) - iconSize/2;
        
        // Apply new position
        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
      });
      
      requestAnimationFrame(animateIcons);
    }

    // Initial setup
    updateOrbitSizesAndPositions();
    
    // Start animation
    const animationFrame = requestAnimationFrame(animateIcons);
    
    // Handle window resize
    const handleResize = () => {
      updateOrbitSizesAndPositions();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="container">
      {/* Central Text */}
      <div className="skills-text">
        <h1 className="skills-text">Skills</h1>
      </div>
      
      {/* Orbit Containers */}
      <div className="orbit-container">
        <div className="outer-orbit" ref={outerOrbitRef}></div>
        <div className="inner-orbit" ref={innerOrbitRef}></div>
      </div>
    </div>
  );
}
