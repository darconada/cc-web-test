# FAQ & Objeciones — Context Engineering Framework
## Respuestas Rápidas a Preguntas Comunes

**Versión:** 1.0  
**Fecha:** Octubre 2025  
**Uso:** Handout en Show & Tell, referencia en presentaciones, preparación para reuniones

---

## Preguntas Sobre el Método

### **¿Por qué "Context Engineering" y no simplemente "usar ChatGPT"?**

**Respuesta corta:**
Usar ChatGPT sin método es como tener GPS pero no saber qué dirección ingresar. La IA sin contexto estructurado te da respuestas genéricas. Context Engineering es el **método para estructurar el problema** para que la IA sea útil en tu dominio específico.

**Profundización:**
Las 3 Leyes (Estructurar → Aportar Contexto → Verificar) son independientes de la herramienta. Funcionan con ChatGPT, Claude, Gemini. Lo que cambia es la IA. Lo que NO cambia es el **cómo piensas el problema**.

---

### **¿Esto es solo para desarrolladores o técnicos?**

**Respuesta corta:**
No. Lo hemos aplicado en Helpdesk, RRHH, Finanzas, Marketing. El método es universal.

**Profundización:**
El método es agnóstico al rol:
- **Dev:** Code review, generación tests, análisis de logs
- **SRE:** Troubleshooting, análisis de incidentes, escalada de alertas
- **Soporte:** Respuesta a tickets, base de conocimiento mejorada
- **RRHH:** Análisis de CVs, borradores de políticas, correspondencia
- **Marketing:** Análisis de campañas, copywriting, estrategia

El patrón es siempre igual: **Ley 1 + Ley 2 + Ley 3 = Output útil**.

---

### **¿No es esto el mismo que "prompt engineering"?**

**Respuesta corta:**
No. Prompt engineering es *escribir un buen prompt*. Context Engineering es *diseñar un sistema completo* para que la IA entienda tu contexto.

**Profundización:**
| Aspecto | Prompt Engineering | Context Engineering |
|---|---|---|
| **Foco** | El prompt | Problema + Contexto + Verificación |
| **Escala** | Una pregunta | Workflow repetible, integrable |
| **Documentación** | No | Sí, cases documentados |
| **Verificación** | Manual a veces | Obligatoria, por diseño |
| **Transferible** | Solo si copias el prompt | Sí, el método es transferible |

---

### **¿Las 3 Leyes funcionan con cualquier tarea?**

**Respuesta corta:**
Con la mayoría. Hay excepciones donde la IA no es útil.

**Profundización:**
**Funciona bien:**
- Tareas con contexto definible (logs, documentación, configs)
- Análisis de información conocida
- Generación de contenido estructurado
- Búsqueda en bases de conocimiento

**Funciona menos:**
- Decisiones humanas irreemplazables (evaluaciones de personal, despidos)
- Tareas que necesitan actualización real-time (precios actuales, noticias de hoy)
- Problemas completamente nuevos sin referencia histórica
- Tareas que requieren creatividad pura sin patrón

**Cómo decidir:** Pregunta: *¿Hay precedente de esto? ¿Hay documentación? ¿La IA puede acceder a contexto?* Si sí a 2+ = usar Context Engineering.

---

## Preguntas Sobre Seguridad y Datos

### **¿No expongo datos sensibles si uso IA generativa?**

**Respuesta corta:**
No si sigues las reglas de sanitización. Hay datos que SÍ puedes compartir y datos que NO.

**Profundización:**
**Datos que SÍ compartir (sanitizados):**
- Logs de aplicación (quitando IPs privadas, user IDs públicos)
- Documentación interna (runbooks, architecturas)
- Configuraciones no-sensibles
- Postmortems de incidentes (anonimizados)

**Datos que NUNCA compartir:**
- Contraseñas, API keys, tokens
- PII (Personally Identifiable Information) nombres, emails, teléfonos sin consentimiento
- Datos financieros confidenciales (salarios específicos, contratos)
- Credenciales de bases de datos
- Información de clientes sin anonimizar

**Proceso:** Antes de pegar en prompt, pregúntate: *¿Sentiría molestia si esto fuera público?* Si sí → Sanitiza o no compartas.

Ver documento **Política de Datos v1.0** para reglas exactas.

---

