import Link from 'next/link'
import { FileText, File, FileCode, Clock, Star } from 'lucide-react'
import type { Document } from '@/types/document'

interface DocumentCardProps {
  document: Document
  highlight?: boolean
}

export function DocumentCard({ document, highlight = false }: DocumentCardProps) {
  const getIcon = () => {
    if (document.type === 'pdf') return <File className="w-5 h-5" />
    if (document.type === 'html') return <FileCode className="w-5 h-5" />
    return <FileText className="w-5 h-5" />
  }

  const getBadgeColor = () => {
    if (document.essential) return 'bg-red-500/20 text-red-600 border-red-500/30'
    if (document.category === 'fundamental') return 'bg-blue-500/20 text-blue-600 border-blue-500/30'
    if (document.category === 'operativo') return 'bg-green-500/20 text-green-600 border-green-500/30'
    if (document.category === 'estrategico') return 'bg-purple-500/20 text-purple-600 border-purple-500/30'
    return 'bg-gray-500/20 text-gray-600 border-gray-500/30'
  }

  return (
    <Link
      href={`/biblioteca/${document.levelSlug}/${document.slug}`}
      className={`
        block p-6 rounded-lg border-2 transition-all hover:shadow-lg
        ${highlight
          ? 'border-primary bg-primary/5 hover:border-accent'
          : 'border-border bg-surface hover:border-primary'
        }
      `}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="text-primary mt-1">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">
            {document.title}
          </h3>
          {document.essential && (
            <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
              <Star className="w-4 h-4 fill-current" />
              <span>Esencial</span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-text-secondary mb-4 line-clamp-3">
        {document.description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-3 flex-wrap text-xs">
        {document.readTime && (
          <div className="flex items-center gap-1 text-text-secondary">
            <Clock className="w-3 h-3" />
            <span>{document.readTime}</span>
          </div>
        )}

        <span className={`px-2 py-1 rounded border ${getBadgeColor()}`}>
          {document.level}
        </span>

        {document.tags && document.tags.length > 0 && (
          <div className="flex gap-1">
            {document.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-background text-text-secondary border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Read more indicator */}
      <div className="mt-4 text-primary text-sm font-semibold">
        Leer documento →
      </div>
    </Link>
  )
}
