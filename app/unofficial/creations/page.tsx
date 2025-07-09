'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Music, Video, Book, Play, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const musicTracks = [
  {
    id: 'midnight-dreams',
    title: 'Midnight Dreams',
    genre: 'Ambient',
    duration: '4:32',
    description: 'A soothing ambient track perfect for late-night contemplation',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'digital-sunrise',
    title: 'Digital Sunrise',
    genre: 'Electronic',
    duration: '3:45',
    description: 'Uplifting electronic beats that capture the energy of a new day',
    color: 'from-orange-500 to-pink-500'
  },
  {
    id: 'urban-pulse',
    title: 'Urban Pulse',
    genre: 'Hip-Hop',
    duration: '3:28',
    description: 'A rhythmic journey through the heartbeat of the city',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'ethereal-waves',
    title: 'Ethereal Waves',
    genre: 'Chillout',
    duration: '5:12',
    description: 'Flowing melodies that transport you to another dimension',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'neon-nights',
    title: 'Neon Nights',
    genre: 'Synthwave',
    duration: '4:08',
    description: 'Retro-futuristic sounds inspired by 80s aesthetics',
    color: 'from-pink-500 to-purple-500'
  }
];

const videoEdits = [
  {
    id: 'tech-showcase',
    title: 'Tech Innovation Showcase',
    description: 'A dynamic presentation of cutting-edge technology trends'
  },
  {
    id: 'travel-memories',
    title: 'Travel Memories Montage',
    description: 'Cinematic compilation of beautiful travel destinations'
  },
  {
    id: 'music-visualizer',
    title: 'Music Visualizer Experience',
    description: 'Abstract visual interpretation of musical compositions'
  },
  {
    id: 'product-demo',
    title: 'Product Demo Reel',
    description: 'Professional showcase of product features and benefits'
  },
  {
    id: 'event-highlights',
    title: 'Event Highlights Package',
    description: 'Capturing the best moments from special events'
  }
];

const storyBooks = [
  {
    id: 'digital-dreams',
    title: 'Digital Dreams',
    description: 'A collection of short stories exploring the intersection of technology and humanity in the near future.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    pages: 156,
    genre: 'Science Fiction'
  },
  {
    id: 'whispers-of-time',
    title: 'Whispers of Time',
    description: 'An anthology of tales that weave through different eras, connecting past, present, and future through timeless human emotions.',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
    pages: 203,
    genre: 'Fantasy'
  }
];

export default function Creations() {
  return (
    <Layout>
      <div className="py-20 min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
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
              My Creations
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              A showcase of my artistic endeavors across music, video, and literature.
            </p>
          </motion.div>

          {/* Music Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Music className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Music</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicTracks.map((track, index) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-white">
                            {track.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant="secondary">{track.genre}</Badge>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {track.duration}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost" className={`bg-gradient-to-r ${track.color} text-white hover:opacity-80`}>
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {track.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Video Edits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Video className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Video Edits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoEdits.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-gray-900 dark:text-white">
                          {video.title}
                        </CardTitle>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {video.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Story Books Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <Book className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Story Books</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {storyBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            {book.title}
                          </CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                            <Badge variant="outline">{book.genre}</Badge>
                            <span>{book.pages} pages</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {book.description}
                          </CardDescription>
                          <Button className="mt-4" variant="outline">
                            Read Sample
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}