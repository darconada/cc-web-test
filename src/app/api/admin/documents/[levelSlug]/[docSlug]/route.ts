import { NextRequest, NextResponse } from 'next/server'
import { getDocumentBySlug } from '@/lib/documents'
import fs from 'fs'
import path from 'path'

// GET document content
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ levelSlug: string; docSlug: string }> }
) {
  const cookie = request.cookies.get('ce-admin-auth')
  if (cookie?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { levelSlug, docSlug } = await context.params
    const document = getDocumentBySlug(levelSlug, docSlug)

    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    return NextResponse.json(document)
  } catch (error) {
    console.error('Error fetching document:', error)
    return NextResponse.json(
      { error: 'Error fetching document' },
      { status: 500 }
    )
  }
}

// PUT (update) document content
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ levelSlug: string; docSlug: string }> }
) {
  const cookie = request.cookies.get('ce-admin-auth')
  if (cookie?.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { levelSlug, docSlug } = await context.params
    const { content } = await request.json()
    const document = getDocumentBySlug(levelSlug, docSlug)

    if (!document) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    if (document.type !== 'markdown') {
      return NextResponse.json(
        { error: 'Only markdown files can be edited' },
        { status: 400 }
      )
    }

    // Write to file
    fs.writeFileSync(document.filePath, content, 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating document:', error)
    return NextResponse.json(
      { error: 'Error updating document' },
      { status: 500 }
    )
  }
}
