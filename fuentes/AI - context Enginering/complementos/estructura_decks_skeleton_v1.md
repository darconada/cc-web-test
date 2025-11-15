# Estructura y Skeleton de Decks — Context Engineering
## Índice de Contenidos, Slides Base y Guía de Relleno

**Versión:** 1.0  
**Formato:** Esqueleto de decks para armar en PowerPoint/Google Slides  
**Uso:** Usa como plantilla, reemplaza [CONTENIDO_A_INSERTAR] con datos/casos reales

---

# 📑 Índice General de Decks

| Deck | Semanas | Audiencia | Slides | Formato | Objetivo |
|---|---|---|---|---|---|
| **Deck 1: El Método** | 13-16 | Mixta (tech + managers) | 12-15 | Executive + técnico | Explicar 3 Leyes + por qué funciona |
| **Deck 2: Las 4 Fases** | 13-16 | Comités técnicos | 12-18 | Técnico detallado | Implementación step-by-step |
| **Deck 3: Casos & ROI** | 13-16 | Executives + managers | 10-12 | Business focused | Pruebas + impacto $ |
| **Deck 4: Office Hours & Playbooks** | 5-12 | Equipos | 8-12 | Práctico | Cómo funciona sesión + ejemplos |
| **Deck 5: Governance & Seguridad** | 13-16 | IT/Security | 8-10 | Técnico/compliance | Políticas + riesgos mitigados |
| **Deck 6: Pilotos y Próximos Pasos** | Post-S20 | Managers + equipos | 6-8 | Operativo | Cómo proponer + timeline piloto |

---

---

# 🎯 DECK 1: El Método (Context Engineering Framework)
## Slides: 12-15 | Duración: 20-25 minutos | Audiencia: Mixta

### **Estructura**

```
SLIDE 1:  Portada
SLIDE 2:  Agenda
SLIDE 3:  El Problema: ¿Por qué IA sola no es suficiente?
SLIDE 4:  La Solución: Las 3 Leyes
SLIDE 5:  LEY 1 Detalle - Estructurar Problema
SLIDE 6:  LEY 1 Ejemplo Vivo
SLIDE 7:  LEY 2 Detalle - Aportar Contexto
SLIDE 8:  LEY 2 Ejemplo Vivo
SLIDE 9:  LEY 3 Detalle - Verificar
SLIDE 10: LEY 3 Ejemplo Vivo
SLIDE 11: Impacto Real (Casos internos)
SLIDE 12: ¿Cuándo usar? ¿Cuándo no?
SLIDE 13: Próximos Pasos (Office Hours)
[SLIDE 14-15: Optional - Deep Dives adicionales]
```

### **Contenido por Slide**

**SLIDE 1: Portada**
```
Título:     "Context Engineering Framework"
Subtítulo:  "Multiplicar impacto con IA: Método universal"
Tu nombre:  "Líder de Adopción de IA — Ingeniería de Contexto"
Fecha:      [Hoy]
Logo:       Ionos / Arsys
```

**SLIDE 2: Agenda**
```
• ¿Cuál es el problema con IA hoy?
• Presentar las 3 Leyes (10 min)
• Casos reales en vivo (5 min)
• ¿Cuándo funciona? ¿Cuándo no? (3 min)
• Cómo participar (Office Hours) (2 min)
```

**SLIDE 3: El Problema**
```
Izquierda:  ❌ Problema Actual
  "Uso ChatGPT → Respuestas genéricas → No sirve para mi contexto"
  "Gasto tiempo iterando → La IA no entiende mi dominio"
  "Sin método → Cada vez empiezo from scratch"

Derecha:    ✅ Solución Propuesta
  "Método estructurado para contextualizar el problema"
  "Reutilizable en tareas similares"
  "Observable: métricas antes/después"

Stat box:
  "En Ionos: 8 horas debugging → 15 minutos (32x)"
```

**SLIDE 4: Las 3 Leyes**
```
Formato: 3 columnas o bloques verticales

┌─────────────┬─────────────┬─────────────┐
│ LEY 1       │ LEY 2       │ LEY 3       │
├─────────────┼─────────────┼─────────────┤
│ ESTRUCTURAR │ APORTAR     │ VERIFICAR   │
│ PROBLEMA    │ CONTEXTO    │ RIGUROSAMENTE│
│             │             │             │
│ ✓ Objetivo  │ ✓ Dominio   │ ✓ Tests     │
│ ✓ Restricc. │ ✓ Few-shot  │ ✓ Validar   │
│ ✓ Criterios │ ✓ Verdad    │ ✓ Humano    │
└─────────────┴─────────────┴─────────────┘
```

