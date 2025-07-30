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

export const SKILLS = [
  { name: 'React.js', level: 70, category: 'Frontend' },
  { name: 'Next.js', level: 70, category: 'Frontend' },
  { name: 'TypeScript', level: 70, category: 'Languages' },
  { name: 'HTML', level: 80, category: 'Languages' },
  { name: 'CSS/ Tailwind CSS', level: 70, category: 'Styling' },
  { name: 'Node.js', level: 70, category: 'Backend' },
  { name: 'Mongodb', level: 75, category: 'Database' },
  { name: 'MySQL', level: 75, category: 'Database' },
  { name: 'Postman', level: 80, category: 'API Testing' },
  { name: 'IAM & IGA', level: 90, category: 'Security' },
  { name: 'App Security', level: 85, category: 'Security' },
  { name: 'Forensics', level: 65, category: 'Security' },
  { name: 'Pen Testing', level: 70, category: 'Security' },
  { name: 'Python', level: 70, category: 'Coding' },
  { name: 'Javascript', level: 70, category: 'Coding' },
  { name: 'Java', level: 60, category: 'Coding' },
  { name: 'Generative AI', level: 60, category: 'AI' },
  { name: 'Prompt Engineering', level: 80, category: 'AI' },
  { name: 'Accessibility', level: 80, category: 'UX' },
  { name: 'Responsive Design', level: 90, category: 'UX' },
  { name: 'Arduino DIY', level: 75, category: 'IoT' },
  { name: 'Deep Learning', level: 65, category: 'ML' },
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
  }
];
