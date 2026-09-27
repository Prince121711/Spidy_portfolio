export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Prince Albert",
  headline: "Full Stack Developer (React.js · Node.js · SQL)",
  location: "Salem, Tamil Nadu, India",
  email: "princeprince45613@gmail.com",
  phone: "+91 7502138129",
  github: "https://github.com/Prince121711",
  linkedin: "https://linkedin.com/in/prince-albert1217",
};

export const roles = [
  "Full Stack Developer",
  "React.js · Node.js · SQL",
  "Founder, Lumen Academy",
  "Published AI Researcher",
];

export const projects = [
  {
    index: "01",
    year: "Ongoing",
    title: "Lumen Academy",
    role: "Founder & Lead Developer",
    description:
      "A live NEET/JEE exam-preparation platform covering 23 modules and 79 lessons. Architected end-to-end: unified Prisma-backed PostgreSQL REST API with versioned migrations, Firebase Auth, multi-provider AI abstraction layer switchable via env config, and automated Playwright E2E test suite.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Firebase Auth",
      "Playwright",
    ],
    href: "https://github.com/Prince121711",
    image: "/projects/project-1.png",
  },
  {
    index: "02",
    year: "2024",
    title: "Tax-Shield: AI Tax Compliance Assistant",
    role: "Corresponding Author & Developer",
    description:
      "An AI-powered tax compliance system for micro-merchants, combining OCR and machine learning to automate invoice and GST data extraction. Published in BMC Research Notes (Springer Nature) after rigorous peer review.",
    tags: [
      "Python",
      "FastAPI",
      "OCR",
      "Machine Learning",
      "REST API",
      "Published Research",
    ],
    href: "https://github.com/Prince121711",
    image: "/projects/project-2.png",
  },
  {
    index: "03",
    year: "2024",
    title: "AI Policy & Compliance Intelligence System",
    role: "Developer — TCS iON Capstone",
    description:
      "An AI-driven compliance intelligence system using sentence-transformer embeddings to semantically match policy documents against regulatory requirements, with a high-throughput FastAPI backend and an interactive Streamlit review dashboard.",
    tags: [
      "Python",
      "Sentence-Transformers",
      "NLP",
      "FastAPI",
      "Streamlit",
    ],
    href: "https://github.com/Prince121711",
    image: "/projects/project-3.png",
  },
  {
    index: "04",
    year: "2023",
    title: "Loan Management System",
    role: "Full-Stack Developer",
    description:
      "An end-to-end loan management system covering application intake, underwriting rules, and repayment tracking — engineered with clean MVC architecture, robust data validation, and SQL persistence.",
    tags: ["Java", "Spring Boot", "SQL", "MVC Architecture", "REST API"],
    href: "https://github.com/Prince121711",
    image: "/projects/project-4.png",
  },
  {
    index: "05",
    year: "2024",
    title: "Data Pipeline & Analytics Engine",
    role: "Data Science Intern — Tech Vedhu",
    description:
      "Engineered automated ETL pipelines and analytics workflows to ingest, clean, and model complex datasets with statistical exploratory analysis, correlation heatmaps, and predictive modeling.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Data Pipelines",
      "EDA",
    ],
    href: "https://github.com/Prince121711",
    image: "/projects/project-5.png",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "C", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Component-Driven UI",
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "MVC Architecture",
    ],
  },
  {
    label: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "Prisma ORM", "Supabase"],
  },
  {
    label: "Auth & Concepts",
    items: [
      "JWT",
      "Firebase Authentication",
      "Data Structures & Algorithms",
      "OOP",
      "System Design Fundamentals",
    ],
  },
  {
    label: "Tools & Testing",
    items: ["Git", "GitHub", "Playwright (E2E)", "VS Code", "IntelliJ IDEA"],
  },
];

export const experience = [
  {
    date: "Ongoing",
    title: "Developer Intern (Founder)",
    org: "Lumen Academy (Personal Venture)",
    description:
      "Architected and built a full-stack NEET/JEE exam-preparation platform end-to-end, from database schema to production UI. Migrated fragmented Supabase/localStorage persistence to a unified Prisma-backed PostgreSQL REST API with versioned migrations, designed a multi-provider AI abstraction layer (switchable via env config), and validated reliability with an automated Playwright E2E test suite.",
  },
  {
    date: "Aug 2024 — Sep 2024",
    title: "Data Science Intern",
    org: "Tech Vedhu · Salem, India",
    description:
      "Built end-to-end Python data pipelines covering collection, cleaning, feature engineering, model training, and evaluation. Performed data preprocessing and exploratory analysis with Pandas, NumPy, Matplotlib, and Seaborn to surface trends, correlations, and anomalies in large datasets.",
  },
  {
    date: "2024",
    title: "Corresponding Author & Researcher",
    org: "BMC Research Notes (Springer Nature)",
    description:
      "Authored and published the peer-reviewed research for Tax-Shield — an AI-assisted tax compliance system for micro-merchants combining OCR and machine learning for automated GST and invoice processing.",
  },
  {
    date: "Aug 2022 — June 2026",
    title: "B.Tech, Artificial Intelligence and Data Science",
    org: "Gnanamani College of Technology",
    description:
      "Currently pursuing B.Tech in AI & Data Science with an academic CGPA of 8.3 / 10.",
  },
  {
    date: "2020 — 2022",
    title: "Higher Secondary (XII & X)",
    org: "Mount Mary Matriculation Higher Secondary School",
    description:
      "Completed Higher Secondary with 77.5% (Class XII, 2022) and 78% (Class X, 2020).",
  },
];

export const certifications = [
  {
    title: "TCS iON Career Edge",
    subtitle: "Certificate Program on Graduate Engineer Trainee",
    issuer: "TCS iON",
    badge: "Industry Capstone",
  },
  {
    title: "Java for Backend Development (with REST API)",
    subtitle: "Enterprise backend development & RESTful APIs",
    issuer: "ICT Academy",
    badge: "Backend",
  },
  {
    title: "Java Programming & Design Thinking",
    subtitle: "Object-oriented architecture & algorithmic design",
    issuer: "NPTEL",
    badge: "Architecture",
  },
  {
    title: "Machine Learning",
    subtitle: "Advanced statistical modeling & machine learning",
    issuer: "Columbia University",
    badge: "AI / ML",
  },
  {
    title: "AI-Native Networking Workshop",
    subtitle: "Next-gen intelligent network infrastructures",
    issuer: "NIT Trichy",
    badge: "Systems",
  },
];

export const social = [
  { label: "GitHub", href: "https://github.com/Prince121711" },
  { label: "LinkedIn", href: "https://linkedin.com/in/prince-albert1217" },
  { label: "Email", href: "mailto:princeprince45613@gmail.com" },
  { label: "Call", href: "tel:+917502138129" },
];

export const contactEmail = "princeprince45613@gmail.com";
export const contactPhone = "+91 7502138129";
export const contactLocation = "Salem, Tamil Nadu, India";