**SLIDE 5: LEY 1 Detalle**
```
Título: "Ley 1: Estructurar el Problema"

3 elementos OBLIGATORIOS:

📌 OBJETIVO CLARO
   "¿Exactamente qué quiero lograr?"
   ❌ "Dame ideas" → ✅ "Necesito analizar logs para encontrar causa latencia"

📌 RESTRICCIONES EXPLÍCITAS
   "¿Qué NO puedo hacer?"
   ❌ "Hazlo rápido" → ✅ "Sin cambiar infraestructura, solo análisis"

📌 CRITERIOS DE ÉXITO
   "¿Cómo sé que funcionó?"
   ❌ "Que sea bueno" → ✅ "3 causas prioritizadas con ETA y esfuerzo"

💡 Heurística: Si no puedes responder 3/3, tu problema no está claro.
```

**SLIDE 6: LEY 1 Ejemplo Vivo**
```
Título: "Ley 1 Ejemplo: Análisis de Logs"

ANTES (Vago):
  "Dame análisis de estos logs"
  ❌ Resultado: Resumen genérico, no útil

DESPUÉS (Estructurado):
  "Contexto: Sistema Payments v2.4.1
   Objetivo: Encontrar causa latencia endpoint /transfer últimas 2h
   Restricción: Sin cambiar config, solo análisis
   Formato: Tabla [Timestamp] [Componente] [Métrica] [Causa] [Acción]
   Criterios: 3 causas prioritizadas, impacto estimado + esfuerzo
   Aquí están los logs: [LOGS SANITIZADOS]"
   
  ✅ Resultado: Análisis específico, listo para usar
```

**SLIDE 7: LEY 2 Detalle**
```
Título: "Ley 2: Aportar Contexto Rico"

La IA no adivina. Necesita información concreta:

📚 CONTEXTO DOMINIO
   "¿En qué sistema estoy? ¿Versión?"
   Ejemplo: "Sistema Payments, v2.4.1, language Python"

🎯 CASOS PREVIOS (Few-Shot)
   "¿Hay ejemplos similares?"
   Ejemplo: 2-3 casos históricos del mismo patrón

📊 VERDAD DEL TERRENO
   "¿Cuáles son las restricciones reales?"
   Ejemplo: "SLA máximo 5min, usuarios US-East only"

💡 El contexto es lo que diferencia genérico de específico.
```

**SLIDE 8: LEY 2 Ejemplo Vivo**
```
Título: "Ley 2 Ejemplo: Code Review"

ANTES (Sin contexto):
  "Revisa este código"
  [Solo el código]
  ❌ Resultado: Revisión genérica

DESPUÉS (Con contexto):
  "Contexto: Repo Python Django, testing pytest
   Few-shot: [Link 2 reviews previos similaresaprobados]
   Restricción: No mockear datetime sin necesidad
   Problema específico: Función X accede BD 3 veces, optimizar
   Aquí está el código: [CODE]"
   
  ✅ Resultado: Review profundo, reutilizable como template
```

**SLIDE 9: LEY 3 Detalle**
```
Título: "Ley 3: Verificar Rigurosamente"

No confíes en IA al 100%. Valida según criticidad:

🔴 CRÍTICO (Producción, dinero, PII)
   Verificación: Tests + Peer review + Canary + Rollback plan
   Tiempo: 30+ minutos

🟡 MEDIANO (Cambios operativos)
   Verificación: Tests + Peer review
   Tiempo: 15 minutos

🟢 BAJO (Análisis, brainstorm)
   Verificación: Lectura rápida + Sentido común
   Tiempo: 2 minutos

💡 Regla: Mayor criticidad → Mayor verificación
```

**SLIDE 10: LEY 3 Ejemplo Vivo**
```
Título: "Ley 3 Ejemplo: Cuando Falló y Cómo Lo Arreglamos"

CASO REAL:
  Paso 1: IA genera SQL para query en prod
  Paso 2: No verificamos, lo pusimos directo
  Paso 3: Query N+1 → Timeout → Incident
  ❌ Lección: Criticidad ALTA, validación insuficiente

SOLUCIÓN:
  Paso 1: IA genera SQL
  Paso 2: Ejecutamos en DEV, medimos performance
  Paso 3: Peer review (otro SRE valida patrón)
  Paso 4: Canary en staging 10% tráfico
  Paso 5: Monitor + Rollback plan listo
  Paso 6: Prod gradual (100% en 30 min con observabilidad)
  ✅ Lección: La verificación es inseparable del método
```

