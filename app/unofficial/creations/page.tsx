'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Music, Video, Book, Play, ExternalLink, Pause  } from 'lucide-react';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRef, useState } from 'react';

const musicTracks = [
  {
    id: 'awaken',
    title: 'Awaken',
    genre: 'Classical & Ambient',
    duration: '5:00',
    description: 'An action rising ambient track perfect for octane scenes and intros',
    color: 'from-blue-500 to-purple-500',
    src:'/awaken.mp3'

  },
  {
    id: '27',
    title: '27',
    genre: 'Electronic/ EDM',
    duration: '3:36',
    description: 'Uplifting electronic beats that starts & gets haunting on the go',
    color: 'from-orange-500 to-pink-500',
    src:'/27.mp3'
  },
  {
    id: 'next-new',
    title: 'Next New',
    genre: 'EDM & Rock',
    duration: '2:15',
    description: 'A rhythmic intro with a blend of electronic and rock elements, shifting extremities',
    color: 'from-green-500 to-blue-500',
    src:'/nextnew.mp3'
  },
  {
    id: 'love-scene-cut',
    title: 'Love Scene Cut',
    genre: 'R&B & Soul',
    duration: '0:53',
    description: 'Cut version of a love scene track, where the tune meets emotion',
    color: 'from-purple-500 to-indigo-500',
    src:'/lovescenecut.mp3'
  },
  {
    id: 'temperamental',
    title: 'Temperamental',
    genre: 'Hip Hop & EDM',
    duration: '4:12',
    description: 'An Octane & temperamental track that blends beats & cinematic transitions',
    color: 'from-pink-500 to-purple-500',
    src:'/temperamental.mp3'
  }
];

const videoEdits = [
  {
    id: 'the-office-ride',
    title: 'The Office Ride',
    description: 'First vlog in my bike (NS400Z). A simple ride to my office. Already reached there but just made a round and back to take vlog. No commentary. Just the sound.',
    link:'https://www.youtube.com/watch?v=cntX-qe4lhc'
  },
  {
    id: 'blend-ride-edit',
    title: 'Blend Ride Edit',
    description: 'A blend of commute rides with my favorite song edit.',
    link:'https://youtu.be/kOlHD_pGoNI'
  },
  {
    id: 'vertical-ride-edit',
    title: 'Vertical Ride Edit',
    description: 'A vertical ride edit of three office commutes with my favorite song, capturing the ride frpm home to all the way to office.',
    link:'https://youtube.com/shorts/TzA3nJPblAc'
  },
  {
    id: 'a-love-story',
    title: 'A Love Story',
    description: 'A Love Story edit featuring my "Venture". The music and dreamy effects resonate with the love that is - "Her".',
    link:'https://youtu.be/XlpYcXbs_1A'
  }
];

const storyBooks = [
  {
    id: 'in-the-action',
    title: 'In The Action',
    description: 'An action packed "lost love found again" story which takes huge twists and turns',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    pages: 300,
    genre: 'Action Romance'
  },
  {
    id: 'love-and-venture',
    title: 'Love And Venture',
    description: 'A Love Story revolving between two souls and a bike.',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
    pages: 100,
    genre: 'Adventure Romance'
  }
];

// ✅ Correct


export default function Creations() {


   const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);



        const handleTogglePlay = (index: number) => {
      const audio = audioRefs.current[index];
      if (!audio) return;

      if (playingIndex === index) {
        // Track is playing → pause it
        audio.pause();
        setPlayingIndex(null);
      } else {
        // Stop previous track if needed
        if (playingIndex !== null) {
          const prevAudio = audioRefs.current[playingIndex];
          prevAudio?.pause();
          prevAudio!.currentTime = 0;
        }
        // Play selected track
        audio.play();
        setPlayingIndex(index);
      }
    };


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
                        <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleTogglePlay(index)}
                              className={`bg-gradient-to-r ${track.color} text-white hover:opacity-80`}
                            >
                              {playingIndex === index ? (
                                <Pause className="h-4 w-4 transition-transform duration-300 transform hover:scale-110"
 />
                              ) : (
                                <Play className="h-4 w-4 transition-transform duration-300 transform hover:scale-110"
 />
                              )}
                            </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Hidden Audio Element */}
                        <audio
                          ref={el => (audioRefs.current[index] = el)}
                          preload="auto"
                        >
                          <source src={track.src} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Video</h2>
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
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        </a>
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Literature</h2>
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