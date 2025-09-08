'use client'

export default function Pricetable(){
    return(
        <div>
  <section id="pricing" className="flex flex-col items-center justify-center">
      <div className="container pb-[100px] md:pb-[169px] max-w-6xl">
        {/* Header */}
        <div className="flex justify-center w-full">
          <div className="flex justify-center items-center bg-gray-100 dark:bg-[#060C14] mb-[23px]">
            <div className="text-gray-900 dark:text-white flex items-center gap-[14px] border border-gray-200 dark:border-[#232323] rounded-full px-[13px] py-[9px]">
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
                className="h-4 w-4"
              >
                <path d="M15 4V2" />
                <path d="M15 16v-2" />
                <path d="M8 9h2" />
                <path d="M20 9h2" />
                <path d="M17.8 11.8 19 13" />
                <path d="M15 9h.01" />
                <path d="M17.8 6.2 19 5" />
                <path d="m3 21 9-9" />
                <path d="M12.2 6.2 11 5" />
              </svg>
              Our Affordable Pricing
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-[50px] px-4 md:px-0">
          <h2 className="font-semibold text-[40px]/[44px] md:text-[67px]/[70px] tracking-[-2px] mb-4 mx-auto text-gray-900 dark:text-white">
            Pricing Plans
          </h2>
          <span className="block font-normal text-[18px]/[24px] md:text-[22px]/[28px] w-full md:w-[804px] text-gray-600 dark:text-white max-w-2xl mx-auto">
            Our plans are suitable for all type of individuals and businesses
          </span>
        </div>

        {/* Plan Tabs */}
        <div className="flex justify-center relative mb-8 pt-10">
          <div dir="ltr" data-orientation="horizontal" className="w-fit relative">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="items-center justify-center grid w-full h-12 grid-cols-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-1 rounded-xl border-2 border-blue-100 dark:border-blue-900/20 shadow-lg overflow-visible"
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md rounded-lg px-8 py-2 font-medium"
              >
                Subscription
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm text-gray-700 dark:text-gray-200 rounded-lg px-8 py-2 font-medium relative"
              >
                Lifetime
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-blue-950 bg-gradient-to-r from-blue-300 to-blue-400 border border-blue-700 rounded-md shadow-sm px-3 py-1 whitespace-nowrap">
                  Limited Time
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid items-center align-center px-4 md:px-10 gap-6 md:gap-0 relative grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Free Plan */}
          <div className="flex flex-col overflow-hidden rounded-lg md:rounded-none bg-gradient-to-b from-gray-50 to-white dark:from-[#192130] dark:to-[#060C14] border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-primary/20 transition-all duration-300 md:rounded-l-lg">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Free Plan</h3>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-xl md:text-2xl font-bold">7 Days Free Trial</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 mt-2">
                Explore the platform and get a feel for it
              </p>
            </div>
            <div className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center text-gray-900 dark:text-white">
                Free trial - cancel anytime
              </div>
            </div>
            <div className="p-4 md:p-6 h-auto md:h-80 w-full">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Manage up to 1 LinkedIn account
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Send up to 200 connection requests
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-4 md:p-6 mt-auto">
              <a href="/dashboard">
                <button className="hover:cursor-pointer w-full py-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                  Start 7 Days Free Trial
                </button>
              </a>
            </div>
          </div>

          {/* Basic plan */}
          <div className="flex flex-col overflow-hidden rounded-lg md:rounded-none bg-gradient-to-b from-gray-50 to-white dark:from-[#192130] dark:to-[#060C14] border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-primary/20 transition-all duration-300 md:rounded-l-lg">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Basic Plan</h3>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-xl md:text-2xl font-bold">US $19 / month</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 mt-2">
               Perfect for freelancers and individual owners
              </p>
            </div>
            <div className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center text-gray-900 dark:text-white">
                Billed yearly
              </div>
            </div>
            <div className="p-4 md:p-6 h-auto md:h-80 w-full">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Manage up to 1 LinkedIn account
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Send unlimited connection requests
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Automated follow-up messaging
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    LinkedIn profile and lead data scraping
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    1000 monthly Lead credits
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-4 md:p-6 mt-auto">
              <a href="/dashboard">
                <button className="hover:cursor-pointer w-full py-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                  Start 7 Days Free Trial
                </button>
              </a>
            </div>
          </div>

          {/* Professional Plan */}
          <div className=" transform scale-105 z-10 relative flex flex-col overflow-hidden rounded-lg md:rounded-none bg-gradient-to-b from-gray-50 to-white dark:from-[#192130] dark:to-[#060C14] border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 md:rounded-l-lg">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Professional Plan</h3>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-xl md:text-2xl font-bold">US $49 / month</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 mt-2">
                Ideal for startup teams and growing businesses
              </p>
            </div>
            <div className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center text-gray-900 dark:text-white">
                Billed yearly
              </div>
            </div>
            <div className="p-4 md:p-6 h-auto md:h-80 w-full">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Manage up to 3 LinkedIn account
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Send Unlimited connection requests
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Advanced follow-up workflows
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    In-depth LinkedIn data scraping
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    5000 monthly Lead credits
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-4 md:p-6 mt-auto">
              <a href="/dashboard">
                <button className="hover:cursor-pointer w-full py-2 rounded-md dark:bg-blue-500 text-white bg-blue-600 hover:bg-blue-700 dark:text-white dark:hover:bg-blue-600">
                  Start 7 Days Free Trial
                </button>
              </a>
            </div>
          </div>

          {/* Business plan */}
          <div className="flex flex-col overflow-hidden rounded-lg md:rounded-none bg-gradient-to-b from-gray-50 to-white dark:from-[#192130] dark:to-[#060C14] border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-primary/20 transition-all duration-300 md:rounded-l-lg">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Business Plan</h3>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-xl md:text-2xl font-bold">US $79 / month</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 mt-2">
                Complete solution for large organizations
              </p>
            </div>
            <div className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center text-gray-900 dark:text-white">
                Billed yearly
              </div>
            </div>
            <div className="p-4 md:p-6 h-auto md:h-80 w-full">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Manage up to 5 LinkedIn account
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Send Unlimited connection requests
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Premium follow-up workflows
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    Enterprise-grade LinkedIn data scraping
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 dark:bg-blue-500/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-blue-600 dark:text-blue-500"
                    >
                      <path d="M4 12l4 4 8-8" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-gray-700 dark:text-white">
                    10000 monthly Lead credits
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-4 md:p-6 mt-auto">
              <a href="/dashboard">
                <button className="hover:cursor-pointer w-full py-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                  Start 7 Days Free Trial
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
    )
}