**SLIDE 11: Impacto Real**
```
Título: "Casos Reales en Ionos"

[Insertar 2-3 mejores casos documentados de tracker]

Caso 1:
  • Backend Dev: Code review 1h → 8 min (87% ROI)
  • Métrica: PR Review Time
  • Replicable: SÍ

Caso 2:
  • SRE: Diagnosis incident 3h → 15 min (92% ROI)
  • Métrica: MTTR Incident
  • Replicable: PARCIAL (necesita contexto)

Caso 3:
  • Soporte: Respuesta tickets 40 min → 5 min (88% ROI)
  • Métrica: Ticket Response Time
  • Replicable: SÍ

ACUMULADO S1-S5:
  → 7 personas habilitadas
  → 30+ horas ahorradas
  → 89% ROI promedio
```

**SLIDE 12: ¿Cuándo Usar? ¿Cuándo No?**
```
Título: "Matriz: Cuándo Context Engineering Brilla"

IDEAL PARA:
  ✅ Hay documentación (runbooks, código, configs)
  ✅ Hay precedentes (casos previos similares)
  ✅ Métrica clara (testeable, observable)
  ✅ Problema repetible (no one-off)
  
NO IDEAL PARA:
  ❌ Decisión humana irreemplazable (despidos, evaluaciones)
  ❌ Información real-time exterior (precios hoy, noticias)
  ❌ Problema completamente nuevo (sin referencia)
  ❌ Creatividad pura (sin patrón)

PREGUNTA SIMPLE:
  "¿Hay algún humano experto que sabe resolver esto?"
  SÍ → Context Engineering puede ayudar
  NO → Probablemente no
```

**SLIDE 13: Próximos Pasos**
```
Título: "¿Interesado? Cómo Participar"

3 opciones:

1️⃣ SHOW & TELL (Semana próxima)
   • 60 minutos
   • Demos en vivo
   • Sin PowerPoint, casos reales
   
2️⃣ OFFICE HOURS (Cada [DÍA] [HORA])
   • 45 minutos
   • Trae TU problema
   • Trabajamos juntos
   
3️⃣ PILOTO (Semanas 21-32)
   • 12 semanas
   • Tu equipo + facilitador
   • Métricas antes/después

Contacto:
  Email: [TU EMAIL]
  Slack: #context-engineering
  Calendar: [LINK PÚBLICO A OFFICE HOURS]
```

**SLIDE 14 [OPCIONAL]: FAQs**
```
P: ¿Esto reemplaza el juicio humano?
R: No, lo complementa. La verificación es obligatoria.

P: ¿Funciona con cualquier herramienta?
R: El método es agnóstico. Hoy usamos ChatGPT/Claude, mañana otras.

P: ¿Cuánto tiempo de aprendizaje?
R: 4-6 semanas si prácticas 2-3 casos/semana.

P: ¿Funciona para mi rol/equipo?
R: Lo hemos aplicado en Dev, SRE, Soporte, RRHH, Marketing. SÍ funciona.
```

**SLIDE 15 [OPCIONAL]: Referencias**
```
Documentos clave:
  • Context Engineering Framework (1-pager)
  • Context Engineering EXTENDED (profundidad técnica)
  • FAQ & Objeciones
  • Playbook Quick Start

Links:
  [Links a documentación interna / Space de Ionos]
```

---

---

# 🏗️ DECK 2: Las 4 Fases — Implementación
## Slides: 12-18 | Duración: 30-40 minutos | Audiencia: Comités técnicos

### **Estructura**

```
SLIDE 1:  Portada
SLIDE 2:  Agenda + Timeline 32 semanas
SLIDE 3:  Visión General: 4 Fases Funnel
SLIDE 4:  FASE 1 Foundation - Definición
SLIDE 5:  FASE 1 Foundation - Actividades & Métricas
SLIDE 6:  FASE 1 Foundation - DoD (Definition of Done)
SLIDE 7:  FASE 2 Integration - Definición
SLIDE 8:  FASE 2 Integration - Actividades & Métricas
SLIDE 9:  FASE 2 Integration - DoD
SLIDE 10: FASE 3 Measurement - Definición
SLIDE 11: FASE 3 Measurement - Actividades & Métricas
SLIDE 12: FASE 3 Measurement - DoD
SLIDE 13: FASE 4 Governance - Definición
SLIDE 14: FASE 4 Governance - Actividades & Métricas
SLIDE 15: FASE 4 Governance - DoD + Anti-patrones
SLIDE 16: Roadmap Completo (12 semanas piloto)
SLIDE 17: Riesgos y Mitigaciones
SLIDE 18: Q&A / Siguientes pasos
```

