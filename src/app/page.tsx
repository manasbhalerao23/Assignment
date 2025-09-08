'use client';

import Link from 'next/link';
import { DarkModeToggle } from '@/components/darkmodetoggle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useStore } from '@/store/useStore';
import FaqSection from '@/components/faques';
import Footer from '@/components/footer';
import CompareTabe from '@/components/comparetable';
import Pricetable from '@/components/pricetable';

// Reusable scroll animation wrapper
function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const { theme } = useStore();

  const logoSrc =
    theme === 'dark'
      ? 'https://linkbird.ai/images/linkbird-dark-logo.svg'
      : 'https://linkbird.ai/images/linkbird-light-logo.svg';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/90 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg backdrop-blur-md">
          <div className="px-8">
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

              {/* Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/home"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-800 font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/features"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-800 font-medium transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-800 font-medium transition-colors"
                >
                  Pricing
                </Link>
              </nav>

              {/* Auth / Dark Mode */}
              <div className="flex items-center space-x-4">
                  <DarkModeToggle />
                
                <Link
                  href="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-800 px-4 py-2 rounded-md transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>

{/* Main section */}
      <main className="container mx-auto pt-32 pb-10 flex flex-col items-center justify-center relative z-10">
  <div className="flex flex-col items-center text-slate-700 dark:text-[#B6B6B6] relative">
    {/* Background Blur Circle */}
    <div className="absolute w-[95%] h-[35%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/60 dark:bg-blue-600/30 rounded-full blur-[100px] z-10 opacity-80"></div>

    {/* Badge */}
    <div className="mt-16 mb-6 rounded-full border-2 border-blue-500 shadow-lg shadow-blue-500/40 dark:shadow-blue-500/60 text-slate-800 dark:text-[#B6B6B6] px-3 sm:px-5 py-2 text-xs sm:text-sm text-center flex items-center justify-center bg-white/90 dark:bg-gray-900/70">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shield mr-1 text-blue-500"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
      100% Guaranteed - No LinkedIn Suspensions
    </div>


    {/* Title */}
    <h1 className="text-center text-[20px] mb-4 w-full max-w-[1000px] sm:text-4xl md:text-[65px] font-semibold tracking-[-1px] sm:tracking-[-px] md:tracking-[-2px] text-slate-900 dark:text-[#B6B6B6] leading-[1.2] sm:leading-tight px-4">
      Effortless LinkedIn Outreach <br /> 100% Safe and Scalable
    </h1>

    {/* Subtitle */}
    <p className="text-center font-light text-sm sm:text-base md:text-[18px]/[28px] leading-relaxed w-full sm:w-[90%] md:w-[557px] text-slate-800 dark:text-white mb-10">
      Automate LinkedIn outreach securely, generate leads, and boost meetings without any risk of getting banned
    </p>

    {/* CTA Button */}
    <Link href="/dashboard">
      <button className="hover:cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md px-8 bg-[#1B54CE] text-white hover:bg-[#1B54CE]/90 text-sm sm:text-base">
        Get Started Now
      </button>
    </Link>
  </div>
</main>


      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dark:bg-gray-950"></div>
        <div className="relative max-w-7xl mx-auto text-center">

          <ScrollReveal>
            <div className="mb-12 mx-auto max-w-4xl">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700">
                {/* YouTube Thumbnail */}
                <Image
                  src="/landing.webp"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover"
                  priority={true} // load hero image eagerly
                />

                {/* Play Button Overlay */}
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-5xl transition transform hover:scale-110"
                  onClick={() => window.open('https://www.youtube.com/watch?v=eumT0V__GVA', '_blank')}
                  aria-label="Watch video"
                >
                  ▶
                </button>
              </div>
            </div>
          </ScrollReveal>



          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gray-300 bg-clip-text dark:text-transparent text-gray-900">AI-Powered</span> Security and<br />
              Features - <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text dark:text-transparent text-gray-900">No One provides</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover how our AI-driven tools can transform your productivity and streamline your day
            </p>
          </ScrollReveal>


          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ">
  
            {/* Left Side - Features on Scroll */}
            <div className="space-y-12 flex flex-col justify-between">
              <ScrollReveal>
                <div>
                  <h3 className="text-2xl mb-2 bg-gradient-to-t dark:from-gray-500 dark:to-gray-100 from-blue-600 to-gray-700 bg-clip-text text-transparent">
                    Multiple Accounts - Dedicated IPs
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    Manage multiple LinkedIn profiles securely, with each account assigned
                    a unique IP and fingerprint to prevent detection by LinkedIn.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h3 className="text-2xl mb-2 bg-gradient-to-t dark:from-gray-500 dark:to-gray-100 from-blue-600 to-gray-700  bg-clip-text text-transparent">
                    Unlimited Campaigns & Lead Options
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    Create unlimited campaigns and import leads in various ways: use our
                    AI-powered Lead Finder, LinkedIn search, Sales Navigator, or export
                    your own list. The possibilities are endless.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h3 className="text-2xl mb-2 bg-gradient-to-t dark:from-gray-500 dark:to-gray-100 from-blue-600 to-gray-700  bg-clip-text text-transparent">
                    Unified Inbox - No Need to Open LinkedIn
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    Manage and respond to all your LinkedIn messages, leads, and campaigns
                    from one clean inbox without logging in to LinkedIn.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h3 className="text-2xl mb-2 bg-gradient-to-t dark:from-gray-500 dark:to-gray-100 from-blue-600 to-gray-700  bg-clip-text text-transparent">
                    Personalized, Automated Follow-Ups
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    Set smart, personalized follow-up sequences that hit when your leads
                    are most likely to engage and respond.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side - Video */}
            <div className="self-stretch flex">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src="https://linkbird.ai/images/feature/msg-sequences.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

