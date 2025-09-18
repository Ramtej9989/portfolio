// src/components/CertificateCarousel.js
'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function CertificateCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalGroups, setTotalGroups] = useState(1); // Default to 1 to avoid invalid array length
  const [cardsPerView, setCardsPerView] = useState(1); // Default to 1
  const [userInteracted, setUserInteracted] = useState(false);
  
  // Certificate data
  const certificates = [
    {
      id: 1,
      title: "IBM Data Analyst",
      issuer: "IBM",
      year: "2025",
      image: "https://placehold.co/400x225/111/8A2BE2?text=IBM+Data+Analyst",
      url: "path/to/certificate1.pdf"
    },
    {
      id: 2,
      title: "Data-Driven Decisions with PowerBI",
      issuer: "IBM",
      year: "2025",
      image: "https://placehold.co/400x225/111/8A2BE2?text=Data-Driven+Decisions",
      url: "path/to/certificate2.pdf"
    },
    {
      id: 3,
      title: "Introduction to Web Development",
      issuer: "IBM",
      year: "2024",
      image: "https://placehold.co/400x225/111/8A2BE2?text=Web+Development",
      url: "path/to/certificate3.pdf"
    },
    {
      id: 4,
      title: "Excel Basics 1",
      issuer: "IBM",
      year: "2024",
      image: "https://placehold.co/400x225/111/8A2BE2?text=Excel+Basics",
      url: "path/to/certificate4.pdf"
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals",
      issuer: "Google",
      year: "2025",
      image: "https://placehold.co/400x225/111/8A2BE2?text=Machine+Learning",
      url: "path/to/certificate5.pdf"
    },
    {
      id: 6,
      title: "Advanced React Development",
      issuer: "Meta",
      year: "2024",
      image: "https://placehold.co/400x225/111/8A2BE2?text=React+JS",
      url: "path/to/certificate6.pdf"
    },
    {
      id: 7,
      title: "Cloud Computing Essentials",
      issuer: "AWS",
      year: "2023",
      image: "https://placehold.co/400x225/111/8A2BE2?text=Cloud+Computing",
      url: "path/to/certificate7.pdf"
    },
    {
      id: 8,
      title: "UI/UX Design Principles",
      issuer: "Coursera",
      year: "2024",
      image: "https://placehold.co/400x225/111/8A2BE2?text=UI+UX+Design",
      url: "path/to/certificate8.pdf"
    },
    {
      id: 9,
      title: "Cybersecurity Fundamentals",
      issuer: "CompTIA",
      year: "2023",
      image: "https://placehold.co/400x225/111/8A2BE2?text=Cybersecurity",
      url: "path/to/certificate9.pdf"
    },
    {
      id: 10,
      title: "Node.js Backend Development",
      issuer: "Udemy",
      year: "2024",
      image: "https://placehold.co/400x225/111/8A2BE2?text=Node+JS",
      url: "path/to/certificate10.pdf"
    }
  ];
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const calculateDimensions = () => {
      const cards = carousel.querySelectorAll('.certificate-card');
      if (cards.length === 0) return;
      
      const cardWidth = cards[0].offsetWidth + 24; // Card width + gap
      const newCardsPerView = Math.max(1, Math.floor(carousel.offsetWidth / cardWidth));
      const newTotalGroups = Math.max(1, Math.ceil(cards.length / newCardsPerView));
      
      setCardsPerView(newCardsPerView);
      setTotalGroups(newTotalGroups);
    };
    
    // Calculate dimensions initially
    calculateDimensions();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateDimensions);
    
    // Start auto-scroll
    const startAutoScroll = () => {
      const autoScrollInterval = setInterval(() => {
        if (!userInteracted) {
          handleNext();
        }
      }, 5000);
      
      return autoScrollInterval;
    };
    
    const autoScrollInterval = startAutoScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', calculateDimensions);
      clearInterval(autoScrollInterval);
    };
  }, [userInteracted]);
  
  // Handle next button click
  const handleNext = () => {
    if (currentIndex < totalGroups - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  // Handle previous button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalGroups - 1);
    }
  };
  
  // Scroll to specific group
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const cards = carousel.querySelectorAll('.certificate-card');
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth + 24; // Card width + gap
    
    carousel.scrollTo({
      left: currentIndex * (cardsPerView * cardWidth),
      behavior: 'smooth'
    });
  }, [currentIndex, cardsPerView]);
  
  // Reset auto-scroll on user interaction
  const resetAutoScroll = () => {
    setUserInteracted(true);
    
    // Reset after 10 seconds of no interaction
    setTimeout(() => {
      setUserInteracted(false);
    }, 10000);
  };
  
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">My <span className="violet">Certificates</span></h2>
      
      <div className="certificate-carousel-container">
        <div 
          className="certificate-carousel" 
          ref={carouselRef}
          onMouseEnter={resetAutoScroll}
          onTouchStart={resetAutoScroll}
        >
          {certificates.map(cert => (
            <div className="certificate-card" key={cert.id} tabIndex={0}>
              <div className="certificate-image">
                <Image 
                  src={cert.image} 
                  alt={`${cert.title} Certificate`}
                  width={400}
                  height={225}
                />
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer} • {cert.year}</p>
                <a href={cert.url} className="view-certificate" target="_blank" rel="noopener noreferrer">
                  View Certificate <i className="fas fa-eye"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-btn prev-btn" 
          aria-label="Previous certificate" 
          onClick={() => {
            handlePrev();
            resetAutoScroll();
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          className="carousel-btn next-btn" 
          aria-label="Next certificate" 
          onClick={() => {
            handleNext();
            resetAutoScroll();
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      {/* Pagination indicators - Only render if totalGroups is valid */}
      <div className="carousel-indicators">
        {totalGroups > 0 && Array.from({ length: totalGroups }).map((_, index) => (
          <div 
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              resetAutoScroll();
            }}
          />
        ))}
      </div>
    </section>
  );
}
