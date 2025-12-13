import { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiDjango,
  SiRubyonrails,
  SiSpringboot,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiBootstrap,
  SiWebpack,
  SiEslint,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiFigma,
  SiPython,
  SiJavascript,
  SiGo,
  SiRust,
  SiRuby,
  SiC,
  SiCplusplus,
  SiPandas,
  SiNumpy,
  SiExpress,
  SiJquery,
  SiVmware,
  SiGoogle,
  SiGooglecloud,
  SiNetlify,
  SiFirebase,
  SiOkta,
  SiChartdotjs,
} from "react-icons/si";

// 👇 Define the type
export type Skill = {
  name: string;
  level: number;
  category: string;
  icon?: IconType; // optional icon
};

export const SITE_CONFIG = {
  name: 'Rajesh',
  title: 'Rajesh\'s Portfolio',
  description: 'Full-stack developer specializing in React, Next.js, and modern web technologies. Practitioner on Cybersecurity and AI.',
  url: 'rajeshhsejar.netlify.app',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/RajeshHsejar27',
    linkedin: 'https://www.linkedin.com/in/rajesh-n-b37238237/',
    email: 'nrh27magnum@gmail.com'
  }
};

// export const SKILLS = [
//   { name: 'React.js', level: 75, category: 'Libraries' },
//   { name: 'Next.js', level: 75, category: 'Frameworks' },
//   { name: 'FastAPI', level: 70, category: 'Frameworks' },
//   { name: 'Data Structures & Algorithms', level: 80, category: 'Technical skills' },
//   { name: 'System Design', level: 90, category: 'Technical skills' },
//   { name: 'Operating Systems', level: 70, category: 'Technical skills' },
//   { name: 'Object Oriented Programming', level: 70, category: 'Technical skills' },
//   { name: 'Database Management Systems', level: 90, category: 'Technical skills' },
//   { name: 'Software Engineering', level: 90, category: 'Technical skills' },
//   { name: 'LangChain', level: 70, category: 'Frameworks' },
//   { name: 'Django', level: 70, category: 'Frameworks' },
//   { name: 'Ruby on Rails', level: 65, category: 'Frameworks' },
//   { name: 'Gin', level: 50, category: 'Frameworks' },
//   { name: 'Actix Web', level: 65, category: 'Frameworks' },
//   { name: 'Rocket', level: 70, category: 'Frameworks' },
//   { name: 'Phoenix', level: 65, category: 'Frameworks' },
//   { name: 'Spring Boot', level: 60, category: 'Frameworks' },
//   { name: 'IdAM', level: 99, category: 'Security' },
//   { name: 'TypeScript', level: 80, category: 'Languages' },
//   { name: 'HTML', level: 95, category: 'Languages' },
//   { name: 'CSS/ Tailwind CSS', level: 95, category: 'Languages' },
//   { name: 'Node.js', level: 70, category: 'Web dev tools' },
//   { name: 'VS Code', level: 80, category: 'Web dev tools' },
//   { name: 'Git', level: 80, category: 'Web dev tools' },
//   { name: 'Github', level: 90, category: 'Web dev tools' },
//   { name: 'Mongodb', level: 95, category: 'Database' },
//   { name: 'MySQL', level: 95, category: 'Database' },
//   { name: 'Postman', level: 95, category: 'Web dev tools' },
//   { name: 'Bootstrap', level: 95, category: 'Web dev tools' },
//   { name: 'Webpack', level: 85, category: 'Web dev tools' },
//   { name: 'ESLint', level: 80, category: 'Web dev tools' },
//   { name: 'Docker', level: 75, category: 'Web dev tools' },
//   { name: 'Kubernetes', level: 80, category: 'Web dev tools' },
//   { name: 'Jenkins', level: 65, category: 'Web dev tools' },
//   { name: 'Figma', level: 80, category: 'Web dev tools' },
//   { name: 'IGA', level: 99, category: 'Security' },
//   { name: 'Cloud Security', level: 95, category: 'Security' },
//   { name: 'Forensics', level: 70, category: 'Security' },
//   { name: 'Pen Testing', level: 70, category: 'Security' },
//   { name: 'Python', level: 90, category: 'Languages' },
//   { name: 'Javascript', level: 90, category: 'Languages' },
//   { name: 'Java', level: 80, category: 'Languages' },
//   { name: 'Generative AI', level: 75, category: 'AI' },
//   { name: 'Prompt Engineering', level: 90, category: 'AI' },
//   { name: 'Accessibility', level: 90, category: 'UX' },
//   { name: 'Responsive Design', level: 95, category: 'UX' },
//   { name: 'Arduino DIY', level: 75, category: 'IoT' },
//   { name: 'Go', level: 70, category: 'Languages' },
//   { name: 'Rust', level: 70, category: 'Languages' },
//   { name: 'Ruby', level: 70, category: 'Languages' },
//   { name: 'C', level: 70, category: 'Languages' },
//   { name: 'C++', level: 70, category: 'Languages' },
//   { name: 'Pandas', level: 85, category: 'Libraries' },
//   { name: 'NumPy', level: 85, category: 'Libraries' },
//   { name: 'Matplotlib', level: 80, category: 'Libraries' },
//   { name: 'Express.js', level: 80, category: 'Libraries' },
//   { name: 'jQuery', level: 90, category: 'Libraries' },
//   { name: 'VM Ware', level: 80, category: 'Tech tools' },
//   { name: 'M365 Apps', level: 80, category: 'Tech tools' },
//   { name: 'Google Suite', level: 80, category: 'Tech tools' },
//   { name: 'Powershell Scripting', level: 85, category: 'Tech tools' },
//   { name: 'Davinci Resolve', level: 70, category: 'Tech tools' },
//   { name: 'FL Studio', level: 70, category: 'Tech tools' },
//   { name: 'Chart.js', level: 70, category: 'Libraries' },
//   { name: 'AWS', level: 70, category: 'Cloud Platforms' },
//   { name: 'GCP', level: 70, category: 'Cloud Platforms' },
//   { name: 'Netlify', level: 70, category: 'Cloud Platforms' },
//   { name: 'Firebase', level: 70, category: 'Cloud Platforms' },
//   { name: 'OKTA', level: 99, category: 'Cloud Platforms' },
//   { name: 'Sailpoint', level: 80, category: 'Cloud Platforms' },
//   { name: 'CyberArk', level: 70, category: 'Cloud Platforms' },
//   { name: 'Sci-kit Learn', level: 65, category: 'Libraries' },
//   { name: 'Deep Learning', level: 65, category: 'ML' },

