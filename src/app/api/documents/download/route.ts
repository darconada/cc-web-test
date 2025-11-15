import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filePath = searchParams.get('path')

  if (!filePath) {
    return NextResponse.json({ error: 'File path is required' }, { status: 400 })
  }

  try {
    // Security: ensure the file is within the docs directory
    const docsPath = path.join(process.cwd(), 'fuentes', 'AI - context Enginering')
    const absolutePath = path.resolve(filePath)

    if (!absolutePath.startsWith(docsPath)) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 403 })
    }

    if (!fs.existsSync(absolutePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    const fileBuffer = fs.readFileSync(absolutePath)
    const fileName = path.basename(absolutePath)

    // Determine content type
    let contentType = 'application/octet-stream'
    if (fileName.endsWith('.pdf')) {
      contentType = 'application/pdf'
    } else if (fileName.endsWith('.html')) {
      contentType = 'text/html'
    } else if (fileName.endsWith('.md')) {
      contentType = 'text/markdown'
    }

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    })
  } catch (error) {
    console.error('Error downloading file:', error)
    return NextResponse.json({ error: 'Error downloading file' }, { status: 500 })
  }
}