{/* Bottom Section: Simple & Easy Steps */}
  <div className="mt-24">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex justify-center w-full">
        <div className="flex justify-center items-center bg-background mb-4 md:mb-[23px]">
          <div className="text-gray-900 dark:text-white flex items-center gap-2 md:gap-[14px] border border-gray-200 dark:border-[#232323] rounded-full px-3 md:px-[13px] py-2 md:py-[9px] text-sm md:text-base">
            Learn How it Works
          </div>
        </div>
      </div>

      <div className="text-center mb-6 md:mb-12">
        <h2 className="p-1.5 font-semibold text-3xl sm:text-4xl md:text-6xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4 mx-auto bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-[#FFFFFF] dark:to-[#999999] px-2 md:px-0">
          Simple &amp; Easy Steps
          <br className="hidden md:block m-1" />
          <span className="block md:inline">to Grow your Business</span>
        </h2>
        <p className="font-normal text-sm sm:text-base md:text-[22px]/[30px] text-gray-700 dark:text-white max-w-2xl mx-auto px-4 md:px-0">
          Connect multiple LinkedIn accounts, <br className="hidden md:block" />
          add leads, and launch campaigns with ease
        </p>
      </div>

      {/* 3-Step Cards */}
      <div className="flex flex-wrap justify-center gap-6">
      <div className="relative border bg-gray-50 dark:bg-[#060C14] rounded-2xl p-6 shadow-lg w-[350px] h-[450px]">
      {/* Floating avatars */}
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 4, repeat: Infinity, repeatType: "mirror" }}
        >
      <div className="absolute top-6 left-6 flex items-center space-x-2 bg-gray-800 dark:bg-[#0f1a30] px-3 py-2 rounded-xl shadow-md">
        <Image
          src="/2.webp"
          alt="Rik Brown"
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-white font-semibold text-sm">Rik Brown</p>
          <p className="text-gray-400 text-xs">Data Analyst</p>
        </div>
      </div>
      </motion.div>

        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, repeat: Infinity, repeatType: "mirror" }}
        >
      <div className="absolute top-20 right-6 flex items-center space-x-2 bg-[#0f1a30] px-3 py-2 rounded-xl shadow-md">
        <Image
          src="/3.webp"
          alt="Emily John"
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-white font-semibold text-sm">Emily John</p>
          <p className="text-gray-400 text-xs">Developer</p>
        </div>
      </div>
      </motion.div>

        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, repeat: Infinity, repeatType: "mirror" }}
        >
      <div className="absolute top-40 left-12 flex items-center space-x-2 bg-[#0f1a30] px-3 py-2 rounded-xl shadow-md">
        <Image
          src="/4.webp"
          alt="John Smith"
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-white font-semibold text-sm">John Smith</p>
          <p className="text-gray-400 text-xs">Designer</p>
        </div>
      </div>
      </motion.div>

      {/* Step content */}
      <div className="absolute bottom-6 left-6 right-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
          Step 1
        </span>
        <h3 className="dark:text-white text-gray-900 text-lg font-bold mt-4">
          Connect Your LinkedIn
        </h3>
        <p className="dark:text-gray-400 text-gray-600 text-sm mt-2 leading-relaxed">
          Securely link one or more LinkedIn profiles. Everything runs safely in
          the background—no shady workarounds.
        </p>
      </div>
    </div>

