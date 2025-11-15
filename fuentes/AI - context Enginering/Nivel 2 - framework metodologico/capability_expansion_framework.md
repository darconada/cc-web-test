# Capability Expansion Framework (0→1)
## El valor estratégico que las métricas tradicionales no capturan

**Versión:** 1.0  
**Fecha:** Octubre 2025  
**Autor:** Proyecto Context Engineering  
**Estado:** Framework validado - En uso piloto

---

## 📋 Índice

1. [Introducción: Dos Tipos de Valor](#introducción-dos-tipos-de-valor)
2. [Las 5 Métricas de Capability Expansion](#las-5-métricas-de-capability-expansion)
3. [Fórmula ROI Extendida](#fórmula-roi-extendida)
4. [Ejemplo Numérico Completo](#ejemplo-numérico-completo)
5. [Template para Documentar Casos 0→1](#template-para-documentar-casos-01)
6. [Cómo Identificar 0→1 en Office Hours](#cómo-identificar-01-en-office-hours)
7. [Integración con DORA/SPACE/SRE](#integración-con-doraspacesre)
8. [Casos de Uso por Perfil](#casos-de-uso-por-perfil)
9. [Referencias y Bibliografía](#referencias-y-bibliografía)

---

## Introducción: Dos Tipos de Valor

### El Problema con las Métricas Tradicionales

Los frameworks establecidos (DORA, SPACE, SRE) miden **optimización incremental**:
- "¿Cuánto más rápido resuelves incidentes?" (MTTR)
- "¿Cuántos más deploys haces?" (Deployment Frequency)
- "¿Qué tan satisfecho está el equipo?" (SPACE Satisfaction)

**Pero NO capturan:**
- "¿Qué puedes hacer AHORA que antes era imposible?"
- "¿A cuántos dominios nuevos tienes acceso?"
- "¿Cuántos problemas organizacionales se desbloquean?"

### Dos Tipos de Valor

#### **VALOR TIPO 1: Optimización (1→1.2)**

**Definición:** Hacer las tareas existentes más rápido, mejor o con menos errores.

**Características:**
- Mejora incremental y predecible
- Métricas cuantitativas claras (%, tiempo, errores)
- ROI típico: 50-200%
- Ejemplo: "Troubleshooting de red que tomaba 2h ahora toma 1.5h (-25%)"

**Medido por:** DORA, SPACE, SRE, Atlassian ITSM

---

#### **VALOR TIPO 2: Capacitación (0→1)**

**Definición:** Acceso a capacidades, dominios o tareas que antes eran inaccesibles por falta de expertise, tiempo o formación.

**Características:**
- Mejora transformacional e impredecible
- Métricas de scope, acceso y posibilidad
- ROI típico: 500-8000%
- Ejemplo: "Ingeniero de redes que ahora programa scripts Python, automatiza con Ansible y administra Kubernetes"

**NO medido por frameworks tradicionales → Requiere este framework**

---

### ¿Por Qué 0→1 Genera Más Valor?

```
OPTIMIZACIÓN (1→1.2):
├─ Tarea existente: Troubleshoot BGP
├─ Mejora: 2h → 1.5h (-25%)
├─ Frecuencia: 10 veces/mes
├─ Ahorro: 5h/mes × 60€/h = 300€/mes
└─ ROI: Cientos de €

CAPACITACIÓN (0→1):
├─ Nueva capacidad: Programar Python
├─ Tareas desbloqueadas: 18 tareas/trimestre (de 0 → 18)
├─ Valor nuevo creado: 18 × 1.440€ = 25.920€/trimestre
├─ Costes evitados: No contratar Python dev = 35k€/año
├─ Ventaja velocidad: Domain knowledge = 21k€/año
└─ ROI: Miles de €
```

**Ratio típico observado:** Por cada €1 de valor en optimización, hay €10-50 de valor en capacitación.

---

## Las 5 Métricas de Capability Expansion

### 1. Task Accessibility Rate (TAR)

**Definición:** Porcentaje del backlog organizacional que una persona puede abordar de forma autónoma.

#### Fórmula:
```
TAR = (Tareas accesibles / Total tareas en backlog) × 100
```

#### Medición:

**PASO 1: Baseline (Semana 0)**
```markdown
Backlog equipo/organización: 100 tareas
Tareas que PUEDES hacer: 35 tareas
  → Área expertise core: 30 tareas
  → Áreas adyacentes: 5 tareas
Tareas que NO PUEDES hacer: 65 tareas
  → Requieren skills fuera de tu dominio

TAR baseline = 35%
```

**PASO 2: Post-implementación (Semana 12)**
```markdown
Backlog: 100 tareas (mismo)
Tareas que AHORA PUEDES hacer: 70 tareas
  → Área core: 30 tareas (igual)
  → Áreas nuevas con IA: 40 tareas (NUEVO)

TAR post = 70%

MEJORA = +35 puntos porcentuales = +100% capability expansion
```

#### Instrumentación:
- **Manual:** Survey pre/post con skills matrix
- **Frecuencia:** Baseline → Semana 4 → Semana 12 → Trimestral
- **Herramienta:** Google Forms + Spreadsheet

#### Interpretación:
- **TAR <40%:** Rol muy especializado, alta dependencia
- **TAR 40-60%:** Competencia cross-funcional moderada
- **TAR >60%:** Alta versatilidad, baja dependencia
- **Δ TAR >+20pp:** Capability expansion significativa

---

### 2. Domain Expansion Index (DEI)

**Definición:** Número de dominios técnicos en los que una persona puede trabajar de forma operativa y autónoma.

#### Niveles de Competencia:
- **Experto:** Trabajo autónomo en producción, puede enseñar a otros
- **Competente:** Trabajo con supervisión ocasional, operativo
- **Principiante:** Aprendiendo, no operativo todavía
- **Inaccesible:** Fuera de alcance, requiere años de formación

#### Fórmula:
```
DEI = Número de dominios operativos (Experto + Competente)
```

#### Medición:

**Baseline (Semana 0):**
```markdown
PERFIL: Ingeniero de Redes Senior

Dominios por nivel:
├─ Experto (autónomo): Redes, BGP, Firewalls [3 dominios]
├─ Competente: Troubleshooting sistemas básico [1 dominio]
├─ Principiante: Programación, automatización [0 operativos]
└─ Inaccesible: Admin sistemas avanzado, análisis datos

DEI baseline = 4 (3 experto + 1 competente)
```

**Post-implementación (Semana 12):**
```markdown
Dominios por nivel:
├─ Experto: Redes, BGP, Firewalls [3 - igual]
├─ Competente: Troubleshooting, Programación Python, Automatización Ansible [4 - +2 NUEVOS]
├─ Principiante: Admin Kubernetes [movido desde Inaccesible]
└─ Inaccesible: [reducido]

DEI post = 7 (3 experto + 4 competente)

MEJORA = +3 dominios operativos = +75% expansion
```

#### Instrumentación:
- **Manual:** Skills matrix con autoevaluación + validación manager
- **Frecuencia:** Baseline → Mensual → Trimestral
- **Herramienta:** Spreadsheet con escala definida

#### Interpretación:
- **DEI 1-3:** Especialista profundo, limitado scope
- **DEI 4-6:** Generalista competente
- **DEI 7+:** T-shaped o full-stack contributor
- **Δ DEI >+2:** Expansion transformacional

---

### 3. Cross-functional Contribution Rate (CFCR)

**Definición:** Porcentaje de sprints o periodos donde se contribuye activamente a equipos FUERA del área original.

#### Fórmula:
```
CFCR = (Sprints con contribución cross-team / Total sprints) × 100
```

#### Medición:

**Baseline (6 meses históricos):**
```markdown
Sprints totales: 12
Contribuciones solo a equipo propio (Redes): 12 (100%)
Contribuciones a otros equipos: 0 (0%)

CFCR baseline = 0%
```

**Post-implementación (3-6 meses):**
```markdown
Sprints totales: 12
Contribuciones equipo propio: 12 (100%)
Contribuciones ADICIONALES cross-team:
  ├─ Equipo Sistemas: 4 sprints (automatización)
  ├─ Equipo DevOps: 3 sprints (scripting CI/CD)
  └─ Equipo Platform: 2 sprints (troubleshooting K8s)
Total sprints con cross-contribution: 9

CFCR post = 75% (9/12 sprints)

MEJORA = +75pp (de 0% a 75%)
```

#### Instrumentación:
- **Automática:** Jira sprint reports (contributor field)
- **Manual:** Review mensual de contributions log
- **Frecuencia:** Mensual
- **Herramienta:** Jira analytics + dashboard custom

#### Interpretación:
- **CFCR 0-20%:** Contribuidor aislado, silos
- **CFCR 20-50%:** Colaboración ocasional
- **CFCR >50%:** Shared resource efectivo, desiloed
- **Δ CFCR >+30pp:** Transformación organizacional

---

### 4. Impossible Task Resolution (ITR)

**Definición:** Número absoluto de tareas resueltas que en el baseline estaban categorizadas como "fuera de scope" o "imposibles" para esa persona.

#### Fórmula:
```
ITR = Número de tareas "previamente imposibles" resueltas en periodo
```

#### Medición:

**Tracking trimestral:**

**Q1 (sin Context Engineering + IA):**
```markdown
Tareas totales resueltas: 45
Tareas dentro de scope core: 45
Tareas "fuera de mi scope" intentadas: 0
Tareas escaladas por falta de skill: 12

ITR Q1 = 0 tareas
Escalaciones = 12
```

**Q2 (con Context Engineering + IA, primeras 12 semanas):**
```markdown
Tareas totales resueltas: 52 (+7)
Tareas dentro scope core: 34
Tareas "previamente imposibles" resueltas: 18 ← NUEVO
  ├─ Programación Python: 8 tareas
  ├─ Automatización: 6 tareas
  └─ Admin sistemas: 4 tareas
Tareas escaladas: 3 (-75%)

ITR Q2 = 18 tareas (de 0 → 18)
Reducción escalaciones = -75%
```

#### Instrumentación:
- **Jira:** Campo custom `Previously_Impossible` (boolean)
- **Proceso:** Al cerrar ticket, marcar si era "previamente fuera de mi scope"
- **Frecuencia:** Tracking continuo, report trimestral
- **Herramienta:** Jira dashboard + query

#### Interpretación:
- **ITR 0:** Sin expansion, mismo scope
- **ITR 1-5/trimestre:** Expansion moderada
- **ITR >10/trimestre:** Expansion significativa
- **Ratio ITR/Escalaciones:** Mide autonomía ganada

---

### 5. Time-to-Competency Compression (TCC)

**Definición:** Reducción del tiempo requerido para alcanzar competencia operativa en un dominio nuevo, comparado con el estándar de industria/organización.

#### Fórmula:
```
TCC = ((Tiempo estándar - Tiempo real) / Tiempo estándar) × 100
```

#### Medición:

**Caso: Programación Python para ingeniero de redes**

**Estándar industria/organización:**
```markdown
Ruta tradicional:
├─ Cursos online/bootcamp: 3-6 meses
├─ Proyectos guiados: 2-4 meses
├─ Primeros scripts productivos: +2-3 meses
└─ "Operativo" (trabajo autónomo): 12-24 meses

Tiempo estándar = 12-24 meses (tomamos 18 meses conservador)
```

**Ruta con Context Engineering + IA:**
```markdown
Timeline real:
├─ Semana 1: Primera Office Hours → script Python funcional
├─ Semana 4: Primer script en producción (backup configs)
├─ Semana 8: Contribuye a repo automatización autónomamente
└─ Semana 12: Considerado "operativo" por equipo DevOps

Tiempo real = 12 semanas = 3 meses
```

**Cálculo:**
```
TCC = ((18 meses - 3 meses) / 18 meses) × 100 = 83.3%

Compresión = -83% tiempo (6x más rápido)
```

#### Instrumentación:
- **Manual:** Timeline tracking por dominio nuevo
- **Validación:** Peer review de "operativo" (competent level)
- **Frecuencia:** Por dominio, ad-hoc
- **Herramienta:** Spreadsheet + milestones documentados

#### Interpretación:
- **TCC 0-30%:** Aceleración marginal
- **TCC 30-60%:** Aceleración significativa
- **TCC >60%:** Transformación del learning path
- **TCC >80%:** Disrupción del modelo formación tradicional

---

## Fórmula ROI Extendida

### ROI Total = ROI Optimización + ROI Capacitación

```
ROI Total = ((Valor Optimización + Valor Capacitación - Costes IA) / Costes IA) × 100
```

---

### Componente 1: ROI Optimización (1→1.2)

**Ya cubierto por frameworks tradicionales** (DORA, SPACE, SRE)

```
Valor Optimización = Ahorro tiempo + Reducción errores + Mejora throughput
```

Ejemplos:
- MTTR: 2h → 1.5h = -25%
- Throughput: +15% tareas/sprint
- Change Failure Rate: 8% → 5% = -3pp

**ROI típico: 50-200%**

---

### Componente 2: ROI Capacitación (0→1)

**Nuevo - no capturado por frameworks tradicionales**

```
Valor Capacitación = Nuevo Valor Creado + Costes Evitados + Ventaja Velocidad
```

#### A) Nuevo Valor Creado

**Definición:** Valor de tareas que antes eran imposibles y ahora se ejecutan.

**Fórmula:**
```
Nuevo Valor = ITR × Valor Promedio Tarea
```

**Cálculo Valor Promedio Tarea:**
```
Valor Tarea = Tiempo típico × Coste hora

Ejemplo:
├─ Tarea de automatización típica: 3 días
├─ Tiempo: 3 días × 8h = 24 horas
├─ Coste hora: 60€/h (engineer senior)
└─ Valor Tarea = 1.440 €
```

**Cálculo Nuevo Valor:**
```
ITR Q2 = 18 tareas "imposibles" resueltas
Valor promedio = 1.440 €
Nuevo Valor Q2 = 18 × 1.440 € = 25.920 €

Anualizado = 25.920 × 4 = 103.680 €/año
```

---

#### B) Costes Evitados

**Definición:** Costes que la organización NO incurre porque la persona ahora puede hacer tareas que antes requerían contratar/formar/externalizar.

**Componentes:**
```
Costes Evitados = Coste Contratación + Coste Coordinación + Coste Oportunidad
```

**Ejemplo:**

**Coste Contratación (especialista externo):**
```
Sin IA: Necesitas:
├─ 0.5 FTE Python developer para automatización: 35k €/año
├─ 0.3 FTE DevOps para CI/CD scripting: 21k €/año
└─ Total = 56k €/año

Con IA: Ingeniero de redes hace estas tareas directamente
Coste evitado = 56k €/año
```

**Coste Coordinación:**
```
Cada tarea cross-team sin IA:
├─ Handoff time: 2-4 horas
├─ Context switching: 20-30% overhead
├─ Misunderstandings: 1-2 iteraciones extra
└─ Coste estimado: 10k €/año para equipo típico

Con IA: Mismo ingeniero, sin handoffs
Coste evitado = 10k €/año
```

**Total Costes Evitados = 66k €/año**

---

#### C) Ventaja Velocidad (Domain Knowledge Advantage)

**Definición:** Valor adicional generado por resolver tareas con conocimiento de dominio superior al de un especialista externo.

**Fórmula:**
```
Ventaja Velocidad = (Tiempo specialist - Tiempo tú con IA) × Frecuencia × Coste/h
```

**Ejemplo:**

**Tarea:** Automatizar cambio de configuración en routers

```
Specialist externo (sin contexto de red):
├─ Entender topología: 2 días
├─ Desarrollar script: 3 días
├─ Testing: 2 días
└─ Total: 7 días = 56 horas

Tú con IA + domain knowledge:
├─ Ya conoces topología: 0 días
├─ Desarrollar script con IA: 1 día = 8 horas
├─ Testing (sabes qué verificar): 0.5 días = 4 horas
└─ Total: 1.5 días = 12 horas

Ventaja = (56h - 12h) = 44 horas × 60€/h = 2.640 € por tarea
Frecuencia = 8 tareas/año
Valor anual = 2.640 × 8 = 21.120 €/año
```

---

### ROI Capacitación Total

```
Valor Capacitación = 103.680 + 66.000 + 21.120 = 190.800 €/año
```

---

### Costes IA

```
Costes anuales:
├─ Licencia (GitHub Copilot / Claude Pro): 1.200 €/año
├─ Formación Context Engineering: 40h × 60€/h = 2.400 € (amortizado en 2 años = 1.200€/año)
└─ Total = 2.400 €/año
```

---

### ROI Total Ejemplo

```
ROI Optimización = 2.880 €/año (métricas tradicionales)
ROI Capacitación = 190.800 €/año (framework 0→1)

ROI Total = ((2.880 + 190.800 - 2.400) / 2.400) × 100 = 7.953%

Desglose:
├─ Optimización: 1.5% del ROI total
└─ Capacitación: 98.5% del ROI total

Conclusión: El 99% del valor está en 0→1
```

---

## Ejemplo Numérico Completo

### Caso: Ingeniero de Redes → Desarrollador/Automatizador Full-Stack

#### Contexto (Semana 0)

**Perfil:**
- Rol: Ingeniero de Redes Senior (L5)
- Años experiencia: 8 años
- Salario cargado: 70k €/año = 60€/h
- Equipo: Redes & Infraestructura (15 personas)

**Expertise baseline:**
- **Experto:** Redes, BGP, Firewalls, Routing protocols
- **Competente:** Troubleshooting sistemas básico
- **Principiante:** Scripts Bash básicos (<50 líneas)
- **Inaccesible:** Programación Python, Automatización Ansible, Admin Kubernetes

**Métricas baseline:**
- TAR: 35% (35 de 100 tareas en backlog)
- DEI: 4 dominios operativos
- CFCR: 0% (solo equipo Redes)
- ITR: 0 tareas/trimestre
- Escalaciones: 12 tareas/trimestre por falta de skill

---

#### Implementación Context Engineering + IA (Semanas 1-12)

**Herramientas:**
- GitHub Copilot (100€/mes)
- Claude Pro (20€/mes)
- Context Engineering framework aplicado

**Timeline:**

**Semana 1:**
- Primera Office Hours: "Necesito automatizar backup configs routers"
- Prompt Context Engineering + Copilot → Script Python funcional
- Output: 150 líneas Python + unit tests
- Tiempo: 4 horas (vs 2-3 días estimado sin IA)

**Semana 4:**
- Primer script en producción: Backup automatizado 200 routers
- Métricas: 0 fallos, ahorra 6h/semana al equipo
- Validación: Code review positivo de DevOps lead

**Semana 8:**
- Contribuye a repo automatización corporativa
- 3 PRs merged: Ansible playbooks para configuración switches
- Considerado "colaborador activo" por equipo Platform

**Semana 12:**
- Estado: "Operativo" en Python y Ansible (validado por peers)
- Contribuyendo autónomamente a 3 equipos
- Primer troubleshooting Kubernetes resuelto

---

#### Resultados Post-implementación (Semana 12)

**Métricas 0→1:**

| Métrica | Baseline | Post (S12) | Delta | Mejora % |
|---------|----------|------------|-------|----------|
| **TAR** | 35% | 70% | +35pp | +100% |
| **DEI** | 4 | 7 | +3 | +75% |
| **CFCR** | 0% | 75% | +75pp | ∞ |
| **ITR** | 0 | 18/Q | +18 | ∞ |
| **TCC** | - | 83% | - | 6x más rápido |

**Tareas "imposibles" resueltas (ITR = 18):**
- Programación Python: 8 tareas
- Automatización Ansible: 6 tareas
- Admin sistemas Kubernetes: 4 tareas

**Escalaciones reducidas:** 12 → 3 (-75%)

---

#### Cálculo ROI (Anual)

**A) Nuevo Valor Creado:**
```
ITR trimestral = 18 tareas
Anualizado = 72 tareas/año
Valor promedio tarea = 1.440 €
Nuevo Valor = 72 × 1.440 € = 103.680 €/año
```

**B) Costes Evitados:**
```
Contratación evitada:
├─ Python developer (0.5 FTE): 35.000 €
├─ DevOps engineer (0.3 FTE): 21.000 €
└─ Coordinación overhead: 10.000 €
Total = 66.000 €/año
```

**C) Ventaja Velocidad:**
```
8 tareas/año × 2.640 € ventaja = 21.120 €/año
```

**D) Optimización tradicional:**
```
Tareas core más rápidas: +10%
40h/mes × 0.10 × 60€/h × 12 = 2.880 €/año
```

**Total Valor:**
```
103.680 + 66.000 + 21.120 + 2.880 = 193.680 €/año
```

**Costes IA:**
```
Copilot: 1.200 €/año
Claude: 240 €/año
Formación (amortizado): 1.200 €/año
Total = 2.640 €/año
```

**ROI Final:**
```
ROI = ((193.680 - 2.640) / 2.640) × 100 = 7.237%

Desglose:
├─ Optimización (1→1.2): 109 €/año = 1.5%
└─ Capacitación (0→1): 190.800 €/año = 98.5%
```

---

#### Ejemplos Concretos de Tareas 0→1

**Tarea 1: Automatización Backup Configs (Semana 1-4)**
- **Problema:** 200 routers sin backup automatizado, proceso manual 6h/semana
- **Por qué era imposible:** Requiere Python + NAPALM library, fuera de expertise
- **Solución:** Script Python 150 líneas con Copilot + Context Engineering
- **Resultado:** Backup automático diario, 0 fallos en 8 semanas, ahorro 6h/semana
- **Validación:** En producción, code review aprobado

**Tarea 2: Ansible Playbooks Switches (Semana 5-8)**
- **Problema:** Configuración 50 switches nuevos, proceso manual error-prone
- **Por qué era imposible:** Ansible fuera de expertise, requiere YAML + Jinja2
- **Solución:** 3 playbooks Ansible con validación automática
- **Resultado:** Deploy 50 switches en 2h vs 2 días manual, 0 errores
- **Validación:** Adoptado por equipo Platform como template estándar

**Tarea 3: Troubleshooting K8s Network (Semana 10-12)**
- **Problema:** Pods no comunicaban entre namespaces, equipo Platform bloqueado
- **Por qué era imposible:** Kubernetes networking fuera de expertise
- **Solución:** Diagnóstico con kubectl + IA explica CNI, encuentra NetworkPolicy incorrecta
- **Resultado:** Problema resuelto en 3h vs escalación 2 días
- **Validación:** Equipo Platform solicita colaboración futura

---

## Template para Documentar Casos 0→1

**⚠️ USO CORRECTO PARA L6:**
- ❌ NO usar estas métricas para documentar exhaustivamente TU caso personal
- ✅ SÍ usar estas métricas para casos de OTROS que habilitaste
- Ver documento: `casos_documentados_organizacional.md`

**Recordatorio:** Tu objetivo L6 NO es demostrar "yo mejoré mi TAR", es demostrar "habilité a 15 personas, mejora TAR promedio +20pp organizacional".


---

## Cómo Identificar 0→1 en Office Hours

### Preguntas Específicas a Hacer

Durante cada Office Hours, después de resolver el problema, hacer estas preguntas:

#### **PREGUNTA 1: Clasificación de Mejora**
> "Esto que acabamos de hacer, ¿es algo que ya hacías pero ahora más rápido (1→1.2), o es algo que ANTES no podías hacer (0→1)?"

**Respuestas esperadas:**
- **Optimización (1→1.2):** "Sí, ya hacía esto, pero me tomaba mucho más tiempo"
- **Capacitación (0→1):** "No, esto era completamente nuevo para mí" / "Esto lo escalaba siempre" / "No sabía por dónde empezar"

#### **PREGUNTA 2: Método Anterior**
> "Antes de hoy, ¿cómo resolvías este tipo de problemas?"

**Respuestas que indican 0→1:**
- "No los resolvía, los escalaba a [otro equipo]"
- "No me tocaba este tipo de problemas"
- "Esperaba a que [persona X] tuviera tiempo"
- "Intentaba, pero nunca funcionaba bien"
- "Ni siquiera lo intentaba, estaba fuera de mi área"

**Respuestas que indican 1→1.2:**
- "Lo hacía manualmente y tomaba horas"
- "Usaba [herramienta vieja] que era muy lenta"
- "Lo hacía, pero con muchos errores"

#### **PREGUNTA 3: Dominio Nuevo**
> "¿Dirías que acabas de acceder a un dominio técnico que antes te era inaccesible?"

**Si responde SÍ:**
- "¿Qué dominio específicamente?" → [Programación / Automatización / Admin sistemas / Análisis / Otro]
- "¿Por qué era inaccesible antes?" → [Falta formación / Complejidad / Tiempo / No mi área]

#### **PREGUNTA 4: Autonomía Futura**
> "¿Crees que ahora podrías resolver problemas similares tú solo, sin Office Hours?"

**Respuestas:**
- "Sí, totalmente" → **Competente** (marca 0→1 confirmado)
- "Sí, con un poco de ayuda de IA" → **Operativo con asistencia** (marca 0→1)
- "Probablemente no, todavía muy complejo" → **Principiante** (no marcar como 0→1 todavía)

#### **PREGUNTA 5: Replicabilidad**
> "¿Crees que otros en tu equipo con tu perfil podrían hacer esto también con Context Engineering?"

**Objetivo:** Identificar si es escalable o caso único

---

### Red Flags de Capacitación (0→1)

**Durante la sesión, observar estos indicadores:**

✅ **INDICADORES DE 0→1:**
- Persona dice "nunca he hecho esto antes"
- Tarea requiere skills fuera del CV de la persona
- Problema históricamente escalado a otro equipo
- Dominio nuevo mencionado (Python, Ansible, K8s, etc)
- Sorpresa/emoción al ver que funciona: "¿En serio así de fácil?"
- Menciona "antes esto me tomaba días" pero nunca lo completó

❌ **INDICADORES DE 1→1.2 (No es 0→1):**
- "Ya hacía esto, pero más lento"
- "Usaba [método antiguo], ahora uso [método mejor]"
- Problema dentro del scope habitual del rol
- Mejora incremental cuantificable (X% más rápido)
- No menciona dominio nuevo

---

### Documentación Inmediata

**Al final de cada Office Hours donde detectas 0→1:**

```markdown
## Caso 0→1 Detectado - [Nombre] - [Fecha]

### Quick Check
- [ ] Tarea antes imposible/inaccesible confirmada
- [ ] Dominio nuevo identificado: [Cuál]
- [ ] Persona cree que puede replicar
- [ ] Valor potencial alto (ITR candidato)

### Seguimiento
- [ ] Agendar follow-up en 1 semana
- [ ] Validar si efectivamente resolvió tarea similar solo
- [ ] Si confirmado: Documentar caso completo
- [ ] Si no: Re-clasificar como 1→1.2

### Notas
[Observaciones adicionales]
```

---

## Integración con DORA/SPACE/SRE

### Tabla Comparativa: Qué Miden, Qué NO Miden

| Framework | Qué MIDE (1→1.2) | Qué NO MIDE (0→1) | Complementariedad |
|-----------|------------------|-------------------|-------------------|
| **DORA** | Deployment Freq, Lead Time, CFR, MTTR | Cuántos dominios nuevos accedes | **Alta**: DORA mide velocidad, 0→1 mide scope |
| **SPACE** | Satisfaction, Performance, Activity, Communication, Efficiency | Expansión de capacidades, tareas imposibles | **Media**: SPACE captura satisfacción (puede correlacionar con 0→1) |
| **SRE** | SLO/SLI, Error Budget, Availability, MTTA/MTTR | Cross-functional contribution, domain expansion | **Alta**: SRE mide fiabilidad, 0→1 mide versatilidad |
| **Atlassian ITSM** | FCR, AHT, Throughput, Reopen Rate | Task accessibility rate, impossible tasks | **Media**: ITSM mide eficiencia soporte, 0→1 mide capacitación |

---

### Framework Complementario, No Sustituto

**Capability Expansion (0→1) NO reemplaza frameworks tradicionales.**

**Estrategia de implementación:**

```
FASE 1: Baseline Tradicional (Semanas 1-4)
├─ Establecer métricas DORA/SPACE/SRE
├─ Documentar estado actual
└─ Identificar áreas de optimización

FASE 2: Medición Paralela (Semanas 5-12)
├─ CONTINUAR tracking DORA/SPACE/SRE (optimización)
├─ AÑADIR tracking TAR/DEI/CFCR/ITR/TCC (capacitación)
└─ Comparar ambos tipos de valor

FASE 3: Análisis Integrado (Semana 13+)
├─ ROI Optimización (frameworks tradicionales)
├─ ROI Capacitación (framework 0→1)
├─ ROI Total = Optimización + Capacitación
└─ Identificar: ¿Dónde está el mayor valor?

RESULTADO ESPERADO:
└─ 80-90% del valor en Capacitación (0→1)
```

---

### Ejemplo de Reporte Integrado

```markdown
## Reporte Trimestral - Equipo Infraestructura

### Métricas Tradicionales (DORA/SRE)
| Métrica | Baseline | Q2 | Delta |
|---------|----------|-----|-------|
| MTTR | 2.5h | 2.1h | -16% |
| Deployment Freq | 2/week | 2.5/week | +25% |
| SLO Compliance | 98.2% | 98.8% | +0.6pp |

**ROI Optimización:** 15.000 €/trimestre

---

### Métricas Capability Expansion (0→1)
| Métrica | Baseline | Q2 | Delta |
|---------|----------|-----|-------|
| TAR (promedio equipo) | 38% | 62% | +24pp |
| DEI (promedio equipo) | 3.8 | 5.4 | +1.6 |
| ITR (total equipo) | 0 | 54 tareas | +54 |
| CFCR (% equipo) | 0% | 45% | +45pp |

**ROI Capacitación:** 180.000 €/trimestre

---

### Conclusión
├─ Optimización: Mejoras incrementales sostenidas (+16-25%)
├─ Capacitación: Expansión transformacional (+63% TAR)
└─ Valor total: 92% del ROI viene de 0→1

**Recomendación:** Intensificar programa Context Engineering,
   el ROI de capacitación es 12x mayor que optimización.
```

---

## Casos de Uso por Perfil

### Ingeniero de Redes → Full-Stack Automation

**0→1 típico:**
- Programación Python/Bash avanzado
- Automatización Ansible/Terraform
- Admin sistemas (Linux, Kubernetes básico)
- CI/CD scripting

**ITR esperado:** 15-25 tareas/trimestre  
**TCC típico:** 70-85% compresión (6-12 semanas vs 12-24 meses)  
**ROI:** 5.000-8.000%

---

### SRE/Ops → Developer/Architect

**0→1 típico:**
- Desarrollo aplicaciones (Go, Python)
- Diseño arquitectura distribuida
- Database design y optimización
- Observability avanzada (custom metrics, tracing)

**ITR esperado:** 10-20 tareas/trimestre  
**TCC típico:** 60-75% compresión  
**ROI:** 3.000-6.000%

---

### Soporte L2 → Automation Engineer

**0→1 típico:**
- Scripting automatización (Python, PowerShell)
- API integration
- Workflow automation (Zapier, n8n avanzado)
- Data analysis básico

**ITR esperado:** 20-35 tareas/trimestre (alto volumen tareas repetitivas)  
**TCC típico:** 75-90% compresión  
**ROI:** 4.000-7.000%

---

### Sistemas → DevOps/Platform

**0→1 típico:**
- Kubernetes orchestration
- Infrastructure as Code (Terraform, Pulumi)
- CI/CD pipeline design
- Monitoring/Alerting avanzado

**ITR esperado:** 12-18 tareas/trimestre  
**TCC típico:** 65-80% compresión  
**ROI:** 4.000-6.500%

---

### Developer → Full-Stack + Infra

**0→1 típico:**
- Admin sistemas avanzado
- Network troubleshooting
- Database administration (DBA tasks)
- Security hardening

**ITR esperado:** 8-15 tareas/trimestre  
**TCC típico:** 50-70% compresión  
**ROI:** 2.500-5.000%

---

## Referencias y Bibliografía

### Frameworks Citados

**DORA Metrics:**
- Forsgren, N., Humble, J., & Kim, G. (2018). *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press.
- https://dora.dev

**SPACE Framework:**
- Forsgren, N., Storey, M., et al. (2021). "The SPACE of Developer Productivity". *ACM Queue*, Vol. 19, No. 1.
- https://queue.acm.org/detail.cfm?id=3454124

**Google SRE:**
- Beyer, B., et al. (2016). *Site Reliability Engineering*. O'Reilly Media.
- https://sre.google/books/

**Atlassian ITSM:**
- https://www.atlassian.com/itsm

---

### Estudios de Productividad con IA

**GitHub Copilot:**
- Peng, S., et al. (2023). "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot". arXiv:2302.06590.

**GenAI en Contact Centers:**
- Brynjolfsson, E., Li, D., & Raymond, L. (2023). "Generative AI at Work". NBER Working Paper 31161.

**Knowledge Work:**
- Dell'Acqua, F., et al. (2023). "Navigating the Jagged Technological Frontier". *Science*.

---

### Metodologías de Medición

**Baseline Establishment:**
- Stacey Barr. "PuMP Performance Measurement Method". https://staceybarr.com

**Statistical Process Control:**
- Wheeler, D. J. (2000). *Understanding Variation: The Key to Managing Chaos*. SPC Press.

---

## Apéndice: Glosario

| Término | Definición |
|---------|------------|
| **0→1** | Transición de "imposible/inaccesible" a "posible/accesible" |
| **1→1.2** | Mejora incremental en eficiencia o calidad de tarea existente |
| **TAR** | Task Accessibility Rate - % backlog accesible |
| **DEI** | Domain Expansion Index - # dominios operativos |
| **CFCR** | Cross-functional Contribution Rate - % contribución cross-team |
| **ITR** | Impossible Task Resolution - # tareas "imposibles" resueltas |
| **TCC** | Time-to-Competency Compression - % reducción tiempo a competencia |
| **Dominio operativo** | Área técnica donde persona puede trabajar autónomamente (Experto o Competente) |
| **Baseline** | Estado inicial antes de intervención (Context Engineering + IA) |
| **Context Engineering** | Framework de aplicación estructurada de IA con 3 Leyes |

---

**FIN DEL DOCUMENTO**

---

**Versión:** 1.0  
**Fecha creación:** Octubre 2025  
**Última modificación:** Octubre 2025  
**Próxima revisión:** Post-Semana 12 (primeros pilotos)  
**Mantenedor:** Proyecto Context Engineering  
**Contacto:** [Tu email/Slack]

---

## Changelog

**v1.0 (Octubre 2025):**
- Creación inicial del framework
- Definición de las 5 métricas 0→1
- Fórmula ROI extendida
- Template completo de documentación
- Guía de identificación en Office Hours
- Casos de uso por perfil
