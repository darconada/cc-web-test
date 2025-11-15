# Playbook Quick Start — Context Engineering Framework
## Guía Condensada para Office Hours y Aplicación Inmediata

**Versión:** 1.0  
**Formato:** 5-7 páginas comprimidas  
**Uso:** Handout en Office Hours, referencia rápida, checklist operativo  
**Audiencia:** Cualquier rol, cualquier experiencia con IA

---

## 🎯 Propósito

Este playbook es tu **cheat-sheet de bolsillo** para aplicar Context Engineering sin necesidad de leer documentación extensa. Es para usar DURANTE una tarea, no para estudiar.

**Tiempo de lectura completo:** 15 minutos  
**Tiempo de referencia por uso:** 2-3 minutos (mirar checklist, listo)

---

## 📋 Tabla de Contenidos (Saltar a lo que necesitas)

1. **Test de Claridad Ley 1** — ¿Sé exactamente qué necesito?
2. **PCM7 Paquete de Contexto Mínimo Viable** — ¿Qué información debo aportar?
3. **Estructura Recomendada de Prompt** — ¿Cómo ordeno todo en el prompt?
4. **Verificación por Criticidad** — ¿Cómo valido el resultado?
5. **Si/Entonces: Atajos Mentales** — ¿Qué hago si X sucede?
6. **Anti-patrones: Qué NO Hacer** — Errores comunes y cómo evitarlos
7. **Plantillas Rápidas Copy-Paste** — Usa estas como punto de partida

---

## Ley 1: Test de Claridad ✔️

**Antes de escribir prompts, responde SIEMPRE estas preguntas:**

```
☐ PROPÓSITO ¿Qué exactamente intento lograr? (1-2 frases)
   ❌ Vago: "Ayúdame con esto"
   ✅ Claro: "Necesito analizar errores en logs de prod para encontrar causa de latencia"

☐ RESTRICCIONES ¿Qué NO puedo hacer? ¿Límites explícitos?
   ❌ Vago: "Hazlo rápido"
   ✅ Claro: "Sin cambiar infraestructura, solo análisis"

☐ FORMATO ¿En qué formato necesito el output?
   ❌ Vago: "Dame un resumen"
   ✅ Claro: "Tabla: [Timestamp] [Componente] [Métrica] [Causa probable] [Acción]"

☐ CRITERIOS ÉXITO ¿Cómo sé que es correcto?
   ❌ Vago: "Que sea bueno"
   ✅ Claro: "3 causas prioritizadas, impacto + esfuerzo + ETA para cada una"
```

**Si NO puedes responder 3 de estas → Tu problem statement no está claro. Repite hasta que lo esté.**

---

## Ley 2: PCM7 — Paquete de Contexto Mínimo Viable

**Estos 7 elementos son lo mínimo que necesitas para que IA sea útil. Más es mejor, pero 7 es el piso.**

| # | Elemento | Qué Es | Ejemplo |
|---|----------|--------|---------|
| **1** | **Contexto** | Qué sistema, versión, dominio | "Sistema: Payments, versión: 2.4.1, tipo: transacciones crédito" |
| **2** | **Objetivo** | Qué resultados esperas | "Detectar transacciones fraudulentas en últimas 24h" |
| **3** | **Restricciones** | Qué está prohibido / límites | "Sin modificar prod, sin acceso a BD cliente, <5min latencia" |
| **4** | **Formato** | Cómo quieres el output | "JSON con campos: id, amount, riesgo (0-1), razón" |
| **5** | **Criterios Éxito** | Cómo validas | "Precision >0.95, Recall >0.90, falsos positivos <2%" |
| **6** | **Few-shot** | 2-3 ejemplos del mismo dominio | "[Ejemplo 1 input] → [Output esperado]" (repetir 2-3x) |
| **7** | **Guardrails** | Qué no debes hacer bajo ningún concepto | "NUNCA exponer PII, NUNCA cambiar BD directamente, NUNCA usar credenciales en prompt" |

**Checklist rápido:**
- ¿Tengo 7 elementos? → Pasa a "Estructura Recomendada"
- ¿Tengo <7? → Reúne los que falten antes de enviar prompt
- ¿Tengo dudas si algo aplica? → Sí aplica, inclúyelo

---

## Ley 2 (Continuación): Cómo Reunir PCM7

**Contexto → Pregúntate:**
- ¿Qué sistema estoy usando? ¿Versión? ¿Ambiente?
- ¿Qué datos tengo disponibles?

**Objetivo → Pregúntate:**
- ¿Qué quiero que la IA logre exactamente?
- ¿Es una tarea o un análisis?

**Restricciones → Pregúntate:**
- ¿Qué NO puedo tocar? (datos, sistemas, código)
- ¿Cuáles son mis límites? (tiempo, recursos, acceso)

**Formato → Pregúntate:**
- ¿Cómo quiero ver el resultado? (JSON, tabla, markdown, código)
- ¿Quién lo va a leer?

**Criterios Éxito → Pregúntate:**
- ¿Cómo sé que funcionó?
- ¿Qué número o validación me convence?

