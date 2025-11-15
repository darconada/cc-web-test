'use client'

import { AuthGuard } from '@/components/admin/AuthGuard'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Upload, X, FileText, AlertCircle, CheckCircle } from 'lucide-react'

export default function ReplaceDocumentPage({
  params,
}: {
  params: { levelSlug: string; docSlug: string }
}) {
  const [documentTitle, setDocumentTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    loadDocument()
  }, [params.levelSlug, params.docSlug])

  async function loadDocument() {
    try {
      const response = await fetch(
        `/api/admin/documents/${params.levelSlug}/${params.docSlug}`
      )
      const data = await response.json()
      setDocumentTitle(data.title)
    } catch (error) {
      console.error('Error loading document:', error)
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Validate file type
      const validTypes = ['.md', '.pdf', '.html']
      const fileExt = selectedFile.name.toLowerCase().slice(selectedFile.name.lastIndexOf('.'))

      if (!validTypes.includes(fileExt)) {
        setError('Solo se permiten archivos .md, .pdf o .html')
        setFile(null)
        return
      }

      setFile(selectedFile)
      setError('')
    }
  }

  async function handleUpload() {
    if (!file) {
      setError('Selecciona un archivo primero')
      return
    }

    setIsUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(
        `/api/admin/documents/${params.levelSlug}/${params.docSlug}/replace`,
        {
          method: 'POST',
          body: formData,
        }
      )

      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/admin')
        }, 2000)
      } else {
        const data = await response.json()
        setError(data.error || 'Error al reemplazar el archivo')
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      setError('Error al subir el archivo')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <AuthGuard>
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/admin" className="hover:text-primary">Admin</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-text-primary font-semibold">Reemplazar: {documentTitle}</span>
        </nav>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Reemplazar Archivo</h1>
          <p className="text-text-secondary">{documentTitle}</p>
        </div>

        {/* Upload Area */}
        <div className="bg-surface border-2 border-dashed border-border rounded-lg p-8">
          <div className="text-center">
            <Upload className="w-12 h-12 mx-auto mb-4 text-text-secondary" />

            <h3 className="font-semibold mb-2">Subir nuevo archivo</h3>
            <p className="text-sm text-text-secondary mb-6">
              Formatos permitidos: .md, .pdf, .html
            </p>

            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept=".md,.pdf,.html"
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Seleccionar Archivo
            </button>

            {file && (
              <div className="mt-6 p-4 bg-background border border-border rounded-lg">
                <div className="flex items-center justify-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-medium">{file.name}</span>
                  <span className="text-sm text-text-secondary">
                    ({(file.size / 1024).toFixed(2)} KB)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3 text-red-600">
            <AlertCircle className="w-5 h-5 mt-0.5" />
            <div>
              <div className="font-semibold mb-1">Error</div>
              <div className="text-sm">{error}</div>
            </div>
          </div>
        )}

        {success && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3 text-green-600">
            <CheckCircle className="w-5 h-5 mt-0.5" />
            <div>
              <div className="font-semibold mb-1">¡Éxito!</div>
              <div className="text-sm">Archivo reemplazado correctamente. Redirigiendo...</div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/admin"
            className="px-6 py-3 border border-border rounded-lg hover:bg-surface transition-colors flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            <span>Cancelar</span>
          </Link>
          <button
            onClick={handleUpload}
            disabled={!file || isUploading || success}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            <span>{isUploading ? 'Subiendo...' : 'Reemplazar Archivo'}</span>
          </button>
        </div>

        {/* Warning */}
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-yellow-600 text-sm">
          <strong>Advertencia:</strong> Esta acción sobrescribirá el archivo actual.
          Asegúrate de tener una copia de seguridad si es necesario.
        </div>
      </div>
    </AuthGuard>
  )
}
