// data/chatbot.js

// Information about you that the chatbot can use to answer questions
export const personalInfo = {
  basics: {
    name: "Rama Satya Teja Bonthu",
    title: "AI & Data Science Student",
    location: "Amalapuram, Andhra Pradesh, India",
    summary:
      "Motivated and detail-oriented Artificial Intelligence and Data Science student with a strong foundation in machine learning, deep learning, and data analysis. Passionate about solving real-world problems using data-driven approaches and building innovative AI solutions.",
  },

  education: [
    {
      institution: "BVC Engineering College, Amalapuram",
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      period: "2022–2026",
      details: "Maintaining 89% aggregate. Focused on ML, DL, and data analytics.",
    },
    {
      institution: "Sri Chaitanya Junior College, Razole",
      degree: "Intermediate (MPC)",
      field: "Mathematics, Physics, Chemistry",
      period: "2020–2022",
      details: "Graduated with 80% marks.",
    },
    {
      institution: "ZPP High School, Magatapalli",
      degree: "Secondary School Certificate",
      field: "General Studies",
      period: "2010–2020",
      details: "Graduated with 96% marks and was school topper.",
    },
  ],

  skills: {
    technical: [
      "Python",
      "C",
      "Machine Learning (Scikit-learn)",
      "Deep Learning (TensorFlow, Keras)",
      "Data Visualization (Matplotlib, Seaborn)",
      "Data Analysis (Pandas, NumPy)",
      "SQL",
      "Git",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    softSkills: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Leadership",
      "Adaptability",
      "Time Management",
    ],
  },

  projects: [
    {
      title: "Leaf Disease Detection using Deep Learning",
      description:
        "Developed a CNN model using TensorFlow and Keras to detect plant leaf diseases. Worked on preprocessing, training, and evaluating the model with accuracy metrics and visualization tools.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib"],
      link: "https://github.com/ramtej9989/leaf-disease-detection", // replace if you have the repo
    },
    {
      title: "Exploratory Data Analysis – Netflix Dataset",
      description:
        "Performed data cleaning, exploration, and visualization on Netflix data using Python, Pandas, and Seaborn to uncover content trends and insights.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      link: "https://github.com/ramtej9989/netflix-eda", // optional
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive portfolio website using HTML, CSS, and JavaScript. Deployed via GitHub Pages with a functional contact form.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      link: "https://ramtej9989.github.io",
    },
  ],

  certificates: [
    {
      title: "ServiceNow Certified Application Developer (CAD)",
      issuer: "ServiceNow",
      date: "August 22, 2025",
    },
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      date: "August 01, 2025",
    },
    {
      title: "SQL and Relational Databases 101",
      issuer: "IBM",
      date: "January 12, 2025",
    },
    {
      title: "Python for Data Science and AI",
      issuer: "IBM",
      date: "February 16, 2024",
    },
    {
      title: "Introduction to Data Science",
      issuer: "IBM",
      date: "November 13, 2023",
    },
  ],

  contact: {
    email: "tejbonthu45@gmail.com",
    phone: "+91 7702441899",
    linkedin: "https://www.linkedin.com/in/rama-satya-teja-bonthu-59685a290",
    github: "https://github.com/ramtej9989",
    portfolio: "https://ramtej9989.github.io",
  },
};

// Define common questions and answers for the chatbot
export const predefinedQuestions = [
  {
    question: "What is your name?",
    answer: `My name is ${personalInfo.basics.name}.`,
  },
  {
    question: "What do you do?",
    answer: `I am an ${personalInfo.basics.title} based in ${personalInfo.basics.location}. ${personalInfo.basics.summary}`,
  },
  {
    question: "Tell me about yourself",
    answer: `I'm ${personalInfo.basics.name}, an ${personalInfo.basics.title} from ${personalInfo.basics.location}. ${personalInfo.basics.summary}`,
  },
  {
    question: "What are your skills?",
    answer: `My technical skills include: ${personalInfo.skills.technical.join(
      ", "
    )}. I also have strong soft skills in ${personalInfo.skills.softSkills.join(
      ", "
    )}.`,
  },
  {
    question: "What is your educational background?",
    answer: `I am pursuing a ${personalInfo.education[0].degree} in ${personalInfo.education[0].field} at ${personalInfo.education[0].institution} (${personalInfo.education[0].period}). Previously, I studied at ${personalInfo.education[1].institution} (${personalInfo.education[1].period}).`,
  },
  {
    question: "What projects have you worked on?",
    answer: `Some of my key projects include:
    1. ${personalInfo.projects[0].title}: ${personalInfo.projects[0].description}
    2. ${personalInfo.projects[1].title}: ${personalInfo.projects[1].description}
    3. ${personalInfo.projects[2].title}: ${personalInfo.projects[2].description}`,
  },
  {
    question: "What certificates do you have?",
    answer: `I have earned several certificates including:
    - ${personalInfo.certificates[0].title} (${personalInfo.certificates[0].date})
    - ${personalInfo.certificates[1].title} (${personalInfo.certificates[1].date})
    - ${personalInfo.certificates[2].title} (${personalInfo.certificates[2].date})
    - ${personalInfo.certificates[3].title} (${personalInfo.certificates[3].date})
    - ${personalInfo.certificates[4].title} (${personalInfo.certificates[4].date})`,
  },
  {
    question: "How can I contact you?",
    answer: `You can reach me via email at ${personalInfo.contact.email}, connect with me on LinkedIn at ${personalInfo.contact.linkedin}, or view my GitHub profile at ${personalInfo.contact.github}.`,
  },
];

// Response generator (same logic as before)
export const generateResponse = (userInput) => {
  const input = userInput.toLowerCase().trim();

  const matchedQuestion = predefinedQuestions.find(
    (item) =>
      input.includes(item.question.toLowerCase()) ||
      similarityCheck(input, item.question.toLowerCase())
  );

  if (matchedQuestion) return matchedQuestion.answer;

  if (
    input.includes("skill") ||
    input.includes("know") ||
    input.includes("tech") ||
    input.includes("stack")
  )
    return predefinedQuestions[3].answer;

  if (
    input.includes("education") ||
    input.includes("study") ||
    input.includes("college") ||
    input.includes("university")
  )
    return predefinedQuestions[4].answer;

  if (
    input.includes("project") ||
    input.includes("work") ||
    input.includes("portfolio")
  )
    return predefinedQuestions[5].answer;

  if (
    input.includes("certificate") ||
    input.includes("course") ||
    input.includes("certification")
  )
    return predefinedQuestions[6].answer;

  if (
    input.includes("contact") ||
    input.includes("email") ||
    input.includes("phone")
  )
    return predefinedQuestions[7].answer;

  if (input.includes("hello") || input.includes("hi") || input.includes("hey"))
    return `Hello! I'm an AI assistant for ${personalInfo.basics.name}. How can I help you today?`;

  if (input.includes("thank"))
    return `You're welcome! Feel free to ask me more about ${personalInfo.basics.name}.`;

  return `I can tell you about ${personalInfo.basics.name}'s skills, education, projects, certificates, or contact details. What would you like to know?`;
};

// Helper
function similarityCheck(input, question) {
  const inputWords = input.split(" ");
  const questionWords = question.split(" ").filter((w) => w.length > 3);
  return questionWords.some((word) => inputWords.includes(word));
}
