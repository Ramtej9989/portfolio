// src/components/EducationTimeline.js
'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function EducationTimeline() {
  useEffect(() => {
    const timelineEntries = document.querySelectorAll('.timeline-entry');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          setTimeout(() => {
            const dot = entry.target.querySelector('.timeline-dot');
            const card = entry.target.querySelector('.timeline-card');
            const date = entry.target.querySelector('.timeline-date');
            
            if (dot) dot.style.opacity = '1';
            if (card) {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }
            if (date) date.style.opacity = '1';
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // Set initial styles and observe entries
    timelineEntries.forEach((entry, index) => {
      const dot = entry.querySelector('.timeline-dot');
      const card = entry.querySelector('.timeline-card');
      const date = entry.querySelector('.timeline-date');
      
      if (dot) dot.style.opacity = '0';
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transitionDelay = `${index * 0.1}s`;
      }
      if (date) {
        date.style.opacity = '0';
        date.style.transitionDelay = `${index * 0.1 + 0.2}s`;
      }
      
      setTimeout(() => {
        observer.observe(entry);
      }, 100);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">My <span className="violet">Education</span></h2>
      
      <div className="education-timeline-container">
        <div className="timeline-header">ACADEMIC JOURNEY</div>
        
        <div className="timeline-track">
          {/* Timeline track with connections */}
          <div className="timeline-line"></div>
          
          {/* B.Tech Entry */}
          <div className="timeline-entry">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <div className="date-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <span>2022 - 2026</span>
            </div>
            
            <div className="timeline-card left-card">
              <div className="card-icon">
                <Image 
                  src="https://placehold.co/60x60/111/8A2BE2?text=BVC" 
                  alt="College Logo"
                  width={60}
                  height={60}
                />
              </div>
              <div className="card-content">
                <h3>Bachelor of Technology in AI & DS</h3>
                <h4>BVC Engineering College, Amalapuram, AP, India</h4>
                <p className="education-details">Percentage: <span className="highlight">89%</span></p>
                <p className="education-specialization">Specialized in Artificial Intelligence and Data Science</p>
              </div>
            </div>
          </div>
          
          {/* Intermediate Entry */}
          <div className="timeline-entry">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <div className="date-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <span>2020 - 2022</span>
            </div>
            
            <div className="timeline-card right-card">
              <div className="card-content">
                <h3>MPC Intermediate</h3>
                <h4>Sri Chaitanya Junior College, Razole, AP, India</h4>
                <p className="education-details">Percentage: <span className="highlight">80%</span></p>
                <p className="education-specialization">Studied Mathematics, Physics, and Chemistry</p>
              </div>
              <div className="card-icon">
                <div className="lightbulb-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
              </div>
            </div>
          </div>
          
          {/* SSC Entry */}
          <div className="timeline-entry">
            <div className="timeline-dot"></div>
            <div className="timeline-date">
              <div className="date-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <span>2020</span>
            </div>
            
            <div className="timeline-card left-card">
              <div className="card-icon">
                <div className="lightbulb-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
              </div>
              <div className="card-content">
                <h3>Secondary School Certificate</h3>
                <h4>ZPP High School, Magatapalli, AP, India</h4>
                <p className="education-details">Percentage: <span className="highlight">96%</span></p>
                <p className="education-specialization">Completed 10th standard with a strong academic record</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
