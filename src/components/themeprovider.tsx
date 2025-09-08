'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore'; // Adjust path as needed

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useStore((state) => state.theme); // 'light' | 'dark'

  useEffect(() => {
    const root = document.documentElement;

    // Remove any existing theme classes
    root.classList.remove('light', 'dark');

    // Apply the selected theme
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
