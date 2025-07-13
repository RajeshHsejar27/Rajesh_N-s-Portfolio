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
    year: '2001',
    title: 'The Beginning',
    location: 'Home',
    description: 'Born. Literally. Cute and stuff (hehe). Was over-whelmed with everything around me. I felt safe & calm only when I knew the faces around me (my family). Pretty much remember getting carried around by my parents to my home- the first time after hospital. Pretty much do not remember anything else which I could see from my Birthday album.',
    highlights: ['First Steps', 'Life membership subscription', 'Lots of crying (sometimes pure manipulation to get what I want)'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2010',
    title: 'The Turning Point',
    location: 'School',
    description: 'My fourth standard in school where I wanted to climb the wall and jump outside to run away to my home. I used to think that, but could not actually climb that wall which was huge for my height that time. Although the memorable thing that happened was, how I got Second rank in the class. That was unbelievable. I actually have Myopia or near-sight vision which requires wearing glasses to see far away- like the black board where they write stuff to learn. I cannot see them and used to rely on whoever sits next to me and take notes and even during test, had to get questions from them or have to sit down near board and take them. Although I learn okayish, during that year, I got Second rank which is an unbelievable feat. Have no idea if others sucked at preparing for the exam or I clutched up (no cockiness implied). But after that, I recieved lot of recognition and respect from fellow classmates and at home. Even though I was not even preparing that much for that year, I started to prepare more as the responsibility grew to show them that it is not my luck.',
    highlights: ['Unexpected Recognition', 'Level up!', 'Started to take studies seriously'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2011',
    title: 'HD Vision',
    location: 'Face',
    description: 'Got spectacles. Great experience. I used to have disbelief that how they can bring clear vision just by some glasses but after wearing them for first time, damn I looked weird with them- but I looked HD weird and everything around was finally rendering in max graphics settings. It is like I got graphics driver update after cave man period - and now I can set preferred Graphics options. Creativity words apart- I loved seeing people clearly, even when they are far & also it helped me seeing TV from far & everything around me as others who have that ability naturally. This helped me with getting notes in school and independency with taking test questions from board (although sometimes they write really small and I have to get near board lol). I loved wearing the specs everywhere and everytime except my sleep. Sometimes I wonder, humans are great for inventing stuff like these.',
    highlights: ['HD Grpahics Upgrade', '120fps Raytracing and rendering', 'Ability to see clearly'],
    color: 'from-purple-500 to-pink-500'
  },
   {
    year: '2012',
    title: 'Not the end of the World - New life',
    location: 'Home & School',
    description: 'A simple year which gave me distinct memories. I got library subscription from my tuition recommendation & went there to read story books and magazines. I loved reading them and imagining the stories in my mind. It was a new experience for me as the format and story telling was very different from the story sections from the school book. I used to spend my holidays going to tuition and read stories. Days went and one day an opportunity came to me to compete in an interschool competition on various genres. I picked Origami as I thought it would be interesting and fun to do. I even got a supplementary that year in a subject on a girl who was making origami crane till she got passed away. After giving my name, I started to learn how to make an origami crane with the help of youtube video, practiced it and mastered it. But that was it. I knew only how make a crane. I knew few other too but they are not competition material. On the day of competition, I made the crane in a big paper and then came back to home. Others did cooler stuff than me. It was a really good experience going outside of school to somewhere to compete. Then I was asked to come to stage one day for winning third prize in Origami competition. It was a good moment. Later that year, I fainted in school one time. I thought I was very weak. I even gave some exams with my poor health condition. Later, after an exam, I went straight to home and fell in bed. Then went to hospital and got to know that I had initial stage Dengue. I got admitted in hospital, defaulting the remaining exams. I even experienced the 12-12-12 day there and wondered if the world will really come to an end. But it did not. And I was sick. I got better. Got back to school soon. Got good grades in the exams I attended and decent marks where I did not attend too. It felt like a new life.',
    highlights: ['Recognition for creativeness', 'Downfall in health', 'Mixed experience'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2014',
    title: 'Passion to Write',
    location: 'Home & School',
    description: 'I started to write stories and imagine more. I wrote stories for an english project and loved my skills and started to write for fun. I got a old-school note book from my father which I used to write my first story. Previously I wrote a story in a notepad which was too by my father. This time I wrote a action adventure story with a target of 33 pages which extended to 100 pages by the end of it. I read it many times and fell in love with myself and my skills. This gave me a passion to write more. I used to play a lot of games in PC, which also inspired me to write more interesting stories and correct the logic mistakes that I make usually in stories.',
    highlights: ['New Passion', 'The best ink that was spilled'],
    color: 'from-orange-500 to-red-500'
  },
  {
    year: '2017',
    title: 'Academic Excellance',
    location: 'School',
    description: 'I became the most loved student in my class, known for sharing knowledge, teaching others & being an intellectual person with friendliness. I was also hated by the back benchers who did not like me because I study well (Brah, wtf). I was very innocent back then (even now *innocent face). I was the class representative for a long time and even got elected once with voting system. That was my perseverance from fourth standard paying off. Besides getting high rank, I just loved talking with my friends and sharing all experiences in the best sarcastic way possible (pinch of cursing, just pinch- trust me *whispers no..). One thing I did was, not learning everything at exam time and just understanding every thing when they were being teached itself. Whenever exam comes, I take the guides and go through each chapter with a perspective of a question setter (how they think which question would be ideal) & read the materials. Even during exams, I write in my own way with words, not like exact book back copy of definitions which most followed. This gave a positive result as I desired & I continued it. Even though this year was the so called future deciding year (10th examination), I was calm and composed. I gave my best & topped the school with 96% which could be easily 100% if I avoided some silly mistakes. I did not care about it as this itself was a dream for many. And coming to personal life, I started to enjoy life a little - thanks to my friends who were there for me.',  
    highlights: ['Good memories', 'Level Up!'],
    color: 'from-indigo-500 to-purple-500'
  },
    {
    year: '2018',
    title: 'Personal Transformation',
    location: 'Home & School',
    description: 'I got inspired from movies and games and personally got motivated to change myself for better version of me. I started working out at home, with balancing academics and new skill development. I started to concentrate on many fields of study and wrote lot of concepts, story scenes and consumed lot of data and information. I really liked getting sculpted, gaining more muscle to have stength to push and pull and work everyday more easily. This also gave some confidence and I had healthy competition with my friends on working out. I started writing a new story too during this period and was writing on a daily basis and gave that to one of my friends to read and he was having fun reading it and was waiting for the next chapter. I was too excited to write more and more. That story was still unfinished as I wanted it to have best mid and final portions which I could not think of currently.',  
    highlights: ['More stories', 'Working out'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    year: '2019',
    title: 'End of an era',
    location: 'School & College',
    description: 'The year where I was going through ups and downs in terms of academy and life. I excelled in exams and also failed for the first time in a unit test which I did not even prepare (mentioning this as I usually score top even if I dont prepare.). Although, I got fed up and decided to give my best, not pushing myself to any stress limit which I was already edging on. Got good marks in final (happy that I did not fail in any). That % was enough for getting into a good private University with decent fees. Other than that I was in dilemma that if I should take engineering or see for any other options related to my passion & not my skill. Then decided to go with skill, as passion can be pursued too alongside. Spent holidays going outside with friends, and talk about stuff, random things & future. Later joined college the mid year with not much expectations. It was like upgraded school experience and was easily adaptable. I could easily make friends even with the intimidating character I developed.',
    highlights: ['Graduated from School', 'Adulthood began', 'New beginnings'],
    color: 'from-teal-500 to-blue-500'
  },
  {
    year: '2020',
    title: 'The Year of Change',
    location: 'Home',
    description: 'Adapted to remote learning during the pandemic. Got laptop for online meetings and used the time to deepen technical skills and explore new technologies in free time. My personal life was also taking a toll this year. Mentally a bad year, also got up quick and strong with all the blockades. Listened well in most lectures and slept in few others. Personally was not satisfied with the final exam conduction through online MCQ, but that too felt like a burden off the chest during that time, so I did not care much. I was more focused on learning new things and exploring my interests. I also started to watch lot of movies and series during this time, which helped me to relax and take my mind off things. I also started to write more, which helped me to express my thoughts and feelings in a better way. Learning from home was not bad, but did not felt great either.',
    highlights: ['Remote learning adaptation', 'Personal development', 'Mental resilience'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: '2022',
    title: 'Professional Development',
    location: 'College',
    description: 'A busy year with learning daily- actually commuting more than learning a day. Adapted to the hard lifestyle of going long distance daily and not ate properly. Was in depression. Yet did not give up on myself. Stayed alone & focused on learning & spending free time productively. Prepared sometimes for placement too. Started to take part in hackathons and coding competitions (that did not go very well, but got some experience). Missed a lot in college life but did not regret it.',
    highlights: ['Upskilling', 'Placement readiness', 'Perseverance'],
    color: 'from-rose-500 to-pink-500'
  },
  {
    year: '2023',
    title: 'New Beginnings',
    location: 'College & Office',
    description: 'The year started with losing few friends and gaining few more which were the best in all 4 years of my college. I finally enjoyed going college to just meet them and spend time together going same classes and going out for lunch. College was so better with them. I was also investing time and did few interviews and campus exams. Got interviewed in 3 companies. Got offer in 2 companies. Selected & joined in 1 company from that. It was a new experience switching to corporate from college. Happy to finally earn and buy whatever I want (mostly necessary things). Loved that sense of freedom and financial independence. Although I aimed higher and was over-qualified for the role, I decided to be there to learn what it may teach me. Even if I start small, I know it leads to something big if I deserve and put efforts for it. Got very good collegues as friends even with my intimidating personality at the beginning. I matured a lot during this year. And this is the year where I got passion on getting a motorcycle.',
    highlights: ['College to Office transition', 'Professional life started', 'Best friends for life'],
    color: 'from-violet-500 to-purple-500'
  },
  {
    year: '2024',
    title: 'Beginning of Venture',
    location: 'Home & Office & The Streets',
    description: 'Work was mild, not heavy & I learned a lot of things. I excelled in Cyber Security IAM & got opportunity to extend the domain to Gen AI with dedicated resources. I stumbled a lot at beginning, but later picked up pace and showed exceeding progress in the integration of Gen AI with IAM Solutions. Even though it was a POC, I learned a lot and teached a lot to fellow team mates. I trained Cohorts too who were getting trained same like I was- in the previous year and I was happy to do it and even learnt and revised some things. Other than that- I dedicated most of my time to learn riding and watched a lot of motovlogs. After lot of days of patience & perseverance, in the mid year, I got the beast - "The Venture" (Bajaj Pulsar NS 400z). Even when I got that I was depressed for some reason & in few days met with an accident where only myself & the bike got hurt (On the first day I took my bike to Office). After more than a month, got the bike back and then started riding more carefully. Increased my motorcycle skills this year even with couple more accidents and a dozen of crashes. Achieved big feats in riding which few people have not had in their whole life. By the end of the year, I got more content with my life.',
    highlights: ['Redlining tachometer', 'Accidents & Crashes', 'Professional growth'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    year: '2025-',
    title: 'New Chapter',
    location: 'Home & Office & Somewhere far',
    description: 'This year is still going on. Have learnt & experienced more in a short time itself. New experiences in professional career, ventures & personal life.. new-never before moments..I am not going to spoil it now. Let the time unwind the fate\'s pages.',
    highlights: ['Favorite memories', 'Learning Hindi', 'Upskilling professionally'],
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