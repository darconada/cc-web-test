# AI - Context Engineering Framework Website

Sitio web para visualizar y gestionar la documentación del Context Engineering Framework de Arsys/Ionos.

## 🚀 Características

### FASE 1 - Navegación y Visualización ✅
- ✅ Sistema de 5 temas (Claro, Oscuro, Retro 80s, Terminal, Solarized)
- ✅ Navegación por niveles (7 niveles de documentación)
- ✅ Visor de Markdown con Table of Contents lateral
- ✅ Cards visuales para cada documento
- ✅ Sistema automático de metadata y categorización
- ✅ Breadcrumbs y navegación intuitiva

### FASE 2 - Administración ✅
- ✅ Sistema de autenticación con password (`t0k0m0tx0!`)
- ✅ Dashboard de administración completo
- ✅ Editor Monaco (VS Code) con preview en tiempo real
- ✅ Upload y reemplazo de archivos (.md, .pdf, .html)
- ✅ Gestión de documentos con filtros
- ✅ Sistema de backup automático

### FASE 3 - Búsqueda y UX ✅
- ✅ Búsqueda global con FlexSearch (rápida y eficiente)
- ✅ Filtros avanzados por nivel, tipo y tags
- ✅ Atajos de teclado (Cmd+K / Ctrl+K para búsqueda)
- ✅ Búsqueda instantánea con dropdown
- ✅ Página de búsqueda avanzada
- ✅ UI responsive y pulida

## 📋 Requisitos

- Node.js 18+ (LTS recomendado)
- npm o yarn

## 🛠️ Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Build para producción
npm run build

# 3. Iniciar el servidor
npm start
```

El sitio estará disponible en:
- Local: `http://localhost:3000`
- Red interna: `http://TU_IP:3000` (accesible desde otros PCs de la red)

## 🎨 Temas Disponibles

1. **Claro** - Tema limpio y profesional
2. **Oscuro** - Elegante para trabajar de noche
3. **Retro 80s** - Arcade neón con efectos Tron
4. **Terminal** - Matrix/Hacker style (verde fosforito)
5. **Solarized Light/Dark** - Paleta Solarized popular entre devs

Cambiar tema: Click en el ícono de paleta 🎨 en la esquina superior derecha.

## 🔐 Administración

### Acceso
1. Ir a `http://localhost:3000/admin`
2. Password: `t0k0m0tx0!`

### Funciones del Admin

#### Dashboard
- Ver estadísticas: total de documentos, tipos, niveles
- Buscar y filtrar documentos
- Acceso rápido a edición y reemplazo

#### Editar Documentos Markdown
1. Click en "Editar" en cualquier documento .md
2. Editor Monaco con syntax highlighting
3. Preview en tiempo real lado a lado
4. Guardar cambios (se actualiza el archivo directamente)

#### Reemplazar Archivos
1. Click en "Reemplazar" en cualquier documento
2. Subir nuevo archivo (.md, .pdf, .html)
3. El sistema crea backup automático del original
4. Confirmar reemplazo

## ⌨️ Atajos de Teclado

- `Cmd+K` o `Ctrl+K` - Abrir búsqueda rápida
- `ESC` - Cerrar búsqueda / modales

## 📁 Estructura del Proyecto

```
cc-web-test/
├── fuentes/                          # Documentos fuente
│   └── AI - context Enginering/
│       ├── Nivel 1 - Fundamentales/
│       ├── Nivel 2 - framework metodologico/
│       ├── ... (7 niveles en total)
│
├── src/
│   ├── app/                          # Páginas Next.js
│   │   ├── page.tsx                  # Home
│   │   ├── biblioteca/               # Navegación por niveles
│   │   ├── buscar/                   # Búsqueda avanzada
│   │   ├── admin/                    # Panel de admin
│   │   └── api/                      # API routes
│   │
│   ├── components/                   # Componentes React
│   │   ├── layout/                   # Header, Sidebar, MainLayout
│   │   ├── markdown/                 # MarkdownViewer, TOC
│   │   ├── search/                   # SearchBar
│   │   └── admin/                    # MonacoEditor, AuthGuard
│   │
│   ├── lib/                          # Utilidades
│   │   ├── documents.ts              # Gestión de documentos
│   │   ├── search.ts                 # Sistema de búsqueda
│   │   └── auth.ts                   # Autenticación
│   │
│   ├── styles/                       # CSS global y temas
│   └── types/                        # TypeScript types
│
├── public/                           # Assets estáticos
├── package.json
└── README.md
```

## 🔧 Configuración Avanzada

### Cambiar el Password de Admin

Edita `src/lib/auth.ts`:
```typescript
const ADMIN_PASSWORD = 'tu_nuevo_password'
```

### Agregar Más Temas

1. Edita `src/styles/globals.css`
2. Añade una nueva sección `[data-theme="mi-tema"]` con variables CSS
3. Registra el tema en `src/components/ThemeSelector.tsx`

### Puerto Personalizado

```bash
# Editar package.json
"start": "next start -H 0.0.0.0 -p 8080"
```

## 🚀 Deployment

### Como Servicio Systemd (Linux)

Crear `/etc/systemd/system/context-engineering.service`:

```ini
[Unit]
Description=Context Engineering Framework Website
After=network.target

[Service]
Type=simple
User=tu_usuario
WorkingDirectory=/ruta/a/cc-web-test
ExecStart=/usr/bin/npm start
Restart=always
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Habilitar:
```bash
sudo systemctl enable context-engineering
sudo systemctl start context-engineering
sudo systemctl status context-engineering
```

### Con Nginx Reverse Proxy

Configurar dominio interno `/etc/nginx/sites-available/context-engineering`:

```nginx
server {
    listen 80;
    server_name context-engineering.arsys.local;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📝 Desarrollo

```bash
# Modo desarrollo (con hot-reload)
npm run dev

# Linting
npm run lint

# Build
npm run build
```

## 🐛 Troubleshooting

### "No se encuentran los documentos"
- Verifica que la carpeta `fuentes/AI - context Enginering` existe
- Comprueba los permisos de lectura del directorio

### "Error al autenticar"
- Verifica que el password sea correcto: `t0k0m0tx0!`
- Limpia las cookies del navegador

### "Puerto 3000 ya en uso"
```bash
# Encontrar y matar proceso
lsof -i :3000
kill -9 [PID]
```

## 📚 Documentación de Dependencias Clave

- [Next.js 14](https://nextjs.org/docs) - Framework React
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - Editor de código
- [FlexSearch](https://github.com/nextapps-de/flexsearch) - Motor de búsqueda
- [React Markdown](https://github.com/remarkjs/react-markdown) - Renderizado de Markdown
- [Tailwind CSS](https://tailwindcss.com/docs) - Estilos

## 🔮 Roadmap Futuro

### Planeado para FASE 4 (opcional)
- [ ] Integración con EIAM para autenticación corporativa
- [ ] Analytics: tracking de usuarios y documentos más vistos
- [ ] Sistema de favoritos y marcadores personales
- [ ] Historial de versiones de documentos
- [ ] Comentarios y feedback por documento
- [ ] Chatbot IA para consultar documentos
- [ ] Modo offline (PWA)
- [ ] Export masivo a PDF

## 👨‍💻 Autor

Proyecto desarrollado para Arsys/Ionos como parte del Context Engineering Framework.

## 📄 Licencia

Uso interno Arsys/Ionos. Compartir libremente con atribución.

---

**Versión:** 1.0.0
**Última actualización:** Noviembre 2024
