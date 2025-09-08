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
import { Skeleton } from '@/components/ui/skeleton';
import { useStore } from '@/store/useStore';
import { getStatusColor } from '@/lib/utils';
import { Lead } from '@/types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const leads = [
  {
    id: 1,
    firstName: "Om",
    lastName: "Satyarthy",
    position: "Regional Head",
    campaign: { name: "Gynoveda" },
    status: "pending",
    statusLabel: "Pending Approval",
    photo: "/avatars/om.png",
    activityColor: "gray",
  },
  {
    id: 2,
    firstName: "Dr. Bhuvaneshwari",
    lastName: "",
    position: "Fertility & Women's Health",
    campaign: { name: "Gynoveda" },
    status: "contacted",
    statusLabel: "Sent 7 mins ago",
    photo: "/avatars/db.png",
    activityColor: "yellow",
  },
  {
    id: 3,
    firstName: "Surdeep",
    lastName: "Singh",
    position: "Building Product-led SEO Growth",
    campaign: { name: "Gynoveda" },
    status: "contacted",
    statusLabel: "Sent 7 mins ago",
    photo: "/avatars/surdeep.png",
    activityColor: "yellow",
  },
  {
    id: 4,
    firstName: "Sunil",
    lastName: "Pal",
    position: "Helping Fashion & Lifestyle Brands",
    campaign: { name: "Digi Sidekick" },
    status: "pending",
    statusLabel: "Pending Approval",
    photo: "/avatars/sunil.png",
    activityColor: "gray",
  },
  {
    id: 5,
    firstName: "Utkarsh K.",
    lastName: "",
    position: "Airbnb Host | Ex-The Skin Story",
    campaign: { name: "The Skin Story" },
    status: "do-not-contact",
    statusLabel: "Do Not Contact",
    photo: "/avatars/utkarsh.png",
    activityColor: "purple",
  },
  {
    id: 6,
    firstName: "Shreya",
    lastName: "Ramakrishna",
    position: "Deputy Manager - Founder’s Office",
    campaign: { name: "Pokonut" },
    status: "followup",
    statusLabel: "Followup 10 mins ago",
    photo: "/avatars/shreya.png",
    activityColor: "blue",
  },
];


async function fetchLeads({ pageParam = 1, filters = {} }) {
  const searchParams = new URLSearchParams({
    page: pageParam.toString(),
    limit: '20',
    ...Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value != null)
    ),
  });

  const response = await fetch(`/api/leads?${searchParams}`);
  if (!response.ok) {
    throw new Error('Failed to fetch leads');
  }
  return response.json();
}

export function LeadsTable() {
  const { leadFilters, openLeadDetail, selectedLeads, toggleLeadSelection } = useStore();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['leads', leadFilters],
    queryFn: ({ pageParam }) => fetchLeads({ pageParam, filters: leadFilters }),
    getNextPageParam: (lastPage) => {
      const { pagination } = lastPage;
      return pagination.page < pagination.totalPages ? pagination.page + 1 : undefined;
    },
    initialPageParam: 1,
  });

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const apileads = data?.pages.flatMap((page) => page.data) || [];
  const displayleads = apileads.length > 0 ? apileads : leads;

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center text-red-600">
          Error loading leads. Please try again.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  onChange={(e) => {
                    // Handle select all
                  }}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Campaign Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-4" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                </TableRow>
              ))
            ) : displayleads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-32 text-center">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="text-gray-500">No leads found</p>
                    <p className="text-sm text-gray-400">
                      Showing sample data instead
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              displayleads.map((lead: Lead) => (
                <TableRow
                  key={lead.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => openLeadDetail(lead.id)}
                >
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => toggleLeadSelection(lead.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className='flex items-centerv gap-1'>
                      <Image
                      src={lead.photo || '/default-avatar.png'}
                      alt={lead.firstName}
                      className='w-10 h-10 rounded-full'
                      width={10}
                      height={10}
                      />
                    <div>
                      <div className="font-medium text-gray-900">
                        {lead.firstName} {lead.lastName}
                      </div>
                      {lead.position && (
                        <div className="text-sm text-gray-500">{lead.position}</div>
                      )}
                    </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">
                      {lead.campaign?.name || '-'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(lead.status)}>
                      {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openLeadDetail(lead.id)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Loading more part*/}
      <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
        {isFetchingNextPage && (
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-linkbird-500"></div>
            <span>Loading more leads...</span>
          </div>
        )}
      </div>
    </Card>
  );
}