export const NAV_LINKS = ["About", "Skills", "Projects", "Education", "Experience", "Contact"];

export const SKILLS = [
  { name: "HTML5", level: 92, icon: "⟨/⟩" },
  { name: "CSS3", level: 88, icon: "✦" },
  { name: "JavaScript", level: 80, icon: "JS" },
  { name: "React", level: 75, icon: "⚛" },
  { name: "Ruby on Rails", level: 65, icon: "⬡" },
  { name: "Git", level: 82, icon: "⌥" },
  { name: "Bootstrap", level: 85, icon: "B" },
];

export const PROJECTS = [
  {
    title: "Weather App",
    desc: "A real-time weather application that fetches live data from OpenWeatherMap API, displaying temperature, humidity, and forecasts with smooth animated transitions.",
    tags: ["JavaScript", "API", "CSS3"],
    icon: "🌤",
    color: "#f9e4ee",
  },
  {
    title: "Quiz App",
    desc: "An interactive trivia quiz with multiple categories, score tracking, timer functionality, and animated result screens built with React hooks.",
    tags: ["React", "Hooks", "CSS3"],
    icon: "🧠",
    color: "#fce8f3",
  },
  {
    title: "Restaurantly Website",
    desc: "A fully responsive restaurant landing page with elegant menu sections, reservation form, gallery, and smooth scroll animations.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: "🍽",
    color: "#f9e4ee",
  },
  {
    title: "LessonHub",
    desc: "An e-learning platform prototype with course listings, progress tracking, and student dashboard — built with React and Node.js backend.",
    tags: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    icon: "📚",
    color: "#fce8f3",
  },
];

export const EDUCATION = [
  {
    year: "2020 – 2024",
    degree: "Bachelor of Science in Computer Science",
    school: "Univerisity Mother Teresa · Skopje",
    detail:
      " Applied Programming  · Focus on Web Technologies & Software Engineering",
  },
  {
    year: "2025 – present",
    degree: "Master's Degre in Software Engineering",
    school: "Univerisity Mother Teresa · Skopje",
    detail: "Curently pursuing a Master's degree in Software Engineering .",
  },
];

export const EXPERIENCE = [
  {
    period: "Sep 2025 – Dec 2025",
    role: "Junor WebDeveloper Intern",
    company: "Fetosot - Kumanovo",
    points: [
     "Built LessonHub, an online learning platform using Ruby on Rails and PostgreSQL.",
    "Implemented authentication, course management, comments, likes, search, and payment features.",
    "Applied MVC architecture, database design, and modern web development practices.",
    ],
  },
  {
    period: "May 2024 – Nov 2024",
    role: "Customer Servise Assistant",
    company: "Telekom Partner / Coop Pronto",
    points: [
     "Provided customer support and assisted clients with daily services.",
      "Developed communication and problem-solving skills in a professional environment.",
      "Worked effectively within a team and handled customer requests efficiently.",

    ],
  },
];
