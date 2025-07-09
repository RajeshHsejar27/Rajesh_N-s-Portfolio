export const SITE_CONFIG = {
  name: 'Rajesh N',
  title: 'Rajesh N - Software Engineer & Tech Enthusiast',
  description: 'Full-stack developer specializing in React, Next.js, and modern web technologies. Passionate about cybersecurity and AI.',
  url: 'https://rajesh-portfolio.vercel.app',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/RajeshHsejar27',
    linkedin: 'https://www.linkedin.com/in/rajesh-n-b37238237/',
    email: 'nrh27magnum@gmail.com'
  }
};

export const SKILLS = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'Vue.js', level: 75, category: 'Frontend' },
  { name: 'TypeScript', level: 80, category: 'Languages' },
  { name: 'Tailwind CSS', level: 90, category: 'Styling' },
  { name: 'Node.js', level: 70, category: 'Backend' },
  { name: 'Cybersecurity', level: 75, category: 'Security' },
  { name: 'Generative AI', level: 65, category: 'AI/ML' },
  { name: 'Accessibility', level: 80, category: 'UX' }
];

export const PROJECTS = [
  {
    id: 'cryptography-demo',
    title: 'Advanced Cryptography Demo',
    description: 'Interactive demonstration of various cryptographic algorithms including AES, RSA, and digital signatures with real-time encryption/decryption.',
    tech: ['React', 'TypeScript', 'Web Crypto API', 'Tailwind CSS'],
    github: 'https://github.com/RajeshHsejar27/cryptography-demo',
    live: 'https://crypto-demo.vercel.app',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'security'
  },
  {
    id: 'steganography-tool',
    title: 'Steganography Tool',
    description: 'Web-based tool for hiding and extracting secret messages in images using LSB steganography techniques.',
    tech: ['Vue.js', 'Canvas API', 'File API', 'Bootstrap'],
    github: 'https://github.com/RajeshHsejar27/steganography-tool',
    live: 'https://stego-tool.vercel.app',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'security'
  },
  {
    id: 'ai-voice-summarizer',
    title: 'AI Voice-to-Notes Summarizer',
    description: 'Intelligent voice recording app that transcribes speech and generates concise summaries using advanced NLP models.',
    tech: ['Next.js', 'OpenAI API', 'Web Speech API', 'Prisma'],
    github: 'https://github.com/RajeshHsejar27/ai-voice-summarizer',
    live: 'https://voice-summarizer.vercel.app',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ai'
  }
];