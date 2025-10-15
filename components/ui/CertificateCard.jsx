// components/ui/CertificateCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function CertificateCard({ certificate, onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };
  
  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-64 perspective-1000 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(certificate.id)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d rounded-lg shadow-lg border border-secondary/30"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
          {certificate.image ? (
            <div className="relative w-full h-full">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                <p className="text-sm text-gray-300">{certificate.issuer}</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-purple-800/30 flex flex-col items-center justify-center p-6">
              <div className="text-3xl font-bold text-white mb-2">{certificate.title.charAt(0)}</div>
              <h3 className="text-lg font-semibold text-white text-center">{certificate.title}</h3>
              <p className="text-sm text-gray-300 text-center mt-1">{certificate.issuer}</p>
            </div>
          )}
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden bg-black/70 p-6 flex flex-col justify-between rotate-y-180">
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-2">{certificate.title}</h3>
            <div className="flex justify-between text-sm text-gray-300 mb-4">
              <span>{certificate.issuer}</span>
              <span>{certificate.date}</span>
            </div>
            <p className="text-sm text-gray-300 line-clamp-3">{certificate.description}</p>
          </div>
          
          {certificate.skills && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-1">
                {certificate.skills.slice(0, 3).map((skill, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-secondary/10 rounded-full text-secondary">
                    {skill}
                  </span>
                ))}
                {certificate.skills.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-secondary/10 rounded-full text-secondary">
                    +{certificate.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
          
          <motion.a
            href={certificate.credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-1 text-sm text-secondary hover:underline"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
          >
            Verify Certificate <FaExternalLinkAlt size={10} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
