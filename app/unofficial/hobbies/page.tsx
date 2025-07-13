'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Camera, Music, Code, Book, Gamepad2, Palette } from 'lucide-react';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const hobbies = [
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capturing moments and emotions through the lens, exploring different perspectives of the world around us.',
    icon: Camera,
    image: 'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'music',
    title: 'Music Production',
    description: 'Creating tracks that resonate with emotions, experimenting with different genres and sounds using Digital Audio Workstations (DAWs).',
    icon: Music,
    image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'coding',
    title: 'Creative Coding',
    description: 'Building interactive experiences and digital art through code, pushing the boundaries of technology.',
    icon: Code,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'reading',
    title: 'Reading',
    description: 'Diving into different worlds through books, expanding knowledge and imagination one page at a time.',
    icon: Book,
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Exploring virtual worlds and challenging myself with strategic gameplay and immersive storytelling.',
    icon: Gamepad2,
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Crafting narratives and stories that captivate readers, letting them venture into a world of imagination.',
    icon: Book, // Changed from Palette to Book for writing icon
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-pink-500 to-rose-500'
    },
    {
    id: 'riding',
    title: 'Riding',
    description: 'Exploring the world on two wheels, experiencing the freedom and thrill of the open road.',
    icon: Palette, // Replace with Bike icon if available in lucide-react
    image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-lime-500 to-green-500'
    },
];

export default function Hobbies() {
  return (
    <Layout>
      <div className="py-20 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/unofficial">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Unofficial
              </Link>
            </Button>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My Hobbies
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              The activities that fuel my creativity and bring joy to my everyday life.
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 w-max">
              {hobbies.map((hobby, index) => {
                const IconComponent = hobby.icon;
                return (
                  <motion.div
                    key={hobby.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-80"
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 overflow-hidden group">
                      <div className="aspect-video bg-gray-200 overflow-hidden relative">
                        <img 
                          src={hobby.image} 
                          alt={hobby.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${hobby.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                        <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${hobby.color} flex items-center justify-center opacity-90`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900 dark:text-white">
                          {hobby.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {hobby.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Hobbies are the threads that weave the fabric of a fulfilling life."
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}