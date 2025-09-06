'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  Users, 
  Target, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useStore } from '@/store/useStore';
import { signOut, useSession } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: BarChart3,
    key: 'dashboard'
  },
  {
    name: 'Leads',
    href: '/dashboard/leads',
    icon: Users,
    key: 'leads'
  },
  {
    name: 'Campaigns',
    href: '/dashboard/campaigns',
    icon: Target,
    key: 'campaigns'
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
    key: 'settings'
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { sidebar, toggleSidebar, setActiveItem } = useStore();
  const { isCollapsed } = sidebar;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-linkbird-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-semibold text-gray-900">Linkbird.ai</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setActiveItem(item.key)}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-linkbird-50 text-linkbird-700 border-r-2 border-linkbird-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon
                    className={cn(
                      'flex-shrink-0 h-5 w-5',
                      isCollapsed ? 'mr-0' : 'mr-3'
                    )}
                  />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      {session && (
        <div className="border-t px-3 py-4">
          <div
            className={cn(
              'flex items-center',
              isCollapsed ? 'justify-center' : 'space-x-3'
            )}
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || ''}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <User className="h-4 w-4 text-gray-600" />
                )}
              </div>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {session.user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {session.user.email}
                </p>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSignOut}
              className="flex-shrink-0 h-8 w-8"
              title="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
