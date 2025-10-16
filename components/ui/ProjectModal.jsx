// components/ui/ProjectModal.jsx
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Add escape key event listener
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl bg-black/90 rounded-lg shadow-lg border border-secondary/30 z-50 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-secondary/20">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Main Image */}
              <div className="mb-6 rounded-lg overflow-hidden border border-secondary/30">
                {project.image ? (
                  <div className="relative h-64 md:h-80">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 md:h-80 bg-gradient-to-br from-secondary/30 to-purple-800/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white opacity-50">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              
              {/* Project Details */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                  <p className="text-gray-300">{project.longDescription || project.description}</p>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-secondary/10 rounded-full text-sm text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Additional Screenshots */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Screenshots</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.screenshots.map((screenshot, i) => (
                        <div key={i} className="rounded-lg overflow-hidden border border-secondary/30">
                          <div className="relative h-48">
                            <Image 
                              src={screenshot} 
                              alt={`${project.title} screenshot ${i + 1}`} 
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Challenges */}
                {project.challenges && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Challenges & Solutions</h4>
                    <p className="text-gray-300">{project.challenges}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-secondary/20 flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-wrap gap-4">
                {project.githubUrl && (
                  <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={16} /> GitHub Repo
                  </motion.a>
                )}
                
                {project.liveUrl && (
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/90 text-white rounded transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </motion.a>
                )}
              </div>
              
              <motion.button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