### **Contenido Clave por Slide**

**SLIDE 1: Portada**
```
Título: "Context Engineering: Las 4 Fases de Implementación"
Subtítulo: "De Foundation a Governance — 12 semanas por equipo"
Fecha & Facilitador: [TUS DATOS]
```

**SLIDE 3: Visión General 4 Fases**
```
Formato: Gráfico de embudo/flujo

┌──────────────┐
│ FOUNDATION   │ Semana 1-3: Bases, capacitación, casos pequeños
│ (6-8 SRs)    │
└──────┬───────┘
       ↓
┌──────────────┐
│ INTEGRATION  │ Semana 4-6: Integración en workflow, escalada
│ (3-5 SRs)    │
└──────┬───────┘
       ↓
┌──────────────┐
│ MEASUREMENT  │ Semana 7-9: Métricas, análisis ROI
│ (2-3 SRs)    │
└──────┬───────┘
       ↓
┌──────────────┐
│ GOVERNANCE   │ Semana 10-12: Sostenibilidad, políticas, scaling
│ (1-2 SRs)    │
└──────────────┘

Métrica paralela: Autonomía sube, facilitation baja
  Semana 1: 90% facilitation, 10% autónomo
  Semana 12: 10% facilitation, 90% autónomo
```

**SLIDE 4-6: FASE 1 Foundation**

**SLIDE 4:**
```
Título: "FASE 1: Foundation (Semanas 1-3)"

Objetivo: Capacitar equipo en 3 Leyes, validar en casos pequeños

Entrada (Pre-requisito):
  ✓ Equipo confirmado (4-8 personas)
  ✓ Problem statement claro (qué vamos a automatizar)
  ✓ Acceso a documentación/datos necesarios

Hito intermedio (Semana 2):
  ✓ 3-4 sesiones de capacitación completadas
  ✓ Primeros 2-3 casos pequeños ejecutados
  ✓ Feedback inicial incorporado
```

**SLIDE 5:**
```
Título: "FASE 1: Actividades & Métricas"

Actividades principales:
  1. Kickoff formal (1h)
  2. Show & Tell del método (1h)
  3. Office Hours x3 (45 min cada uno)
  4. Documentación inicial de 2-3 casos
  5. Primer feedback de participantes

Métricas esperadas (S3):
  ☐ % participación en sesiones (target: 80%+)
  ☐ # casos pequeños completados (target: 3-5)
  ☐ # personas diciendo "ahora lo entiendo" (target: 100%)
  ☐ NPS inicial (Net Promoter Score, target: >7/10)
  ☐ Anti-patrones detectados (target: 0-2)
```

**SLIDE 6:**
```
Título: "FASE 1: Definition of Done"

El equipo pasa a PHASE 2 SOLO si:

✅ MANDATORY:
   • 100% del equipo asistió ≥2 sesiones
   • 3+ casos documentados (incluso si pequeños)
   • 0 incidents causados por Method mis-use
   • Feedback consolidado (1-pager)

⚠️ NICE-TO-HAVE:
   • ≥60% de casos son replicables
   • 1 champion identificado
   • Template de prompt creado para dominio

❌ BLOCKER (Si pasa, repetir F1):
   • <50% participación en sesiones
   • Casos tienen datos sensibles expuestos
   • Equipo dice "esto no nos sirve"
```

**SLIDE 7-9: FASE 2 Integration** [Mismo formato que F1, adapt contenido]

```
SLIDE 7 - Definición:
  Objetivo: Integrar método en workflow diario, escalar automáticamente
  Entrada: Completada FASE 1
  Hito S6: Workflow integrado en 60%+ del equipo

SLIDE 8 - Actividades:
  1. Integración en CI/CD o sistemas existentes
  2. Office Hours 2x/semana (focus en escalada)
  3. Training de 1-2 champions
  4. 5-7 casos nuevos documentados
  5. Troubleshooting + iteración

  Métricas:
  • # casos completados sin facilitador (target: 3-5)
  • % equipo usando método de forma autónoma (target: 40-60%)
  • % casos "Replicable: SÍ" (target: 50%+)
  • ROI promedio acumulado (target: >70%)

SLIDE 9 - DoD:
  ✅ MANDATORY:
     • ≥1 piloto sin facilitador completado con éxito
     • 5+ casos documentados total
     • 1-2 champions pueden facilitar solos

  ❌ BLOCKER:
     • <30% del equipo usa método
     • Casos tienen issues de data leakage
```

