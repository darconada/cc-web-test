import { getAllLevels, getDocumentsByLevel } from '@/lib/documents'
import { DocumentCard } from '@/components/DocumentCard'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function generateStaticParams() {
  const levels = getAllLevels()
  return levels.map((level) => ({
    levelSlug: level.slug,
  }))
}

export default function LevelPage({ params }: { params: { levelSlug: string } }) {
  const levels = getAllLevels()
  const level = levels.find(l => l.slug === params.levelSlug)

  if (!level) {
    notFound()
  }

  const documents = getDocumentsByLevel(params.levelSlug)

  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-text-secondary">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/biblioteca" className="hover:text-primary">Biblioteca</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-text-primary font-semibold">{level.name}</span>
      </nav>

      {/* Header */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{level.icon}</span>
          <div>
            <h1 className="text-4xl font-bold">{level.name}</h1>
            <p className="text-text-secondary mt-2">{level.description}</p>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      {documents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <DocumentCard key={doc.slug} document={doc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-surface rounded-lg border border-border">
          <p className="text-text-secondary">
            No hay documentos en este nivel todavía.
          </p>
        </div>
      )}
    </div>
  )
}
