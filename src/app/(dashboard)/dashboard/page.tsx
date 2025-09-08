'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';
import { DarkModeToggle } from '@/components/darkmodetoggle';
import Image from 'next/image';

// Data Types
interface RecentActivity {
  lead: string;
  campaign: string;
  status: string;
  photo: string;
}

interface DashboardData {
  campaigns: { name: string; status: string }[];
  accounts: { name: string; email: string; status: string; requests: string, photo: string }[];
  recentActivity: RecentActivity[];
}

function getStatusClasses(status: string) {
  switch (true) {
    case /pending/i.test(status):
      return "bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-300";
    case /sent/i.test(status):
      return "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900 dark:text-blue-300";
    case /approved/i.test(status):
      return "bg-green-100 text-green-700 border-green-300 dark:bg-green-900 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-300";
  }
}


// API Fetching
async function fetchDashboardData(): Promise<DashboardData | null> {
  try {
    const response = await fetch('/api/dashboard/data');
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

// Fallback Mock Data(for sample) 
const fallbackData: DashboardData = {
  campaigns: [
    { name: 'Just Herbs', status: 'Active' },
    { name: 'Juicy Chemistry', status: 'Active' },
    { name: 'Hyugalife 2', status: 'Active' },
    { name: 'Honeyveda', status: 'Active' },
    { name: 'HempStreet', status: 'Active' },
    { name: 'HealthyHey 2', status: 'Active' },
  ],
  accounts: [
    { name: 'Pulkit Garg', email: 'pulkit@gmail.com', status: 'Connected', requests: '17/30', photo: '/avatar1.png'},
    { name: 'Jivesh Lakhani', email: 'jivesh@gmail.com', status: 'Connected', requests: '10/30' , photo: '/avatar2.png'},
    { name: 'Indrajit Sahani', email: 'indrajit@gmail.com', status: 'Connected', requests: '18/30' , photo: '/avatar1.png'},
    { name: 'Bhavya Arora', email: 'bhavya@gmail.com', status: 'Connected', requests: '6/30' , photo: '/avatar1.png'},
  ],
  recentActivity: [
    {
      lead: 'Om Satyarthy',
      campaign: 'Gynoveda',
      status: 'Pending Approval',
      photo: '/avatar1.png',
    },
    {
      lead: 'Dr. Bhuvaneshwari',
      campaign: 'Gynoveda',
      status: 'Sent 7 mins ago',
      photo: '/avatar2.png',
    },
    {
      lead: 'Surdeep Singh',
      campaign: 'Gynoveda',
      status: 'Sent 7 mins ago',
      photo: '/avatar1.png',
    },
    {
      lead: 'Dilbag Singh',
      campaign: 'Digi Sidekick',
      status: 'Pending Approval',
      photo: '/avatar2.png',
    },
  ],
};

export default function DashboardPage() {
  const { data, isLoading } = useQuery<DashboardData | null>({
    queryKey: ['dashboard-data'],
    queryFn: fetchDashboardData,
  });

  // Will Use API data or fallback mock data
  const dashboardData = data ?? fallbackData;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6 bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      {/* Header part*/}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black dark:text-white">Dashboard</h1>
        <DarkModeToggle />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Side */}
        <div className="space-y-6 lg:col-span-2">
          {/* Campaigns part*/}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {dashboardData.campaigns.map((c, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 border rounded-lg dark:border-gray-700"
                  >
                    <span className="text-sm font-medium dark:text-white">{c.name}</span>
                    <Badge variant="outline" className="text-xs text-green-600 dark:text-green-400 bg-green-100">
                      {c.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Accounts section*/}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">LinkedIn Accounts</CardTitle>
            </CardHeader>
            <CardContent>
               {/* Headings */}
              <div className="hidden md:flex justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-3">
                <span className="flex-1">Account</span>
                <span className="w-20 text-left">Status</span>
                <span className="w-20 text-right">Requests</span>
              </div>
              <div className="space-y-3">
                {dashboardData.accounts.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 border rounded-lg dark:border-gray-700"
                  >
                     <div className='flex items-center gap-3'>
                    <Image src={a.photo ?? '/default-avatar.png'} width={40} height={40} className="w-10 h-10 rounded-full mr-3" alt={a.name} />
                    <div>
                      <p className="text-sm font-medium dark:text-white">{a.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{a.email}</p>
                    </div>
                    </div>
                    <div className="items-center flex gap-3 w-44 ">
                      <Badge variant="outline" className="text-xs dark:border-gray-600 bg-blue-800 text-white gap-1 whitespace-nowrap flex items-center">
                        <CircleCheck size={17}></CircleCheck>
                        {a.status}
                      </Badge>
                      <div className="flex-1">
                        {(() => {
                          const [completed, total] = a.requests.split('/').map(Number);
                          const percentage = Math.min((completed / total) * 100, 100);
                          return (
                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                              <div
                                className="h-2 bg-blue-700 rounded-full transition-all duration-300"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          );
                        })()}
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-left">
                          {a.requests}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Recent Activity part*/}
        <div className="lg:col-span-3">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="dark:text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Headings */}
            <div className="hidden md:flex justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-3">
              <span className="flex-1">Lead</span>
              <span className="flex-1">Campaign</span>
              <span className="w-24 text-right">Status</span>
            </div>
            <div className="space-y-4">
              {dashboardData.recentActivity.map((activity, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 border rounded-lg dark:border-gray-700"
                >
                  <div className='flex items-center gap-3 flex-1'>
                   <Image src={activity.photo} width={40} height={40} className="w-10 h-10 rounded-full" alt={activity.lead} />
                   <p className="text-sm font-medium dark:text-white">{activity.lead}</p>
                   </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate text-left flex-1">{activity.campaign}</p>
                  <Badge variant="outline" className={`text-xs dark:border-gray-600 w-28 text-right whitespace-nowrap ${getStatusClasses(activity.status)}`}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
