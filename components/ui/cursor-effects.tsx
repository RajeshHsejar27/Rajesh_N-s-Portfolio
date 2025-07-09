'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export function CursorEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let particleId = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create new particle
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: Math.random() * 4 + 2,
      };

      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.02,
          size: particle.size * 0.98,
        })).filter(particle => particle.opacity > 0)
      );
      animationFrame = requestAnimationFrame(animateParticles);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrame = requestAnimationFrame(animateParticles);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [mounted]);

  if (!mounted) return null;

  const cursorColor = theme === 'dark' ? '#60a5fa' : '#3b82f6';
  const glowColor = theme === 'dark' ? 'rgba(96, 165, 250, 0.6)' : 'rgba(59, 130, 246, 0.6)';

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: `2px solid ${cursorColor}`,
          backgroundColor: 'transparent',
          boxShadow: `0 0 20px ${glowColor}, inset 0 0 20px ${glowColor}`,
          transition: 'all 0.1s ease-out',
        }}
      />

      {/* Particle Trail */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: cursorColor,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${glowColor}`,
          }}
        />
      ))}

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}