**SLIDE 10-12: FASE 3 Measurement** [Adaptado]

```
SLIDE 10 - Definición:
  Objetivo: Medir impacto real, cuantificar ROI organizacional
  Entrada: Completada FASE 2
  Hito S9: Métricas validadas, ROI claro

SLIDE 11 - Actividades:
  1. Recopilación datos 6-9 meses atrás (before/after)
  2. Análisis de anomalías (¿qué casos funcionaron/no?)
  3. Entrevistas 1:1 para validar métricas
  4. Reporte consolidado + visualizaciones

  Métricas por medir:
  • Tiempo ahorrado total (horas/mes)
  • Impacto por persona (MTTA, MTTR, etc.)
  • Calidad mejorada (defectos ↓, throughput ↑)
  • Autonomía ganada (nuevos dominios donde operativo)

SLIDE 12 - DoD:
  ✅ MANDATORY:
     • Reporte de ROI firmado (manager + facilitador)
     • 3+ visualizaciones de impacto
     • Feedback de all participantes incorporado

  ❌ BLOCKER:
     • Métricas no son validables / inconsistentes
```

**SLIDE 13-15: FASE 4 Governance** [Adaptado]

```
SLIDE 13 - Definición:
  Objetivo: Sostenibilidad, políticas formales, preparar escalada
  Entrada: Completada FASE 3
  Hito S12: Governance en lugar, escalada habilitada

SLIDE 14 - Actividades:
  1. Definir ownership del método post-piloto
  2. Políticas de datos formales (Política de Datos v1.0)
  3. SLA del facilitador (si continúa apoyando)
  4. Plan de escalada a otros equipos
  5. Documentación final (runbooks, templates, FAQs)

  Métricas:
  • Política de datos aprobada por IT/Security (target: S11)
  • % equipo puede facilitar a otros (target: 50%+)
  • Tiempo de facilitador post-fase (est: 20% vs 60% inicial)

SLIDE 15 - DoD + Anti-patrones:
  ✅ MANDATORY:
     • Política de Datos v1.0 aprobada
     • Ownership definido (quién mantiene)
     • Plan de escalada para próximo equipo

  ❌ ANTI-PATTERNS (Evitar):
     • "Governance = prohibición de IA" → NO, governance = seguridad
     • "Facilitator desaparece día 1 de F4" → NO, debe supervisar
     • "Métricas se detienen en S12" → NO, continuar tracking
```

**SLIDE 16: Roadmap Completo 12 semanas**
```
Formato: Timeline visual

Semana 1-3:     █████ FOUNDATION
Semana 4-6:            ██████ INTEGRATION
Semana 7-9:                   ███████ MEASUREMENT
Semana 10-12:                        ████████ GOVERNANCE

Hitos clave:
  S1:  Kickoff
  S3:  F1 DoD alcanzado, equipo entiende método
  S6:  F2 DoD alcanzado, escalada autónoma comienza
  S9:  F3 DoD alcanzado, ROI validado
  S12: F4 DoD alcanzado, listo para siguiente equipo

Paralelo:
  Oficina Hours: Cada [DÍA] [HORA] (consistente)
  Documentación: Viva, actualizar cada 2 semanas
  Métricas: Tracker semanal, reporte cada 4 semanas
```

**SLIDE 17: Riesgos y Mitigaciones**
```
Formato: Tabla

RIESGO | PROBABILIDAD | IMPACTO | MITIGACIÓN
─────────────────────────────────────────────────
"Equipo no participa activamente" | Alta | Alto | Conectar con problemas reales del equipo, NO mandato
"Casos tienen data leakage" | Media | Alto | Política de datos + checklist pre-uso
"ROI no es medible/validable" | Media | Medio | Definir métricas S0, trackear desde día 1
"Method fatigue (demasiado framework)" | Baja | Bajo | Simplificar, focus en 3 Leyes, no 100 reglas
"Siguiente equipo no quiere participar" | Baja | Medio | Use casos éxito para evangelizar
```

