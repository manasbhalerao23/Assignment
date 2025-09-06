import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leadInteractions, leads } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { leadId, type, subject, content } = body;

    // Validate required fields
    if (!leadId || !type || !content) {
      return NextResponse.json({ 
        error: 'Missing required fields: leadId, type, content' 
      }, { status: 400 });
    }

    // Validate interaction type
    const validTypes = ['email', 'call', 'meeting', 'note'];
    if (!validTypes.includes(type)) {
      return NextResponse.json({ error: 'Invalid interaction type' }, { status: 400 });
    }

    // Check if lead belongs to user
    const leadExists = await db
      .select({ id: leads.id })
      .from(leads)
      .where(and(eq(leads.id, leadId), eq(leads.userId, session.user.id)))
      .limit(1);

    if (leadExists.length === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    // Create interaction
    const interaction = await db
      .insert(leadInteractions)
      .values({
        leadId,
        type,
        subject,
        content,
        userId: session.user.id,
        date: new Date(),
        createdAt: new Date(),
      })
      .returning();

    return NextResponse.json({
      success: true,
      data: interaction[0],
    });
  } catch (error) {
    console.error('Lead interaction creation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}