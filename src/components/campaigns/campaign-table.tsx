'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useStore } from '@/store/useStore';
import { getStatusColor, calculateResponseRate } from '@/lib/utils';
import { Campaign } from '@/types';

// fallback data of campaigns
const fallbackCampaigns: Campaign[] = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  name: `Campaign ${i + 1}`,
  description: `Description for Campaign ${i + 1}`,
  status: i % 2 === 0 ? 'active' : 'paused',
  totalLeads: Math.floor(Math.random() * 50) + 1,
  successfulLeads: Math.floor(Math.random() * 20),
}));

// Simulate API pagination
async function fetchCampaigns({ pageParam = 0 }): Promise<Campaign[]> {
  await new Promise((res) => setTimeout(res, 800)); // simulate network delay
  const pageSize = 10;
  const start = pageParam * pageSize;
  const end = start + pageSize;
  return fallbackCampaigns.slice(start, end);
}

export function CampaignsTable() {
  const { selectedCampaigns, toggleCampaignSelection } = useStore();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Infinite query
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['campaigns'],
    queryFn: fetchCampaigns,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined; // no more pages
      return allPages.length; // next page index
    },
    initialPageParam: 0,
  });

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loadMoreRef.current);
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

  const campaigns = data?.pages.flat() ?? [];

  return (
    <Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Campaign Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Leads</TableHead>
              <TableHead>Request Status</TableHead>
              <TableHead>Connection Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => {
              const responseRate = calculateResponseRate(
                campaign.successfulLeads,
                campaign.totalLeads
              );
              const progress =
                campaign.totalLeads > 0
                  ? (campaign.successfulLeads / campaign.totalLeads) * 100
                  : 0;

              return (
                <TableRow key={campaign.id} className="hover:bg-gray-50">
                  <TableCell>
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedCampaigns.includes(campaign.id)}
                      onChange={() => toggleCampaignSelection(campaign.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-900">{campaign.name}</div>
                    {campaign.description && (
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {campaign.description}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {campaign.totalLeads}
                  </TableCell>
                  <TableCell className="text-yellow-600 font-medium">
                    {campaign.totalLeads} pending
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {responseRate}%
                    <Progress value={progress} className="h-2 mt-1" />
                  </TableCell>
                </TableRow>
              );
            })}

            {/* Infinite Scroll Loader */}
            {hasNextPage && (
              <TableRow>
                <TableCell colSpan={6}>
                  <div
                    ref={loadMoreRef}
                    className="flex justify-center items-center py-4 text-gray-500"
                  >
                    {isFetchingNextPage ? 'Loading more...' : 'Scroll to load more'}
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
