import { getAllDocuments, getDocumentBySlug, getAllLevels } from '@/lib/documents'
import { MarkdownViewer } from '@/components/markdown/MarkdownViewer'
import { TableOfContents } from '@/components/markdown/TableOfContents'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, FileText, Calendar, Clock, Edit } from 'lucide-react'

export function generateStaticParams() {
  const documents = getAllDocuments()
  return documents.map((doc) => ({
    levelSlug: doc.levelSlug,
    docSlug: doc.slug,
  }))
}

export default function DocumentPage({
  params,
}: {
  params: { levelSlug: string; docSlug: string }
}) {
  const document = getDocumentBySlug(params.levelSlug, params.docSlug)
  const levels = getAllLevels()
  const level = levels.find(l => l.slug === params.levelSlug)

  if (!document || !level) {
    notFound()
  }

  // Para PDFs y HTML, mostrar mensaje especial
  if (document.type === 'pdf' || document.type === 'html') {
    return (
      <div className="space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/biblioteca" className="hover:text-primary">Biblioteca</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/biblioteca/${params.levelSlug}`} className="hover:text-primary">
            {level.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-text-primary font-semibold">{document.title}</span>
        </nav>

        <div className="text-center py-16 bg-surface rounded-lg border border-border">
          <FileText className="w-16 h-16 mx-auto mb-4 text-text-secondary" />
          <h1 className="text-2xl font-bold mb-4">{document.title}</h1>
          <p className="text-text-secondary mb-6">
            Este es un archivo {document.type.toUpperCase()}. Por favor, descárgalo para verlo.
          </p>
          <a
            href={`/api/documents/download?path=${encodeURIComponent(document.filePath)}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
          >
            Descargar {document.type.toUpperCase()}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/biblioteca" className="hover:text-primary">Biblioteca</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/biblioteca/${params.levelSlug}`} className="hover:text-primary">
          {level.name}
        </Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-text-primary font-semibold">{document.title}</span>
      </nav>

      {/* Document Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-bold mb-4">{document.title}</h1>

        <div className="flex items-center gap-4 flex-wrap text-sm text-text-secondary">
          {document.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{document.readTime}</span>
            </div>
          )}

          {document.lastModified && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(document.lastModified).toLocaleDateString('es-ES')}
              </span>
            </div>
          )}

          <Link
            href={`/admin/edit/${params.levelSlug}/${params.docSlug}`}
            className="flex items-center gap-1 text-primary hover:text-accent"
          >
            <Edit className="w-4 h-4" />
            <span>Editar</span>
          </Link>
        </div>

        {document.tags && document.tags.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {document.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface border border-border rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content with TOC */}
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {document.content && <MarkdownViewer content={document.content} />}
        </div>

        {/* Table of Contents */}
        {document.content && <TableOfContents content={document.content} />}
      </div>
    </div>
  )
}
