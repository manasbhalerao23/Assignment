import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { campaigns, leads, leadInteractions } from '@/lib/schema';
import { eq, count, desc } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Get session from request
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    // Fetch campaign stats
    const userCampaigns = await db
      .select()
      .from(campaigns)
      .where(eq(campaigns.userId, userId));

    const totalCampaigns = userCampaigns.length;
    const activeCampaigns = userCampaigns.filter(c => c.status === 'active').length;

    // Fetch lead stats
    const userLeads = await db
      .select()
      .from(leads)
      .where(eq(leads.userId, userId));

    const totalLeads = userLeads.length;
    const convertedLeads = userLeads.filter(l => l.status === 'converted').length;

    // Calculate average response rate
    const responseRates = userCampaigns.map(c => parseFloat(c.responseRate || '0'));
    const averageResponseRate = responseRates.length > 0
      ? Math.round(responseRates.reduce((a, b) => a + b, 0) / responseRates.length)
      : 0;

    // Fetch recent activity
    const recentActivity = await db
      .select()
      .from(leadInteractions)
      .where(eq(leadInteractions.userId, userId))
      .orderBy(desc(leadInteractions.date))
      .limit(10);

    const stats = {
      totalCampaigns,
      activeCampaigns,
      totalLeads,
      convertedLeads,
      averageResponseRate,
      recentActivity,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}