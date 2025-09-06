'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, Users, TrendingUp, Activity } from 'lucide-react';

async function fetchCampaignStats() {
  const response = await fetch('/api/campaigns/stats');
  if (!response.ok) {
    throw new Error('Failed to fetch campaign stats');
  }
  return response.json();
}

export function CampaignStats() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['campaign-stats'],
    queryFn: fetchCampaignStats,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Campaigns',
      value: stats?.totalCampaigns || 0,
      icon: Target,
      description: `${stats?.activeCampaigns || 0} active`,
      color: 'text-blue-600',
    },
    {
      title: 'Total Leads',
      value: stats?.totalLeads || 0,
      icon: Users,
      description: 'Across all campaigns',
      color: 'text-green-600',
    },
    {
      title: 'Avg Response Rate',
      value: `${stats?.averageResponseRate || 0}%`,
      icon: TrendingUp,
      description: 'Last 30 days',
      color: 'text-purple-600',
    },
    {
      title: 'Active Campaigns',
      value: stats?.activeCampaigns || 0,
      icon: Activity,
      description: 'Currently running',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
