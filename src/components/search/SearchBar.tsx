'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Filter } from 'lucide-react'
import Link from 'next/link'
import type { Document } from '@/types/document'

interface SearchBarProps {
  onSearch?: (query: string) => void
  placeholder?: string
  autoFocus?: boolean
}

export function SearchBar({ onSearch, placeholder = 'Buscar...', autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<Document[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query.length >= 2) {
        performSearch(query)
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(debounce)
  }, [query])

  async function performSearch(searchQuery: string) {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setResults(data.results || [])
      setIsOpen(true)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setIsOpen(false)
      setQuery('')
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          autoFocus={autoFocus}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-secondary hover:text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (query.length >= 2 || results.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="spinner mx-auto" />
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              {results.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/biblioteca/${doc.levelSlug}/${doc.slug}`}
                  onClick={() => {
                    setIsOpen(false)
                    setQuery('')
                  }}
                  className="block px-4 py-3 hover:bg-background transition-colors"
                >
                  <div className="font-semibold mb-1">{doc.title}</div>
                  <div className="text-sm text-text-secondary line-clamp-1 mb-1">
                    {doc.description}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">
                      {doc.level}
                    </span>
                    {doc.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-background border border-border rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-text-secondary">
              No se encontraron resultados para "{query}"
            </div>
          )}

          {results.length > 0 && (
            <div className="border-t border-border p-3 text-center">
              <Link
                href={`/buscar?q=${encodeURIComponent(query)}`}
                className="text-sm text-primary hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Ver todos los resultados ({results.length})
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