### **¿Quién "ve" los prompts que envío a ChatGPT/Claude?**

**Respuesta corta:**
Depende de la herramienta. Con ChatGPT Plus/Claude Pro, solo el proveedor ve tus prompts (parte de su ML). Nunca es público por defecto.

**Profundización:**
| Herramienta | Quién ve tus prompts | Riesgo | Solución |
|---|---|---|---|
| **ChatGPT Plus** (OpenAI) | OpenAI internamente | Bajo (política de privacidad clara) | Sanitiza, no grabes datos sensibles |
| **Claude Pro** (Anthropic) | Anthropic internamente | Bajo (sin entrenar modelos con tus datos) | Sanitiza, no grabes datos sensibles |
| **Gemini** (Google) | Google internamente | Bajo-Medio (Google tiene muchos datos) | Sanitiza, considera alternativa |
| **ChatGPT Projects** | Contenido aislado en proyecto | Bajo (mejor que chat suelto) | Sanitiza, organiza por proyecto |
| **RAG Local** (Pinecone, Weaviate) | Solo tu organización | Muy bajo | Recomendado para datos sensibles |

**Recomendación:** Si tienes datos muy sensibles, usa **Claude Projects** o **RAG local** (que contiene datos dentro de la red corporativa).

---

### **¿Es cumplimiento (GDPR, HIPAA) un problema?**

**Respuesta corta:**
No si documentas qué datos usas y cómo. El cumplimiento es sobre **transparencia y consentimiento**, no sobre prohibir IA.

**Profundización:**
**GDPR (UE):** Requiere consentimiento para procesar datos personales. Solución: No incluyas PII en prompts, o anonimiza.

**HIPAA (USA, healthcare):** Requiere encriptación y auditoría de datos de salud. Solución: Usa RAG local (datos dentro de tu red), no cloud público.

**Solución universal:** Pregunta a IT/Legal qué nivel de restricción aplica, crea **Política de Datos** con ellos, documenta todo.

---

## Preguntas Sobre Adopción

### **¿Por qué "bottom-up" en vez de que lo ordene mi manager?**

**Respuesta corta:**
Porque funciona mejor. Adopción forzada = resistencia. Adopción orgánica = uso real.

**Profundización:**
**Top-down (Lo ordena el manager):**
- ✗ Gente lo hace porque debe
- ✗ Cuando no hay oversight, para
- ✗ No encuentra valor genuino
- ✗ Crea resentimiento

**Bottom-up (Lo elige la gente):**
- ✓ Gente lo hace porque le sirve
- ✓ Continúa aunque no haya oversight
- ✓ Encuentra valor genuino
- ✓ Evangeliza (trae a otros)

**Evidencia:** En Ionos, en Show & Tell (sin mandato), 60% de audiencia se apuntó a Office Hours. Con mandato, sería 20% genuinamente interesado.

---

### **¿Cuánto tiempo lleva ver resultados?**

**Respuesta corta:**
Resultados pequeños en 2-3 semanas. Resultados medibles (ROI claro) en 6-8 semanas. Cambio organizacional sostenible en 12 semanas.

**Profundización:**
| Plazo | Resultado | Indicador |
|---|---|---|
| **Semanas 1-2** | Comprensión básica | Persona entiende las 3 Leyes |
| **Semanas 3-4** | Primer caso útil | Resolvió 1 problema usando IA |
| **Semanas 5-8** | Uso habitual | La usa 2-3 veces/semana sin ayuda |
| **Semanas 9-12** | ROI medible | Métrica clave mejora 20-40% |
| **Semanas 13-20** | Expansión orgánica | Otros del equipo quieren aprender |
| **Semana 21+** | Sostenible | El método está integrado en workflow |

**Variable:** Depende de caso de uso. Análisis de logs = 2 semanas. Cambio de proceso = 8 semanas.

---

### **¿Necesito capacitación formal? ¿Hay certificación?**

**Respuesta corta:**
No necesitas certificación formal. Office Hours + práctica real = suficiente. La mejor formación es aplicarlo a problemas reales.

**Profundización:**
**Modelo de capacitación en Ionos:**
1. **Show & Tell** (1h informal) → Entiende concepto
2. **Office Hours** (45 min, problema tuyo) → Aplicas en vivo
3. **Práctica autónoma** (2-4 semanas) → Usas sin ayuda
4. **Facilitador de otros** (si interesa) → Documental casos

