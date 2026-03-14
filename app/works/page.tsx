'use client';

import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/layout';
import { WorksTimeline } from '@/components/works/works-timeline';

export default function WorksPage() {
  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section matching Contact page style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tighter">
              Work experiences
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A chronological journey through my professional milestones, 
              from distributed systems and cybersecurity to advanced GenAI ecosystems.
            </p>
          </motion.div>

          {/* Timeline Section wrapped in a Framed Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border-2 border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 p-6 md:p-12 shadow-sm backdrop-blur-sm"
          >
            <WorksTimeline />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}