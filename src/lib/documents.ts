import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Document, Level } from '@/types/document'

const DOCS_PATH = path.join(process.cwd(), 'fuentes', 'AI - context Enginering')

// Definición de niveles
const LEVELS: Level[] = [
  {
    id: 'nivel-1',
    slug: 'nivel-1',
    name: 'Nivel 1: Fundamentales',
    description: 'Los 3 pilares del framework',
    icon: '📍',
    order: 1,
    documentCount: 0,
  },
  {
    id: 'nivel-2',
    slug: 'nivel-2',
    name: 'Nivel 2: Framework Metodológico',
    description: 'La teoría del Context Engineering',
    icon: '🎯',
    order: 2,
    documentCount: 0,
  },
  {
    id: 'nivel-3',
    slug: 'nivel-3',
    name: 'Nivel 3: Playbooks Operativos',
    description: 'Guías prácticas para Office Hours',
    icon: '🛠️',
    order: 3,
    documentCount: 0,
  },
  {
    id: 'nivel-4',
    slug: 'nivel-4',
    name: 'Nivel 4: Materiales de Presentación',
    description: 'Slides y recursos visuales',
    icon: '📊',
    order: 4,
    documentCount: 0,
  },
  {
    id: 'nivel-5',
    slug: 'nivel-5',
    name: 'Nivel 5: Materiales Organizacionales',
    description: 'FAQs, políticas y roles',
    icon: '📋',
    order: 5,
    documentCount: 0,
  },
  {
    id: 'nivel-6',
    slug: 'nivel-6',
    name: 'Nivel 6: Estratégico Futuro',
    description: 'Visión a largo plazo',
    icon: '💼',
    order: 6,
    documentCount: 0,
  },
  {
    id: 'nivel-7',
    slug: 'nivel-7',
    name: 'Nivel 7: Meta-Documentación',
    description: 'Guías de uso del sistema',
    icon: '📘',
    order: 7,
    documentCount: 0,
  },
]

// Mapeo de carpetas a niveles
const FOLDER_TO_LEVEL: Record<string, string> = {
  'Nivel 1 - Fundamentales': 'nivel-1',
  'Nivel 2 - framework metodologico': 'nivel-2',
  'Nivel 3 - Playbooks Operativos': 'nivel-3',
  'Nivel 4 - Materiales de presentacion': 'nivel-4',
  'Nivel 5 - Materiales organizacionales': 'nivel-5',
  'Nivel 6 - Estrategico Futuro': 'nivel-6',
  'Nivel 7 - meta-documentacion': 'nivel-7',
}

// Documentos esenciales
const ESSENTIAL_DOCS = [
  'contexto_desarrollo_profesional_ia_v2',
  'plan_implementacion_interna_v32semanas',
  'casos_documentados_organizacional',
]

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min`
}

function getFileType(filename: string): 'markdown' | 'pdf' | 'html' {
  if (filename.endsWith('.pdf')) return 'pdf'
  if (filename.endsWith('.html')) return 'html'
  return 'markdown'
}

function categorizeDocument(filename: string, levelSlug: string): Document['category'] {
  if (levelSlug === 'nivel-1') return 'fundamental'
  if (levelSlug === 'nivel-2') return 'framework'
  if (levelSlug === 'nivel-3') return 'operativo'
  if (levelSlug === 'nivel-5') return 'organizacional'
  if (levelSlug === 'nivel-6') return 'estrategico'
  return 'fundamental'
}

function generateTags(filename: string, content: string): string[] {
  const tags: string[] = []

  if (content.includes('Office Hours') || content.includes('playbook')) tags.push('operativo')
  if (content.includes('framework') || content.includes('Framework')) tags.push('metodología')
  if (content.includes('métricas') || content.includes('ROI')) tags.push('métricas')
  if (content.includes('presentación') || content.includes('slides')) tags.push('presentación')
  if (filename.includes('_v')) tags.push('versionado')

  return tags
}

export function getAllDocuments(): Document[] {
  const documents: Document[] = []

  if (!fs.existsSync(DOCS_PATH)) {
    return documents
  }

  // Leer todas las carpetas de niveles
  const levelFolders = fs.readdirSync(DOCS_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .filter(dirent => dirent.name.startsWith('Nivel'))

  for (const folder of levelFolders) {
    const levelSlug = FOLDER_TO_LEVEL[folder.name]
    if (!levelSlug) continue

    const levelPath = path.join(DOCS_PATH, folder.name)
    const files = fs.readdirSync(levelPath)

    for (const file of files) {
      // Ignorar archivos que no son documentos
      if (file.startsWith('.') || file === 'README.md') continue

      const filePath = path.join(levelPath, file)
      const fileType = getFileType(file)
      const slug = file.replace(/\.(md|pdf|html)$/, '')
      const isEssential = ESSENTIAL_DOCS.some(doc => slug.includes(doc))

      let document: Document = {
        id: slug,
        slug,
        title: slug.replace(/_/g, ' ').replace(/\.md\.pdf$/, ''),
        description: '',
        level: LEVELS.find(l => l.slug === levelSlug)?.name || '',
        levelSlug,
        type: fileType,
        filePath,
        essential: isEssential,
        category: categorizeDocument(file, levelSlug),
      }

      // Para archivos markdown, extraer metadata
      if (fileType === 'markdown') {
        try {
          const fileContent = fs.readFileSync(filePath, 'utf-8')
          const { data, content } = matter(fileContent)

          document.title = data.title || document.title
          document.description = data.description || content.substring(0, 200).replace(/#/g, '').trim() + '...'
          document.content = content
          document.readTime = estimateReadTime(content)
          document.tags = data.tags || generateTags(file, content)

          const stats = fs.statSync(filePath)
          document.lastModified = stats.mtime.toISOString()
        } catch (error) {
          console.error(`Error reading ${file}:`, error)
        }
      } else {
        // Para PDFs y HTML, usar descripciones predefinidas
        document.description = getDefaultDescription(slug)
      }

      documents.push(document)
    }
  }

  return documents.sort((a, b) => {
    if (a.essential && !b.essential) return -1
    if (!a.essential && b.essential) return 1
    return a.title.localeCompare(b.title)
  })
}

export function getDocumentBySlug(levelSlug: string, slug: string): Document | null {
  const allDocs = getAllDocuments()
  return allDocs.find(doc => doc.levelSlug === levelSlug && doc.slug === slug) || null
}

export function getDocumentsByLevel(levelSlug: string): Document[] {
  return getAllDocuments().filter(doc => doc.levelSlug === levelSlug)
}

export function getEssentialDocuments(): Document[] {
  return getAllDocuments().filter(doc => doc.essential)
}

export function getAllLevels(): Level[] {
  const docs = getAllDocuments()

  return LEVELS.map(level => ({
    ...level,
    documentCount: docs.filter(doc => doc.levelSlug === level.slug).length,
  }))
}

function getDefaultDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'context_engineering_playbooks_operativos': 'Playbooks por perfil técnico: Backend, SRE, Frontend, QA, PM, Data Engineer, Security',
    'context_engineering_playbooks_no_tecnicos': 'Playbooks por perfil no técnico: Marketing, Legal, HR, Finanzas, Sales',
    'presentacion_ia_seniors_v3': 'Presentación adaptada para seniors - El origen de todo',
    'La_IA_Multiplica_la_Experiencia_v2': 'Material visual sobre cómo IA multiplica la experiencia',
    'adopcion-ia-context-engineering-blog': 'Blog post sobre adopción de IA con Context Engineering',
  }

  return descriptions[slug] || 'Documento del framework Context Engineering'
}
