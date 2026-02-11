// 'use client';

// import { SkillsIconsGrid } from '@/components/about/skills-icons-grid';
// import { SkillsTextGrid } from "@/components/about/skills-icons-grid";
// import { motion } from 'framer-motion';
// import { Layout } from '@/components/layout/layout';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
// import { SKILLS } from '@/lib/constants';

// export default function About() {
//   const skillsByCategory = SKILLS.reduce(
//     (acc, skill) => {
//       if (!acc[skill.category]) {
//         acc[skill.category] = [];
//       }
//       acc[skill.category].push(skill);
//       return acc;
//     },
//     {} as Record<string, typeof SKILLS>
//   );

//   return (
//     <Layout>
//       <div className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-16 text-center"
//           >
//             <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
//               About Me
//             </h1>
//             <p className="mx-auto max-w-3xl text-xl text-gray-600">
//               Passionate software engineer with expertise in modern web
//               technologies, cybersecurity, and AI. Always eager to learn and
//               solve complex problems.
//             </p>
//           </motion.div>

//           <div className="mb-16 grid grid-cols-1 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>My Story</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <p className="text-gray-600">
//   Focused on software engineering using Rust and Python,
//   building system-level and backend-heavy solutions involving
//   performance optimization, database design (relational and
//   NoSQL), concurrency controls, and proof-of-concept
//   workflows, including GenAI- and automation-driven systems
//   developed through iterative experimentation and
//   benchmarking.
// </p>
// <p className="text-gray-600">
//   Delivered extensive full-stack engineering work, designing
//   and building CVE-aware, scalable web applications using
//   React, TypeScript, Java, and Python, emphasizing clean
//   architecture, maintainability, observability, and
//   reliability while supporting real-world traffic and evolving
//   feature requirements.
// </p>
// <p className="text-gray-600">
//   Led and contributed to cybersecurity and IDAM initiatives,
//   architecting and maintaining IAM solutions across on-prem,
//   cloud, and hybrid environments, managing 100,000+ identities
//   across Okta, Microsoft Entra ID, and Active Directory,
//   automating L2/L3 operational workflows.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Experience</CardTitle>
//                 </CardHeader>

//                 <CardContent className="space-y-6">

//                   <div>
//                     <h3 className="mb-2 font-semibold text-gray-900">
//                       Professional Experience
//                     </h3>
//                     <p className="mb-2 text-slate-800">
//                       Freelancing Full-Stack Software Developer
//                     </p>
//                     <p className="text-sm text-gray-500">2019 - Present</p>
//                     <p className="mt-2 space-y-2 text-sm text-gray-600">
//                       <span className="block">
//                         • Designed and evolved multiple end-to-end full-stack
//                         systems using React, TypeScript, Java, and Python,
//                         focusing on clean architecture, scalability,
//                         maintainability, and correctness rather than short-term
//                         feature delivery.
//                       </span>
//                       <span className="block">
//                         • Built and refined GenAI- and LLM-powered systems,
//                         including automation orchestrators, document assistants,
//                         and inference platforms, gaining practical insight into
//                         prompt design, retrieval strategies, system boundaries,
//                         and safe execution patterns.
//                       </span>
//                       <span className="block">
//                         • Emphasized observability and performance understanding
//                         across projects by integrating metrics, logging, and
//                         profiling tools, focusing on how systems behave under
//                         load rather than relying on assumptions.
//                       </span>
//                       <span className="block">
//                         • Gained hands-on experience with relational and NoSQL
//                         databases (PostgreSQL, MongoDB, Cassandra, Redis),
//                         learning data modeling, query optimization, consistency
//                         tradeoffs, race-condition avoidance, and backup/recovery
//                         strategies through real implementations.
//                       </span>
//                       <span className="block">
                        // • Used projects as a practical way to strengthen
                        // computer science fundamentals, including data
                        // structures, algorithms, concurrency models, API design,
                        // and networking basics, directly applying theory to
                        // working systems.
//                       </span>
//                       <span className="block">
//                         • Regularly refactored and improved growing codebases,
//                         learning the importance of clean abstractions, modular
//                         design, testing edge cases, and long-term
//                         maintainability over one-off implementations.
//                       </span>
//                       <span className="block">
//                         • Approached freelancing as a learning-first engineering
//                         journey, continuously experimenting with new languages
//                         (Go, Rust), paradigms, and architectures to build strong
//                         engineering intuition, depth, and adaptability.
//                       </span>
//                     </p>
//                   </div>

