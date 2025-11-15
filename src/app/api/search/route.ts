import { NextRequest, NextResponse } from 'next/server'
import { getAllDocuments } from '@/lib/documents'
import { searchDocuments, createSearchIndex } from '@/lib/search'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q') || ''
  const level = searchParams.get('level') || undefined
  const type = searchParams.get('type') || undefined
  const tagsParam = searchParams.get('tags')
  const tags = tagsParam ? tagsParam.split(',') : undefined

  try {
    const allDocuments = getAllDocuments()

    // Create search index if not exists
    createSearchIndex(allDocuments)

    const results = searchDocuments(allDocuments, query, {
      level,
      type,
      tags,
    })

    return NextResponse.json({
      results,
      total: results.length,
      query,
    })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Search failed', results: [] },
      { status: 500 }
    )
  }
}
