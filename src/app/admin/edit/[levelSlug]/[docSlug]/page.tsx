'use client'

import { AuthGuard } from '@/components/admin/AuthGuard'
import { MonacoEditor } from '@/components/admin/MonacoEditor'
import { MarkdownViewer } from '@/components/markdown/MarkdownViewer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Save, X, Eye, EyeOff } from 'lucide-react'

export default function EditDocumentPage({
  params,
}: {
  params: { levelSlug: string; docSlug: string }
}) {
  const [content, setContent] = useState('')
  const [originalContent, setOriginalContent] = useState('')
  const [documentTitle, setDocumentTitle] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [showPreview, setShowPreview] = useState(true)
  const [hasChanges, setHasChanges] = useState(false)
  const router = useRouter()

  useEffect(() => {
    loadDocument()
  }, [params.levelSlug, params.docSlug])

  useEffect(() => {
    setHasChanges(content !== originalContent)
  }, [content, originalContent])

  async function loadDocument() {
    try {
      const response = await fetch(
        `/api/admin/documents/${params.levelSlug}/${params.docSlug}`
      )
      const data = await response.json()

      if (data.content) {
        setContent(data.content)
        setOriginalContent(data.content)
        setDocumentTitle(data.title)
      }
    } catch (error) {
      console.error('Error loading document:', error)
    }
  }

  async function handleSave() {
    setIsSaving(true)

    try {
      const response = await fetch(
        `/api/admin/documents/${params.levelSlug}/${params.docSlug}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content }),
        }
      )

      if (response.ok) {
        setOriginalContent(content)
        alert('Documento guardado exitosamente')
      } else {
        alert('Error al guardar el documento')
      }
    } catch (error) {
      console.error('Error saving document:', error)
      alert('Error al guardar el documento')
    } finally {
      setIsSaving(false)
    }
  }

  function handleCancel() {
    if (hasChanges) {
      const confirmed = confirm('¿Descartar cambios no guardados?')
      if (confirmed) {
        router.push('/admin')
      }
    } else {
      router.push('/admin')
    }
  }

  return (
    <AuthGuard>
      <div className="space-y-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-text-secondary">
          <Link href="/admin" className="hover:text-primary">Admin</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-text-primary font-semibold">Editar: {documentTitle}</span>
        </nav>

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Editar Documento</h1>
            <p className="text-text-secondary">{documentTitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 border border-border rounded-lg hover:bg-surface transition-colors flex items-center gap-2"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showPreview ? 'Ocultar' : 'Mostrar'} Preview</span>
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 border border-border rounded-lg hover:bg-surface transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              <span>Cancelar</span>
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || !hasChanges}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Guardando...' : 'Guardar'}</span>
            </button>
          </div>
        </div>

        {hasChanges && (
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded text-yellow-600 text-sm">
            Tienes cambios sin guardar
          </div>
        )}

        {/* Editor + Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor */}
          <div>
            <h3 className="font-semibold mb-3">Editor</h3>
            <MonacoEditor
              value={content}
              onChange={(value) => setContent(value || '')}
              height="calc(100vh - 400px)"
            />
          </div>

          {/* Preview */}
          {showPreview && (
            <div>
              <h3 className="font-semibold mb-3">Preview</h3>
              <div className="border border-border rounded-lg p-6 bg-surface overflow-auto" style={{ height: 'calc(100vh - 400px)' }}>
                <MarkdownViewer content={content} />
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthGuard>
  )
}
