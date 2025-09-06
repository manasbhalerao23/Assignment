import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { campaigns, leads } from '@/lib/schema';
import { eq, count, desc } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get campaigns with lead counts
    const campaignsData = await db
      .select({
        id: campaigns.id,
        name: campaigns.name,
        description: campaigns.description,
        status: campaigns.status,
        totalLeads: campaigns.totalLeads,
        successfulLeads: campaigns.successfulLeads,
        responseRate: campaigns.responseRate,
        createdAt: campaigns.createdAt,
        updatedAt: campaigns.updatedAt,
      })
      .from(campaigns)
      .where(eq(campaigns.userId, session.user.id))
      .orderBy(desc(campaigns.createdAt));

    return NextResponse.json({
      success: true,
      data: campaignsData,
    });
  } catch (error) {
    console.error('Campaigns fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, description, status = 'draft' } = body;

    if (!name) {
      return NextResponse.json({ error: 'Campaign name is required' }, { status: 400 });
    }

    const campaign = await db
      .insert(campaigns)
      .values({
        name,
        description,
        status,
        userId: session.user.id,
        totalLeads: 0,
        successfulLeads: 0,
        responseRate: '0.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    return NextResponse.json({
      success: true,
      data: campaign[0],
    });
  } catch (error) {
    console.error('Campaign creation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
