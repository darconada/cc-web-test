'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from markdown
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const items: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].replace(/[#*`]/g, '').trim()
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')

      items.push({ id, text, level })
    }

    setToc(items)
  }, [content])

  useEffect(() => {
    // Track active heading on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  if (toc.length === 0) return null

  return (
    <div className="sticky top-20 hidden xl:block w-64 shrink-0">
      <div className="p-4 bg-surface border border-border rounded-lg">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <List className="w-4 h-4" />
          <span>Tabla de Contenidos</span>
        </h3>
        <nav className="space-y-1">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                block text-sm py-1 transition-colors
                ${activeId === item.id
                  ? 'text-primary font-semibold'
                  : 'text-text-secondary hover:text-primary'
                }
              `}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