//                   {/* Professional Experience - Cyber Security Engineer */}
//                   <div>
//                     <p className="mb-2 text-slate-800">
//                       Systems & CyberSecurity Engineer
//                     </p>
//                     <p className="text-sm text-gray-500">2023 - Present</p>
//                     <p className="mt-2 space-y-2 text-sm text-gray-600">
//                       <span className="block">
//                         • Designed and implemented a Security Operations Center
//                         (SOC) for IdAM systems, applying OWASP principles to
//                         mitigate SSRF and IAM-specific threats, and delivering
//                         real-time analytical dashboards using React.js and
//                         TypeScript.
//                       </span>
//                       <span className="block">
//                         • Refactored and modernized 15,000+ lines of legacy
//                         Powershell automation scripts, improving
//                         maintainability, reliability, and alignment with
//                         industry best practices.
//                       </span>
//                       <span className="block">
//                         • Designed and built end-to-end full-stack systems using
//                         ReactJS, TypeScript, Java, and Python, delivering
//                         CVE-aware applications supporting 10k+ MAU with 99.9%
//                         availability.
//                       </span>
//                       <span className="block">
//                         • Optimized relational and NoSQL data layers, reducing
//                         query latency by 30–40%, eliminating race conditions
//                         through concurrency controls, and implementing automated
//                         backup and recovery strategies.
//                       </span>
//                       <span className="block">
//                         • Automated 40+ L2 and 10+ L3 operational workflows
//                         using PowerShell, APIs, and console-based automation,
//                         reducing manual effort by 50% and achieving 40% cost
//                         savings.
//                       </span>
//                       <span className="block">
//                         • Actively participated in design and code reviews, led
//                         root-cause analysis of complex production issues, and
//                         contributed to comprehensive documentation including
//                         SOPs, architectures (HLD/LLD), automation playbooks, and
//                         knowledge transfers.
//                       </span>
//                       <span className="block">
//                         • Mentored over 100+ cohorts on Identity Access
//                         Management & relevant hands-on lab sessions with
//                         project-based case studies & real-world practical
//                         examples.
//                       </span>
//                     </p>
//                   </div>

//                 </CardContent>
//               </Card>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Education</CardTitle>
//                 </CardHeader>
//                 <CardContent  className="space-y-6">
//                   <div>
//                     <h3 className="mb-2 font-semibold text-gray-900">
//                       Veltech University (Bachelor of Technology)
//                     </h3>
//                     <p className="mb-2 text-gray-600">
//                       Computer Science & Engineering with Cyber Security
//                     </p>
//                     <p className="text-sm text-gray-500">2019 - 2023</p>
//                   </div>

//                   <div>
//                     <h3 className="mb-2 font-semibold text-gray-900">
//                       Maria MHSS (Higher Secondary Education)
//                     </h3>
//                     <p className="mb-2 text-gray-600">
//                       Computer Science with Maths, Physics, Chemistry
//                     </p>
//                     <p className="text-sm text-gray-500">2017 - 2019</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             <Card className="hidden">
//               <CardHeader>
//                 <CardTitle>Skills & Technologies</CardTitle>
//                 <CardDescription>
//                   Here are the technologies I work with and my proficiency
//                   levels
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//                   {Object.entries(skillsByCategory).map(
//                     ([category, skills]) => (
//                       <div key={category}>
//                         <h3 className="mb-4 font-semibold text-gray-900">
//                           {category}
//                         </h3>
//                         <div className="space-y-4">
//                           {skills.map((skill) => (
//                             <div key={skill.name}>
//                               <div className="mb-2 flex items-center justify-between">
//                                 <span className="text-sm font-medium text-gray-700">
//                                   {skill.name}
//                                 </span>
//                                 <span className="text-sm text-gray-500">
//                                   {skill.level}%
//                                 </span>
//                               </div>
//                               <Progress value={skill.level} className="h-2" />
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//             className="mt-12"
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Tech Stacks</CardTitle>
//                 <CardDescription>
//                   A visual snapshot of the technologies I use
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <SkillsIconsGrid />
//                  <SkillsTextGrid />
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

'use client';

import {
  SkillsIconsGrid,
  SkillsTextGrid,
} from '@/components/about/skills-icons-grid';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/layout';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/lib/constants';
import { ReactNode } from 'react';

