'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';
import { useEffect } from 'react';

export function DarkModeToggle() {
  const { theme, setTheme } = useStore();

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');

    if (theme === 'dark') {
      root.classList.add('dark');
    }
    // if "light", do nothing (light is default)
  }, [theme]);

  const cycleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getThemeIcon = () => {
    return theme === 'dark'
      ? <Moon className="h-4 w-4" />
      : <Sun className="h-4 w-4" />;
  };

  const getThemeLabel = () => {
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="w-9 h-9 hover:cursor-pointer"
      title={`Current theme: ${getThemeLabel()}`}
    >
      {getThemeIcon()}
      <span className="sr-only">
        Toggle theme (current: {getThemeLabel()})
      </span>
    </Button>
  );
}