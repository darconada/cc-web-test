'use client'

import Editor from '@monaco-editor/react'
import { useTheme } from 'next-themes'

interface MonacoEditorProps {
  value: string
  onChange: (value: string | undefined) => void
  language?: string
  height?: string
}

export function MonacoEditor({
  value,
  onChange,
  language = 'markdown',
  height = '600px',
}: MonacoEditorProps) {
  const { theme } = useTheme()

  const editorTheme = theme === 'dark' || theme === 'terminal' || theme === 'retro-80s' || theme === 'solarized-dark'
    ? 'vs-dark'
    : 'light'

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <Editor
        height={height}
        defaultLanguage={language}
        value={value}
        onChange={onChange}
        theme={editorTheme}
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          lineNumbers: 'on',
          rulers: [80, 120],
          wordWrap: 'on',
          wrappingIndent: 'indent',
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  )
}
