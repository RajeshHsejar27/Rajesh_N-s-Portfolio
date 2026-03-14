"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import { ChevronDown } from "lucide-react";

const works = [
  {
    role: "Magnum Opus AI Ecosystem | Design Architect & Developer",
    duration: "Feb 2026 - Present",
    points: [
      "Building an AI Ecosystem featuring custom-trained LLMs, vector databases, and autonomous agents for specific core use cases.",
      "Developing a hybrid RAG architecture to support complex domain-specific queries and automation."
    ]
  },
  {
    role: "Project Management Suite | Developer",
    duration: "Feb 2026 - Present",
    points: [
      "Architecting an offline project management utility to track project variables and embedded management use cases.",
      "Focusing on high-performance local data handling and extensive management utility features."
    ]
  },
 
  {
    role: "Distributed LLM Inference Platform | Developer",
    duration: "Jan 2026 - Present",
    points: [
      "Developed a production-style distributed inference system using Python, FastAPI, and Redis for serving local GGUF models.",
      "Implemented a scalable architecture: Client → API Gateway → Cache → Worker Nodes → LLM.",
      "Optimized for low-latency request handling and efficient load balancing across local inference workers."
    ]
  },
  {
    role: "Tech Chronicles | Developer",
    duration: "Jan 2026 - Feb 2026",
    points: [
      "Developed a chronological blogging platform to document and share long-term technical experiences.",
      "Architected the initial version using PostgreSQL, Redis, and FastAPI for efficient data handling.",
      "Successfully refactored the application to leverage a modern tech stack for improved performance and scalability."
    ]
  },
  {
    role: "RAG Chatbot V2 (Production-Ready) | Developer",
    duration: "Jan 2026 - Feb 2026",
    points: [
      "Architected a high-performance, production-ready RAG system utilizing LangGraph for complex stateful agent orchestration.",
      "Integrated Qdrant as a high-speed vector store with PostgreSQL for persistent memory, ensuring data integrity and long-term context retention.",
      "Built a seamless Next.js 14 frontend, optimized for real-time streaming of LLM responses and complex agent-tool interaction."
    ]
  },
  {
    role: "RAG Chatbot V1 (Prototype)| Developer",
    duration: "Jan 2026 - Feb 2026",
    points: [
      "Developed a local, hybrid AI agent platform designed for rapid experimentation with pluggable tools and modular RAG storage.",
      "Leveraged Chainlit for an accelerated, feature-rich conversational UI, significantly reducing development time for new AI agent use cases.",
      "Implemented flexible LangChain tool-calling capabilities that allow the agent to switch dynamically between local inference and external data sources."
    ]
  },
   {
    role: "IAM Support & Maintenance | Engineering Lead",
    duration: "Dec 2025 - Present",
    points: [
      "Managing and developing support for Entra ID, AD, and SQL database automations for 40,000+ identities.",
      "Deciphering and refactoring 25,000+ lines of legacy PowerShell orchestration scripts across 100+ Runbooks.",
      "Leading design decisions on server upgrades, Conditional Access policies, and Data Factory pipelines.",
      "Enhancing system observability by implementing proper logging and verbose modes for synchronization backtracking."
    ]
  },
  {
    role: "Distributed-Flash-Sale-Engine | Developer",
    duration: "Dec 2025 - Feb 2026",
    points: [
      "Engineered a distributed e-commerce engine capable of handling 100k+ concurrent users with real-time inventory consistency.",
      "Tech stack: Rust, Kafka, RabbitMQ, Redis, Node.js, and NGINX. Docker desktop is used for running these tech stack inside its container.",
      "Achieved high throughput and horizontal scalability for high-pressure sales events."
    ]
  },
 
  {
    role: "Distributed Systems & Performance Toolkit | Developer",
    duration: "Oct 2025 - Nov 2025",
    points: [
      "Designed a toolkit to explore database partitioning, sharding strategies, and message-driven workflows.",
      "Validated architectural decisions using Locust for load simulation and Prometheus/Grafana for profiling.",
      "Stack: FastAPI, AsyncIO, PostgreSQL, Cassandra, Redis, Docker, and Kubernetes."
    ]
  },
  {
    role: "Proof of Concepts Development | Developer",
    duration: "Oct 2025 - Dec 2025",
    points: [
      "Successfully delivered 10+ high-impact POCs (out of 30+ total) for services and operations teams w.r.t MS Entra ID.",
      "Documented technical feasibility, cookbooks, and implementation procedures for client stakeholders.",
      "Developed a Spring boot app and utilized workload identity federation between GCP & MS Entra ID",
      "Developed and showcased results on dedicated portals to prove operational benefits."
    ]
  },
   {
    role: "Build Entra ID for B2C Migration | Engineering Lead",
    duration: "Sep 2025 - Present",
    points: [
      "Building a production-ready Entra ID B2C environment from scratch for 80,000+ migrating identities.",
      "Integrating security ecosystem: Conditional Access, Active Directory, Sentinel, ITSM tools, and SSO apps.",
      "Automating MFA migrations and user provisioning using custom PowerShell scripting."
    ]
  },
  {
    role: "High-Performance In-Memory Cache (Rust) | Developer",
    duration: "Aug 2025 - Sep 2025",
    points: [
      "Built a Redis-compatible cache server exploring lock-free concurrency and eviction algorithms (LRU, LFU, ARC).",
      "Implemented TTL handling and append-only persistence using Tokio and DashMap.",
      "Conducted benchmarking and performance profiling using Criterion and Flamegraphs."
    ]
  },
  {
    role: "SOC Prototype Upgrade |  Developer",
    duration: "Aug 2025 - Present",
    points: [
      "Enhancing a plug-and-play Security Operations Center (SOC) prototype to mitigate SSRF attacks and strengthen IAM security posture.",
      "Implementing proactive monitoring and decision-based operations to detect and prevent malicious actor exploitation.",
      "Researching and integrating complex algorithmic functions to improve threat detection and system resilience."
    ]
  },
  {
    role: "OWASP SOC for IdAM | Design Architect & Lead Developer",
    duration: "Aug 2025",
    points: [
      "Led the design and development of an MVP SOC prototype for IdP systems during 'Vibe Coding' week.",
      "Developed a plug-and-play setup for SaaS products to identify risks using complex identification algorithms.",
      "Utilized AI-assisted development (Cursor) to fast-prototype security features and statistical dashboards."
    ]
  },
    {
    role: "The DaVinci Video Project | Editor",
    duration: "Aug 2025",
    points: [
      "Engineered a professional video workflow in DaVinci Resolve, delivering a final product in 5.5 hours.",
      "Integrated HuggingFace.ai for AI-generated intro/outro segments.",
      "Applied a 6-phase plan: Sequencing, Trimming, Effects, Audio Sync, Color Grading, and Final Export."
    ]
  }
  ,
    {
    role: "Xpense Tracker | Developer",
    duration: "Aug 2025",
    points: [
      "Engineered a responsive expense management app featuring real-time data visualization and interactive charting via Recharts.",
      "Implemented complex local data handling, including automatic report conflict resolution and multi-format (CSV/XLSX) exports.",
      "Built a polished user experience with Framer Motion animations and light/dark theme toggling for cross-device usability."
    ]
  }
  ,
  {
    role: "Advanced GenAI for Identity Solutions | IAM Support Developer",
    duration: "Jul 2025 - Present",
    points: [
      "Architecting a conversational GenAI platform specialized for IdAM (OKTA), PAM (CyberArk), and IGA (SailPoint) business solutions.",
      "Focusing on cost reduction and operational efficiency through automated use-case integration.",
      "Implementing industry-best security practices for LLM-based business deployments."
    ]
  },
  {
    role: "CryptoLab | Developer",
    duration: "Jul 2025 - Jul 2025",
    points: [
      "Built an interactive, secure web application for learning and experimenting with fundamental cryptographic concepts.",
      "Developed with React and TypeScript to ensure a modular, type-safe, and highly responsive learning environment.",
      "Integrated modern cryptographic libraries to provide hands-on experimentation with real-world encryption and hashing methods."
    ]
  },
  {
    role: "The Venture Blog | Developer",
    duration: "Jul 2025 - Aug 2025",
    points: [
      "Architected a production-ready CMS using Next.js 14 (App Router) and TypeScript, featuring a nature-inspired design.",
      "Integrated NextAuth.js with Google OAuth to provide secure, seamless authentication for users.",
      "Optimized the platform for storytelling, balancing high-performance modern web standards with an immersive aesthetic."
    ]
  },
  {
    role: "N8N Automation Portfolio | Developer",
    duration: "Jul 2025 - Dec 2025",
    points: [
      "Built an extensive collection of event-driven SaaS workflows using n8n and AI agents.",
      "Automated LinkedIn content pipelines, resume screening, lead generation, and customer support agents.",
      "Demonstrated rapid productization through AI-powered content and management pipelines."
    ]
  },
  {
    role: "Personal Documentation Assistant |  Developer",
    duration: "Jun 2025",
    points: [
      "Developed a privacy-first, offline GUI application for capturing daily notes, images, and AI-powered insights.",
      "Integrated GPT4All and GGUF models to generate automated summaries while ensuring 100% data locality.",
      "Automated the generation of professional Markdown and PDF reports, packaged as a standalone Windows executable."
    ]
  },
  {
    role: "UtilityHub |  Developer",
    duration: "May 2025",
    points: [
      "Built a multi-functional utility suite featuring integrated Weather, Counter, Calculator, and Calendar applications.",
      "Developed complex logic for unit conversions, BMR/BMI health calculations, and real-time weather API integration.",
      "Delivered a highly responsive, type-safe interface using React 18, Vite, and Tailwind CSS for optimized performance."
    ]
  },
  {
    role: "Software Development (Legacy to Rust) | Lead Developer",
    duration: "Apr 2025 - Jun 2025",
    points: [
      "Led the transition of core core components from legacy Java to Rust.",
      "Achieved a 60% performance improvement and resolved critical edge-case system crashes.",
      "Provided detailed benchmarks and configuration documentation for future system scalability."
    ]
  },
  {
    role: "Adaptive Load-Aware Task Scheduler | Developer",
    duration: "Feb 2025",
    points: [
      "Developed a Go-based intelligent task scheduler that dynamically assigns jobs to workers using real-time CPU, memory, and latency feedback.",
      "Leveraged priority queues and concurrency primitives (Goroutines) to outperform round-robin and static schedulers in throughput and resource utilization.",
      "Integrated Prometheus and Grafana for real-time performance monitoring and feedback-driven scheduling adjustments."
    ]
  },
  {
    role: "IAM Support & Development | Engineering Lead",
    duration: "Dec 2024 - Feb 2026",
    points: [
      "Covered Operations and Engineering for 25,000+ identities across 4 OKTA tenants and 6 Active Directory environments.",
      "Configured lifecycle management workflows and audit reporting using ServiceNow ITSM.",
      "Applied industry-best practices for MFA policies and safeguarding privileged identities."
    ]
  },

      {
    role: "Workflow automation support | Developer",
    duration: "Apr 2024 - Sep 2024",
    points: [
      "Architected workflow setups to automate manual L2 and L2.5 activities, redirecting team focus toward high-level L3 tasks like SSO integrations and policy modifications.",
      "Devised 40+ automated workflows for lifecycle management, app provisioning, audit logging, and automated identity cleanups using custom connectors.",
      "Achieved a 60% reduction in operational costs and a 40% increase in productivity through end-to-end process automation."
    ]
  }
  ,
  {
    role: "GenAI for IdAM Business Solutions | IAM Track Lead Developer & UI Support",
    duration: "Jan 2024 - Dec 2024",
    points: [
      "Led a team in developing GenAI Agents for Sailpoint, OKTA, CyberArk, and Entra ID using LangChain.",
      "Integrated four SaaS platforms with a React.js frontend for enhanced UX.",
      "Successfully delivered POC demos to 5+ major clients, focusing on RBAC and sanitized I/O."
    ]
  },

  

    {
    role: "OKTA Support | Operations & Engineering Lead",
    duration: "Nov 2023 - May 2024",
    points: [
      "Provided comprehensive IAM support for 1,500+ users, managing provisioning and application assignments via JIRA ITSM integration.",
      "Utilized Python-based OKTA SDKs to develop Proof of Concepts (POCs) for workflow enhancements and automation.",
      "Successfully executed a project decommissioning phase, providing structured knowledge transfer (KT) and technical documentation to the client."
    ]
  }
  ,
    {
    role: "Mayhem Cart | Developer",
    duration: "Feb 2023 - Apr 2023",
    points: [
      "Developed a full-stack e-commerce application using React.js and MongoDB, featuring a unique storytelling-based 'barter system' for ancient artifacts",
      "Designed and implemented the core platform architecture, refining the UX from a vanilla MVP to a creative, themed interface.",
      "Managed the end-to-end development lifecycle, from initial database schema design to final deployment, gaining deep proficiency in the MERN stack."
    ]
  }
  ,
];

export function WorksTimeline() {
  const [displayCount, setDisplayCount] = useState(6);
  const isExpanded = displayCount >= works.length;

  return (
    /* Removed h-full. Using relative and pb to ensure the button has space */
    <div className="relative space-y-8 pb-10 before:absolute before:inset-0 before:left-5 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-800">
      <AnimatePresence mode="popLayout">
        {works.slice(0, displayCount).map((item, index) => (
          <motion.div 
            key={item.role + index} 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex items-start"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0 z-10 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
            </div>

            <div className="ml-6 w-full p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.role}</h3>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                  {item.duration}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2 leading-relaxed">
                    <span className="text-blue-500 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {!isExpanded && (
        <div className="flex justify-center pt-8">
          <Button 
            variant="outline" 
            onClick={() => setDisplayCount(prev => prev + 5)}
            className="rounded-full px-8 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
          >
            Load More Works <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}