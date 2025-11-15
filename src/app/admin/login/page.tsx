'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Lock, Eye, EyeOff } from 'lucide-react'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to the original page or default to /admin
        // Use window.location.href to ensure cookie is sent with next request
        const redirectTo = searchParams.get('redirect') || '/admin'
        window.location.href = redirectTo
      } else {
        setError(data.error || 'Password incorrecto')
      }
    } catch (error) {
      setError('Error al intentar autenticar')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-3xl font-bold mb-2">Panel de Administración</h1>
          <p className="text-text-secondary">
            Context Engineering Framework
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-surface border border-border rounded-lg p-6">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa el password"
                className="w-full px-4 py-3 pr-12 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-secondary hover:text-primary"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {error && (
              <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-600 text-sm">
                {error}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full py-3 px-6 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="spinner w-5 h-5 border-2" />
                <span>Verificando...</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                <span>Ingresar</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-text-secondary">
          <p>Protegido con contraseña</p>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="spinner w-8 h-8" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
