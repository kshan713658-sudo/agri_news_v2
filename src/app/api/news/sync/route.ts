import { NextResponse } from 'next/server';
import { syncNews } from '@/lib/news-sync';

export async function GET() {
  const result = await syncNews();
  
  if (result.success) {
    return NextResponse.json({ message: `Successfully synced ${result.count} news items.` });
  } else {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }
}
