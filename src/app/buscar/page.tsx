'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { SearchBar } from '@/components/search/SearchBar'
import { DocumentCard } from '@/components/DocumentCard'
import { Filter, X } from 'lucide-react'
import type { Document } from '@/types/document'

const LEVELS = [
  { value: 'all', label: 'Todos los niveles' },
  { value: 'nivel-1', label: 'Nivel 1: Fundamentales' },
  { value: 'nivel-2', label: 'Nivel 2: Framework' },
  { value: 'nivel-3', label: 'Nivel 3: Playbooks' },
  { value: 'nivel-4', label: 'Nivel 4: Presentación' },
  { value: 'nivel-5', label: 'Nivel 5: Organizacional' },
  { value: 'nivel-6', label: 'Nivel 6: Estratégico' },
  { value: 'nivel-7', label: 'Nivel 7: Meta-docs' },
]

const FILE_TYPES = [
  { value: 'all', label: 'Todos los tipos' },
  { value: 'markdown', label: 'Markdown' },
  { value: 'pdf', label: 'PDF' },
  { value: 'html', label: 'HTML' },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams?.get('q') || ''

  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Document[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    if (query || selectedLevel !== 'all' || selectedType !== 'all') {
      performSearch()
    }
  }, [query, selectedLevel, selectedType])

  async function performSearch() {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()
      if (query) params.append('q', query)
      if (selectedLevel !== 'all') params.append('level', selectedLevel)
      if (selectedType !== 'all') params.append('type', selectedType)

      const response = await fetch(`/api/search?${params.toString()}`)
      const data = await response.json()
      setResults(data.results || [])
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  function clearFilters() {
    setSelectedLevel('all')
    setSelectedType('all')
    setQuery('')
  }

  const hasActiveFilters = selectedLevel !== 'all' || selectedType !== 'all' || query.length > 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">🔍 Búsqueda Avanzada</h1>
        <p className="text-text-secondary">
          Busca entre todos los documentos del framework
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl">
        <SearchBar
          placeholder="Buscar por título, descripción, contenido..."
          autoFocus
        />
      </div>

      {/* Filters */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-semibold"
          >
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 text-sm text-primary hover:text-accent"
            >
              <X className="w-4 h-4" />
              <span>Limpiar filtros</span>
            </button>
          )}
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Nivel</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {LEVELS.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Tipo de Archivo</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {FILE_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            {isLoading ? 'Buscando...' : `${results.length} resultados`}
            {query && ` para "${query}"`}
          </h2>
        </div>

        {isLoading ? (
          <div className="py-12 text-center">
            <div className="spinner mx-auto" />
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        ) : hasActiveFilters ? (
          <div className="text-center py-12 bg-surface rounded-lg border border-border">
            <p className="text-text-secondary mb-4">
              No se encontraron resultados con los filtros actuales
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="text-center py-12 bg-surface rounded-lg border border-border">
            <p className="text-text-secondary">
              Utiliza la barra de búsqueda o los filtros para encontrar documentos
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