// ];


// export const SKILLS: Skill[] = [
//   { name: "React.js", level: 75, category: "Libraries", icon: SiReact },
//   { name: "Next.js", level: 75, category: "Frameworks", icon: SiNextdotjs },
//   { name: "FastAPI", level: 70, category: "Frameworks", icon: SiFastapi },
//   { name: "Django", level: 70, category: "Frameworks", icon: SiDjango },
//   { name: "Ruby on Rails", level: 65, category: "Frameworks", icon: SiRubyonrails },
//   { name: "Spring Boot", level: 60, category: "Frameworks", icon: SiSpringboot },
//   { name: "TypeScript", level: 80, category: "Languages", icon: SiTypescript },
//   { name: "HTML", level: 95, category: "Languages", icon: SiHtml5 },
//   { name: "CSS/ Tailwind CSS", level: 95, category: "Languages", icon: SiTailwindcss },
//   { name: "Node.js", level: 70, category: "Web dev tools", icon: SiNodedotjs },
//   { name: "VS Code", level: 80, category: "Web dev tools", icon: SiVisualstudiocode },
//   { name: "Git", level: 80, category: "Web dev tools", icon: SiGit },
//   { name: "Github", level: 90, category: "Web dev tools", icon: SiGithub },
//   { name: "Mongodb", level: 95, category: "Database", icon: SiMongodb },
//   { name: "MySQL", level: 95, category: "Database", icon: SiMysql },
//   { name: "Postman", level: 95, category: "Web dev tools", icon: SiPostman },
//   { name: "Bootstrap", level: 95, category: "Web dev tools", icon: SiBootstrap },
//   { name: "Webpack", level: 85, category: "Web dev tools", icon: SiWebpack },
//   { name: "ESLint", level: 80, category: "Web dev tools", icon: SiEslint },
//   { name: "Docker", level: 75, category: "Web dev tools", icon: SiDocker },
//   { name: "Kubernetes", level: 80, category: "Web dev tools", icon: SiKubernetes },
//   { name: "Jenkins", level: 65, category: "Web dev tools", icon: SiJenkins },
//   { name: "Figma", level: 80, category: "Web dev tools", icon: SiFigma },
//   { name: "Python", level: 90, category: "Languages", icon: SiPython },
//   { name: "Javascript", level: 90, category: "Languages", icon: SiJavascript },
//   { name: "Java", level: 80, category: "Languages", icon: SiJava },
//   { name: "Go", level: 70, category: "Languages", icon: SiGo },
//   { name: "Rust", level: 70, category: "Languages", icon: SiRust },
//   { name: "Ruby", level: 70, category: "Languages", icon: SiRuby },
//   { name: "C", level: 70, category: "Languages", icon: SiC },
//   { name: "C++", level: 70, category: "Languages", icon: SiCplusplus },
//   { name: "Pandas", level: 85, category: "Libraries", icon: SiPandas },
//   { name: "NumPy", level: 85, category: "Libraries", icon: SiNumpy },
//   { name: "Express.js", level: 80, category: "Libraries", icon: SiExpress },
//   { name: "jQuery", level: 90, category: "Libraries", icon: SiJquery },
//   { name: "VM Ware", level: 80, category: "Tech tools", icon: SiVmware },
//   { name: "M365 Apps", level: 80, category: "Tech tools", icon: SiMicrosoft },
//   { name: "Google Suite", level: 80, category: "Tech tools", icon: SiGoogle },
//   { name: "Powershell Scripting", level: 85, category: "Tech tools", icon: SiPowershell },
//   { name: "AWS", level: 70, category: "Cloud Platforms", icon: SiAmazonaws },
//   { name: "GCP", level: 70, category: "Cloud Platforms", icon: SiGooglecloud },
//   { name: "Netlify", level: 70, category: "Cloud Platforms", icon: SiNetlify },
//   { name: "Firebase", level: 70, category: "Cloud Platforms", icon: SiFirebase },
//   { name: "OKTA", level: 99, category: "Cloud Platforms", icon: SiOkta },
//   { name: "Sailpoint", level: 80, category: "Cloud Platforms", icon: SiSailpoint },
//   { name: "Chart.js", level: 70, category: "Libraries", icon: SiChartdotjs },
//   // Skills without icons can stay as they are
// ];



