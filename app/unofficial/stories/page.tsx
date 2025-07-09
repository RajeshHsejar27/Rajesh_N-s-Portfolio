'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const timelineData = [
  {
    year: '2014',
    title: 'The Beginning',
    location: 'High School',
    description: 'Started my journey into technology with my first computer programming class. Discovered the magic of creating something from nothing with just lines of code. Built my first "Hello World" program and knew I had found my calling.',
    highlights: ['First programming experience', 'Joined computer club', 'Built first website'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2015',
    title: 'Exploration Phase',
    location: 'Home & School',
    description: 'Dove deeper into web development and started experimenting with different programming languages. Spent countless hours learning HTML, CSS, and JavaScript. Created my first interactive website and felt the thrill of bringing ideas to life.',
    highlights: ['Learned web development basics', 'Created first interactive project', 'Participated in coding competitions'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2016',
    title: 'Creative Awakening',
    location: 'Various Projects',
    description: 'Discovered the intersection of technology and creativity. Started exploring digital art, music production, and creative coding. Realized that programming could be an art form, not just a technical skill.',
    highlights: ['Started music production', 'Explored digital art', 'Built creative coding projects'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2017',
    title: 'Community Building',
    location: 'Online & Local',
    description: 'Began sharing knowledge and connecting with other developers. Started a tech blog and participated in local meetups. Learned the importance of community and collaboration in the tech world.',
    highlights: ['Started tech blog', 'Joined developer communities', 'Mentored junior developers'],
    color: 'from-orange-500 to-red-500'
  },
  {
    year: '2018',
    title: 'Academic Journey',
    location: 'University',
    description: 'Entered university to study Computer Science Engineering. Balanced academic learning with practical projects. Participated in hackathons and won several competitions, building confidence in my abilities.',
    highlights: ['Started university', 'Won hackathon competitions', 'Built major projects'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    year: '2019',
    title: 'Specialization',
    location: 'University & Internships',
    description: 'Focused on web development and cybersecurity. Completed first internship and gained real-world experience. Started contributing to open-source projects and building a professional network.',
    highlights: ['First internship', 'Open-source contributions', 'Cybersecurity focus'],
    color: 'from-teal-500 to-blue-500'
  },
  {
    year: '2020',
    title: 'Adaptation & Growth',
    location: 'Remote Learning',
    description: 'Adapted to remote learning during the pandemic. Used the time to deepen technical skills and explore new technologies. Built several personal projects and improved problem-solving abilities.',
    highlights: ['Remote learning adaptation', 'Personal project development', 'Skill enhancement'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: '2021',
    title: 'Professional Development',
    location: 'Internships & Projects',
    description: 'Completed multiple internships and worked on real-world projects. Gained experience in team collaboration, project management, and client communication. Started building a professional portfolio.',
    highlights: ['Multiple internships', 'Team collaboration', 'Portfolio development'],
    color: 'from-rose-500 to-pink-500'
  },
  {
    year: '2022',
    title: 'Innovation & Leadership',
    location: 'University & Industry',
    description: 'Led several team projects and took on leadership roles. Explored AI and machine learning technologies. Presented research at conferences and gained recognition for innovative solutions.',
    highlights: ['Leadership roles', 'AI/ML exploration', 'Conference presentations'],
    color: 'from-violet-500 to-purple-500'
  },
  {
    year: '2023',
    title: 'Professional Transition',
    location: 'Industry',
    description: 'Graduated from university and transitioned into full-time professional work. Started career as a software engineer, applying years of learning to real-world challenges. Continued learning and growing in the field.',
    highlights: ['University graduation', 'Full-time career start', 'Professional growth'],
    color: 'from-emerald-500 to-teal-500'
  }
];

export default function Stories() {
  const [selectedYear, setSelectedYear] = useState('2023');
  const selectedStory = timelineData.find(item => item.year === selectedYear);

  return (
    <Layout>
      <div className="py-20 min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/unofficial">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Unofficial
              </Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              A journey through time - the milestones, memories, and moments that shaped who I am today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {timelineData.map((item, index) => (
                      <motion.button
                        key={item.year}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => setSelectedYear(item.year)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                          selectedYear === item.year
                            ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{item.year}</span>
                          {selectedYear === item.year && (
                            <Star className="h-4 w-4" />
                          )}
                        </div>
                        <div className="text-sm opacity-90 mt-1">
                          {item.title}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                {selectedStory && (
                  <motion.div
                    key={selectedStory.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${selectedStory.color}`} />
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedStory.color} text-white font-bold text-lg`}>
                            {selectedStory.year}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{selectedStory.location}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">
                          {selectedStory.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <CardDescription className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                          {selectedStory.description}
                        </CardDescription>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Key Highlights
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedStory.highlights.map((highlight, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700"
                              >
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedStory.color}`} />
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {highlight}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Every year is a chapter, every experience is a page, and every moment is a word in the story of life."
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}