import { IconType } from "react-icons";
import { ComponentType } from "react";

import {
  CursorIcon,
  CopilotIcon,
  ChatGPTIcon,
  N8nIcon,
  MicrosoftAzureIcon,
  AzureDevOpsIcon,
  PowerShellIcon,
  MongoDBIcon,
  MySQLIcon,
  CockroachDBIcon,
  AmazonAuroraIcon,
  DynamoDBIcon,
  FirestoreIcon,
  CassandraIcon,
  Neo4jIcon,
  ElasticsearchIcon,
  BigQueryIcon,
  ParquetIcon,
  AzureBlobIcon,
  SailPointIcon,
  CyberArkIcon,
  ClaudeIcon,
  GeminiIcon,
  FAISSIcon,
  ChromaIcon,
  OpenSearchIcon,
  LangChainIcon,
  StreamlitIcon,
  ChainlitIcon,
  OllamaIcon,
  GPT4AllIcon,
  PowerBIIcon,
  DaVinciResolveIcon,
  FLStudioIcon,
  PrometheusIcon,
} from "@/components/about/custom-icons";

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
  SiPostgresql,
  SiRedis,
  SiApachekafka,      // Kafka
  SiRabbitmq,         // RabbitMQ
  SiOpenai,         // OpenAI / LLM APIs
} from "react-icons/si";


