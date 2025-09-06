'use client';

import { GlobalModal } from '@/components/globalmodel';
import { MainLayout } from '@/components/layout/main-layout';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-linkbird-500"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return <MainLayout>{children} <GlobalModal/> </MainLayout>;
}