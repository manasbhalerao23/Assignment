'use client';

import Link from 'next/link';
import { DarkModeToggle } from '@/components/darkmodetoggle';
import Image from 'next/image';
import { useState } from 'react';

export default function Header({ logoSrc }: { logoSrc: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg backdrop-blur-md">
      <div className="px-6 md:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 sm:h-12 md:h-14 w-32 relative">
              <Image
                src={logoSrc}
                alt="LinkBird Logo"
                fill
                className="object-contain hover:cursor-pointer"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/home" className="nav-link hover:text-blue-600">Home</Link>
            <Link href="/features" className="nav-link hover:text-blue-600">Features</Link>
            <Link href="/pricing" className="nav-link hover:text-blue-600">Pricing</Link>
          </nav>

          {/* Right side (Auth / Dark Mode) */}
          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
            <Link href="/login" className="nav-link hover:text-blue-600">Sign In</Link>
            <Link href="/register" className="btn-primary bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-all">Get Started</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <Link href="/home" className="block nav-link hover:text-blue-600">Home</Link>
          <Link href="/features" className="block nav-link hover:text-blue-600">Features</Link>
          <Link href="/pricing" className="block nav-link hover:text-blue-600">Pricing</Link>
          <Link href="/login" className="block nav-link hover:text-blue-600">Sign In</Link>
          <Link href="/register" className="block btn-primary text-center hover:bg-blue-800 bg-blue-700 px-6 py-2 rounded-lg transition-all">Get Started</Link>
          <div className="pt-2">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}

// Tailwind helpers
const navLink =
  "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors";
const btnPrimary =
  "bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 font-medium";