**SLIDE 18: Q&A / Siguientes Pasos**
```
Preguntas esperadas:
  Q: ¿Esto es mandatorio?
  R: No, es opt-in. Pero los resultados son convincentes.

  Q: ¿Quién facilita?
  R: [TU NOMBRE] en F1-F3, champions en F4+

  Q: ¿Cuál es el commitment de tiempo del equipo?
  R: 4-6h/semana en F1, baja en F4 (eventual)

  Q: ¿Garantizan ROI?
  R: El método funciona. Pero ROI depende de caso de uso. Rango típico: 70-95%.

Próximos pasos:
  1. Equipos interesados, levantar mano
  2. Kickoff formal (S1 o S21, según timeline)
  3. Primera sesión Show & Tell la próxima semana
```

---

---

# 💰 DECK 3: Casos & ROI
## Slides: 10-12 | Duración: 15-20 minutos | Audiencia: Executives + Managers

### **Estructura**

```
SLIDE 1:  Portada
SLIDE 2:  Executive Summary (1 slide con números)
SLIDE 3-8: [INSERTAR 5-6 CASOS REALES]
SLIDE 9:  ROI Consolidado Organizacional
SLIDE 10: Análisis por Rol/Equipo
SLIDE 11: Benchmarking (vs mercado, si aplica)
SLIDE 12: Conclusión & Business Case Preview
```

### **Contenido Clave**

**SLIDE 1: Portada**
```
Título: "Context Engineering: Casos & ROI Organizacional"
Subtítulo: "Resultados reales de [S1-SX], X semanas de implementación"
Período: "Octubre - [FECHA ACTUAL]"
```

**SLIDE 2: Executive Summary (Key Numbers)**
```
[Grande, números destacados]

┌─────────────┬─────────────┬─────────────┬─────────────┐
│  7 PERSONAS │ 30+ HORAS   │   89%       │  4 EQUIPOS  │
│ HABILITADAS │  AHORRADAS  │   ROI       │  IMPACTADOS │
└─────────────┴─────────────┴─────────────┴─────────────┘

        💰 ~€4,500 en valor organizacional (estimado)
        
Key takeaway: "El método demuestra valor, es replicable, 
está listo para escalada"
```

**SLIDE 3-8: Casos Individuales**

[Insertar 1 caso por slide, formato estándar]

**Formato estándar por caso:**

```
TÍTULO: [Nombre descriptivo del caso]

PERSONA/EQUIPO: [Dev-A / SRE-B / Soporte-C] | Rol: [Backend Dev]

PROBLEMA (antes):
  "Tardaba 2h 30min en analizar logs de incident porque..."
  
CONTEXTO USADO:
  ✓ Logs sanitizados (>1000 líneas)
  ✓ 2 postmortems históricos similares
  ✓ Runbook de troubleshooting

SOLUCIÓN (Prompt):
  [Resumir 1-2 líneas clave del prompt]

RESULTADO (después):
  ✓ 15 minutos para análisis completo
  ✓ 3 causas prioritizadas + ETA + esfuerzo
  ✓ Análisis pasó peer review sin cambios

MÉTRICAS:
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 92% ROI
  Tiempo: 2h 30min → 15 min
  Herramienta: Claude Pro
  Replicable: ✅ SÍ (otros SREs la pueden usar)
  
QUOTE:
  "Esto normalmente tomaría toda mi mañana. 
   En 15 minutos tenía análisis validado. Game-changer."
   — [PERSONA]

IMPACTO ORGANIZACIONAL:
  • Si escalamos a 8 SREs → 18-20h ahorradas/semana
  • Incident response time ↓ 85%
  • Escalabilidad sin contratar más SREs
```

[Repetir SLIDE 3-8 con 6 mejores casos del tracker]

**SLIDE 9: ROI Consolidado Organizacional**
```
Título: "ROI Total: Octubre - [HOY]"

Visualización: Gráfico de barras o timeline

ANTES vs DESPUÉS:

MÉTRICAS OPERATIVAS:
  • MTTA (Mean Time To Ack): 45 min → 20 min (-56%)
  • MTTR (Mean Time To Resolve): 3h → 1h (-67%)
  • Ticket Response Time: 40 min → 5 min (-88%)
  • Code Review Cycle: 1h → 8 min (-87%)
  • Doc Generation: 3h → 25 min (-86%)
  
IMPACTO HUMANO:
  • Personas habilitadas: 7 (target S12: 15-25)
  • Equipos activos: 4 (target S12: 4-6)
  • Champions identificados: 2 (target S12: 3-5)
  
MÉTRICAS FINANCIERAS (Estimado):
  • Tiempo ahorrado: 30+ horas (primeras 5 semanas)
  • Costo/hora (señor): €150
  • Valor generado: ~€4,500
  • Proyectado S12: ~€35-50k (con escalada)
  
CALIDAD:
  • Defectos pre-prod: [% mejorado si aplica]
  • Throughput: [% mejorado si aplica]
```

