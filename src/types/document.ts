export interface Document {
  id: string
  slug: string
  title: string
  description: string
  content?: string
  level: string
  levelSlug: string
  type: 'markdown' | 'pdf' | 'html'
  filePath: string
  readTime?: string
  essential?: boolean
  category?: 'fundamental' | 'operativo' | 'estrategico' | 'framework' | 'organizacional'
  tags?: string[]
  lastModified?: string
}

export interface Level {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  order: number
  documentCount: number
}
