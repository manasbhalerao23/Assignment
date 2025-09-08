import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { leads, campaigns } from '@/lib/schema';
import { eq, and, ilike, desc, asc, SQL } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const campaignId = searchParams.get('campaignId');

     const filters: SQL[] = [eq(leads.userId, session.user.id)];
     if (search) filters.push(ilike(leads.email, `%${search}%`));
      if (status) filters.push(eq(leads.status, status));
      if (campaignId) filters.push(eq(leads.campaignId, parseInt(campaignId)));

      const whereCondition = and(...filters); // always defined

    const offset = (page - 1) * limit;

    // Get leads with campaign information
    const leadsData = await db
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
      .where(whereCondition)
      .orderBy(desc(leads.createdAt))
      .limit(limit)
      .offset(offset);

    // Get total count for pagination
    const totalResult = await db
      .select({ count: leads.id })
      .from(leads)
      .where(whereCondition);
    
    const total = totalResult.length;
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      data: leadsData,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Leads fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}