export const SKILLS: Skill[] = [
  // Libraries / Frameworks / Technical skills / Languages / Tools / Security / AI / UX / IoT / Cloud
  { name: "React.js", level: 75, category: "Libraries", icon: SiReact },
  { name: "Next.js", level: 75, category: "Frameworks", icon: SiNextdotjs },
  { name: "FastAPI", level: 70, category: "Frameworks", icon: SiFastapi },
  { name: "LangChain", level: 70, category: "Frameworks" }, // no official icon
  { name: "Django", level: 70, category: "Frameworks", icon: SiDjango },
  { name: "Ruby on Rails", level: 65, category: "Frameworks", icon: SiRubyonrails },
  { name: "Gin", level: 50, category: "Frameworks" }, // no official icon
  { name: "Actix Web", level: 65, category: "Frameworks" }, // no official icon
  { name: "Rocket", level: 70, category: "Frameworks" }, // no official icon
  { name: "Phoenix", level: 65, category: "Frameworks" }, // no official icon
  { name: "Spring Boot", level: 60, category: "Frameworks", icon: SiSpringboot },

  { name: "Data Structures & Algorithms", level: 80, category: "Technical skills" },
  { name: "System Design", level: 90, category: "Technical skills" },
  { name: "Operating Systems", level: 70, category: "Technical skills" },
  { name: "Object Oriented Programming", level: 70, category: "Technical skills" },
  { name: "Database Management Systems", level: 90, category: "Technical skills" },
  { name: "Software Engineering", level: 90, category: "Technical skills" },

  { name: "IdAM", level: 99, category: "Security" }, // domain-specific, no icon
  { name: "IGA", level: 99, category: "Security" }, // domain-specific, no icon
  { name: "Cloud Security", level: 95, category: "Security" },
  { name: "Forensics", level: 70, category: "Security" },
  { name: "Pen Testing", level: 70, category: "Security" },

  { name: "TypeScript", level: 80, category: "Languages", icon: SiTypescript },
  { name: "HTML", level: 95, category: "Languages", icon: SiHtml5 },
  { name: "CSS/ Tailwind CSS", level: 95, category: "Languages", icon: SiTailwindcss },
  { name: "Python", level: 90, category: "Languages", icon: SiPython },
  { name: "Javascript", level: 90, category: "Languages", icon: SiJavascript },
  { name: "Java", level: 80, category: "Languages" },
  { name: "Go", level: 70, category: "Languages", icon: SiGo },
  { name: "Rust", level: 70, category: "Languages", icon: SiRust },
  { name: "Ruby", level: 70, category: "Languages", icon: SiRuby },
  { name: "C", level: 70, category: "Languages", icon: SiC },
  { name: "C++", level: 70, category: "Languages", icon: SiCplusplus },

  { name: "Data Visualization (Matplotlib)", level: 80, category: "Libraries" }, // no icon
  { name: "Pandas", level: 85, category: "Libraries", icon: SiPandas },
  { name: "NumPy", level: 85, category: "Libraries", icon: SiNumpy },
  { name: "Sci-kit Learn", level: 65, category: "Libraries" }, // no icon
  { name: "Chart.js", level: 70, category: "Libraries", icon: SiChartdotjs },
  { name: "Express.js", level: 80, category: "Libraries", icon: SiExpress },
  { name: "jQuery", level: 90, category: "Libraries", icon: SiJquery },

  { name: "Node.js", level: 70, category: "Web dev tools", icon: SiNodedotjs },
  { name: "VS Code", level: 80, category: "Web dev tools"},
  { name: "Git", level: 80, category: "Web dev tools", icon: SiGit },
  { name: "Github", level: 90, category: "Web dev tools", icon: SiGithub },
  { name: "Postman", level: 95, category: "Web dev tools", icon: SiPostman },
  { name: "Bootstrap", level: 95, category: "Web dev tools", icon: SiBootstrap },
  { name: "Webpack", level: 85, category: "Web dev tools", icon: SiWebpack },
  { name: "ESLint", level: 80, category: "Web dev tools", icon: SiEslint },
  { name: "Docker", level: 75, category: "Web dev tools", icon: SiDocker },
  { name: "Kubernetes", level: 80, category: "Web dev tools", icon: SiKubernetes },
  { name: "Jenkins", level: 65, category: "Web dev tools", icon: SiJenkins },
  { name: "Figma", level: 80, category: "Web dev tools", icon: SiFigma },

  { name: "VM Ware", level: 80, category: "Tech tools", icon: SiVmware },
  { name: "M365 Apps", level: 80, category: "Tech tools" },
  { name: "Google Suite", level: 80, category: "Tech tools", icon: SiGoogle },
  { name: "Powershell Scripting", level: 85, category: "Tech tools"},
  { name: "Davinci Resolve", level: 70, category: "Tech tools" },
  { name: "FL Studio", level: 70, category: "Tech tools" },

  { name: "AWS", level: 70, category: "Cloud Platforms"},
  { name: "GCP", level: 70, category: "Cloud Platforms", icon: SiGooglecloud },
  { name: "Netlify", level: 70, category: "Cloud Platforms", icon: SiNetlify },
  { name: "Firebase", level: 70, category: "Cloud Platforms", icon: SiFirebase },
  { name: "OKTA", level: 99, category: "Cloud Platforms", icon: SiOkta },
  { name: "Sailpoint", level: 80, category: "Cloud Platforms"},
  { name: "CyberArk", level: 70, category: "Cloud Platforms" }, // no official icon in react-icons

  { name: "Generative AI", level: 75, category: "AI" },
  { name: "Prompt Engineering", level: 90, category: "AI" },
  { name: "Deep Learning", level: 65, category: "ML" },

  { name: "Accessibility", level: 90, category: "UX" },
  { name: "Responsive Design", level: 95, category: "UX" },

  { name: "Arduino DIY", level: 75, category: "IoT" },

  // Additional entries from commented list that are domain/soft skills
  { name: "IdAM (Identity & Access Management)", level: 99, category: "Security" },
  { name: "IGA (Identity Governance & Administration)", level: 99, category: "Security" },

  // Keep this as the last section marker — add new skills above as needed

];

