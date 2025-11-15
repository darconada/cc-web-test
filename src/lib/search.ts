import FlexSearch from 'flexsearch'
import type { Document } from '@/types/document'

export interface SearchIndex {
  add: (id: number, text: string) => void
  search: (query: string) => number[]
}

let searchIndex: FlexSearch.Index | null = null

export function createSearchIndex(documents: Document[]): FlexSearch.Index {
  const index = new FlexSearch.Index({
    tokenize: 'full',
    optimize: true,
    resolution: 9,
    cache: 100,
  })

  documents.forEach((doc, idx) => {
    const searchText = `
      ${doc.title}
      ${doc.description}
      ${doc.level}
      ${doc.content || ''}
      ${doc.tags?.join(' ') || ''}
    `.toLowerCase()

    index.add(idx, searchText)
  })

  searchIndex = index
  return index
}

export function searchDocuments(
  documents: Document[],
  query: string,
  filters?: {
    level?: string
    type?: string
    tags?: string[]
  }
): Document[] {
  if (!query && !filters) return documents

  let results = documents

  // Text search
  if (query && query.length >= 2) {
    if (!searchIndex) {
      createSearchIndex(documents)
    }

    const searchResults = searchIndex!.search(query.toLowerCase())
    results = searchResults.map(idx => documents[idx as number]).filter(Boolean)
  }

  // Apply filters
  if (filters) {
    if (filters.level && filters.level !== 'all') {
      results = results.filter(doc => doc.levelSlug === filters.level)
    }

    if (filters.type && filters.type !== 'all') {
      results = results.filter(doc => doc.type === filters.type)
    }

    if (filters.tags && filters.tags.length > 0) {
      results = results.filter(doc =>
        doc.tags?.some(tag => filters.tags!.includes(tag))
      )
    }
  }

  return results
}
