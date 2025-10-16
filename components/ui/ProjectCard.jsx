// components/ui/ProjectCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfo } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectCard({ project, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="bg-black/40 rounded-lg overflow-hidden h-full flex flex-col border border-secondary/30 shadow-lg"
        whileHover={{ 
          y: -5, 
          boxShadow: '0 10px 25px -5px rgba(138, 43, 226, 0.3)',
          borderColor: 'rgba(138, 43, 226, 0.5)'
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-purple-800/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-white opacity-50">{project.title.charAt(0)}</span>
            </div>
          )}
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Tags overlay */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-xs bg-black/70 text-secondary rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-xs bg-black/70 text-white rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Project Info */}
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300 text-sm mt-2 line-clamp-2">{project.description}</p>
        </div>
        
        {/* Action Buttons */}
        <div className="p-4 pt-0 flex justify-between items-center mt-auto border-t border-secondary/10">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <motion.a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Repository"
              >
                <FaGithub size={18} />
              </motion.a>
            )}
            
            {project.liveUrl && (
              <motion.a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={16} />
              </motion.a>
            )}
          </div>
          
          <motion.button 
            onClick={() => onOpenModal(project.id)}
            className="px-3 py-1 text-sm bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full border border-secondary/30 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInfo size={12} />
            <span>Details</span>
          </motion.button>
        </div>
        
        {/* Hidden hover overlay for mobile touch */}
        <button 
          className="absolute inset-0 w-full h-full z-10 sm:z-[-1]"
          onClick={() => onOpenModal(project.id)}
          aria-label="View project details"
        />
      </motion.div>
    </motion.div>
  );
}
