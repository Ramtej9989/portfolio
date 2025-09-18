// src/components/AboutSection.js
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const flipCardBackRef = useRef(null);
  
  useEffect(() => {
    const flipCardBack = flipCardBackRef.current;
    
    if (flipCardBack) {
      const handleMouseMove = (e) => {
        const rect = flipCardBack.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        flipCardBack.style.setProperty('--x', `${x}%`);
        flipCardBack.style.setProperty('--y', `${y}%`);
      };
      
      flipCardBack.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        flipCardBack.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  return (
    <div className="about-section" id="about">
      {/* Left Side: Profile Picture */}
      <div className="profile-side">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Image 
                src="https://placehold.co/300x300" 
                alt="Profile Picture" 
                width={300} 
                height={300}
              />
            </div>
            <div className="flip-card-back" ref={flipCardBackRef}>
              <div className="greeting">Hello there!</div>
              <div className="greeting-message">I'm thrilled to connect with you. Feel free to explore my profile to learn more about me and my journey.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: About Me Information */}
      <div className="info-side">
        <div className="about-me">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>Hi there! I'm John Doe, a passionate Software Developer based in New York. I enjoy creating robust and scalable applications and have a keen interest in web technologies and artificial intelligence.</p>
            <p>With 5 years of experience in full-stack development, I've developed strong skills in JavaScript, Python, and cloud technologies. I'm always eager to learn new technologies and methodologies to enhance my capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
