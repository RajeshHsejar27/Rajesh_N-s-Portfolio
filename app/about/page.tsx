'use client';

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
                    in building innovative web applications. My journey in technology began with a 
                    curiosity about how things work and has evolved into a career focused on creating 
                    meaningful solutions.
                  </p>
                  <p className="text-gray-600">
                    I specialize in modern web technologies like React, Next.js, and Vue.js, with a 
                    strong focus on cybersecurity and AI applications. I believe in writing clean, 
                    maintainable code and creating accessible user experiences.
                  </p>
                  <p className="text-gray-600">
                    When I'm not coding, you can find me exploring new technologies, contributing to 
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
                  <CardTitle>Education & Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bachelor of Technology</h3>
                    <p className="text-gray-600 mb-2">Computer Science & Engineering with Cyber Security</p>
                    <p className="text-sm text-gray-500">2019 - 2023</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Experience</h3>
                    <p className="text-gray-600 mb-2">Full-Stack Developer</p>
                    <p className="text-sm text-gray-500">2019 - Present</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Created & Deployed meaningful Full Stack projects with my learning and experience in web development.
                      Building responsive and user-friendly web applications using React, Next.js, and Tailwind CSS.
                      Developing scalable web applications with modern frameworks and focusing on 
                      security best practices.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Cyber Security Engineer</p>
                    <p className="text-sm text-gray-500">2023 - Present</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Providing L2, L2.5, L3 Support in IAM & IGA Solutions, ensuring secure access management and compliance.
                      Integrated Gen AI with IAM & IGA solutions for business use cases.
                      Training and mentoring junior engineers in IAM practices.
                      Collaboration with cross-functional teams to provide deliverable solutions.
                    </p>
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
        </div>
      </div>
    </Layout>
  );
}