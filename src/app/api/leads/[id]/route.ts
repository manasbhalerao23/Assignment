import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leads, campaigns, leadInteractions } from '@/lib/schema';
import { eq, and, desc } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string } >}
) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {id} = await context.params;
    const leadId = parseInt(id);

    // Get lead with campaign information
    const leadData = await db
      .select({
        id: leads.id,
        firstName: leads.firstName,
        lastName: leads.lastName,
        email: leads.email,
        company: leads.company,
        position: leads.position,
        phone: leads.phone,
        linkedinUrl: leads.linkedinUrl,
        status: leads.status,
        lastContactDate: leads.lastContactDate,
        notes: leads.notes,
        campaignId: leads.campaignId,
        createdAt: leads.createdAt,
        updatedAt: leads.updatedAt,
        campaign: {
          id: campaigns.id,
          name: campaigns.name,
          status: campaigns.status,
        },
      })
      .from(leads)
      .leftJoin(campaigns, eq(leads.campaignId, campaigns.id))
      .where(and(eq(leads.id, leadId), eq(leads.userId, session.user.id)))
      .limit(1);

    if (leadData.length === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    // Get lead interactions
    const interactions = await db
      .select()
      .from(leadInteractions)
      .where(eq(leadInteractions.leadId, leadId))
      .orderBy(desc(leadInteractions.date));

    const lead = {
      ...leadData[0],
      interactions,
    };

    return NextResponse.json(lead);
  } catch (error) {
    console.error('Lead details fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string } >}
) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {id} = await context.params;
    const leadId = parseInt(id);
    const body = await request.json();
    const { status } = body;

    // Validate status
    const validStatuses = ['pending', 'contacted', 'responded', 'converted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    // Update lead status
    const updatedLead = await db
      .update(leads)
      .set({ 
        status, 
        lastContactDate: status !== 'pending' ? new Date() : undefined,
        updatedAt: new Date() 
      })
      .where(and(eq(leads.id, leadId), eq(leads.userId, session.user.id)))
      .returning();

    if (updatedLead.length === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: updatedLead[0],
    });
  } catch (error) {
    console.error('Lead update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}