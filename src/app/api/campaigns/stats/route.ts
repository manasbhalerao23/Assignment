import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { campaigns, leads } from '@/lib/schema';
import { eq, count } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    // Getting campaign counts
    const userCampaigns = await db
      .select()
      .from(campaigns)
      .where(eq(campaigns.userId, userId));

    const totalCampaigns = userCampaigns.length;
    const activeCampaigns = userCampaigns.filter(c => c.status === 'active').length;

    // Getting total leads across all campaigns
    const totalLeadsResult = await db
      .select({ count: count(leads.id) })
      .from(leads)
      .where(eq(leads.userId, userId));

    const totalLeads = totalLeadsResult[0]?.count || 0;

    // Calculate average response rate
    const responseRates = userCampaigns.map(c => parseFloat(c.responseRate || '0'));
    const averageResponseRate = responseRates.length > 0
      ? Math.round(responseRates.reduce((a, b) => a + b, 0) / responseRates.length)
      : 0;

    return NextResponse.json({
      totalCampaigns,
      activeCampaigns,
      totalLeads,
      averageResponseRate,
    });
  } catch (error) {
    console.error('Campaign stats error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
