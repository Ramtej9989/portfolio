// components/layout/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-md border-t border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xl font-bold">
              <span className="text-secondary">Ram</span>Tej
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-secondary font-semibold mb-3">Quick Links</h3>
           <div className="grid grid-cols-2 gap-x-8 gap-y-2">
  <a href="#home" className="text-gray-300 hover:text-violet-400 text-sm transition-colors">Home</a>
  <a href="#education" className="text-gray-300 hover:text-violet-400 text-sm transition-colors">Education</a>
  <a href="#skills" className="text-gray-300 hover:text-violet-400 text-sm transition-colors">Skills</a>
  <a href="#certificates" className="text-gray-300 hover:text-violet-400 text-sm transition-colors">Certificates</a>
  <a href="#projects" className="text-gray-300 hover:text-violet-400 text-sm transition-colors">Projects</a>
  <a href="#contact" className="text-gray-300 hover:text-violet-400 text-sm transition-colors">Contact</a>
</div>

          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-secondary font-semibold mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/Ramtej9989" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/bonthu-rama-satya-teja/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="mailto:tejbonthu45@gmail.com"
                className="text-gray-300 hover:text-white"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://wa.me/+917702441899" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-secondary/10 mt-8 pt-8">
          <p className="text-center text-gray-400 text-xs">
            Designed and built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
