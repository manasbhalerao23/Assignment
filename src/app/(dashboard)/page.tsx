'use client';

import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDate, formatDateTime } from '@/lib/utils';
import { BarChart3, Users, Target, TrendingUp } from 'lucide-react';

async function fetchDashboardStats() {
  const response = await fetch('/api/dashboard/stats');
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard stats');
  }
  return response.json();
}

export default function DashboardPage() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: fetchDashboardStats,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
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
      description: `${stats?.convertedLeads || 0} converted`,
      color: 'text-green-600',
    },
    {
      title: 'Response Rate',
      value: `${stats?.averageResponseRate || 0}%`,
      icon: TrendingUp,
      description: 'Average across campaigns',
      color: 'text-purple-600',
    },
    {
      title: 'Active Campaigns',
      value: stats?.activeCampaigns || 0,
      icon: BarChart3,
      description: 'Currently running',
      color: 'text-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      {/* Stats Cards */}
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

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest interactions with your leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats?.recentActivity?.length > 0 ? (
              stats.recentActivity.map((activity: any, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 border rounded-lg"
                >
                  <div className="w-2 h-2 bg-linkbird-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                      {activity.subject && `: ${activity.subject}`}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDateTime(activity.date)}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No recent activity</p>
                <p className="text-sm">Start creating campaigns and leads to see activity here</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
