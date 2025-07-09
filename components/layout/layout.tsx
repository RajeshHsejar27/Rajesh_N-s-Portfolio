import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { CursorEffects } from '@/components/ui/cursor-effects';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorEffects />
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}