export type Skill = {
  name: string;
  level: number;
  category: string;
  icon?: IconType | ComponentType<any>; // optional icon
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





export const SKILLS: Skill[] = [
  // --- Generative AI & LLM Tooling ---
  { name: "Cursor (AI IDE)", level: 90, category: "Gen AI Tooling", icon: CursorIcon },
  { name: "GitHub Copilot", level: 90, category: "Gen AI Tooling", icon: CopilotIcon },
  { name: "ChatGPT", level: 95, category: "Gen AI Tooling", icon: ChatGPTIcon },
  { name: "Claude", level: 75, category: "Gen AI Tooling", icon: ClaudeIcon },
  { name: "Gemini", level: 75, category: "Gen AI Tooling", icon: GeminiIcon },
  { name: "Ollama", level: 80, category: "Gen AI Tooling", icon: OllamaIcon },
  { name: "GPT4All", level: 80, category: "Gen AI Tooling", icon: GPT4AllIcon },
  { name: "n8n Automation", level: 95, category: "Gen AI Tooling", icon: N8nIcon },

  // --- AI Frameworks & Concepts ---
  { name: "LangChain", level: 85, category: "AI Frameworks", icon: LangChainIcon },
  { name: "Streamlit", level: 85, category: "AI Frameworks", icon: StreamlitIcon },
  { name: "Chainlit", level: 80, category: "AI Frameworks", icon: ChainlitIcon },
  { name: "Agentic Workflows", level: 85, category: "AI Concepts" }, // Text only
  { name: "RAG Pipelines", level: 80, category: "AI Concepts" },     // Text only
  { name: "Vector Databases", level: 75, category: "AI Concepts" },  // Text only
  { name: "AI Guardrails", level: 85, category: "AI Concepts" },     // Text only

  // --- Identity & Security (IdAM) ---
  { name: "IdAM / IGA", level: 99, category: "Identity & Security" }, // Combined Domain Expertise
  { name: "SailPoint", level: 85, category: "Identity & Security", icon: SailPointIcon },
  { name: "CyberArk", level: 80, category: "Identity & Security", icon: CyberArkIcon },
  { name: "Okta", level: 99, category: "Identity & Security", icon: SiOkta },
  { name: "Cloud Security", level: 95, category: "Identity & Security" },
  { name: "Pen Testing", level: 70, category: "Identity & Security" },

  // --- Languages ---
  { name: "TypeScript", level: 80, category: "Languages", icon: SiTypescript },
  { name: "Python", level: 90, category: "Languages", icon: SiPython },
  { name: "JavaScript", level: 90, category: "Languages", icon: SiJavascript },
  { name: "Java", level: 80, category: "Languages" }, // No icon in Si for standard Java usually, or use generic
  { name: "Go", level: 70, category: "Languages", icon: SiGo },
  { name: "Rust", level: 70, category: "Languages", icon: SiRust },
  { name: "C++", level: 70, category: "Languages", icon: SiCplusplus },
  { name: "PowerShell", level: 90, category: "Languages", icon: PowerShellIcon },
  { name: "HTML5", level: 95, category: "Languages", icon: SiHtml5 },
  { name: "CSS3 / Tailwind", level: 95, category: "Languages", icon: SiTailwindcss },

  // --- Frameworks ---
  { name: "React.js", level: 75, category: "Frameworks", icon: SiReact },
  { name: "Next.js", level: 75, category: "Frameworks", icon: SiNextdotjs },
  { name: "FastAPI", level: 70, category: "Frameworks", icon: SiFastapi },
  { name: "Django", level: 70, category: "Frameworks", icon: SiDjango },
  { name: "Spring Boot", level: 60, category: "Frameworks", icon: SiSpringboot },
  { name: "Express.js", level: 80, category: "Frameworks", icon: SiExpress },

  // --- Databases & Storage ---
  { name: "PostgreSQL", level: 70, category: "Databases", icon: SiPostgresql },
  { name: "MongoDB", level: 85, category: "Databases", icon: MongoDBIcon },
  { name: "Redis", level: 70, category: "Databases", icon: SiRedis },
  { name: "Elasticsearch", level: 75, category: "Databases", icon: ElasticsearchIcon },
  { name: "OpenSearch", level: 70, category: "Databases", icon: OpenSearchIcon },
  { name: "Neo4j", level: 65, category: "Databases", icon: Neo4jIcon },
  { name: "Cassandra", level: 65, category: "Databases", icon: CassandraIcon },
  { name: "DynamoDB", level: 70, category: "Databases", icon: DynamoDBIcon },
  { name: "FAISS", level: 75, category: "Databases", icon: FAISSIcon },
  { name: "Chroma", level: 75, category: "Databases", icon: ChromaIcon },

  // --- Cloud & DevOps ---
  { name: "AWS", level: 70, category: "Cloud & DevOps" }, // Add SiAws if available or keep text
  { name: "Microsoft Azure", level: 90, category: "Cloud & DevOps", icon: MicrosoftAzureIcon },
  { name: "GCP", level: 70, category: "Cloud & DevOps", icon: SiGooglecloud },
  { name: "Azure DevOps", level: 85, category: "Cloud & DevOps", icon: AzureDevOpsIcon },
  { name: "Docker", level: 75, category: "Cloud & DevOps", icon: SiDocker },
  { name: "Kubernetes", level: 80, category: "Cloud & DevOps", icon: SiKubernetes },
  { name: "Jenkins", level: 65, category: "Cloud & DevOps", icon: SiJenkins },
  { name: "Prometheus", level: 75, category: "Cloud & DevOps", icon: PrometheusIcon },
  { name: "Kafka", level: 95, category: "Cloud & DevOps", icon: SiApachekafka },

  // --- Tools & Analytics ---
  { name: "Git & GitHub", level: 90, category: "Tools", icon: SiGithub },
  { name: "Postman", level: 95, category: "Tools", icon: SiPostman },
  { name: "Figma", level: 80, category: "Tools", icon: SiFigma },
  { name: "BigQuery", level: 70, category: "Data Analytics", icon: BigQueryIcon },
  { name: "Power BI", level: 80, category: "Data Analytics", icon: PowerBIIcon },
  { name: "Pandas", level: 85, category: "Data Analytics", icon: SiPandas },
  { name: "NumPy", level: 85, category: "Data Analytics", icon: SiNumpy },

  // --- Creative ---
  { name: "DaVinci Resolve", level: 70, category: "Creative", icon: DaVinciResolveIcon },
  { name: "FL Studio", level: 70, category: "Creative", icon: FLStudioIcon },
];


export const PROJECTS = [
  {
    id: 'crypto-lab',
    title: 'Crypto Lab App',
    description: 'Interactive demonstration of various cryptographic algorithms including AES, RSA, and digital signatures with real-time encryption/decryption.',
    tech: ['React', 'TypeScript', 'Web Crypto API', 'Tailwind CSS'],
    github: 'https://github.com/RajeshHsejar27/Crypto-lab-web-application-using-React-TypeScript-CryptographicLibraries',
    live: 'https://cryptolab-encrypt-decrypt.netlify.app/',
    image: '/crypto-lab.png',
    category: 'security'
  },
  {
    id: 'soc-hunt-suite',
    title: 'SOC Hunt Suite',
    featured: true,
    description: 'A centralized platform designed to proactively monitor and mitigate SSRF, Identity & Access Management threats (IdAM).',
    tech: ['React', 'TypeScript', 'Redis', 'Kafka','GraphQL','Prometheus','Grafana'],
    // github: '',
    // live: '',
    status: 'This is a Work in Progress (Ongoing v2). The live deployment will be available soon.', 
    image: '/soc-hunt-suite.png',
    category: 'security'
  },
  {
    id: 'iam-suite',
    title: 'IAM Suite',
    description: 'An API-first Identity & Access Management solution designed as a modular service platform, exposing secure, well-documented APIs for authentication, authorization, provisioning, and governance.',
    tech: ['React', 'TypeScript', 'Redis', 'Kafka','GraphQL','API','Rate limiting','RBAC'],
    // github: '',
    // live: '',
    status: 'This project is currently in active development. Stay tuned for the live release!',
    image: '/iam-suite.png',
    category: 'security'
  },
  {
    id: 'blog-cms',
    title: 'Blog CMS App',
    featured: true,
    description: 'A beautiful, production-ready blog CMS built with Next.js 14, featuring a forest-themed design that connects people through storytelling.',
    tech: ['Next.js', 'React 18', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/RajeshHsejar27/BlogCMS-using-Next.js',
    live: 'https://the-venture-blog.netlify.app/',
    image: '/blog-cms.png',
    category: 'web'
  },
  {
    id: 'personal-document-assistant',
    title: 'Personal Documentation Assistant',
    description: 'A local, offline-first GUI application for collecting daily notes and images, generating AI-powered summaries using local language models, and exporting beautifully formatted Markdown and PDF reports.',
    tech: ['Tkinter', 'GPT4All', 'ReportLab', 'Python'],
    github: 'https://github.com/RajeshHsejar27/Document-Generator-Python-App-using-LLM-Models-and-Tkinter',
    // live: '',
    status: 'This is a local AI project built with Python & Local LLM. Please check the GitHub repository to run it locally.',
    image: '/personal-document-assistant.png',
    category: 'aI'
  },
  {
    id: 'xpense-tracker',
    title: 'Xpense Tracker',
    description: 'A personal expense tracking application with browser localstorage persist functionality that helps users manage their finances by logging & exporting expenses, categorizing them, and providing insights through visualizations.',
    tech: ['React', 'TypeScript', 'Node.js', 'LocalStorage'],
    github: 'https://github.com/RajeshHsejar27/Expense-tracker-using-React-TypeScript-TailwindCSS',
    live: 'https://xpense-tracker-manager.netlify.app/',
    image: '/xpense-tracker.png',
    category: 'web'
  },
  {
    id: 'utility-hub',
    title: 'Utility Hub',
    description: 'A cool simple destination for essential web utilities like live Weather, Counter, Basic & Advanced Calculator, Calendar.',
    tech: ['React', 'TypeScript', 'Node.js', 'LocalStorage'],
    github: 'https://github.com/RajeshHsejar27/Utility-application-using-React-TypeScript-Vite-TailwindCSS',
    live: 'https://utility-application.netlify.app/',
    image: '/utility-hub.png',
    category: 'web'
  },
  {
  id: 'chronicles',
  title: 'Chronicles',
  description: 'A modern full-stack journaling and storytelling platform with secure auth, rich text editing, and scalable backend APIs.',
  tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  github: 'https://github.com/RajeshHsejar27/Chronicles-using-Python-FastAPI-Redis-Postgresql-Next.js',
  // live: '',
  status: 'This project is currently in active development. Stay tuned for the live release!',
  image: '/chronicles.png',
  category: 'web'
},

{
  id: 'n8n-nodemation',
  title: 'n8n Nodemations',
  featured: true,
  description: 'A collection of AI-powered automation workflows using n8n to build onboarding systems, AI agents, content generators, and business automation pipelines.',
  tech: ['n8n', 'OpenAI APIs', 'Webhooks', 'REST APIs'],
  github: 'https://github.com/RajeshHsejar27/n8n-nodemation-projects',
  // live: '',
  status: 'This is a local automation project built with n8n, API integrations & AI Agents. Please check the GitHub repository to run it locally.',
  image: '/n8n-nodemation.png',
  category: 'aI'
},

{
  id: 'cache-engine',
  title: 'High-Performance Cache Engine',
  description: 'A Redis-compatible in-memory cache engine built in Rust with lock-free reads, LRU/LFU/ARC eviction, AOF persistence, and async networking.',
  tech: ['Rust', 'Tokio', 'DashMap', 'RESP Protocol', 'Benchmarking', 'Flamegraph'],
  github: 'https://github.com/RajeshHsejar27/High-Performance-In-Memory-Cache-Engine--Rust-',
  // live: '',
  status: 'This is a local systems project built in Rust. Please check the GitHub repository to run it locally.',
  image: '/cache-engine.png',
  category: 'systems'
},

{
  id: 'adaptive-task-scheduler',
  title: 'Adaptive Load-Aware Task Scheduler',
  description: 'A Go-based intelligent scheduler that dynamically assigns jobs using real-time CPU, memory, and latency feedback, outperforming static schedulers.',
  tech: ['Go', 'Goroutines', 'Channels', 'Prometheus', 'Distributed Systems'],
  github: 'https://github.com/RajeshHsejar27/Adaptive-Load-Aware-Task-Scheduler',
  // live: '',
  status: 'This is a local systems project built with Go. Please check the GitHub repository to run it locally.',
  image: '/adaptive-task-scheduler.png',
  category: 'systems'
},

{
  id: 'llm-inference',
  title: 'Distributed LLM Inference Platform',
  description: 'A scalable inference system supporting multiple LLMs with request routing, caching, load balancing, and latency-aware processing.',
  tech: ['Python', 'FastAPI', 'Redis', 'Docker'],
  github: 'https://github.com/RajeshHsejar27/Distributed-LLM-Inference-Platform',
  // live: '',
  status: 'This is a local AI project built in Python with Local LLMs. Please check the GitHub repository to run it locally.',
  image: '/llm-inference.png',
  category: 'aI'
},

{
  id: 'creative-mern',
  title: 'Ancient Artifact Marketplace',
  description: 'Mayhem Cart - A themed MERN-stack e-commerce mockup where users trade ancient artifacts using virtual gold coins, featuring secure auth, inventory management, and dynamic transaction flows.',
  tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
  github: 'https://github.com/RajeshHsejar27/Creative-Ecommerce-app-using-MERN-stack',
  live: 'https://the-mayhem-cart.onrender.com/',
  image: '/creative-mern.png',
  category: 'web'
},
{
  id: 'a-river-magnum',
  title: 'A River Magnum',
  description: 'An AI Ecosystem with specific use case cored and built using a combination of custom trained LLMs, vector databases, and custom AI agents.',
  tech: ['ML', 'LLM', 'AI Agents', 'Next.js', 'Python'],
  github: 'https://github.com/RajeshHsejar27/The-Magnum-Opus-AI-eco-system',
  // live: '',
  status: 'This project is currently in active architecture stage. Stay tuned for the phase updates!',
  image: '/a-river-magnum.png',
  category: 'aI'
},
{
  id: 'automated-road-blocker-system',
  title: 'Automated Road Blocker System',
  description: 'An automated signal triggered road blocker system coded and designed using ArduinoMega, Relays, motors, Rack&Pinion mechanism - for blocking the vehicles using a blocker when the red light is lit..',
  tech: ['IoT', 'Arduino Mega', 'Motor control', 'Rack & Pinion', 'Relay circuits'],
  github: 'https://github.com/RajeshHsejar27/Automated-Road-blocker-system-using-Rack-Pinion-mechanism',
  // live: '',
  status: 'This is a local IoT project built with Arduino & physical mechanical components. Please check the GitHub repository to run it locally.',
  image: '/automated-road-blocker-system.png',
  category: 'ioT'
},
{
  id: 'distributed-flash-sale-engine',
  title: 'Distributed Flash sale Engine',
  description: 'A distributed flash-sale ecommerce engine capable of handling 100k+ concurrent users using Rust, Kafka, RabbitMQ, Redis, Node.js, and NGINX with real-time inventory consistency.',
  tech: ['Rust', 'Kafka', 'RabbitMQ', 'Node.js', 'Redis','Nginx'],
  github: 'https://github.com/RajeshHsejar27/Distributed-flash-sale-engine',
  // live: '',
  status: 'This is a local Distributed systems project built with Virtual Machine . Please check the GitHub repository to run it locally.',
  image: '/distributed-flash-sale-engine.png',
  category: 'systems'
},
{
  id: 'offline-pm-suite',
  title: 'Offline PM Suite',
  description: 'An offline project mangement system which is an extensive mangement utility to track project (& related) variables with related use cases embedded.',
  tech: ['Electron', 'ReactFlows', 'React', 'SQLite'],
  github: 'https://github.com/RajeshHsejar27/Project-Management',
  // live: '',
  status: 'This project is currently in active development. Stay tuned for the live release!',
  image: '/offline-pm-suite.png',
  category: 'web'
},
{
  id: 'object-detection-using-yolov3',
  title: 'Object Detection using YOLO v3',
  description: 'This is an object detection project with various methodologies for detection and classification of images from picture,video and realtime.',
  tech: ['Python', 'YOLOv3', 'Jupyter Notebook', 'Node.js', 'JWT'],
  github: 'https://github.com/RajeshHsejar27/Object-Detection-using-YOLO-v3',
  // live: '',
  status: 'This is a local machine learning project ran in Jupyter notebook with YOLO models. Please check the GitHub repository to run it locally.',
  image: '/object-detection-using-yolov3.png',
  category: 'mL'
},
{
  id: 'python-keylogger',
  title: 'Basic Python Keylogger',
  description: 'A python based keylogger which records keystrokes until Esc key is pressed and send it to a mail.',
  tech: ['Python', 'Keystroke captures', 'SMTP'],
  github: 'https://github.com/RajeshHsejar27/Basic-Keylogger-using-Python-',
  // live: '',
  status: 'This is a local project ran with Python. Please check the GitHub repository to run it locally.',
  image: '/python-keylogger.png',
  category: 'security'
},
{
  id: 'goal-keeper-app',
  title: 'Goal keeper App',
  description: 'This is a Goal keeper app based on React Native. This app isnt set to deployment, yet designed with complete interface. Works on Android.',
  tech: ['ReactNative', 'Expo Go'],
  github: 'https://github.com/RajeshHsejar27/Goal-Keeper-App-using-React-Native',
  // live: '',
  status: 'This is a local react native project. Please check the GitHub repository to run it locally & build the apk.',
  image: '/goal-keeper-app.png',
  category: 'android'
},



];
