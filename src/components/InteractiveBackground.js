// src/components/InteractiveBackground.js
'use client';
import { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse position - accounting for scroll position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };
    
    // Add touch support for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY + window.scrollY;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    
    // Get the total height of the document for particle distribution
    function getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    }
    
    // Create particles distributed throughout the entire document
    const particles = [];
    const particleCount = 400; // Increased for better distribution
    
    function createParticles() {
      particles.length = 0; // Clear existing particles
      
      // Adjust particle count based on screen size
      const adjustedParticleCount = window.innerWidth < 768 
        ? Math.floor(particleCount * 0.6) 
        : particleCount;
      
      for (let i = 0; i < adjustedParticleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * getDocumentHeight(), // Distribute across document height
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 50%)`
        });
      }
    }
    
    // Initial particle creation
    createParticles();
    
    // Animation loop
    function animate() {
      // Get current visible area
      const visibleTop = window.scrollY;
      const visibleBottom = window.scrollY + window.innerHeight;
      
      // Clear only the visible part of the canvas
      ctx.fillStyle = 'rgba(17, 17, 17, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Normal movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off horizontal walls
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        // Bounce off vertical boundaries (entire document)
        if (particle.y < 0 || particle.y > getDocumentHeight()) {
          particle.speedY *= -1;
        }
        
        // Check if particle is within the viewport
        const isInViewport = (particle.y >= visibleTop - 100 && 
                            particle.y <= visibleBottom + 100);
        
        // Mouse interaction (only for particles in viewport)
        if (isInViewport) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = (100 - distance) / 10;
            
            particle.x -= Math.cos(angle) * force;
            particle.y -= Math.sin(angle) * force;
          }
          
          // Draw particle (adjusted for scroll position)
          ctx.beginPath();
          ctx.arc(
            particle.x, 
            particle.y - visibleTop, 
            particle.size, 
            0, 
            Math.PI * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          
          // Draw connections with nearby particles (also in viewport)
          particles.forEach(otherParticle => {
            if (otherParticle !== particle && 
                otherParticle.y >= visibleTop - 100 && 
                otherParticle.y <= visibleBottom + 100) {
              
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y - visibleTop);
                ctx.lineTo(otherParticle.x, otherParticle.y - visibleTop);
                ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 - distance/1000})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    // Start the animation
    const animationFrame = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return <canvas id="canvas" ref={canvasRef}></canvas>;
}