**SLIDE 10: Análisis por Rol/Equipo**
```
Título: "Impacto por Rol: Distribución Horizontal"

Tabla/Visualización:

ROL        | CASOS | ROI AVG | MEJOR CASO | PEOR CASO
─────────────────────────────────────────────────────
Dev        | 2     | 82%    | 87%        | 78%
SRE        | 2     | 92%    | 92%        | 92%
Soporte    | 1     | 88%    | 88%        | -
RRHH       | 1     | 92%    | 92%        | -
Operaciones| 1     | 92%    | 92%        | -
────────────────────────────────────────────────────
TOTAL      | 7     | 89%    | 92%        | 78%

Key insight:
  "No es concentrado en 1 equipo. El método funciona 
   horizontalmente (Dev, SRE, Soporte, RRHH, Ops).
   Esto demuestra universalidad."
```

**SLIDE 11: Benchmarking (Contexto de Mercado)**
```
Título: "¿Cómo nos comparamos?"

Info: Si tienes benchmarks internos o externos

IONOS vs MERCADO:
  • Industria Tech típica: 40-60% ROI en initiatives de productividad
  • Ionos Context Engineering: 89% ROI en 5 semanas
  • Conclusión: 48% mejor que baseline

TIME-TO-VALUE:
  • Típico (herramientas): 12-16 semanas
  • Ionos (método): 2-3 semanas hasta primer caso
  • Conclusión: 5-8x más rápido

ESCALABILIDAD:
  • Per-person ROI no disminuye con más gente
  • El método es transferible, no hay degradación
  • Conclusión: ROI escala linealmente
```

**SLIDE 12: Conclusión & Business Case Preview**
```
Título: "Conclusión: Listo para Escalada"

3 datos clave:

1. ✅ VALIDADO: 7 personas, 4 equipos, 89% ROI promedio
   "El método funciona en la realidad Ionos"

2. ✅ UNIVERSAL: Dev, SRE, Soporte, RRHH, Ops
   "No es niche, aplica horizontalmente"

3. ✅ REPLICABLE: 85% de casos son replicables
   "Otros pueden hacerlo solos (no necesitan facilitador)"

PRÓXIMOS PASOS (Semanas 13-20):
  → 2-3 pilotos formales de 12 semanas
  → Documentación de anti-patrones aprendidos
  → Business case L6 (impacto multiplicador)

INVERSIÓN REQUERIDA:
  • Licencias IA (ChatGPT/Claude): [X€/mes]
  • Tiempo facilitador: [Y h/semana]
  • Tiempo equipos: [Z h/semana]
  
ESPERADO POST-ESCALADA (Año 1):
  • 20-30 personas habilitadas
  • 6-8 equipos en implementación
  • €80-150k en valor organizacional estimado
```

---

---

# 🛠️ DECK 4: Office Hours & Playbooks
## Slides: 8-12 | Duración: 15 minutos | Audiencia: Equipos

### **Estructura**

```
SLIDE 1:  Portada
SLIDE 2:  ¿Qué es una Office Hour?
SLIDE 3:  Estructura de 45 Minutos
SLIDE 4-6: Playbook Ejemplo 1 (Helpdesk / Dev / RRHH)
SLIDE 7-8: Cómo Unirse + Calendario
```

**SLIDE 3: Estructura 45 min**
```
⏱️ 5 min:   INTRO
   "¿Cuál es tu problema hoy?"

⏱️ 10 min:  ESTRUCTURACIÓN (Ley 1)
   "Junto contigo, aclaramos qué necesitas"

⏱️ 15 min:  CONTEXTO (Ley 2)
   "Reunimos información relevante"

⏱️ 10 min:  APLICAR MÉTODO (Prompts)
   "Escribimos prompt y ejecutamos"

⏱️ 5 min:   VALIDACIÓN + DOCUMENTACIÓN
   "Validamos resultado, documentamos caso"

OUTCOME: Sales con caso documentado + template reusable
```

---

---

# 🔒 DECK 5: Governance & Seguridad
## Slides: 8-10 | Duración: 15 minutos | Audiencia: IT/Security

