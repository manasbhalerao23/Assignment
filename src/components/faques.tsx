'use client';
import { useState } from 'react';
import { LucidePlus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is LinkedIn automation?",
      answer: "LinkedIn automation refers to using software tools to automate repetitive tasks on LinkedIn such as sending connection requests, messages, and follow-ups. Our tool helps you scale your outreach activities while maintaining a personal touch.",
    },
    {
      question: "How does the free trial work?",
      answer: "We offer a 14-day free trial with no credit card required. During the trial, you can access all features of our Professional plan including connection requests, lead generation, and message sequences. Usage limits apply.",
    },
    {
      question: "How does the AI lead generation work?",
      answer: "Our AI algorithm analyzes your ideal customer profile and searches LinkedIn for matching prospects. It considers factors like industry, job title, company size, and engagement patterns to identify the most relevant leads for your business.",
    },
    {
      question: "What is the Lifetime Deal offer?",
      answer: "Our Lifetime Deal is a one-time payment that gives you permanent access to our platform instead of paying monthly or yearly fees. It includes all Professional plan features plus free updates for life. It's ideal for long-term users.",
    },
    {
      question: "What are the different lead generation methods?",
      answer: "We offer three main methods: 1) AI-based search, which uses our algorithm to find relevant prospects; 2) LinkedIn URL imports, which extract leads from LinkedIn search results; and 3) CSE approach for highly targeted list building based on specific criteria.",
    },
    {
      question: "Can I upgrade or downgrade mt plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time through your account dashboard. When upgrading, you'll only pay the prorated difference. When downgrading, your new plan will take effect at the next billing cycle.",
    },
    {
      question: "How do message sequences work?",
      answer: "After a connection is accepted, our system automatically sends a welcome message followed by a sequence of follow-up messages at specified intervals. These sequences can be personalized with custom variables and conditional logic based on prospect responses.",
    },
    {
      question: "How do you handle my data?",
      answer: "We take data privacy seriously. Your data is encrypted in transit and at rest. We don't sell your information to third parties. Our privacy policy outlines how we collect, use, and protect your data in compliance with GDPR and other regulations.",
    },
    
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="flex flex-col items-center justify-center dark:bg-[#060C14]">
      <div className="container pb-[100px] max-w-6xl">
        <div className="flex justify-center w-full mb-[23px]">
          <div className="flex justify-center items-center w-full dark:bg-[#060C14]">
            <div className="bg-gray-50 dark:bg-[#060C14] text-gray-900 dark:text-white flex items-center gap-[14px] border border-gray-200 dark:border-[#232323] rounded-full px-[13px] py-[12px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M15 4V2"></path>
                <path d="M15 16v-2"></path>
                <path d="M8 9h2"></path>
                <path d="M20 9h2"></path>
                <path d="M17.8 11.8 19 13"></path>
                <path d="M15 9h.01"></path>
                <path d="M17.8 6.2 19 5"></path>
                <path d="m3 21 9-9"></path>
                <path d="M12.2 6.2 11 5"></path>
              </svg>
              Any Questions?
            </div>
          </div>
        </div>

        <div className="text-center mb-[100px]">
          <h2 className="w-full md:w-[819px] font-semibold text-[40px]/[44px] md:text-[67px]/[70px] tracking-[-2px] mb-4 mx-auto text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-[#FFFFFF] dark:to-[#999999]">
            Frequently Asked Question
          </h2>
          <span className="block md:inline font-normal text-[18px]/[24px] md:text-[22px]/[28px] w-full md:w-[814px] text-gray-600 dark:text-white max-w-2xl mx-auto">
            Find quick answers to common questions about our AI Scheduling Assistant.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 md:gap-x-16 gap-y-8 max-w-6xl mx-4 md:mx-12">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-gradient-to-b from-gray-50 to-white dark:from-[rgba(194,213,255,0.10)] dark:to-[rgba(6,12,20,0.10)] rounded-[14px] border border-gray-200 dark:border-[#1F2533] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full px-4 md:px-[26px] py-3 md:py-[18px] text-left font-medium text-secondary-foreground focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-gray-900 dark:text-white text-sm md:text-base">{faq.question}</span>
                  <LucidePlus
                    className={`h-4 md:h-5 w-4 md:w-5 text-gray-900 dark:text-white transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                  />
                </button>
                <div className={`${openIndex === index ? 'block' : 'hidden'} px-4 md:px-6 pb-4`}>
                  <p className="text-gray-600 dark:text-white text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
