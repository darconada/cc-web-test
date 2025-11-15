'use client'

import Link from 'next/link'
import { Menu, Search, Settings } from 'lucide-react'
import { ThemeSelector } from '../ThemeSelector'
import { SearchBar } from '../search/SearchBar'
import { useState, useEffect } from 'react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false)

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-surface transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="flex items-center gap-3">
              <div className="text-2xl">🤖</div>
              <div className="hidden md:block">
                <h1 className="text-lg font-bold leading-tight">
                  AI - Context Engineering
                </h1>
                <p className="text-xs text-text-secondary">Framework Arsys</p>
              </div>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-surface transition-colors group relative"
              title="Buscar (Cmd+K)"
            >
              <Search className="w-5 h-5" />
              <span className="hidden lg:inline ml-2 text-xs text-text-secondary group-hover:text-primary">
                ⌘K
              </span>
            </button>

            <ThemeSelector />

            <Link
              href="/admin"
              className="p-2 rounded-lg hover:bg-surface transition-colors"
              title="Administración"
            >
              <Settings className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="border-t border-border bg-surface p-4">
          <div className="max-w-3xl mx-auto">
            <SearchBar autoFocus placeholder="Buscar documentos... (ESC para cerrar)" />
          </div>
        </div>
      )}
    </header>
  )
}