**No hay:**
- Exámenes
- Certificados
- Cursos eLearning largos
- Requisitos previos

**Hay:**
- Método documentado
- Casos de referencia
- Community en Slack
- Office Hours regulares (apoyo)

---

## Preguntas Sobre Calidad y Riesgos

### **¿Y si la IA genera código/análisis incorrecto? ¿Quién es responsable?**

**Respuesta corta:**
Responsable eres tú, como con cualquier herramienta. La IA es **asistencia, no sustituto**. La Ley 3 (Verificar) es obligatoria.

**Profundización:**
**Responsabilidades claras:**

| Quien | Qué | Verificación |
|---|---|---|
| **Tú** | Validar output antes de usar | Tests, peer review, logical sense check |
| **IA** | Generar sugerencia útil | Baseline, no respuesta final |
| **Gerente** | Auditoria de riesgos críticos | P0 items siempre tienen verificación manual |
| **IT/Security** | Políticas de governance | Qué se puede automatizar vs. qué no |

**Regla:** Si te importa que sea correcto, verifica. Si no te importa, no uses IA en eso.

---

### **¿La IA me va a reemplazar?**

**Respuesta corta:**
No. Te va a cambiar lo que haces, no si tienes trabajo.

**Profundización:**
**Realidad en Ionos:**
- Hace 12 meses: "La IA será genérica y no útil para infraestructura"
- Ahora: "Context Engineering demuestra la IA ES útil cuando la contextualizas"
- Futuro: "Quien NO sepa usar IA + expertise = en riesgo. Quien combine ambas = invaluable"

**Lo que desaparece:** Tareas repetitivas puras (copy-paste, buscar en docs).

**Lo que crece:** Interpretación, juicio, decisiones contextuales, arquitectura.

**Tu ventaja como senior:** Ya tienes contexto y experiencia. La IA amplifica eso, no lo reemplaza.

---

### **¿Es solo "moda" de IA? ¿Durará?**

**Respuesta corta:**
Técnicamente, sí. Es tendencia real. Pero tu value prop NO es "usar herramientas cool". Es "sé aplicar herramientas efectivamente en tu dominio".

**Profundización:**
**Evidencia de durabilidad:**
1. **Inversión:** Grandes tech companies invierten billones en IA
2. **Rendimiento:** LLMs mejoran significativamente cada año (GPT-3 → GPT-4 → GPT-4o)
3. **Adopción:** 70%+ empresas Fortune 500 están experimentando con IA
4. **Casos de negocio:** ROI documentado en cientos de áreas

**Lo que durará:**
- Context Engineering (método agnóstico de herramienta)
- Necesidad de expertise humano para contextualizarla
- Ventaja competitiva de quien sepa aplicarla bien

**Lo que cambiará:**
- Herramientas específicas (hoy Claude, mañana algo mejor)
- Precios (cada vez más barato)
- Interfaz (hoy chat, mañana integrado en workflows)

**Tu posición:** "Aprendí a usar IA efectivamente en 2025" → Habilidad transferible al futuro.

---

## Preguntas Sobre Éxito y Fracaso

### **¿Qué pasa si un equipo prueba y no ve resultados?**

**Respuesta corta:**
Es información valiosa. Significa ese caso de uso NO es fit, o necesita ajuste. No es fracaso del método, es descubrimiento.

**Profundización:**
**Causas comunes de "no resulta":**

| Síntoma | Causa probable | Solución |
|---|---|---|
| "No ahorra tiempo" | Fricción técnica (prompts largos, acceso complicado) | Simplificar, integrar mejor |
| "Los outputs son genéricos" | Falta contexto (Ley 2 débil) | Indexar documentación específica |
| "No confío en la IA" | Sin verificación clara (Ley 3 saltada) | Establecer testeo automático |
| "Es más lento que antes" | Sobrecomplexidad (pedimos demasiado) | Reducir scope, empezar por tarea pequeña |
| "Mi equipo no la usa" | Falta de incentivo (no hay pressión de tiempo) | Esperar momento crítico, reintentar |

