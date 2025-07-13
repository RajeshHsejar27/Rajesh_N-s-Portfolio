'use client';

import { motion } from 'framer-motion';
import { Heart, Music, Camera, Book, Bike, Users, Pen, Headphones } from 'lucide-react';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const sections = [
  {
    id: 'hobbies',
    title: 'Hobbies',
    description: 'Things I love to do in my free time',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    href: '/unofficial/hobbies'
  },
  {
    id: 'passion',
    title: 'Passion',
    description: 'What drives me and inspires my creativity',
    icon: Music,
    color: 'from-purple-500 to-indigo-500',
    href: '/unofficial/passion'
  },
  {
    id: 'creations',
    title: 'Creations',
    description: 'My artistic works and creative projects',
    icon: Camera,
    color: 'from-blue-500 to-cyan-500',
    href: '/unofficial/creations'
  },
  {
    id: 'stories',
    title: 'Stories',
    description: 'My journey through the years',
    icon: Book,
    color: 'from-green-500 to-emerald-500',
    href: '/unofficial/stories'
  }
];

export default function Unofficial() {
  return (
    <Layout>
      <div className="py-20 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Unofficial Side
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet my RAW Version!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={section.href}>
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <CardHeader className="text-center pb-4">
                        <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                          {section.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {section.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Button 
                          variant="ghost" 
                          className={`group-hover:bg-gradient-to-r ${section.color} group-hover:text-white transition-all duration-300`}
                        >
                          Explore!
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}