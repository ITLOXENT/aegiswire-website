import { NextRequest, NextResponse } from 'next/server';
import { db, leads } from '@/lib/db';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = emailSchema.parse(body);
    
    const [lead] = await db.insert(leads).values({ email }).returning();
    
    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors[0].message },
        { status: 400 }
      );
    }
    
    console.error('Failed to create lead:', error);
    return NextResponse.json(
      { message: 'Failed to register interest' },
      { status: 500 }
    );
  }
}
