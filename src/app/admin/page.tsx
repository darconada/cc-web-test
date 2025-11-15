'use client'

import { AuthGuard } from '@/components/admin/AuthGuard'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  FileText,
  Edit,
  Upload,
  LogOut,
  BarChart,
  FilePdf,
  FileCode,
  Search,
} from 'lucide-react'
import type { Document } from '@/types/document'

export default function AdminPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [filteredDocs, setFilteredDocs] = useState<Document[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    loadDocuments()
  }, [])

  useEffect(() => {
    filterDocuments()
  }, [searchTerm, selectedLevel, documents])

  async function loadDocuments() {
    try {
      const response = await fetch('/api/admin/documents')
      const data = await response.json()
      setDocuments(data)
      setFilteredDocs(data)
    } catch (error) {
      console.error('Error loading documents:', error)
    } finally {
      setIsLoading(false)
    }
  }

  function filterDocuments() {
    let filtered = documents

    if (searchTerm) {
      filtered = filtered.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(doc => doc.levelSlug === selectedLevel)
    }

    setFilteredDocs(filtered)
  }

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  function getIcon(type: string) {
    if (type === 'pdf') return <FilePdf className="w-5 h-5 text-red-500" />
    if (type === 'html') return <FileCode className="w-5 h-5 text-blue-500" />
    return <FileText className="w-5 h-5 text-primary" />
  }

  return (
    <AuthGuard>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Panel de Administración</h1>
            <p className="text-text-secondary">
              Gestiona tus documentos del Context Engineering Framework
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-surface border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">{documents.length}</div>
                <div className="text-sm text-text-secondary">Total Documentos</div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-surface border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold">
                  {documents.filter(d => d.type === 'markdown').length}
                </div>
                <div className="text-sm text-text-secondary">Markdown</div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-surface border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <FilePdf className="w-8 h-8 text-red-500" />
              <div>
                <div className="text-2xl font-bold">
                  {documents.filter(d => d.type === 'pdf').length}
                </div>
                <div className="text-sm text-text-secondary">PDFs</div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-surface border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <BarChart className="w-8 h-8 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm text-text-secondary">Niveles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por título o descripción..."
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div className="w-full md:w-64">
              <label className="block text-sm font-semibold mb-2">Nivel</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">Todos los niveles</option>
                <option value="nivel-1">Nivel 1: Fundamentales</option>
                <option value="nivel-2">Nivel 2: Framework</option>
                <option value="nivel-3">Nivel 3: Playbooks</option>
                <option value="nivel-4">Nivel 4: Presentación</option>
                <option value="nivel-5">Nivel 5: Organizacional</option>
                <option value="nivel-6">Nivel 6: Estratégico</option>
                <option value="nivel-7">Nivel 7: Meta-docs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-surface border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-background border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Documento</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Nivel</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Tipo</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Última Actualización</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <div className="spinner mx-auto" />
                    </td>
                  </tr>
                ) : filteredDocs.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-text-secondary">
                      No se encontraron documentos
                    </td>
                  </tr>
                ) : (
                  filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-background transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          {getIcon(doc.type)}
                          <div>
                            <div className="font-semibold">{doc.title}</div>
                            <div className="text-sm text-text-secondary line-clamp-1">
                              {doc.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                          {doc.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary uppercase">
                        {doc.type}
                      </td>
                      <td className="px-6 py-4 text-sm text-text-secondary">
                        {doc.lastModified
                          ? new Date(doc.lastModified).toLocaleDateString('es-ES')
                          : '-'}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          {doc.type === 'markdown' && (
                            <Link
                              href={`/admin/edit/${doc.levelSlug}/${doc.slug}`}
                              className="p-2 hover:bg-background rounded transition-colors"
                              title="Editar"
                            >
                              <Edit className="w-4 h-4" />
                            </Link>
                          )}
                          <Link
                            href={`/admin/replace/${doc.levelSlug}/${doc.slug}`}
                            className="p-2 hover:bg-background rounded transition-colors"
                            title="Reemplazar archivo"
                          >
                            <Upload className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
