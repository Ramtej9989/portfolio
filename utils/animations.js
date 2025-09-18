// src/utils/animations.js
export const typeOutName = (name, setName) => {
  let index = 0;
  
  const addLetter = () => {
    if (index < name.length) {
      setName(prev => prev + name.charAt(index));
      index++;
      setTimeout(addLetter, 100); // 100ms delay between letters
    }
  };
  
  addLetter();
};

export const cycleRoles = (roles, setRole, setIsDeleting, setRoleIndex, setDelta) => {
  const currentRole = roles[setRoleIndex];
  
  // The animation will be managed in the useEffect hook in NameAnimation component
};

export const revealSections = () => {
  const sections = document.querySelectorAll('section, .about-section, .education-section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.85) {
      section.classList.add('revealed');
    }
  });
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
