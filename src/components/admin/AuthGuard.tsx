'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const response = await fetch('/api/auth/check')
      const data = await response.json()

      if (data.authenticated) {
        setIsAuthenticated(true)
      } else {
        // Save current URL to redirect back after login
        const currentPath = window.location.pathname
        router.push(`/admin/login?redirect=${encodeURIComponent(currentPath)}`)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      // Save current URL to redirect back after login
      const currentPath = window.location.pathname
      router.push(`/admin/login?redirect=${encodeURIComponent(currentPath)}`)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}
