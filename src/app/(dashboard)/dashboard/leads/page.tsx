'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LeadsTable } from '@/components/leads/leads-table';
import { LeadsFilters } from '@/components/leads/leads-filters';
import { LeadDetailSheet } from '@/components/leads/lead-detail-sheet';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useStore } from '@/store/useStore';

export default function LeadsPage() {
  const { leadFilters, openModal } = useStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leads</h1>
          <p className="text-gray-600 mt-1">Manage and track your lead interactions</p>
        </div>
        {/* <Button 
          onClick={() => openModal('create')}
          className="bg-amber-800 hover:cursor-pointer"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button> */}
      </div>

      <LeadsFilters />
      <LeadsTable />
      <LeadDetailSheet />
    </div>
  );
}