**Preguntas para diagnosticar:**
1. ¿Aplicaste las 3 Leyes tal cual?
2. ¿Tenías documentación para indexar?
3. ¿Verificaste los outputs antes de usar?
4. ¿Diste suficiente tiempo (4-6 semanas)?

Si a todas = contexto OK, caso NO es fit. Si no a alguna = intenta de nuevo.

---

### **¿Qué esperas lograr con esto en Ionos?**

**Respuesta corta:**
Demostrar que IA + Expertise = capacidad multiplicadora. No es reemplazar humanos, es amplificar lo que ya son capaces de hacer.

**Profundización:**
**Objetivos a 32 semanas:**

| Plazo | Objetivo | Métrica |
|---|---|---|
| **S4** | Show & Tell exitoso | 60% audiencia se apunta a Office Hours |
| **S12** | 5-7 casos documentados | ROI combinado 50+ horas ahorradas |
| **S20** | Presentación formal | 2-3 equipos pilotos confirmados |
| **S32** | Pilotos completados | 20+ personas habilitadas, ROI org. 85k€/año |
| **Post-S33** | Business case L6 | Demostración de impacto multiplicador |

---

## Preguntas Meta

### **¿Debo preparar algo antes de una sesión de Office Hours?**

**Respuesta corta:**
Sí. Ven con un problema real, no teórico. 15 min para explicitarlo es suficiente, no necesitas documentación completa.

**Profundización:**
**Antes de venir:**
1. Identifica 1 problema real que enfrentas hoy o esta semana
2. Pregúntate: "¿Es esto algo que documentación podría ayudar?"
3. Si sí, anota:
   - Qué intentas resolver
   - Qué limitaciones tienes (tiempo, acceso, etc.)
   - Cómo sabrías si la IA ayudó

**Ejemplo útil:**
- "Tardaría 2h analizar este log, quiero 30 min"
- "Necesito feedback en 10 PRs pero tengo tiempo para 2"
- "Debo escribir runbook para este proceso"

**Ejemplo NO útil:**
- "¿La IA puede resolver todo?"
- "Quiero aprender IA" (sin problema específico)
- "¿Cómo implemento RAG?" (es técnica, no caso de uso)

---

### **¿Cómo documentamos caso de uso después de Office Hours?**

**Respuesta corta:**
Template simple: Problema → Contexto → Solución → ROI. 15 min para rellenar después de sesión.

**Profundización:**
**Template de caso (markdown):**
```
## Caso: [Nombre descriptivo]

**Perfil:** [Tu rol/equipo]
**Problema:** [1 párrafo qué era imposible sin IA]
**Contexto:** [Documentación, ejemplos que aportamos]
**Solución:** [El prompt final que funcionó]
**Resultado:** [Output específico obtenido]
**Tiempo:** Before X h/min, After Y min, ROI [%]
**Verificación:** [Cómo validamos que era correcto]
**Lecciones:** [1-2 insights para repetir]
**Replicable:** [Otros pueden hacerlo solos?]
```

**Tiempo:** 15-30 min rellenar. Lo haces tú o conjuntamente, tu elige.

---

### **¿Es confidencial lo que hacemos en Office Hours?**

**Respuesta corta:**
Por defecto sí, documentamos anonimizado. Si necesitas que sea completamente privado, lo respetamos.

**Profundización:**
**Confidencialidad:**
- ✓ Removemos nombres, datos específicos sensibles
- ✓ Documentamos "Perfil: Backend Dev" no "Juan de Equipo X"
- ✓ Preguntamos antes de documentar público vs. privado
- ✗ No compartimos sin tu permiso

**Dos usos después:**
1. **Portfolio interno:** Mostramos casos a managers, otros equipos (anonimizado)
2. **Lecciones aprendidas:** Documentamos patrones útiles para otros (sin identificar)

**Tu control:** Antes de documentar, preguntamos. Tú decides si está OK.

---

## Referencias

**Documentación oficial:**
- Context Engineering Framework (1-pager): [ver documento]
- Context Engineering Framework EXTENDED (profundidad): [ver documento]
- Política de Datos v1.0: [ver documento]
- Plan de Implementación 32 semanas: [ver documento]

**Contacto:**
- Email: [tu email]
- Slack: [canal o DM]
- Office Hours: [calendario compartido]

---

**Versión 1.0 | Octubre 2025 | Actualizar después de primeras 3 sesiones Show & Tell**