'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Pen, Music, Bike, Heart, Video, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { Layout } from '@/components/layout/layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const passions = [
  {
    id: 'writing',
    title: 'Writing Stories',
    icon: Pen,
    color: 'from-blue-500 to-indigo-500',
    shortDesc: 'Crafting narratives that touch hearts and minds',
    fullDesc: `Writing has always been my escape and my voice. Through stories, I explore the depths of human emotion, create worlds that exist only in imagination, and connect with readers on a profound level. Whether it's a short tale about everyday heroes or an epic fantasy adventure, each story is a piece of my soul translated into words. I believe that stories have the power to change perspectives, heal wounds, and inspire greatness. My writing journey began in childhood with simple diary entries and has evolved into a passion for creating meaningful narratives that resonate with universal human experiences.`
  },
  {
    id: 'music',
    title: 'Making Music',
    icon: Music,
    color: 'from-purple-500 to-pink-500',
    shortDesc: 'Creating melodies that speak when words fall short',
    fullDesc: `Music is the universal language that transcends all barriers. My journey with music production started as a hobby but quickly became a deep passion. I love experimenting with different genres - from ambient electronic soundscapes to energetic pop beats. Each track I create tells a story without words, conveying emotions that sometimes can't be expressed verbally. The process of layering sounds, crafting melodies, and finding the perfect rhythm is both meditative and exhilarating. Music has taught me patience, creativity, and the beauty of imperfection. It's my way of contributing to the soundtrack of people's lives.`
  },
  {
    id: 'biking',
    title: 'Riding Bike',
    icon: Bike,
    color: 'from-green-500 to-emerald-500',
    shortDesc: 'Finding freedom and adventure on two wheels',
    fullDesc: `There's something magical about the wind in your face and the road stretching endlessly ahead. Biking represents freedom to me - the ability to explore new places, challenge my physical limits, and find peace in motion. Whether it's a leisurely ride through city streets or an adventurous mountain trail, each journey teaches me something new about myself and the world around me. Biking has connected me with nature, improved my physical and mental health, and provided countless moments of pure joy. It's not just about the destination; it's about the journey, the people you meet along the way, and the stories you collect with every mile.`
  },
  {
    id: 'helping',
    title: 'Helping Everyone',
    icon: Heart,
    color: 'from-red-500 to-rose-500',
    shortDesc: 'Making a positive impact in others\' lives',
    fullDesc: `The greatest joy in life comes from lifting others up. My passion for helping people stems from a deep belief that we're all connected and that small acts of kindness can create ripple effects of positive change. Whether it's mentoring someone in their career, volunteering for community causes, or simply being there for a friend in need, I find purpose in service to others. This passion has shaped my approach to both personal and professional relationships. I believe that success is not just about personal achievements but about how many lives you've touched positively along the way. Every person helped is a step toward a better world.`
  },
  {
    id: 'content',
    title: 'Content Creation',
    icon: Video,
    color: 'from-orange-500 to-yellow-500',
    shortDesc: 'Sharing knowledge and creativity with the world',
    fullDesc: `In today's digital age, content creation has become my platform for sharing knowledge, creativity, and connecting with like-minded individuals. From educational tutorials to creative showcases, I love the process of ideating, creating, and sharing content that adds value to people's lives. This passion combines my technical skills with storytelling abilities, allowing me to educate, entertain, and inspire others. Content creation has taught me about audience engagement, visual storytelling, and the responsibility that comes with having a platform. It's exciting to see how a single piece of content can spark conversations, solve problems, or inspire someone to pursue their own creative journey.`
  }
];

export default function Passion() {
  const [expandedPassion, setExpandedPassion] = useState<string | null>(null);

  const toggleExpansion = (passionId: string) => {
    setExpandedPassion(expandedPassion === passionId ? null : passionId);
  };

  return (
    <Layout>
      <div className="py-20 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
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
              My Passions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              The driving forces behind my creativity and the things that give my life meaning and purpose.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {passions.map((passion, index) => {
              const IconComponent = passion.icon;
              const isExpanded = expandedPassion === passion.id;
              
              return (
                <motion.div
                  key={passion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 overflow-hidden">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => toggleExpansion(passion.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${passion.color} flex items-center justify-center`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">
                              {passion.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 dark:text-gray-300">
                              {passion.shortDesc}
                            </CardDescription>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="pt-0">
                            <div className={`h-1 bg-gradient-to-r ${passion.color} rounded-full mb-4`} />
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                              {passion.fullDesc}
                            </p>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 italic">
              "Passion is energy. Feel the power that comes from focusing on what excites you."
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}