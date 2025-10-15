// components/sections/Hero.jsx
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  const profileRef = useRef(null);

  // Add 3D tilt effect to profile image
  useEffect(() => {
    const profileElement = profileRef.current;
    if (!profileElement) return;

    const handleMouseMove = (e) => {
      const rect = profileElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      
      profileElement.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    
    const handleMouseLeave = () => {
      profileElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    profileElement.addEventListener('mousemove', handleMouseMove);
    profileElement.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      if (profileElement) {
        profileElement.removeEventListener('mousemove', handleMouseMove);
        profileElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hi, I'm <span className="text-secondary bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">Bonthu Rama Satya Teja</span>
            </motion.h1>
            
            <div className="text-xl md:text-2xl font-semibold mb-6 h-12 text-gray-200">
              <Typewriter
                options={{
                  strings: [
                    'I am a Developer',
                    'I am a Designer',
                    'I am a Student',
                    'I am a Programmer',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </div>
            
            <motion.p 
              className="text-gray-300 text-lg max-w-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A passionate full-stack developer with a love for creating seamless user experiences and solving complex problems through elegant code.
            </motion.p>
            
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a 
                href="https://wa.me/+917702441899" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-all duration-300 transform"
                whileHover={{ scale: 1.2, y: -5, color: "#8A2BE2" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp size={28} className="hover:shadow-lg hover:shadow-secondary/50" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/bonthu-rama-satya-teja/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-all duration-300 transform"
                whileHover={{ scale: 1.2, y: -5, color: "#8A2BE2" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin size={28} className="hover:shadow-lg hover:shadow-secondary/50" />
              </motion.a>
              <motion.a 
                href="https://github.com/Ramtej9989" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-all duration-300 transform"
                whileHover={{ scale: 1.2, y: -5, color: "#8A2BE2" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub size={28} className="hover:shadow-lg hover:shadow-secondary/50" />
              </motion.a>
              <motion.a 
                href="mailto:tejbonthu45@gmail.com"
                className="hover:text-secondary transition-all duration-300 transform"
                whileHover={{ scale: 1.2, y: -5, color: "#8A2BE2" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope size={28} className="hover:shadow-lg hover:shadow-secondary/50" />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a 
                href="#contact" 
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(138, 43, 226, 0.6)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="https://drive.google.com/file/d/1mhS9ZCAgzCtVLK22vZAd9zCf9u3I0XMz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-secondary text-secondary hover:bg-secondary/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(138, 43, 226, 0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Profile Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                ref={profileRef}
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                }}
              >
                {/* Profile image */}
                <Image 
                  src="/images/profile.jpg"
                  alt="Your Name" 
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-secondary opacity-70"></div>
              </motion.div>
              
              {/* Glow effect behind image */}
              <motion.div 
                className="absolute top-0 left-0 right-0 bottom-0 rounded-full -z-10 bg-secondary/20 blur-md"
                animate={{ 
                  boxShadow: ['0 0 5px #8A2BE2', '0 0 25px #8A2BE2', '0 0 5px #8A2BE2'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: 'reverse' 
                }}
              />
              
              {/* Spinning decoration circle */}
              <motion.div 
                className="absolute -top-4 -left-4 -right-4 -bottom-4 border-2 border-dashed border-secondary/30 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



