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
    shortDesc: 'Bleeding ink that tells tales of imagination',
    fullDesc: `Writing is the best expression of my thoughts and emotions. It allows me to create worlds, characters, and stories that resonate with readers. Whether it's fiction, poetry, or content, writing is my way of communicating complex ideas and feelings in a way that connects with others. I find joy in the process of drafting, editing, and refining my work until it feels just right. Writing has taught me discipline, creativity, and the power of words to inspire change and evoke emotions. It's not just a hobby; it's a passion that fuels my soul. I find joy whenever I take my pen and notebook or start to type out a story scene or dialogues. It is an out of the world feeling!`,
  },
  {
    id: 'music',
    title: 'Making Music',
    icon: Music,
    color: 'from-purple-500 to-pink-500',
    shortDesc: 'Creating music that reminiscences emotions',
    fullDesc: `I love music. Whenever I want to imagine a scenario, I listen to my favorite song or music and imagine scenes with it. I tried experimenting with DAWs on how to produce music & got to learn few tricks that helped me create some tracks that I love to hear all the time. I want to create music as how I would love to hear it. It takes patience, mood & right ambience to produce an impactful music, which is hard for me, but still it is worth it when the output comes out exceeding my expectations.`
  },
  {
    id: 'biking',
    title: 'Riding Bike',
    icon: Bike,
    color: 'from-green-500 to-emerald-500',
    shortDesc: 'Venturing on two wheels',
    fullDesc: `There's something magical about the wind in your face and the road stretching endlessly ahead. Biking represents freedom to me - the ability to explore new places without public transport dependencies, challenge my physical limits, and find peace in motion. Whether it's a hectic ride through city streets or an adrenaline filled highway run, each ride teaches me something & whatever small thing I experience in each of it, that becomes a memory. Riding has connected me with nature, improved my physical and mental health, and provided countless moments of pure joy. It's not just about the destination; it's about the journey, the people you meet along the way, and the stories you collect with every mile.`
  },
  {
    id: 'helping',
    title: 'Helping Everyone',
    icon: Heart,
    color: 'from-red-500 to-rose-500',
    shortDesc: 'Making a positive impact in others\' lives',
    fullDesc: `The greatest joy in life comes from lifting others up. My passion for helping people stems from a deep belief that we're all connected and that small acts of kindness can create ripple effects of positive change. Whether it's mentoring someone in their career, volunteering for community causes, or simply being there for a friend in need, I find purpose in service to others. This passion has shaped my approach to both personal and professional relationships. I believe that success is not just about personal achievements but about how many lives you've touched positively along the way. Every person helped is a step toward a better world. At the end of the day, I feel fulfilled when I know that I have made a difference in someone's life, no matter how small it may seem.`
  },
  {
    id: 'content',
    title: 'Content Creation',
    icon: Video,
    color: 'from-orange-500 to-yellow-500',
    shortDesc: 'Sharing cretivity in my style',
    fullDesc: `Creating content - either story, music, video edits, posts to have a mind of fulfillment as well as a potential entertainment for others is one thing I like to do, in my own style. I procrastinate a lot, but when I get the right mood, I create content that I feel is worth sharing. It could be a short video edit or a story picture of the day or a music track that I feel is worth sharing. I love to share my creativity with the world, and content creation allows me to do just that. Consuming content from others but not giving back is also something I don't like. I believe that sharing my creativity not only helps me grow as an individual but also inspires others to express themselves. It's not always about if others like it or not, but the joy of creating something unique and sharing it with the world is what drives me.`
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