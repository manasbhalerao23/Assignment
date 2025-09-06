'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useStore } from '@/store/useStore';
import { debounce } from '@/lib/utils';
import { useCallback } from 'react';

const statusOptions = [
  { value: 'pending', label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'contacted', label: 'Contacted', color: 'bg-blue-100 text-blue-800' },
  { value: 'responded', label: 'Responded', color: 'bg-green-100 text-green-800' },
  { value: 'converted', label: 'Converted', color: 'bg-purple-100 text-purple-800' },
  { value: 'rejected', label: 'Rejected', color: 'bg-red-100 text-red-800' },
];

export function LeadsFilters() {
  const { leadFilters, setLeadFilters, resetLeadFilters } = useStore();
  const [searchInput, setSearchInput] = useState(leadFilters.search || '');

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setLeadFilters({ search: value || undefined });
    }, 300),
    []
  );

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    debouncedSearch(value);
  };

  const toggleStatus = (status: string) => {
    setLeadFilters({
      status: leadFilters.status === status ? undefined : status,
    });
  };

  const clearFilters = () => {
    setSearchInput('');
    resetLeadFilters();
  };

  const activeFiltersCount = Object.values(leadFilters).filter(Boolean).length;

  return (
    <Card className="p-4">
      <div className="flex flex-col space-y-4">
        {/* Search and Filter Button */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search leads..."
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
            
            {activeFiltersCount > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            )}
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Status:</span>
          {statusOptions.map((status) => (
            <Badge
              key={status.value}
              variant={leadFilters.status === status.value ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                leadFilters.status === status.value 
                  ? 'bg-linkbird-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => toggleStatus(status.value)}
            >
              {status.label}
              {leadFilters.status === status.value && (
                <X className="h-3 w-3 ml-1" />
              )}
            </Badge>
          ))}
        </div>

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="flex items-center space-x-2 pt-2 border-t">
            <span className="text-sm text-gray-500">Active filters:</span>
            {leadFilters.search && (
              <Badge variant="secondary">
                Search: {leadFilters.search}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => {
                    setSearchInput('');
                    setLeadFilters({ search: undefined });
                  }}
                />
              </Badge>
            )}
            {leadFilters.status && (
              <Badge variant="secondary">
                Status: {statusOptions.find(s => s.value === leadFilters.status)?.label}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => setLeadFilters({ status: undefined })}
                />
              </Badge>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
