'use client';

import { useQuery } from '@tanstack/react-query';
import { CampaignsTable } from '@/components/campaigns/campaign-table';
import { CampaignStats } from '@/components/campaigns/campaign-stats';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function CampaignsPage() {
  const { openModal } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campaigns</h1>
          <p className="text-gray-600 mt-1">Manage your lead generation campaigns</p>
        </div>
        <Button 
          onClick={() => openModal('create')}
          className="bg-amber-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <CampaignStats />
      <CampaignsTable />
    </div>
  );
}