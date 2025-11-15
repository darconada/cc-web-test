import { NextResponse } from 'next/server'
import { getAllLevels } from '@/lib/documents'

export async function GET() {
  try {
    const levels = getAllLevels()
    return NextResponse.json(levels)
  } catch (error) {
    console.error('Error fetching levels:', error)
    return NextResponse.json({ error: 'Failed to fetch levels' }, { status: 500 })
  }
}
