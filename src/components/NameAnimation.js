// src/components/NameAnimation.js
'use client';
import { useEffect, useState } from 'react';

export default function NameAnimation() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [delta, setDelta] = useState(100);
  
  const fullName = "RAMA SATYA TEJA BONTHU";
  const roles = ["developer", "designer", "data scientist", "engineer"];
  
  // Type out the name
  useEffect(() => {
    if (name.length < fullName.length) {
      const timeout = setTimeout(() => {
        setName(fullName.substring(0, name.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [name]);
  
  // Handle the role typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    // Set the typing/deleting speed
    let timer;
    
    if (isDeleting) {
      setDelta(50);
      if (role.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setDelta(500); // Pause before typing next role
      } else {
        timer = setTimeout(() => {
          setRole(role.slice(0, -1));
        }, delta);
      }
    } else {
      setDelta(100);
      if (role.length === currentRole.length) {
        setDelta(2000); // Wait before starting to delete
        setIsDeleting(true);
      } else {
        timer = setTimeout(() => {
          setRole(currentRole.slice(0, role.length + 1));
        }, delta);
      }
    }
    
    return () => clearTimeout(timer);
  }, [role, roleIndex, isDeleting, delta]);
  
  return (
    <div className="left-section">
      <h1 id="name">{name}</h1>
      <div className="role-text">
        <span className="static-text">I'm </span>
        <span className="dynamic-text">
          <span id="role">{role}</span>
          <span className="cursor"></span>
        </span>
        <div>
          <p className="line">I turn ideas into responsive, high-impact websites — crafted with the latest tech and a sharp eye for user experience.</p>
        </div>
        {/* Social media icons */}
        <div className="social-media-row">
          <a href="https://wa.me/" target="_blank" className="icon whatsapp" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:example@example.com" className="icon email" aria-label="E-mail">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" className="icon linkedin" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com" target="_blank" className="icon github" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}
