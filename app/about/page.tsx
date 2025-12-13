'use client';

import { SkillsIconsGrid } from "@/components/about/skills-icons-grid";

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SKILLS } from '@/lib/constants';

export default function About() {
  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate software engineer with expertise in modern web technologies, 
              cybersecurity, and AI. Always eager to learn and solve complex problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    I'm a Professional engineer with a B.Tech degree in Computer Science & Engineering and extensive experience 
                    in building innovative & secure web applications. My journey in technology began with a 
                    curiosity about how things work and has evolved into a career focused on creating 
                    meaningful solutions.
                  </p>
                  <p className="text-gray-600">
                    I specialize in modern web technologies like React, Next.js, and Vue.js, with a 
                    strong focus on cybersecurity and AI applications. I believe in writing clean, 
                    maintainable code and creating accessible user experiences. I got few experiences with 
                    architecting cloud solutions from scratch to deployment.
                  </p>
                  <p className="text-gray-600">
                    When I'm not coding, you can find me exploring any new technologies, contributing to 
                    any entertaining content, or working on personal projects that challenge me to grow 
                    as a developer.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Experience & Education</CardTitle>
                </CardHeader>

                {/* <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Veltech University (Bachelor of Technology)</h3>
                    <p className="text-gray-600 mb-2">Computer Science & Engineering with Cyber Security</p>
                    <p className="text-sm text-gray-500">2019 - 2023</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Experience</h3>
                    <p className="text-gray-600 mb-2">Full-Stack Developer</p>
                    <p className="text-sm text-gray-500">2019 - Present</p>
                    <p className="text-sm text-gray-600 mt-2">
                     • Architected & Implemented Security Operations Centre for IdAM systems following OWASP principles on ServerSide Request Forgery(SSRF) & IAM threats mitigation with real-time analytical visualizations using React.Js, TS,
Framer motion; used intelligent algorithms and optimizations to detect threats & achieved fast response times.
• Designed front-end frameworks for AI-powered systems and implemented input/output sanitization using React.Js.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Cyber Security Engineer</p>
                    <p className="text-sm text-gray-500">2023 - Present</p>
                    <p className="text-sm text-gray-600 mt-2">
                     • Delivered end-to-end L2–L3 support for multiple IdAM projects, from initial setup to maintenance and handover.
                      • Architected IAM solutions across on-premises, cloud, and hybrid environments, ensuring scalability and compliance.
                      • Applied best practices in IDAM, IGA, user lifecycle management, ticket handling, network security, SDLC, RBAC,
                      GDPR compliance, and SDK/API integrations, while managing and securing over 70,000+ identities.
                      • Automated 40+ L2 and 10+ L3 support operations using PowerShell scripts, API integrations & console based
                      workflows which reduced manual workload significantly by 50% & achieved 40% cost savings.
                      • Served as Lead Developer & SME for prototyping Proof-of-Concepts and in building AI agents that accelerated
                      L2/L2.5 functions by 60% in IdAM & IGA Business Use cases.

                    </p>
                  </div>
                </CardContent> */}

                <CardContent className="space-y-6">
                      {/* Education - this is now backup code, moving it to down */}
                      {/* <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Veltech University (Bachelor of Technology)
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Computer Science & Engineering with Cyber Security
                        </p>
                        <p className="text-sm text-gray-500">2019 - 2023</p>
                      </div> */}

                      {/* Professional Experience - Full-Stack Developer */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Professional Experience
                        </h3>
                        <p className="text-gray-600 mb-2">Full-Stack Developer</p>
                        <p className="text-sm text-gray-500">2019 - Present</p>
                        <p className="text-sm text-gray-600 mt-2 space-y-2">
                          <span className="block">
                            • Architected & implemented Security Operations Centre for IdAM systems
                            following OWASP principles on SSRF & IAM threat mitigation with
                            real-time analytical visualizations using React.js, TypeScript, and
                            Framer Motion. Used intelligent algorithms and optimizations to detect
                            threats & achieved fast response times.
                          </span>
                          <span className="block">
                            • Designed front-end frameworks for AI-powered systems and implemented
                            input/output sanitization using React.js.
                          </span>
                        </p>
                      </div>

                      {/* Professional Experience - Cyber Security Engineer */}
                      <div>
                        <p className="text-gray-600 mb-2">Cyber Security Engineer</p>
                        <p className="text-sm text-gray-500">2023 - Present</p>
                        <p className="text-sm text-gray-600 mt-2 space-y-2">
                          <span className="block">
                            • Delivered end-to-end L2–L3 support for multiple IdAM projects, from
                            initial setup to maintenance and handover.
                          </span>
                          <span className="block">
                            • Architected IAM solutions across on-premises, cloud, and hybrid
                            environments, ensuring scalability and compliance.
                          </span>
                          <span className="block">
                            • Applied best practices in IDAM, IGA, user lifecycle management, ticket
                            handling, network security, SDLC, RBAC, GDPR compliance, and SDK/API
                            integrations, while managing and securing over 70,000+ identities.
                          </span>
                          <span className="block">
                            • Automated 40+ L2 and 10+ L3 support operations using PowerShell
                            scripts, API integrations & console-based workflows, reducing manual
                            workload by 50% and achieving 40% cost savings.
                          </span>
                          <span className="block">
                            • Served as Lead Developer & SME for prototyping Proof-of-Concepts and
                            building AI agents that accelerated L2/L2.5 functions by 60% in IdAM &
                            IGA business use cases.
                          </span>
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Veltech University (Bachelor of Technology)
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Computer Science & Engineering with Cyber Security
                        </p>
                        <p className="text-sm text-gray-500">2019 - 2023</p>
                        
                      </div>

                       <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Maria MHSS (Higher Secondary Education)
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Computer Science with Maths, Physics, Chemistry
                        </p>
                        <p className="text-sm text-gray-500">2017 - 2019</p>
                      </div>

                    </CardContent>



              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
                <CardDescription>
                  Here are the technologies I work with and my proficiency levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.entries(skillsByCategory).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
                      <div className="space-y-4">
                        {skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700">
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-500">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Tech Stacks</CardTitle>
                  <CardDescription>
                    A visual snapshot of the technologies I use
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SkillsIconsGrid />
                </CardContent>
              </Card>
            </motion.div>

        </div>
      </div>
    </Layout>
  );
}