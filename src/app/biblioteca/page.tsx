import Link from 'next/link'
import { getAllLevels } from '@/lib/documents'

export default function BibliotecaPage() {
  const levels = getAllLevels()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">📚 Biblioteca Completa</h1>
        <p className="text-text-secondary text-lg">
          Todos los documentos organizados por niveles. Explora cada sección para encontrar
          el material que necesitas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <Link
            key={level.id}
            href={`/biblioteca/${level.slug}`}
            className="block p-6 rounded-lg border-2 border-border hover:border-primary transition-all hover:shadow-lg bg-surface group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {level.icon}
            </div>
            <h2 className="text-xl font-bold mb-2">{level.name}</h2>
            <p className="text-text-secondary text-sm mb-4">
              {level.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary font-semibold">
                {level.documentCount} {level.documentCount === 1 ? 'documento' : 'documentos'}
              </span>
              <span className="text-primary">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