### **Estructura**

```
SLIDE 1:  Portada
SLIDE 2:  El Desafío (PII, datos sensibles, compliance)
SLIDE 3-5: Soluciones implementadas
SLIDE 6:  Política de Datos v1.0
SLIDE 7:  Monitoreo & Auditoría
SLIDE 8:  Riesgos Residuales
SLIDE 9-10: Escaladas
```

**Contenido clave:**

Usar contenido de documento "Política de Datos v1.0" que creamos.

---

---

# 🚀 DECK 6: Pilotos y Próximos Pasos
## Slides: 6-8 | Duración: 10 minutos | Audiencia: Managers + Equipos

### **Estructura**

```
SLIDE 1:  Portada
SLIDE 2:  Propuesta de Piloto (Plantilla)
SLIDE 3:  Timeline 12 semanas (4 Fases)
SLIDE 4:  Commitment requerido
SLIDE 5:  Métricas de éxito
SLIDE 6:  Riesgos & Mitigación
SLIDE 7-8: Cómo registrarse
```

**SLIDE 2: Plantilla de Propuesta**
```
PILOTO: [Nombre]
─────────────────
Equipo(s): [SRE / Dev Backend / Soporte]
Duración: 12 semanas (4 Fases Foundation→Governance)
Commitment: [X h/semana del equipo]

PROBLEMA A RESOLVER:
  "En SRE, tardamos 3h en [problema], queremos 30 min"

MÉTRICA ÉXITO:
  • ANTES: 3h por incident
  • DESPUÉS: 30 min por incident (target)
  • ROI esperado: 90%+

FACILITATION:
  [TU NOMBRE], Líder de Adopción IA
  Sesiones: [DÍA/HORA regulares]

RIESGOS:
  • Si <50% participación → Riesgo de no completar
  • Mitigación: Conectar con pain point real del equipo
```

---

---

## 📌 GUÍA DE RELLENO: Cómo Usar Esta Estructura

### Antes de crear decks:

1. **Reúne datos de tracker**
   - Top 3-5 casos mejor documentados
   - Métricas consolidadas S1-SX

2. **Extrae quotes**
   - 1-2 citados de participantes
   - Permisos de uso (preguntar si publicar nombre o anonimizar)

3. **Valida números**
   - ¿ROI % son correctos?
   - ¿Herramientas usadas son actuales?
   - ¿Fechas y semanas son consistentes?

### Durante creación de slides:

1. **Mantén consistencia visual**
   - Mismo color/tipografía entre decks
   - Logos Ionos/Arsys en header
   - Numbering de slides consistente

2. **Adapta ejemplos genéricos a TUS casos reales**
   - [INSERTAR AQUÍ] → Busca en tracker
   - [ESTADÍSTICA] → Calcula desde datos reales

3. **Pide feedback**
   - A manager: "¿Números son correctos?"
   - A participantes: "¿Puedo publicar tu caso?"
   - A IT/Security: "¿Deck de Governance está OK?"

### Después de crear decks:

1. **Prepara speaker notes**
   - Notas bajo cada slide con transiciones
   - Timing (cuántos minutos por slide)
   - Frases clave (no leer textualmente)

2. **Haz dry-run**
   - Presenta a manager / amigo
   - Mide tiempo
   - Ajusta si es muy larga/corta

3. **Prepara Q&A**
   - Anticipa preguntas por audiencia
   - Notas con respuestas

---

## 📊 Resumen de Decks + Timeline

| Deck | Semanas | Auditorio | Propósito | Prerequisite |
|---|---|---|---|---|
| **1: Método** | 13-16 | Mixta | Explicar qué/por qué | Cases documentados |
| **2: 4 Fases** | 13-16 | Comités técnicos | Cómo implementar | Phases content ready |
| **3: Casos & ROI** | 13-16 | Execs | Probar valor $ | Top 6 cases |
| **4: Office Hours** | 5-12 | Equipos | Cómo participar | Playbooks ready |
| **5: Governance** | 13-16 | IT/Security | Riesgos mitigados | Policy v1.0 aprob |
| **6: Pilotos** | Post-20 | Managers | Cómo proponer piloto | 4 Fases documentadas |

---

**Versión 1.0 | Octubre 2025 | Estado: Template listo para rellenar con datos reales**

**Próximo paso:** Elige 1 deck, reúne datos de tracker, comienza a rellenar en PowerPoint/Google Slides