**Few-shot → Pregúntate:**
- ¿Tengo ejemplos previos similares?
- ¿Hay casos históricos que pueda usar como referencia?

**Guardrails → Pregúntate:**
- ¿Hay datos sensibles (passwords, PII, credenciales)?
- ¿Hay acciones destructivas que debe evitar?

---

## Estructura Recomendada de Prompt

**Sigue este orden. Es importante:**

```
[CONTEXTO - 2-3 líneas máximo]
Sistema: X, Versión: Y, Rol: Z

[OBJETIVO - 1 párrafo claro]
Necesito...

[RESTRICCIONES - 3-4 bullets]
- No puedo...
- Debe cumplir...

[FORMATO DE OUTPUT - Específico]
Responde en: JSON / Tabla / Markdown / [Exactamente qué]

[FEW-SHOT - 2-3 ejemplos]
Ejemplo 1:
Input: ...
Output: ...

Ejemplo 2:
Input: ...
Output: ...

[GUARDRAILS - Lista clara]
- NO hagas...
- SIEMPRE...

[TU PREGUNTA/TAREA - Concreto]
Ahora, [tu tarea específica con datos concretos]

[CRITERIOS VALIDACIÓN - Cómo verifico]
Valida que...
```

**Heurística rápida:**
- **< 200 tokens:** Probablemente demasiado vago
- **200-500 tokens:** Ideal (conciso pero completo)
- **500-1000 tokens:** OK (estás siendo específico)
- **> 1000 tokens:** Posiblemente ruido o ejemplos redundantes

---

## Ley 3: Verificación por Criticidad

**Criticidad = Importancia de que sea correcto**

| Criticidad | Cuándo Aplica | Verificación Requerida | Tiempo Extra |
|---|---|---|---|
| **R0** | Brainstorm, ideas, exploración | Sentido común, lectura rápida | 2 min |
| **R1** | Soporte técnico, análisis informativo | Linter/schema, dry-run | 5 min |
| **R2** | Cambios operativos, canary deployment | Peer review + tests | 15 min |
| **R3** | Cambios en producción críticos, PII/dinero | Premortem + ventana cambio + rollback plan | 30+ min |

**Checklist por nivel:**

**R0 (Playtime):**
- ☐ ¿Parece sensato? (Sentido común)

**R1 (Seguridad media):**
- ☐ ¿Cumple el formato?
- ☐ ¿Sin errores obvios?
- ☐ ¿Pasaría un linter?

**R2 (Producción no-crítica):**
- ☐ Tests passing?
- ☐ Un peer lo revisa?
- ☐ Canary run en staging?

**R3 (Crítico):**
- ☐ Premortem: ¿Qué podría ir mal?
- ☐ Rollback plan documentado?
- ☐ Ventana de cambio con observabilidad?
- ☐ Evidencia de éxito antes de escalar?

---

## Si/Entonces: Atajos Mentales

**Cuando algo falla o genera dudas, usa esta tabla:**

| Si... | Entonces... |
|---|---|
| La IA devuelve generalidades no específico a tu caso | Agrega 2-3 few-shots más del mismo dominio, más concretos |
| Tardas 2 iteraciones aclarando qué necesitas | Vuelve al Test de Claridad (Ley 1), re-responde todas |
| El output rompe un test / falla validación | Itera con el ERROR concreto ("Falla X porque Y, necesito Z") |
| Algo se ve bien pero "off" (intuición) | No uses directamente. Debuggea con IA: "Por qué...?" |
| Necesitas salida muy específica (formato exacto) | Pasa PCM7 completo + ejemplo de output deseado exacto |
| IA dice "no sé" o "no puedo" | Rephrrasea el problema, quizá necesita más contexto |
| Funciona en ChatGPT pero no en Claude (o al revés) | Modelos diferentes. Prueba ambos o ajusta prompt para cada uno |
| Necesitas feedback más rápido | Usa modelo más rápido (GPT-4o mini, Claude Haiku) para iteración |
| Output es correcto pero lento | Reduce contexto, pide menos ejemplos, usa modelo más ligero |

---

## Anti-patrones: Qué NO Hacer

### ❌ Anti-patrón 1: Pegación de credenciales

**Malo:**
```
API_KEY=sk_live_xyz123
PASSWORD: admin123
Database: prod_main.db
```

**Correcto:**
```
Contexto: Necesito conectar API payments con autenticación bearer token.
[Sin mostrar credenciales]
Restricción: Use variables de entorno, NO hardcoded.
```

**Regla:** Si es secreto/credencial → NUNCA lo copies en prompt. Describe la necesidad, no el secreto.

---

### ❌ Anti-patrón 2: Mezclar 2+ problemas en 1 prompt

**Malo:**
```
"Descubrir causa de latencia Y proponer mitigación Y actualizar docs Y entrenar al equipo"
```

**Correcto:**
```
Prompt 1: Análisis de latencia (causa, 2-3 acciones prioritizadas)
Prompt 2: Update a docs (basado en resultado de Prompt 1)
Prompt 3: Plan de training (si los resultados lo requieren)
```

**Regla:** 1 prompt = 1 problema. Si es complejo, divide en sub-prompts.

