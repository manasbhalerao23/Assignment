'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useStore } from '@/store/useStore';
import { formatDate, getStatusColor, calculateResponseRate } from '@/lib/utils';
import { Campaign } from '@/types';
import { Play, Pause, Edit, Trash2, MoreHorizontal, Target } from 'lucide-react';
import { toast } from 'sonner';

async function fetchCampaigns() {
  const response = await fetch('/api/campaigns');
  if (!response.ok) {
    throw new Error('Failed to fetch campaigns');
  }
  return response.json();
}

async function updateCampaignStatus(campaignId: number, status: string) {
  const response = await fetch(`/api/campaigns/${campaignId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error('Failed to update campaign status');
  }
  return response.json();
}

export function CampaignsTable() {
  const { campaignFilters, openModal, selectedCampaigns, toggleCampaignSelection } = useStore();
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['campaigns', campaignFilters, sortBy, sortOrder],
    queryFn: fetchCampaigns,
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ campaignId, status }: { campaignId: number; status: string }) => 
      updateCampaignStatus(campaignId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
      queryClient.invalidateQueries({ queryKey: ['campaign-stats'] });
      toast.success('Campaign status updated successfully');
    },
    onError: () => {
      toast.error('Failed to update campaign status');
    },
  });

  const handleStatusToggle = (campaign: Campaign) => {
    const newStatus = campaign.status === 'active' ? 'paused' : 'active';
    updateStatusMutation.mutate({ campaignId: campaign.id, status: newStatus });
  };

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center text-red-600">
          Error loading campaigns. Please try again.
        </div>
      </Card>
    );
  }

  const campaigns = data?.data || [];

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
              <TableHead>Campaign Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Leads</TableHead>
              <TableHead>Successful</TableHead>
              <TableHead>Response Rate</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  {Array.from({ length: 9 }).map((_, cellIndex) => (
                    <TableCell key={cellIndex}>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : campaigns.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="h-32 text-center">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <Target className="h-12 w-12 text-gray-400" />
                    <p className="text-gray-500">No campaigns found</p>
                    <p className="text-sm text-gray-400">
                      Create your first campaign to get started
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              campaigns.map((campaign: Campaign) => {
                const responseRate = calculateResponseRate(campaign.successfulLeads, campaign.totalLeads);
                const progress = campaign.totalLeads > 0 ? (campaign.successfulLeads / campaign.totalLeads) * 100 : 0;

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
                      <div>
                        <div className="font-medium text-gray-900">{campaign.name}</div>
                        {campaign.description && (
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {campaign.description}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{campaign.totalLeads}</TableCell>
                    <TableCell className="font-medium text-green-600">
                      {campaign.successfulLeads}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{responseRate}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-full max-w-20">
                        <Progress value={progress} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {formatDate(campaign.createdAt)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleStatusToggle(campaign)}
                          disabled={updateStatusMutation.isPending}
                          title={campaign.status === 'active' ? 'Pause campaign' : 'Resume campaign'}
                        >
                          {campaign.status === 'active' ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openModal('edit', campaign)}
                          title="Edit campaign"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openModal('delete', campaign)}
                          title="Delete campaign"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}