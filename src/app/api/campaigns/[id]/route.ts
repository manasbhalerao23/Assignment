import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { campaigns, leads } from '@/lib/schema';
import { eq, and, count } from 'drizzle-orm';
import { auth } from '@/lib/auth';

type CampaignUpdate = Partial<typeof campaigns.$inferInsert>;


export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const campaignId = parseInt(params.id);

    const campaign = await db
      .select()
      .from(campaigns)
      .where(and(eq(campaigns.id, campaignId), eq(campaigns.userId, session.user.id)))
      .limit(1);

    if (campaign.length === 0) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }

    return NextResponse.json(campaign[0]);
  } catch (error) {
    console.error('Campaign fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const campaignId = parseInt(params.id);
    const body = await request.json();
    const { name, description, status } = body;

    const updateData: CampaignUpdate = { updatedAt: new Date() };
    
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) {
      const validStatuses = ['draft', 'active', 'paused', 'completed'];
      if (!validStatuses.includes(status)) {
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
      }
      updateData.status = status;
    }

    const updatedCampaign = await db
      .update(campaigns)
      .set(updateData)
      .where(and(eq(campaigns.id, campaignId), eq(campaigns.userId, session.user.id)))
      .returning();

    if (updatedCampaign.length === 0) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: updatedCampaign[0],
    });
  } catch (error) {
    console.error('Campaign update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const campaignId = parseInt(params.id);

    // Check if campaign has leads
    const leadsCount = await db
      .select({ count: count(leads.id) })
      .from(leads)
      .where(eq(leads.campaignId, campaignId));

    if (leadsCount[0].count > 0) {
      return NextResponse.json({ 
        error: 'Cannot delete campaign with associated leads' 
      }, { status: 400 });
    }

    const deletedCampaign = await db
      .delete(campaigns)
      .where(and(eq(campaigns.id, campaignId), eq(campaigns.userId, session.user.id)))
      .returning();

    if (deletedCampaign.length === 0) {
      return NextResponse.json({ error: 'Campaign not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Campaign deleted successfully',
    });
  } catch (error) {
    console.error('Campaign deletion error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}