<div className="w-[350px] bg-gradient-to-b from-white to-gray-50 dark:from-[#060C14] dark:to-[#060C14] border border-gray-200 dark:border-[#3d3d3d] rounded-xl p-6 flex flex-col h-[450px] relative overflow-hidden">
  
  {/* Step 2 mockup card */}
  
  <div className="relative z-10 bg-white dark:bg-[#0F1724] border border-gray-200 dark:border-[#2A2A2A] rounded-lg p-3 sm:p-5 w-[95%] sm:w-[90%] max-w-[320px] shadow-lg shadow-blue-600/10 mx-auto mb-6">
    
    {/* Top row with icon + placeholder text */}
    <div className="flex items-center mb-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
        {/* User Plus Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      </div>
      <div className="ml-3">
        <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-24 mb-2"></div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
      </div>
    </div>

    {/* Import via AI Lead Finder */}
    <div className="relative h-16 mb-3 overflow-hidden rounded-md bg-gray-50 dark:bg-[#161F2E] border border-gray-200 dark:border-[#2A2A2A] p-3 shadow-lg shadow-blue-600/10">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-opacity-20 bg-blue-500">
          {/* Sparkles Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
            <path d="M20 3v4"/>
            <path d="M22 5h-4"/>
            <path d="M4 17v2"/>
            <path d="M5 18H3"/>
          </svg>
        </div>
        <div className="ml-3">
          <div className="text-xs text-gray-500 dark:text-gray-400">Import via</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">AI Lead Finder</div>
        </div>
      </div>
    </div>

    {/* Leads added */}
    <div className="mt-4 flex items-center justify-between">
      <div className="text-xs text-gray-500 dark:text-gray-400">Leads added</div>
      <div className="text-blue-500 font-bold text-lg">+15</div>
    </div>

    {/* Progress bar */}
    <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{ width: "26%" }}></div>
    </div>
  </div>

  {/* Step 2 text */}
  <div className="bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-3 w-fit">
    Step 2
  </div>
  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
    Add Leads Your Way
  </h3>
  <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
    Use Lead Finder to auto-generate leads, drop in a LinkedIn search URL or Sales Navigator—LinkBird does the heavy lifting.
  </p>
</div>



<div className="w-[350px] bg-gradient-to-b from-white to-gray-50 dark:from-[#060C14] dark:to-[#060C14] border border-gray-200 dark:border-[#3d3d3d] rounded-xl p-4 flex flex-col h-[450px]">
      
      <div className="aspect-[4/3] w-full mb-4">
        <div className="relative w-full max-w-md mx-auto h-56 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100/50 to-blue-200/50 dark:from-blue-400/20 dark:to-blue-500/20 opacity-70"
            style={{ transform: "scale(1.00103)" }}
          ></div>

          <div className="flex flex-col items-center relative z-10 w-full px-4 md:px-4">
            <div
              className="border border-gray-200 dark:border-white/10 shadow-lg backdrop-blur-sm bg-blue-100 dark:bg-blue-700/20 text-blue-600 dark:text-blue-400 hover:bg-blue-400 hover:text-black px-4 md:px-5 py-3 md:py-4 rounded-lg w-full max-w-xs"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-1">
                <div className="flex-shrink-0" style={{ transform: "none" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-square-quote w-4 h-4 md:w-5 md:h-5"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M8 12a2 2 0 0 0 2-2V8H8"></path>
                    <path d="M14 12a2 2 0 0 0 2-2V8h-2"></path>
                  </svg>
                </div>
                <span className="text-sm md:text-base font-semibold">Lead Replied</span>
              </div>
              <p className="text-xs md:text-sm text-center text-gray-600 dark:text-gray-300 opacity-80 mt-1">
                Lead has responded to your message
              </p>
            </div>

            <div className="flex space-x-2 md:space-x-3 mt-4 md:mt-8">
              <button
                className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"
                style={{ transform: "scale(1.06928)" }}
              ></button>
              <button
                className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"
                style={{ transform: "scale(1.03424)" }}
              ></button>
              <button
                className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"
                style={{ transform: "scale(1.03749)" }}
              ></button>
              <button
                className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-blue-600"
                style={{ transform: "scale(1.02943)" }}
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white text-xs md:text-sm font-medium py-1 px-3 rounded-full inline-block mb-3 w-fit">
        Step&nbsp;3
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        Launch a Drip Campaign
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base flex-grow">
        Set up a personalized invite, welcome message, and smart follow-ups. Every message can be tailored to your audience.
      </p>
    </div>

    </div>

    

      </div>
      </div>


<CompareTabe/>


{/* Pricing section  */}
<Pricetable/>





         
        </div>
      </section>


<section>
  <FaqSection/>
</section>
      

     
      {/* Footer */}
      <section>
<Footer/>
      </section>
      
    </div>
  );
}
