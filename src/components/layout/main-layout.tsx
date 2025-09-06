'use client';

import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';
import { Sidebar } from './sidebar';
import { Header } from './header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { sidebar } = useStore();
  const { isCollapsed } = sidebar;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      
      <main
        className={cn(
          'transition-all duration-300 pt-16',
          isCollapsed ? 'ml-16' : 'ml-64'
        )}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
