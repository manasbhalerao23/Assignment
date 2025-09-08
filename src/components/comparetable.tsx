'use client'

import Image from "next/image"

export default function CompareTabe(){
    return(
        <div className='p-8'>
                <section id="faq" className="flex flex-col items-center justify-center ">
          <div className="container pb-[60px] md:pb-[169px]">
            <div className="flex justify-center w-full">
              <div className="flex justify-center items-center bg-background dark:bg-[#060C14] mb-[15px] md:mb-[23px]">
                <div className="text-gray-900 dark:text-[#F9F9F9] flex items-center gap-[8px] md:gap-[14px] border border-gray-200 dark:border-[#232323] rounded-full py-[6px] md:py-[9px] px-3 md:px-4 text-sm md:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand h-3 w-3 md:h-4 md:w-4">
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
                  Best Among Competitors
                </div>
              </div>
            </div>
            <div className="text-center mb-6 md:mb-16 px-4 md:px-0">
              <h2 className="font-semibold text-3xl md:text-6xl tracking-[-1px] md:tracking-[-2px] mb-3 md:mb-4 text-gray-900 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-[#FFFFFF] dark:to-[#999999]">
                LinkBird - Your Best Choice <br className="hidden md:block" />
                Affordable and Advanced Features
              </h2>
              <span className="font-normal text-[16px]/[22px] md:text-[22px]/[28px] block text-gray-700 dark:text-[#F9F9F9] mx-auto">
                We compare our product with the best in the markets still - no competition
              </span>
            </div>
            <div className="px-4 md:px-12">
              <div className="overflow-x-auto border-2 border-gray-200 dark:border-[#2D2D2D] rounded-2xl">
                <table className="w-full min-w-[800px] overflow-hidden text-gray-900 dark:text-[#F9F9F9]">
                  {/* Table head & body */}
                  <thead>
                  <tr>
                    <th className="w-1/5 text-left px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Features
                    </th>
                    <th className="w-1/4 px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex justify-center mb-2">
                        <Image
                          src="https://linkbird.ai/images/linkbird-light-logo.svg"
                          alt="Linkbird Logo"
                          width={120}
                          height={20}
                          className="w-[100px] md:w-[120px] dark:hidden"
                        />
                        <Image
                          src="https://linkbird.ai/images/linkbird-dark-logo.svg"
                          alt="Linkbird Logo"
                          width={120}
                          height={20}
                          className="w-[100px] md:w-[120px] hidden dark:block"
                        />
                      </div>
                    </th>
                    <th className="w-1/4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex justify-center mb-2">
                        <Image
                          src="https://linkbird.ai/images/logo/dripify-light.svg"
                          alt="Dripify Logo"
                          width={120}
                          height={20}
                          className="w-[100px] md:w-[120px] dark:hidden"
                        />
                        <Image
                          src="https://linkbird.ai/images/logo/dripify.svg"
                          alt="Dripify Logo"
                          width={120}
                          height={20}
                          className="w-[100px] md:w-[120px] hidden dark:block"
                        />
                      </div>
                    </th>
                    <th className="w-1/4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex justify-center mb-2">
                        <Image
                          src="https://linkbird.ai/images/logo/expandi-light.svg"
                          alt="Expandi Logo"
                          width={120}
                          height={20}
                          className="w-[100px] md:w-[120px] dark:hidden"
                        />
                        <Image
                          src="https://linkbird.ai/images/logo/expandi.svg"
                          alt="Expandi Logo"
                          width={120}
                          height={20}
                          className="w-[100px] md:w-[120px] hidden dark:block"
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 - Price */}
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Price
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D] text-center">
                      <span className="text-xl md:text-2xl font-bold mr-1">$19</span>
                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-300">per user</span>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D] text-center">
                      <span className="text-xl md:text-2xl font-bold mr-1">$59</span>
                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-300">per user</span>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D] text-center">
                      <span className="text-xl md:text-2xl font-bold mr-1">$99</span>
                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-300">per user</span>
                    </td>
                  </tr>
        
                  {/* Row 2 - AI Generated Leads */}
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      AI Generated Leads
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                          Included <span className="text-gray-500 dark:text-gray-300 text-xs md:text-sm">(Auto or search based)</span>
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Manual Only</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Manual Only</span>
                      </div>
                    </td>
                  </tr>
        
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Unlimited Campaigns and Leads
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                          Yes
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Limited By Plan</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Limited Tier</span>
                      </div>
                    </td>
                  </tr>
        
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Instant Welcome Message
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                          With personalization and timing
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">No</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">No</span>
                      </div>
                    </td>
                  </tr>
        
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Unified Dashboard
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                          One view for all accounts
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Account Level Only</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Some Reporting Features</span>
                      </div>
                    </td>
                  </tr>
        
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Set-up time
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                          Under 10 minutes
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Moderate</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Moderate</span>
                      </div>
                    </td>
                  </tr>
        
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Safety and Compliant
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                          Unique IP for each account
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">No Unique IP - Risk of Blocking</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">No IP - Browser Emulation</span>
                      </div>
                    </td>
                  </tr>
        
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Free Trial
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                          No credit card required
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Yes</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Yes</span>
                      </div>
                    </td>
                  </tr>
        
                  <tr>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      Best For
                    </td>
                    <td className="px-4 py-4 bg-blue-50 dark:bg-[#000841] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3 h-3 text-white"
                          >
                            <path d="M5 13l4 4L19 7" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">
                        Startup, agency and solo founders
                        </span>
                      </div>
                    </td>
        
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Individual Users</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 bg-gray-50 dark:bg-[#060c14] border border-gray-200 dark:border-[#2D2D2D]">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                            <path d="M6 6l12 12M6 18L18 6" /> 
                          </svg>
                        </div>
                        <span className="text-sm md:text-base">Enterprise Teams</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}