// --- 1. Reusable "Horizontal Card" Component ---
// This handles the visually pleasing border, radius, and responsive horizontal layout
const PortfolioSection = ({
  title,
  description,
  children,
  delay = 0,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
    >
      {/* The Card Container */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/60 p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950/50 md:p-10">
        {/* Horizontal Layout Wrapper: Flex Column on Mobile, Flex Row on Desktop */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Left Side: Header (30% width) */}
          <div className="flex-shrink-0 md:w-[30%]">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                {title}
              </h2>
              {description && (
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Right Side: Content (70% width) */}
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default function About() {
  return (
    <Layout>
      <div className="bg-gray-50/50 py-20 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              About Me
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Passionate software engineer with expertise in modern web
              technologies, cybersecurity, and AI. Always eager to learn and
              solve complex problems.
            </p>
          </motion.div>

          <div className="space-y-12">
            {' '}
            {/* Gap between main sections */}
            {/* --- SECTION 1: MY STORY --- */}
            <PortfolioSection
              title="My Story"
              description="A brief history of my journey."
              delay={0.1}
            >
              <div className="space-y-4 leading-relaxed text-gray-600 dark:text-gray-300">
<p>
  My technical journey spans system-level and backend engineering with Rust and Python, focusing on performance optimization, database design, concurrency, and GenAI-driven automation, alongside building scalable, CVE-aware full-stack applications (React, TypeScript, Java) with strong emphasis on clean architecture, reliability, and observability; I’ve also led cybersecurity and IDAM initiatives across on-prem, cloud, and hybrid environments, managing 100,000+ identities across Okta, Microsoft Entra ID, and Active Directory while automating critical L2/L3 workflows.
</p>

              </div>
            </PortfolioSection>
            {/* --- SECTION 2: EXPERIENCE --- */}
            <PortfolioSection
              title="Experience"
              description="My professional career track."
              delay={0.2}
            >
              <div className="space-y-10">
                {/* Job 1 */}
                <div className="relative border-l-2 border-gray-200 pl-8 dark:border-gray-800">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200 ring-4 ring-white dark:bg-gray-800 dark:ring-gray-950" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Freelancing Full-Stack Developer
                  </h3>
                  <span className="mt-1 block text-sm font-medium text-blue-600">
                    2019 - Present
                  </span>
                  <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
<p>
  • Designed and evolved multiple end-to-end full-stack systems using React, Next.js, TypeScript, Java, and Python.
</p>
<p>
  • Built and refined GenAI- and LLM-powered systems, including automation orchestrators and inference platforms.
</p>
<p>
  • Emphasized observability and performance understanding using metrics, logging, and profiling.
</p>
<p>
  • Hands-on experience with PostgreSQL, MongoDB, Cassandra, and Redis.
</p>
<p>
  • Used projects to strengthen computer science fundamentals, including DSA, concurrency models, API design, and networking, applying theory to real systems.
</p>

                  </div>
                </div>

                {/* Job 2 */}
                <div className="relative border-l-2 border-gray-200 pl-8 dark:border-gray-800">
                  <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-200 ring-4 ring-white dark:bg-gray-800 dark:ring-gray-950" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Systems & CyberSecurity Engineer
                  </h3>
                  <span className="mt-1 block text-sm font-medium text-blue-600">
                    2023 - Present
                  </span>
                  <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                      <p>
  • Built a SOC for IdAM systems using OWASP principles, mitigating SSRF/IAM threats with real-time dashboards.
</p>
<p>
  • Refactored 15,000+ lines of legacy PowerShell scripts, improving reliability and maintainability.
</p>
<p>
  • Developed full-stack CVE-aware applications supporting 10k+ MAU with 99.9% uptime.
</p>
<p>
  • Optimized SQL/NoSQL systems, reducing latency by 30–40% and resolving concurrency issues.
</p>
<p>
  • Automated 50+ L2/L3 workflows, cutting manual effort by 50% and costs by 40%.
</p>
<p>
  • Led code reviews, RCA, and authored SOPs, HLD/LLD, and automation playbooks.
</p>
<p>
  • Mentored 100+ IAM learners through hands-on, project-based training.
</p>

                  </div>
                </div>
              </div>
            </PortfolioSection>
            {/* --- SECTION 3: EDUCATION --- */}
            <PortfolioSection
              title="Education"
              description="Academic background."
              delay={0.3}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-gray-50 p-5 dark:bg-gray-900">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Veltech University
                  </h3>
                  <p className="text-sm text-gray-500">
                    B.Tech CSE with Cyber Security
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    2019 - 2023
                  </p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5 dark:bg-gray-900">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Maria MHSS
                  </h3>
                  <p className="text-sm text-gray-500">
                    Higher Secondary Education
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    2017 - 2019
                  </p>
                </div>
              </div>
            </PortfolioSection>
            {/* --- SECTION 4: TECH STACKS --- */}
            <PortfolioSection
              title="Tech Stacks"
              description="Tools, Languages & Frameworks."
              delay={0.4}
            >
              <div className="space-y-8">
                {/* Icons Grid */}
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Core Technologies
                  </h3>
                  <SkillsIconsGrid />
                </div>
                <div className="h-px w-full bg-gray-100 dark:bg-gray-800" />{' '}
                {/* Divider */}
                {/* Text Grid */}
                <div>
                  {/* <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Detailed Expertise
                  </h3> */}
                  <SkillsTextGrid />
                </div>
              </div>
            </PortfolioSection>
          </div>
        </div>
      </div>
    </Layout>
  );
}
