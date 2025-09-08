'use client';

import { CampaignsTable } from '@/components/campaigns/campaign-table';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
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
          className="bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer"
        >
          <CirclePlus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </div>
      <CampaignsTable />
    </div>
  );
}