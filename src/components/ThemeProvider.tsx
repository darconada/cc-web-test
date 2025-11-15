'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="light"
      themes={['light', 'dark', 'retro-80s', 'terminal', 'solarized-light', 'solarized-dark']}
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  )
}
