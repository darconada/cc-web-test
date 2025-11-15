# Context Engineering – One‑Pager & Cheat‑Sheet (v2025‑10‑30)

> Paquete operativo: **1) One‑Pager (ejecutivo)** y **2) Cheat‑Sheet (chuleta A4)** listos para imprimir/compartir.

---

## 1) ONE‑PAGER

### Propósito
Acelerar y elevar la calidad del trabajo con IA **sistematizando** cómo definimos, alimentamos y validamos las tareas. Menos iteraciones, más outputs listos para producción.

### Principio central
> **La IA no entiende tu contexto por defecto.** Tu trabajo es **estructurarlo** para que la IA sea útil.

### Las 3 Leyes (resumen en 1 línea)
1. **Estructura el problema** → Objetivo claro, restricciones explícitas, criterios de éxito verificables.
2. **Aporta contexto rico** → Dominio, casos previos (few‑shot), versiones, SLO/SLAs y “verdad del terreno”.
3. **Verifica rigurosamente** → Tests/linters/sandbox/LLM‑as‑judge + revisión humana según criticidad.

### Qué cambia (ANTES → DESPUÉS)
- Pedidos vagos → **Especificaciones mínimas (5 líneas)**.
- Conocimiento disperso → **Paquete de Contexto Mínimo Viable (PCM‑7)**.
- Confianza ciega → **Verificación por niveles (R0–R3)** con evidencia y trazabilidad.

### Dónde aplica (80% de valor)
- **Infra/Redes/SRE/Soporte** (código, configs, análisis de logs, runbooks).
- **Operaciones y funciones no técnicas** (reportes, comunicaciones, síntesis).

### Plan de adopción (alto nivel)
- **Awareness**: Show & Tell + ejemplos reales.
- **Adoption**: Office Hours + plantillas (PCM‑7, prompts, verificación).
- **Acceleration**: RAG interno + repos de casos y “verdad del terreno”.
- **Autonomy**: Checklists integradas en flujos y métricas de ROI.

### Métricas clave (capacitación 0→1)
- **TAR** (Task Accessibility Rate): % del backlog que puedes abordar autónomamente
- **DEI** (Domain Expansion Index): # de dominios técnicos donde eres operativo
- **ITR** (Impossible Task Resolution): # de tareas "imposibles" que ahora resuelves
- **CFCR** (Cross-functional Contribution Rate): % de contribución fuera de tu equipo
- **TCC** (Time-to-Competency Compression): % de reducción del tiempo para competencia

**Foco:** ¿Qué puedes hacer AHORA que antes era imposible? (0→1)

### Guardarraíles (seguridad y calidad)
- No secretos/PII; datos sintetizados/sanitizados.
- Validar JSON/esquemas/`-c`/linters **antes** de tocar prod.
- Canary/rollback y ventana de cambio para R2–R3.

### Próximos pasos sugeridos
1) Seleccionar **2–3 casos piloto** (alta estructura) y documentarlos end‑to‑end.
2) Publicar **PCM‑7** + checklists + ejemplos **en un repositorio común**.
3) Medir **TAR/DEI/ITR/TCC** en cada caso y compartir resultados.

---

## 2) CHEAT‑SHEET (A4)

### A. Test de claridad (Ley 1)
Responde **SIEMPRE** antes de pedir a la IA:
1) **Output** exacto (formato/estructura). 2) **Condiciones**/restricciones. 3) **Validación** concreta.

### B. PCM‑7 (Ley 2) — Paquete de Contexto Mínimo Viable
1) Propósito + SLO/SLAs
2) Diagrama/topología
3) Configs/logs **sanitizados**
4) Versiones exactas (toolchain)
5) **Three‑shot** (3 casos previos relevantes)
6) Ground truth (regex/umbrales/esperado)
7) Riesgos/limitaciones

### C. Estructura recomendada de prompt
**Contexto (1–2 líneas)** → **Objetivo** → **Restricciones** → **Formato de salida** → **Criterios de éxito**.

### D. Regla de Contexto Mínimo Viable
- Manual: **500–1000 tokens**.
- Con RAG: **3–5** docs/ejemplos top.
- Few‑shot: **2–5** ejemplos **del mismo dominio y formato**.

### E. Few‑shot por tipo de modelo
**Razonadores (R1/o1/o3)**
- ✅ Zero‑shot + formato explícito.
- ❌ Evita ejemplos con CoT visible.
- ⚠️ Si usas ejemplos: **solo input→output** y **altísima similitud**.

**Conversacionales (GPT/Claude/Gemini)**
- ✅ Few‑shot (2–5) coherente, del mismo dominio.
- ⚠️ Evitar ejemplos contradictorios o tangenciales.

### F. Verificación por criticidad (Ley 3)
- **R0 bajo**: linter/esquema → revisión rápida.
- **R1 medio**: + dry‑run/sandbox → checklist.
- **R2 alto**: + integración/canary/rollback → peer review.
- **R3 crítico**: + pre‑mortem, ventana de cambio, plan de reversión **ensayado** → evidencia/trazabilidad.

### G. Iterar vs Re‑prompt
- **Falla Ley 1 (objetivo/forma)** → **Re‑prompt desde cero**.
- **Falla Ley 2 (datos)** → **Itera** añadiendo PCM‑7 o mejores few‑shots.
- **Falla Ley 3 (tests)** → **Itera** con feedback del test que rompió.

### H. Anti‑patrones (evitar)
- “Hazme X” sin objetivo/formato/validación.
- Mezclar 2 problemas en 1 prompt (descubrir causa **y** proponer mitigación sin datos).
- Pegar historiales irrelevantes (ruido) o ejemplos contradictorios.

### I. Plantillas rápidas (copiar/pegar)

**I.1 Código / Config**
```
Contexto: [stack/versión]
Objetivo: [qué función/cambio exacto]
Restricciones: [lenguaje, no usar X, límites]
Formato: [archivo único, JSON, diff, etc.]
Criterios de éxito: [compila/pasa tests `X`; `haproxy -c -f`; `vyos commit-confirm 5`]
```
**Post‑verificación**: linter/esquema → tests/dry‑run → canary/rollback (si aplica).

**I.2 Análisis (logs/métricas)**
```
Contexto: [sistema/versión/topología]
Objetivo: detectar causas de [latencia/error] en [rango]
Restricciones: [backends/nodos], ignorar [ruido]
Formato: tabla Timestamp | Componente | Métrica | Causa probable | Evidencia
Criterios: top‑3 causas con % y 3 acciones priorizadas (impacto/Esfuerzo/ETA)
```

**I.3 Documentación técnica**
```
Título + Propósito + Alcance
Entorno/Versiones
Procedimiento paso a paso
Verificación (comandos/checks)
Riesgos/rollback
```

### J. Seguridad (Do/Don’t)
- **Do**: sanitiza secretos/PII; usa ejemplos sintéticos; valida esquemas/diffs.
- **Don’t**: pegar credenciales; ejecutar cambios en prod sin canary/ventana; fiarte sin evidencias.

### K. Si/Entonces (atajos mentales)
- **Si** la IA devuelve generalidades → añade **3 few‑shots** del mismo dominio.
- **Si** usas R1/o1 → cambia a **zero‑shot** con formato estricto.
- **Si** rompe un test → **itera** con el fallo concreto.
- **Si** tardas >2 iteraciones en aclarar el objetivo → vuelve al **Test de claridad**.

---

**Fin del paquete.**
