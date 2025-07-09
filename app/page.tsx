'use client';

import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { FeaturedProjects } from '@/components/home/featured-projects';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
    </Layout>
  );
}