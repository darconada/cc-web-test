'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Zap, Star, Library, Search, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'
import type { Level } from '@/types/document'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const MAIN_LINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/quick-start', label: 'Quick Start', icon: Zap },
  { href: '/esenciales', label: 'Los 3 Esenciales', icon: Star },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [levels, setLevels] = useState<Level[]>([])

  useEffect(() => {
    fetch('/api/levels')
      .then(res => res.json())
      .then(data => setLevels(data))
      .catch(error => console.error('Error loading levels:', error))
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-50 h-screen w-64
          bg-surface border-r border-border
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
      >
        <div className="p-4 space-y-6">
          {/* Main Navigation */}
          <nav className="space-y-1">
            {MAIN_LINKS.map((link) => {
              const Icon = link.icon
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => onClose()}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${active
                      ? 'bg-primary text-white font-semibold'
                      : 'hover:bg-background text-text-primary'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Biblioteca por Niveles */}
          <div>
            <div className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-text-secondary">
              <Library className="w-4 h-4" />
              <span>Biblioteca</span>
            </div>
            <nav className="mt-2 space-y-1">
              {levels.map((level) => {
                const active = pathname.startsWith(`/biblioteca/${level.slug}`)
                return (
                  <Link
                    key={level.id}
                    href={`/biblioteca/${level.slug}`}
                    onClick={() => onClose()}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm
                      ${active
                        ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary'
                        : 'hover:bg-background text-text-primary'
                      }
                    `}
                  >
                    <span className="text-lg">{level.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="truncate">{level.name}</div>
                      <div className="text-xs text-text-secondary">
                        {level.documentCount} docs
                      </div>
                    </div>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Additional Links */}
          <div className="border-t border-border pt-4">
            <Link
              href="/buscar"
              onClick={() => onClose()}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background transition-colors text-sm"
            >
              <Search className="w-5 h-5" />
              <span>Búsqueda</span>
            </Link>
            <Link
              href="/admin"
              onClick={() => onClose()}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-background transition-colors text-sm"
            >
              <Shield className="w-5 h-5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
