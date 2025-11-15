import Link from 'next/link'
import { DocumentCard } from '@/components/DocumentCard'
import { getEssentialDocuments, getAllLevels } from '@/lib/documents'

export default function HomePage() {
  const essentialDocs = getEssentialDocuments()
  const levels = getAllLevels()

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AI - Context Engineering Framework
        </h1>
        <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
          Framework metodológico para adopción de IA en Arsys/Ionos
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/biblioteca/nivel-3/playbook_quick_start_v1"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            🚀 Quick Start
          </Link>
          <Link
            href="/biblioteca"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            📚 Explorar Biblioteca
          </Link>
        </div>
      </section>

      {/* Los 3 Documentos Esenciales */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span>⭐</span>
            <span>Los 3 Documentos Esenciales</span>
          </h2>
          <p className="text-text-secondary mb-8">
            Estos tres documentos son el corazón de todo. Léelos primero siempre.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {essentialDocs.map((doc) => (
              <DocumentCard key={doc.slug} document={doc} highlight />
            ))}
          </div>
        </div>
      </section>

      {/* Navegación por Niveles */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">📚 Biblioteca por Niveles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level) => (
              <Link
                key={level.id}
                href={`/biblioteca/${level.slug}`}
                className="block p-6 rounded-lg border-2 border-border hover:border-primary transition-all hover:shadow-lg bg-surface"
              >
                <div className="text-3xl mb-3">{level.icon}</div>
                <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                <p className="text-text-secondary text-sm mb-3">
                  {level.description}
                </p>
                <div className="text-sm text-primary font-semibold">
                  {level.documentCount} documentos →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Semanal */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto p-8 rounded-lg bg-surface border border-border">
          <h2 className="text-2xl font-bold mb-6">🎯 Tu Workflow Semanal Simplificado</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-2xl">📅</div>
              <div>
                <h3 className="font-semibold">Cada lunes:</h3>
                <p className="text-text-secondary text-sm">
                  Lee el plan de implementación → ¿Qué toca esta semana?
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🛠️</div>
              <div>
                <h3 className="font-semibold">Antes de cada Office Hours:</h3>
                <p className="text-text-secondary text-sm">
                  Repasa el playbook del perfil + framework (versión ágil - 5 min)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📝</div>
              <div>
                <h3 className="font-semibold">Después de cada Office Hours:</h3>
                <p className="text-text-secondary text-sm">
                  Actualiza casos documentados → Añadir caso de la persona
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📊</div>
              <div>
                <h3 className="font-semibold">Cada 4 semanas:</h3>
                <p className="text-text-secondary text-sm">
                  Revisa el contexto de desarrollo → ¿Voy según plan? Actualiza métricas consolidadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
