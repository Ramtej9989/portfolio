// data/skills.js

export const skillsData = {
  // For the rotating outer orbit
  outerSkills: [
    { name: 'react', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', label: 'React' },
    { name: 'node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#8CC84B', label: 'Node.js' },
    { name: 'javascript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', label: 'JavaScript' },
    { name: 'typescript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', label: 'TypeScript' },
    { name: 'vue', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D', label: 'Vue.js' },
    { name: 'angular', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031', label: 'Angular' },
    { name: 'mongodb', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#4DB33D', label: 'MongoDB' },
    { name: 'express', text: 'ex', color: '#000000', label: 'Express.js' },
    { name: 'next', text: 'N', color: '#000000', label: 'Next.js' },
    { name: 'tailwind', text: '~', color: '#38BDF8', label: 'Tailwind CSS' }
  ],
  
  // For the rotating inner orbit
  innerSkills: [
    { name: 'python', text: 'Py', color: '#3776AB', label: 'Python' },
    { name: 'css', text: 'CSS', color: '#1572B6', label: 'CSS3' },
    { name: 'html', text: 'HTML', color: '#E34F26', label: 'HTML5' },
    { name: 'docker', text: '🐳', color: '#2496ED', label: 'Docker' },
    { name: 'git', text: 'Git', color: '#F05032', label: 'Git' },
    { name: 'graphql', text: 'GQL', color: '#E535AB', label: 'GraphQL' },
    { name: 'firebase', text: '🔥', color: '#FFCA28', label: 'Firebase' }
  ],
  
  // For the traditional skill bars section
  skillCategories: {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "SQL", level: 65 },
      { name: "Firebase", level: 70 }
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Docker", level: 50 },
      { name: "Webpack", level: 65 }
    ],
    languages: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Python", level: 70 },
      { name: "Java", level: 60 },
      { name: "C/C++", level: 65 }
    ]
  }
};
