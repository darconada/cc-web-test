import { NextRequest, NextResponse } from 'next/server'
import { getDocumentBySlug } from '@/lib/documents'
import fs from 'fs'
import path from 'path'

export async function POST(
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

    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    const validTypes = ['.md', '.pdf', '.html']
    const fileExt = file.name.toLowerCase().slice(file.name.lastIndexOf('.'))

    if (!validTypes.includes(fileExt)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only .md, .pdf, or .html files are allowed' },
        { status: 400 }
      )
    }

    // Read file content
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create backup of original file
    const backupPath = `${document.filePath}.backup`
    if (fs.existsSync(document.filePath)) {
      fs.copyFileSync(document.filePath, backupPath)
    }

    // Write new file
    fs.writeFileSync(document.filePath, buffer)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error replacing file:', error)
    return NextResponse.json(
      { error: 'Error replacing file' },
      { status: 500 }
    )
  }
}
