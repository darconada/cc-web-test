import { NextRequest, NextResponse } from 'next/server'
import { getAllDocuments } from '@/lib/documents'

export async function GET(request: NextRequest) {
  // Check authentication
  const cookie = request.cookies.get('ce-admin-auth')
  if (cookie?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const documents = getAllDocuments()
    return NextResponse.json(documents)
  } catch (error) {
    console.error('Error fetching documents:', error)
    return NextResponse.json(
      { error: 'Error fetching documents' },
      { status: 500 }
    )
  }
}
