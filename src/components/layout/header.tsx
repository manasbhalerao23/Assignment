'use client';

import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';

const breadcrumbLabels: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/dashboard/leads': 'Leads',
  '/dashboard/campaigns': 'Campaigns',
  '/dashboard/settings': 'Settings',
};

export function Header() {
  const pathname = usePathname();
  const { sidebar, searchQuery, setSearchQuery } = useStore();
  const { isCollapsed } = sidebar;

  const currentLabel = breadcrumbLabels[pathname] || 'Dashboard';

  return (
    <header
      className={cn(
        'fixed top-0 right-0 z-40 bg-white border-b border-gray-200 transition-all duration-300',
        isCollapsed ? 'left-16' : 'left-64'
      )}
    >
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold text-gray-900">
            {currentLabel}
          </h1>
        </div>

        {/* Search bar*/}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-64"
            />
          </div>
        </div>
      </div>
    </header>
  );
}