---

### ❌ Anti-patrón 3: Pegar historiales irrelevantes como contexto

**Malo:**
```
"Aquí están todas las tickets del último mes, analiza todo"
[10,000 líneas de noise]
```

**Correcto:**
```
"Aquí están las 5 tickets más similares a la mía [links/resumen]"
[Información de verdad relevante]
```

**Regla:** Menos contexto ruidoso. Más contexto relevante. Calidad > cantidad.

---

### ❌ Anti-patrón 4: No verificar antes de usar

**Malo:**
```
1. Pides a IA
2. Copias output directamente a producción
3. Problemas 1 hora después
```

**Correcto:**
```
1. Pides a IA
2. Validas (tests, linter, dry-run)
3. Peer review
4. Canary en staging
5. Usas en prod
```

**Regla:** Criticidad determina verificación. Siempre hay verificación (mínimo, sentido común).

---

## 📋 Plantillas Rápidas (Copy-Paste Ready)

### Template 1: Análisis de Logs/Métricas

```
Contexto: Sistema Payments, versión 2.4.1, logs últimas 4 horas

Objetivo: Identificar causa de latencia en endpoint /transfer

Restricciones:
- No pueden tocar config en producción
- Análisis solo, sin cambios
- Respuesta en <5 minutos

Formato: Tabla con [Timestamp] [Componente] [Métrica] [Causa probable] [Acción]

Few-shot:
Incidente 1 (2024-10): Causa: Query N+1 en histórico transacciones, Acción: Index en user_id
Incidente 2 (2024-09): Causa: Connection pool exhausto, Acción: Aumentar pool size

Guardrails:
- NO exponer customer IDs o amounts
- SIEMPRE incluir ETA estimado de resolución

Analiza estos logs [PASTE LOGS] y dame:
1. Top 3 causas probable
2. Acción concreta para cada una
3. Impacto estimado (cuánto mejora latencia)
4. Esfuerzo (cuánto cuesta arreglarlo)
```

### Template 2: Code Review / Generación Tests

```
Contexto: Repo Python, Django, test suite con pytest

Objetivo: Generar tests para función new_feature() para asegurar > 95% coverage

Restricciones:
- Solo casos edge, no happy path (eso ya está testeado)
- Tests deben ser independientes (sin setup complejo)
- Max 50 líneas por test

Formato: Archivo Python con clase TestNewFeature(unittest.TestCase)

Few-shot:
Test existente 1: [link o inline]
Test existente 2: [link o inline]

Guardrails:
- NO mockear datetime.now() a menos que sea necesario
- SIEMPRE use fixtures en lugar de setup/teardown

Aquí está mi función:
[CODE]

Dame tests para casos edge:
1. Inputs inválidos
2. Condiciones límite
3. Excepciones esperadas
```

### Template 3: Documentación / Explicación

```
Contexto: Equipo SRE, arquitectura microservicios en Kubernetes

Objetivo: Documentar proceso de escalado automático de Payments pod

Restricciones:
- Documento: 1 página max (conciso)
- Audiencia: SRE junior (sin mucha experiencia en Kube)
- Incluye: qué es, cómo funciona, cómo debuggear

Formato: Markdown, con secciones y ejemplos de comandos

Few-shot: [Link a runbook similar ya documentado]

Guardrails:
- NO incluir credenciales o URLs internas específicas
- SIEMPRE incluir "cuándo escalar vs no escalar"

Documenta el autoscale para:
[Descripción del problema técnico]
```

---

## 🚀 Primeros Pasos Esta Semana

1. **Hoy:** Lee esta guía 15 min
2. **Mañana:** Elige UNA tarea que harías manualmente, aplica Ley 1-2-3 (30 min)
3. **Esta semana:** Repite 2-3 tareas, documenta qué funcionó
4. **Próxima semana:** Trae un caso a Office Hours

---

## ❓ Dudas Comunes

**P: ¿Cuál herramienta uso? ChatGPT, Claude, Gemini?**  
R: Comienza con ChatGPT Plus (más accesible). El método es igual. Experimenta con otros.

**P: ¿Qué pasa si se necesita iteración (el output no es perfecto)?**  
R: Normal. Iteración es parte de Ley 3. Usa el "Si/Entonces: atajos mentales" arriba.

**P: ¿Cuál es el tiempo promedio de una sesión Show & Tell + Office Hours?**  
R: Show & Tell: 60 min. Office Hours: 45 min. Documentación: 15 min extra.

**P: ¿Puedo guardar prompts que funcionan?**  
R: Sí. Documenta el PCM7 completo (contexto, ejemplos, guardrails). Reusable para casos similares.

**P: ¿Qué pasa con la privacidad / confidencialidad?**  
R: Ver documento "Política de Datos v1.0". Sanitiza antes de compartir con IA.

---

**Versión 1.0 | Octubre 2025**  
**Próxima actualización:** Después de 10 Office Hours (incorporar anti-patrones nuevos)  
**Autor:** Tú (Líder de Adopción IA)  
**Contacto:** Office Hours semanales, Slack #context-engineering