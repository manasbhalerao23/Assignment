'use client';

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--landingpage-background)] dark:text-white pt-16 text-gray-900 border-t border-gray-600 dark:border-gray-400 relative overflow-visible">
      <div className="container mx-auto px-4 relative z-20">
        {/* Mobile Footer */}
        <div className="md:hidden text-center py-8">
          <Image
            alt="Linkbird Logo"
            loading="lazy"
            width={150}
            height={61}
            className="mb-4 mx-auto dark:hidden"
            src="https://linkbird.ai/images/linkbird-light-logo.svg"
          />
          <Image
            alt="Linkbird Logo"
            loading="lazy"
            width={150}
            height={61}
            className="mb-4 mx-auto hidden dark:block"
            src="https://linkbird.ai/images/linkbird-dark-logo.svg"
          />
          <p className="text-lg mb-2">Automate Your B2B LinkedIn Outreach</p>
          <p className="text-lg mb-6">
            Made with <span className="text-red-500">❤️</span> by Sales Leaders
          </p>
          <a href="/dashboard">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 bg-[#1B54CE] text-white hover:bg-[#1B54CE]/90 w-full max-w-xs mb-8">
              Get Started Now
            </button>
          </a>

          {/* Mobile Links */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-4 text-[15px]">
                <li><a href="/dashboard" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Login</a></li>
                <li><a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Affiliate</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-4 text-[15px]">
                <li><a href="https://calendly.com/youseai/call" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact Us</a></li>
                <li><a href="mailto:support@linkbird.ai" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Help & Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Roadmap</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Blogs</a></li>
              </ul>
            </div>
          </div>

          {/* Legal section*/}
          <div className="mb-8 text-[15px]">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-4">
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Terms & Conditions</a></li>
              <li><a href="/fair-use-policy" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Fair Use Policy</a></li>
              <li><a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/company/linkbirdai/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9}></rect>
                <circle cx={4} cy={4} r={2}></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:flex md:justify-between md:items-start gap-8">
          {/* Left Side */}
          <div className="flex-1">
            <Image alt="Linkbird Logo" width={150} height={61} src="https://linkbird.ai/images/linkbird-light-logo.svg" className="mb-4 dark:hidden"/>
            <Image alt="Linkbird Logo" width={150} height={61} src="https://linkbird.ai/images/linkbird-dark-logo.svg" className="mb-4 hidden dark:block"/>
            <p className="mb-2 font-[19px]">Automate Your B2B LinkedIn Outreach</p>
            <p className="mb-6 font-[19px]">Made with <span className="text-red-500">❤️</span> by Sales Leaders</p>
            <a href="/dashboard">
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-6 py-2 bg-[#1B54CE] text-white hover:bg-[#1B54CE]/90">
                Get Started Now
              </button>
            </a>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/linkbirdai/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                {/* LinkedIn SVG */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                {/* Twitter SVG */}
              </a>
            </div>
          </div>

          {/* Center & Right Links */}
          <div className="flex-1 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-[15px]">
                <li><a href="/dashboard" className="hover:text-gray-900 dark:hover:text-white">Login</a></li>
                <li><a href="#features" className="hover:text-gray-900 dark:hover:text-white">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 dark:hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Affiliate</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-[15px]">
                <li><a href="https://calendly.com/youseai/call" className="hover:text-gray-900 dark:hover:text-white">Contact Us</a></li>
                <li><a href="mailto:support@linkbird.ai" className="hover:text-gray-900 dark:hover:text-white">Help & Support</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Roadmap</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Blogs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-[15px]">
                <li><a href="/terms" className="hover:text-gray-900 dark:hover:text-white">Terms & Conditions</a></li>
                <li><a href="/fair-use-policy" className="hover:text-gray-900 dark:hover:text-white">Fair Use Policy</a></li>
                <li><a href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-blue-600/30 blur-[70px] z-0 opacity-80" />

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 dark:text-white text-sm z-20 relative mb-4 mt-8">
        LinkBird - LinkedIn automation tool for agencies, sales teams and GTM operators © 2025
      </div>
    </footer>
  );
}
