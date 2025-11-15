'use client'

import { useTheme } from 'next-themes'
import { Palette, Check } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const THEMES = [
  { id: 'light', name: '☀️ Claro', description: 'Tema clásico claro' },
  { id: 'dark', name: '🌙 Oscuro', description: 'Tema oscuro elegante' },
  { id: 'retro-80s', name: '🕹️ Retro 80s', description: 'Arcade neón vintage' },
  { id: 'terminal', name: '💻 Terminal', description: 'Hacker matrix style' },
  { id: 'solarized-light', name: '🌅 Solarized Light', description: 'Solarized suave' },
  { id: 'solarized-dark', name: '🌃 Solarized Dark', description: 'Solarized oscuro' },
]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-surface transition-colors"
        title="Cambiar tema"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-surface border border-border rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="p-3 border-b border-border">
            <h3 className="font-semibold text-sm">Seleccionar Tema</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left hover:bg-background transition-colors flex items-center justify-between ${
                  theme === t.id ? 'bg-background' : ''
                }`}
              >
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-text-secondary">{t.description}</div>
                </div>
                {theme === t.id && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