export const PROJECTS = [
  {
    id: 'crypto-lab',
    title: 'Crypto Lab App',
    description: 'Interactive demonstration of various cryptographic algorithms including AES, RSA, and digital signatures with real-time encryption/decryption.',
    tech: ['React', 'TypeScript', 'Web Crypto API', 'Tailwind CSS'],
    github: 'https://github.com/RajeshHsejar27/Crypto-lab-web-application-using-React-TypeScript-CryptographicLibraries',
    live: 'https://cryptolab-encrypt-decrypt.netlify.app/',
    image: '/1.png',
    category: 'security'
  },
  {
    id: 'soc-hunt-suite',
    title: 'SOC Hunt Suite (Private)',
    description: 'A centralized platform designed to proactively monitor and mitigate SSRF, Identity & Access Management threats (IdAM).',
    tech: ['React', 'TypeScript', 'Redis', 'Kafka','GraphQL','Prometheus','Grafana'],
    // github: '',
    // live: '',
    image: '/6.png',
    category: 'security'
  },
  {
    id: 'iam-suite',
    title: 'IAM Suite (Private)',
    description: 'An API-first Identity & Access Management solution designed as a modular service platform, exposing secure, well-documented APIs for authentication, authorization, provisioning, and governance.',
    tech: ['React', 'TypeScript', 'Redis', 'Kafka','GraphQL','API','Rate limiting','RBAC'],
    // github: '',
    // live: '',
    image: '/7.png',
    category: 'security'
  },
  {
    id: 'blog-cms',
    title: 'Blog CMS App',
    description: 'A beautiful, production-ready blog CMS built with Next.js 14, featuring a forest-themed design that connects people through storytelling.',
    tech: ['Next.js', 'React 18', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/RajeshHsejar27/BlogCMS-using-Next.js',
    live: 'https://the-venture-blog.netlify.app/',
    image: '/2.png',
    category: 'web'
  },
  {
    id: 'personal-document-assistant',
    title: 'Personal Documentation Assistant',
    description: 'A local, offline-first GUI application for collecting daily notes and images, generating AI-powered summaries using local language models, and exporting beautifully formatted Markdown and PDF reports.',
    tech: ['Tkinter', 'GPT4All', 'ReportLab', 'Python'],
    github: 'https://github.com/RajeshHsejar27/Document-Generator-Python-App-using-LLM-Models-and-Tkinter',
    live: 'https://github.com/RajeshHsejar27/Document-Generator-Python-App-using-LLM-Models-and-Tkinter',
    image: '/3.png',
    category: 'ai'
  },
  {
    id: 'xpense-tracker',
    title: 'Xpense Tracker',
    description: 'A personal expense tracking application with browser localstorage persist functionality that helps users manage their finances by logging & exporting expenses, categorizing them, and providing insights through visualizations.',
    tech: ['React', 'TypeScript', 'Node.js', 'LocalStorage'],
    github: 'https://github.com/RajeshHsejar27/Expense-tracker-using-React-TypeScript-TailwindCSS',
    live: 'https://xpense-tracker-manager.netlify.app/',
    image: '/4.png',
    category: 'web'
  },
  {
    id: 'utility-hub',
    title: 'Utility Hub',
    description: 'A cool simple destination for essential web utilities like live Weather, Counter, Basic & Advanced Calculator, Calendar.',
    tech: ['React', 'TypeScript', 'Node.js', 'LocalStorage'],
    github: 'https://github.com/RajeshHsejar27/Utility-application-using-React-TypeScript-Vite-TailwindCSS',
    live: 'https://utility-application.netlify.app/',
    image: '/5.png',
    category: 'web'
  }

];