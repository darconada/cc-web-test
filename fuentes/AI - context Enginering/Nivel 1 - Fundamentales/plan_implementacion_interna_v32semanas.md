# Plan de Implementación Interna: Charlas y Pilotos de IA

## ⚠️ VERSIÓN ACTUALIZADA - Timeline: 32 semanas (8 meses)

**Nota importante:** Este documento está alineado con `contexto_desarrollo_profesional_ia_v2.md`

---

## Contexto y Objetivos

**Situación actual:**
- Ya tienes buen feedback de responsables y compañeros sobre interés en IA
- Hay curiosidad genuina sobre cómo puede ayudar
- Contexto ideal para approach bottom-up (no top-down)

**Objetivo principal:**
> Validar internamente el framework de adopción IA en 8 meses (32 semanas), generando casos de éxito cuantificables y documentando TODO el proceso.

**Objetivos secundarios:**
- Identificar champions naturales en la organización
- Descubrir problemas reales que no aparecen en papers
- Ajustar el modelo a la realidad operativa
- Generar métricas propias (no solo teoría)
- Construir credibilidad peer-to-peer

---

## Principios del Approach

### ✅ Qué SÍ hacer:

1. **Bottom-up, no top-down**
   - Empieza con charlas distendidas entre pares
   - No es "la nueva iniciativa corporativa"
   - Es "esto me está ayudando, quiero compartirlo"

2. **Show, don't tell**
   - Demos en vivo, no slides teóricas
   - Casos reales que usas TÚ hoy
   - Confesar fracasos (genera credibilidad)

3. **Feedback antes que rollout**
   - Recoge opiniones genuinas
   - Ajusta según lo que funciona/no funciona
   - Deja que los interesados se auto-seleccionen

4. **Documentar TODO**
   - Tiempo real invertido (no estimado)
   - Problemas encontrados (no solo éxitos)
   - Qué NO funcionó y por qué
   - Métricas before/after reales

### ❌ Qué NO hacer:

1. **No empezar con presentación formal**
   - Parece "venta interna"
   - La gente se apaga con 18 slides
   - Pierdes la magia de la demo

2. **No forzar participación**
   - Deja que se auto-seleccionen
   - Respeta el escepticismo
   - No todos tienen que estar convencidos

3. **No vender humo**
   - Si algo no funcionó, dilo
   - Si no tienes métricas, no inventes
   - Si es solo teoría, admitiéndolo

4. **No crear "lab de IA"**
   - Evita centralizar
   - Ownership distribuido en seniors
   - Tú eres facilitador, no dueño

---

## Las 3 Sesiones Progresivas

### Sesión 1: "Show & Tell" Informal (Semanas 1-4)

**Objetivo:** Generar curiosidad sin presionar

**Formato:**
- Café/cerveza después del trabajo (o almuerzo)
- Grupo pequeño: 5-12 personas
- Duración: 60 minutos
- Tono: Conversación entre colegas

**Estructura sugerida:**

#### 1. Intro (5 min)
```
"Hola a todos. Llevo unos meses experimentando con IA 
para mi trabajo diario en [tu área]. He tenido resultados 
interesantes - algunas cosas funcionan muy bien, otras 
son un desastre.

Quiero compartiros lo que he aprendido, sin filtros, 
y ver si a vosotros os puede servir para vuestro trabajo.

No es sobre herramientas específicas, sino sobre un MÉTODO 
que funciona para cualquier rol. Lo llamo Context Engineering."
```

#### 2. Demo en Vivo (30 min)

**Demo 1: Meeting notes (5 min)** - Universal, todos tienen reuniones
- Muestra cómo procesas notas de reunión con IA
- Énfasis: útil para CUALQUIER persona

**Demo 2: Caso técnico con RAG (15-20 min)** - Muestra el método
- Tu caso real (Datineo, tickets, logs, etc.)
- Énfasis: el MÉTODO es transferible a cualquier dominio

**Historia del operador (10 min)** - Caso de context engineering
- Cuando trabajaste con alguien: 8h frustrado → 15 min aplicando método
- Énfasis: la herramienta no importa, el contexto SÍ

#### 3. "Confesiones de fracasos" (10 min)
```
"No todo funciona. Os cuento 3 cosas que probé y fallaron:

1. [Fracaso 1 - específico y honesto]
2. [Fracaso 2 - preferiblemente divertido]
3. [Fracaso 3 - aprendizaje real]

Lo importante no es que la IA sea mágica. Es saber 
CUÁNDO usarla y CÓMO estructurar el problema."
```

#### 4. Preguntas y cierre (10 min)
```
"¿Preguntas? ¿Dudas? ¿Escepticismo saludable?

Si os interesa seguir explorando, ofrezco 'Office Hours': 
sesiones de 45 min donde traes un problema real tuyo 
y trabajamos juntos aplicando este método.

No es teoría, es trabajo real. Os ayudo a resolver 
VUESTRO problema mientras documentamos el caso."
```

#### 5. Post-sesión inmediato (5 min)
- Formulario de feedback rápido (Google Form)
- Lista de interesados en Office Hours
- Agradecimiento genuino

---

### Sesión 2: Office Hours (Semanas 5-12)

**Objetivo:** Generar casos de éxito documentados aplicando el método

**Formato:**
- Sesiones 1:1 (ocasionalmente 1:2)
- 45 minutos por sesión
- 3-5 sesiones por semana (ajusta según demanda)
- Presencial o remoto (según necesidad)

**Estructura de una Office Hours:**

#### Pre-sesión (responsabilidad del participante)
- Email previo con problema concreto
- Documentación relevante adjunta
- Expectativa clara de output esperado

#### Minutos 0-10: Entender el problema
```
Preguntas clave:
- ¿Qué intentas resolver exactamente?
- ¿Qué restricciones tienes?
- ¿Cómo sabrás que el output es útil?
- ¿Qué ya has probado?
```

#### Minutos 10-35: Trabajar juntos (aplicando las 3 Leyes)
**Ellos escriben el prompt, tú guías:**

1. **Estructura el problema** (Ley 1)
   - Define objetivo claro
   - Explicita restricciones
   - Establece criterios de éxito

2. **Aporta contexto rico** (Ley 2)
   - Dominio específico
   - Casos previos relevantes
   - Restricciones del entorno

3. **Verifica rigurosamente** (Ley 3)
   - Tests cuando aplique
   - Validación manual experta
   - Iteración basada en feedback

#### Minutos 35-45: Documentar caso de uso
**Template de documentación:**
```markdown
## Caso: [Título descriptivo]

**Problema original:**
[Descripción del problema en 2-3 líneas]

**Contexto estructurado:**
[Qué información clave aportamos]

**Prompt final que funcionó:**
[El prompt completo, reproducible]

**Output útil:**
[Resultado concreto obtenido]

**Verificación aplicada:**
[Cómo validamos que era correcto]

**Tiempo ahorrado:**
- Before: [X horas/minutos]
- After: [Y minutos]
- ROI: [% reducción]

**Herramienta usada:**
[ChatGPT, Claude, Gemini, etc.]

**Lecciones aprendidas:**
[1-2 insights concretos]

**Replicabilidad:**
[¿Puede esta persona repetirlo sola? ¿Otros pueden hacerlo?]
```

**Meta general:** 15-20 sesiones completadas, 5-7 casos documentados con ROI medible

---

### Sesión 3: Presentación Formal (Semanas 17-20)

**Timing crítico:** Solo después de tener 5+ casos reales internos documentados

**Formato:**
- 45 min presentación + 15 min Q&A
- Audiencia amplia (15-30 personas)
- Sala formal o all-hands
- AHORA SÍ usar slides (presentación v3 adaptada)

**Contenido actualizado:**

#### Estructura de presentación:

**Slide 1-2: Casos internos reales (NUEVO)**
```
"Esto es lo que hemos aprendido AQUÍ, en Ionos:

- [Caso 1]: [Persona/Equipo] redujo [métrica] en [%]
- [Caso 2]: [Persona/Equipo] resolvió [problema] en [tiempo]
- [Caso 3]: [Persona/Equipo] automatizó [proceso] 

Todos estos casos usaron el mismo MÉTODO, no la misma herramienta."
```

**Slides 3-10: Framework teórico**
- Adaptado con ejemplos internos
- Referencias a casos que ya conocen
- Énfasis en método universal (Context Engineering)

**Slides 11-15: Propuesta de pilotos formales**
```
"Basado en estos resultados, propongo pilotos de 12 semanas 
en 2-3 equipos para validar el método a escala:

- Fase 1 (4 sem): Foundation
- Fase 2 (4 sem): Integration  
- Fase 3 (4 sem): Measurement

Compromiso: 1 champion (5-8h/sem), 2-3 participantes (2-4h/sem)
Output: Método replicable, métricas, playbooks operativos"
```

**Slides 16-18: Siguiente paso**
- Formulario de interés en pilotos
- Criterios de selección transparentes
- Timeline esperado

**Objetivo:** Lanzar 2-3 pilotos formales con sponsorship claro

---

## Timeline Completo (32 semanas = 8 meses)

### **FASE 1: Validación Peer-to-Peer (Semanas 1-16)**

#### Semanas 1-4: Show & Tell múltiples grupos
**Meta:** Generar curiosidad en 3-4 equipos/áreas diferentes

**Checklist semanal:**
- [ ] Semana 1: Primera Show & Tell (Grupo A)
- [ ] Semana 2: Segunda Show & Tell (Grupo B)  
- [ ] Semana 3: Tercera Show & Tell (Grupo C - opcional)
- [ ] Semana 4: Consolidar feedback, identificar patrones

**Outcomes esperados:**
- 15-25 personas expuestas al método
- 8-12 interesados en Office Hours
- Feedback sobre qué resuena más

---

#### Semanas 5-12: Office Hours intensivo
**Meta:** 15-20 sesiones, 5-7 casos documentados cross-área

**Checklist semanal:**
- [ ] 2-4 sesiones Office Hours por semana
- [ ] Documentar cada sesión inmediatamente
- [ ] Identificar patrones comunes
- [ ] Refinar templates de contexto por dominio

**Outcomes esperados:**
- 15-20 Office Hours completadas
- 5-7 casos de éxito con ROI medible
- 3-4 champions identificados (usuarios autónomos)
- Templates de contexto por dominio (Redes, Dev, Ops, Soporte, etc.)

---

#### Semanas 13-16: Preparación presentación formal
**Meta:** Consolidar casos, métricas, champions para presentación

**Checklist:**
- [ ] Semana 13: Revisar todos los casos documentados
- [ ] Semana 14: Seleccionar 3-5 mejores casos para presentación
- [ ] Semana 15: Pedir permiso a participantes, preparar anonimización
- [ ] Semana 16: Actualizar presentación v3 con casos reales internos

**Outcomes esperados:**
- 3-5 casos ready para presentar (con permisos)
- Métricas agregadas: ROI promedio, tiempo ahorrado total
- Lista de champions para testimonios
- Presentación adaptada al contexto interno

---

### **FASE 2: Expansión con Managers (Semanas 17-20)**

#### Semanas 17-18: Presentación formal
**Meta:** Sponsorship ejecutivo, presupuesto, luz verde para pilotos

**Checklist:**
- [ ] Semana 17: Presentación formal (all-hands o managers meeting)
- [ ] Semana 17: Recoge formularios de interés en pilotos
- [ ] Semana 18: Analiza respuestas, identifica equipos viables

**Outcomes esperados:**
- 50+ personas en audiencia
- 5-8 equipos expresan interés
- 2-3 equipos con commitment claro (champion + manager sponsor)

---

#### Semanas 19-20: Selección de pilotos
**Meta:** Seleccionar 2-3 equipos piloto, hacer kickoff

**Checklist:**
- [ ] Entrevistas 1:1 con champions de equipos interesados
- [ ] Evaluar viabilidad: commitment, sponsor, caso de uso claro
- [ ] Seleccionar 2-3 equipos piloto
- [ ] Kickoff meetings con cada equipo (expectativas, timeline, compromiso)

**Criterios de selección:**
- Champion senior con influencia en su equipo
- Manager sponsor visible
- Caso de uso medible (métricas baseline claras)
- Disponibilidad real de tiempo (no sobrecargados)
- Diversidad de dominios (no todos del mismo área)

**Outcomes esperados:**
- 2-3 equipos piloto confirmados
- Plan de 12 semanas por equipo acordado
- Métricas baseline establecidas

---

### **FASE 3: Pilotos Formales (Semanas 21-32)**

#### Semanas 21-24: Fase 1 de pilotos - Foundation
**Meta por equipo piloto:** Base de conocimiento operativa

**Acciones:**
- Indexar documentación interna (runbooks, postmortems, configs)
- Herramientas: ChatGPT Projects, Claude Projects, Gemini + Drive, o RAG custom
- Establecer políticas de acceso y metadata

**Entregable por equipo:**
- Base de conocimiento consultable y sanitizada
- Champions entrenados en context engineering básico

---

#### Semanas 25-28: Fase 2 de pilotos - Integration
**Meta por equipo piloto:** Workflows integrados y funcionando

**Acciones:**
- Crear templates de contexto específicos del dominio
- Integrar con herramientas actuales (Jira, Slack, PagerDuty, GitHub, etc.)
- Automatizar inputs/outputs donde sea posible (n8n, Zapier, MCP)

### Cuándo Solicitar Soporte Técnico

Durante esta fase de integración, es crítico que los champions identifiquen qué pueden resolver autónomamente y cuándo necesitan ayuda técnica.

#### Champions pueden resolver autónomamente:
- Uso de herramientas IA conversacionales (ChatGPT, Claude, Gemini)
- Creación de prompts y templates de contexto
- Integraciones no-code (Zapier, n8n, Make.com) entre herramientas SaaS
- Análisis de datos en Excel/Sheets con asistencia IA
- Automatización de documentos y reportes

#### Champions DEBEN solicitar ayuda técnica para:
- APIs personalizadas o integraciones con sistemas legacy
- Automatizaciones que requieren programación avanzada
- Configuraciones de seguridad o compliance críticas
- Integración con bases de datos corporativas o ERP

#### Proceso de escalado:
1. Champion identifica necesidad de integración compleja durante Office Hours o fase de piloto
2. Documenta caso de uso y requerimientos técnicos claramente
3. Solicita soporte a IT/DevOps con contexto del problema y objetivo
4. Colaboración técnica se documenta como parte del caso organizacional
5. **Esto NO es un fallo del método** - es parte del diseño: facilitar colaboración cross-funcional efectiva

**Entregable por equipo:**
- 3-5 workflows documentados y funcionando en operación diaria
- Champions usando IA de forma autónoma

---

#### Semanas 29-32: Fase 3 de pilotos - Measurement
**Meta por equipo piloto:** ROI cuantitativo demostrado

**Acciones:**
- Configurar dashboards con métricas clave (MTTA, MTTR, throughput, etc.)
- Documentar casos con métricas before/after reales
- Identificar patrones: qué funciona bien, qué no, por qué

**Entregable por equipo:**
- Dashboard con baseline y tendencias
- 5+ casos documentados con ROI medible
- Playbook operativo del equipo (replicable)
- Presentación de resultados

---

### **FASE 4: Consolidación y Transición (Semanas 33-35)**

**Contexto crítico**: No saltes directamente de Semana 32 (fin de pilotos) a Iteración 2 o decisión L6 sin consolidar aprendizajes. Necesitas un **buffer de retrospectiva y refinamiento** entre ciclos.

---

#### Semana 33: Retrospectiva con Champions

**Meta**: Extraer aprendizajes honestos de Iteración 1 (pilotos fundacionales)

**Actividad principal**: Reunión retrospectiva con 8-12 champions de los 2-3 pilotos completados

**Formato sugerido** (90 minutos):

**Parte 1: ¿Qué funcionó bien?** (30 min)
Preguntas clave:
- ¿Qué casos de uso tuvieron mayor impacto?
- ¿Qué herramientas fueron más útiles? ¿Por qué?
- ¿Qué templates/prompts reutilizas constantemente?
- ¿Qué workflows ahora son parte de tu día a día?
- ¿Qué deberíamos repetir en próximas iteraciones?
**Parte 3: Anti-patrones descubiertos** (20 min)
Documentar específicamente:
- [Anti-patrón 1]: [Señal] + [Por qué falla] + [Remedio]
- [Anti-patrón 2]: [Señal] + [Por qué falla] + [Remedio]
- [Anti-patrón 3]: [Señal] + [Por qué falla] + [Remedio]

Ejemplo:
- Anti-patrón: "Indexar toda la wiki sin criterio"
- Señal: Queries devuelven 20 docs irrelevantes
- Por qué falla: Ruido en knowledge base, no se priorizó por problema
- Remedio: Indexar solo docs relevantes a problema específico (Pareto)
**Parte 4: Cierre y agradecimientos** (10 min)
- Agradecer honestidad y compromiso
- Confirmar que feedback se incorporará a proceso refinado
- Anunciar próximos pasos (Semana 34-35)


**Output esperado**:
- Documento: **"Lessons Learned - Iteración 1"** (~2-3 páginas)
- Lista de anti-patrones descubiertos (5-8 items)
- Lista de mejores prácticas validadas (5-8 items)
- Feedback crudo para revisar

---

#### Semana 34: Actualizar Templates y Playbooks

**Meta**: Refinar documentación del método basado en learnings reales

**Actividades**:

1. **Actualizar templates de contexto** (10-15 horas)
   - Incorporar estructuras de prompts que funcionaron mejor
   - Añadir ejemplos reales de pilotos (anonimizados si necesario)
   - Eliminar secciones que generaron confusión

2. **Refinar playbooks operativos** (5-8 horas)
   - Añadir anti-patrones descubiertos en retrospectiva
   - Actualizar estimaciones de tiempo (ahora tienes datos reales)
   - Incluir "gotchas" específicos encontrados

3. **Revisar políticas de Governance** (3-5 horas)
   - ¿Surgieron casos donde política actual no cubría?
   - ¿Hubo incidentes de seguridad/compliance menores?
   - Actualizar clasificación R0-R3 si necesario

**Checklist**:
- [ ] Templates v2.0 incorporan feedback de retrospectiva
- [ ] Playbooks tienen ejemplos internos reales
- [ ] Anti-patrones documentados con remedios claros
- [ ] Políticas actualizadas si hubo gaps descubiertos

**Output esperado**:
- **Templates v2.0** (mejorados con feedback real)
- **Playbooks operativos actualizados** con casos internos
- **Documento de Governance actualizado** (si aplica)

---

#### Semana 35: Planificar Iteración 2 (o Decisión L6)

**Meta**: Decidir siguiente paso basado en **datos reales** de Iteración 1

**Actividad principal**: Aplicar **Criterios de Priorización** del modelo iterativo

---

##### **Opción A: Expansión Horizontal (Nuevo Dominio)**

**Cuándo elegir**:
- ✅ **Señal**: 3+ personas de equipo NO-piloto piden "queremos esto también"
- ✅ **Métrica de priorización**: Tamaño equipo x Impacto potencial x Sponsor strength
- ✅ **Viabilidad**: Hay manager sponsor visible en nuevo dominio

**Ejemplo real**:
- Pilotos fueron SRE + DevOps (Iteración 1)
- Equipo de Redes (15 personas) vio resultados, manager ofrece sponsorship
- Caso de uso claro: Troubleshooting de configuraciones de routers
- **Decisión**: Iteración 2 = Horizontal (Redes, 6-10 semanas)

**Priorizar por**:
1. Tamaño del equipo solicitante (equipo de 15 > equipo de 3)
2. Impacto potencial (ROI proyectado alto según problema)
3. Sponsor strength (manager comprometido vs "tal vez lo probamos")

---

##### **Opción B: Profundización Vertical (Dominio Existente)**

**Cuándo elegir**:
- ✅ **Señal**: Dominio piloto mejoró métrica clave **>40%** (no solo >20% — ROI excepcional)
- ✅ **Champions muy activos**: 3+ champions del dominio piden más casos de uso avanzados
- ✅ **Manager sponsor quiere más**: "Esto es game-changer, démosle más profundidad"

**Ejemplo real**:
- Piloto SRE: MTTR mejoró 50% (excepcional)
- 4 SREs ahora usan método diariamente, piden: "¿Podemos automatizar capacity planning? ¿Generar runbooks automáticos?"
- Manager SRE: "Invirtamos más aquí, tiene ROI enorme"
- **Decisión**: Iteración 2 = Vertical (SRE workflows avanzados, 4-8 semanas)

**Priorizar por**:
1. ROI actual del dominio (>40% es señal muy fuerte)
2. Número de champions activos en dominio (3+ es masa crítica)
3. Complejidad de casos avanzados (¿son viables con herramientas actuales?)

---

##### **Opción C: Adaptación Tecnológica**

**Cuándo elegir**:
- ✅ **Señal**: 3+ casos donde herramienta actual **falló o limitó** solución
- ✅ **Nueva herramienta disponible**: GPT-5 sale, Pinecone lanza feature crítica, etc.
- ✅ **Coste-beneficio claro**: Migración justificada (accuracy mejora 15%, o coste reduce 30%)

**Ejemplo real**:
- Pilotos operativos (SRE + DevOps)
- 4 casos recientes: ChatGPT Projects alcanzó límite de 10MB docs (blocker)
- Pinecone disponible con capacidad 100x mayor
- **Decisión**: Iteración 2 = Tecnológica (migrar knowledge base, 2-4 semanas)

**Evaluar**:
1. **Costo de migración** (tiempo, esfuerzo, riesgo de romper lo que funciona)
2. **Beneficio medible** (accuracy, velocidad, escalabilidad, coste)
3. **Urgencia** (¿es blocker crítico o nice-to-have?)

**Regla**: Si costo > beneficio, NO migrar todavía.

---

##### **Opción D: Consolidación y Governance (Pre-L6)**

**Cuándo elegir**:
- ✅ **Señal**: Iteración 1 exitosa, pero método aún no es auto-sostenible
- ✅ **Objetivo L6 cercano**: Quieres formalizar framework antes de presentar business case
- ✅ **Comunidad emergente**: Tienes 10-15 champions pero necesitan estructura

**Ejemplo real**:
- Pilotos completados con ROI demostrado
- 12 champions activos, pero aún dependen de ti para resolver bloqueos
- Quieres que método sea **replicable sin ti** antes de L6
- **Decisión**: Consolidación (4-6 semanas) + luego presentar L6

**Actividades de consolidación**:
1. **Formalizar Community of Practice** (CoP)
   - Office Hours rotan entre 3 facilitadores (no solo tú)
   - Slack channel con 20+ miembros activos
   - Documentación exhaustiva (playbooks, FAQs, casos)

2. **Escalar governance**
   - Políticas formalizadas y comunicadas
   - Clasificación R0-R3 clara y aplicada
   - Proceso de escalación definido

3. **Entrenar nuevos facilitadores**
   - 2-3 champions se convierten en trainers
   - Pueden replicar Office Hours sin ti
   - Documentación de "cómo facilitar" completa

---

#### Checklist de Decisión (Semana 35)

**Antes de decidir Iteración 2, validar**:

- [ ] **Iteración 1 completó criterios de salida** (ROI >20%, casos documentados, métricas positivas)
- [ ] **Champions operan autónomamente** (no dependen de ti constantemente)
- [ ] **Métricas positivas** en al menos 2 de 3 pilotos
- [ ] **Hay demanda orgánica** de nuevo dominio/problema (si Horizontal)
- [ ] **Recursos disponibles** (tiempo de champions, licencias, presupuesto)
- [ ] **Decisión documentada** con justificación (Horizontal/Vertical/Tecnológica/Consolidación)

**Si 5-6 checks son ✅**: Adelante con Iteración 2 o Consolidación

**Si 3+ checks son ❌**: **Consolidar Iteración 1** durante 2-4 semanas adicionales antes de expandir. No acelerar prematuramente — el método debe estar sólido antes de escalar.

**Output esperado**:
- **Plan de Iteración 2** (o Consolidación) documentado (Semanas 36-47)
- Scope definido (1-2 problemas específicos)
- Timeline acordado (6-10 semanas según tipo)
- Commitment de champions y sponsors confirmado

---

### **Post-Semana 35: Dos Caminos Posibles**

Después de consolidación (Semanas 33-35), tienes dos opciones según situación:

---

#### **Camino 1: Ejecutar Iteración 2 (Expansión Organizacional)**

**Cuándo elegir**: Si necesitas más evidencia antes de L6, o si la organización pide más cobertura

**Timeline**: Semanas 36-47 (12 semanas — Iteración 2 completa)

**Proceso**: Repetir ciclo de 4 Fases (Foundation → Integration → Measurement → Governance) con:
- Nuevo dominio (Horizontal), O
- Profundización en dominio existente (Vertical), O
- Actualización tecnológica (Tecnológica)

**Ventaja**: Más casos, más dominios, más ROI acumulado, más sponsors management

**Desventaja**: Retrasa decisión L6 3 meses más (Semana 48 en vez de Semana 36)

**Cuándo tiene sentido**: 
- Iteración 1 fue exitosa pero insuficiente para L6 (necesitas 50+ personas habilitadas, 10+ casos)
- Hay demanda orgánica fuerte de nuevos equipos
- Manager/sponsor dice: "Necesito más evidencia de escalabilidad"

---

#### **Camino 2: Presentar Business Case L6 (Decisión Inmediata)**

**Cuándo elegir**: Si Iteración 1 generó suficiente evidencia y sponsors

**Timeline**: Semanas 36-38 (preparación + presentación)

**Criterio de suficiencia**:
- ✅ **≥10 casos documentados** con ROI medible
- ✅ **≥15 personas habilitadas** (champions + participantes activos)
- ✅ **≥3 sponsors management** (al menos 1 director o equivalente)
- ✅ **≥2 dominios validados** (no silo único)
- ✅ **ROI organizacional ≥80h/mes** acumulado

**Si cumples 4-5 criterios**: Suficiente evidencia para L6

**Si cumples 2-3 criterios**: Considera Iteración 2 antes de L6

**Actividades Semana 36-38**:

**Semana 36: Preparar Business Case**
- Consolidar todos los casos documentados (tracker de métricas)
- Crear dashboard de evolución organizacional (tabla de Cobertura Incremental)
- Extraer métricas agregadas: ROI total, champions activos, sponsors management
- Preparar presentación ejecutiva (15-20 slides)

**Semana 37: Validar con Sponsor y Stakeholders**
- Presentación preliminar a tu manager/sponsor directo
- Feedback de 2-3 directores/managers clave
- Ajustar narrativa según feedback

**Semana 38: Presentación Formal a C-level**
- Presentación a Director de tu área + RRHH + IT Director
- Business case completo: impacto, escalabilidad, scope L6
- Propuesta: "Sr. Staff - AI Enablement Lead / Context Engineering"

**Outcomes posibles**:
- ✅ **Promoción L6 aprobada** (mejor escenario) — celebra, documenta el logro
- ⏳ **"Espera 6 meses más"** — ejecuta Iteración 2-3, acumula más evidencia
- 🔄 **"Expande a más equipos antes de L6"** — ejecuta Iteración 2 (Horizontal)
- 🚀 **"Esto es valioso, pero L6 no viable internamente"** — considera externalización (fuera de scope por ahora)

---

### **NUEVA SECCIÓN: Más Allá de Semana 32 — Iteraciones Continuas**

**Contexto**: El plan de 32 semanas es tu **ciclo fundacional** — validaste el método con 2-3 equipos piloto. Pero Context Engineering **no es un proyecto único que termina en Semana 32** — es un **ciclo continuo de mejora y expansión organizacional**.

Esta sección describe opciones post-Semana 32/35 si decides continuar iterando antes de (o después de) L6.

---

#### **Opción A: Expansión Horizontal (6-10 semanas cada iteración)**

**Scope**: Nuevo dominio/departamento cada iteración

**Ejemplo de roadmap**:
- **Iteración 1 (S1-32)**: SRE + DevOps (pilotos fundacionales)
- **Iteración 2 (S36-45)**: Redes (nuevo dominio, problema: troubleshooting configs)
- **Iteración 3 (S48-57)**: Soporte (nuevo dominio, problema: ticket response)
- **Iteración 4 (S60-69)**: Finanzas (nuevo dominio regulado, problema: report analysis)

**Ventajas**:
- Cobertura amplia organizacional
- Múltiples sponsors management (path bottom-up visible)
- Demuestra universalidad del método

**Cuándo usar**: Si hay demanda orgánica de múltiples equipos y quieres maximizar alcance antes de L6

---

#### **Opción B: Profundización Vertical (4-8 semanas cada iteración)**

**Scope**: Más problemas en dominio existente (no nuevo dominio)

**Ejemplo de roadmap**:
- **Iteración 1 (S1-32)**: SRE — incident response, troubleshooting, postmortem generation
- **Iteración 2 (S36-43)**: SRE — capacity planning, runbook auto-generation (workflows avanzados)
- **Iteración 3 (S46-51)**: SRE — predictive alerting, automated remediation (IA avanzada)

**Ventajas**:
- Dominio con adopción total y workflows sofisticados
- ROI masivo en un área (puede ser >100h/mes en un solo equipo)
- Champions se convierten en expertos/trainers

**Riesgo**: Concentración en un solo equipo — si se disuelve, pierdes capacidad

**Cuándo usar**: Si un dominio tiene ROI excepcional (>40%) y quieres maximizar impacto en esa área

---

#### **Opción C: Estrategia Mixta (Recomendada)**

**No sigas solo una estrategia** — alterna según necesidad:

**Iteraciones 1-2** (S1-45): **Horizontal** — valida en 2-3 dominios diferentes
- Demuestra universalidad del método
- Construye credibilidad en múltiples áreas

**Iteraciones 3-4** (S48-69): **Vertical** en dominio con más ROI — profundiza workflows avanzados
- Maximiza impacto en área con champions fuertes
- Casos de uso sofisticados que impresionan a management

**Iteraciones 5+**: **Alternancia** cada 2 iteraciones
- Horizontal: nuevo dominio (expansión orgánica)
- Vertical: profundizar en existente
- Tecnológica: cada 6-9 meses, actualizar infraestructura

---

#### **Tabla de Referencia: Evolución Organizacional por Iteración**

Usa esta tabla como **guía aspiracional** (no requisito estricto) de cómo evoluciona el método:

| **Iteración** | **Semanas** | **Dominios Cubiertos** | **Workflows/Casos** | **Casos Documentados** | **ROI Mensual Acumulado** | **Champions Activos** | **Sponsors Management** |
|:-------------:|:-----------:|:----------------------:|:-------------------:|:----------------------:|:-------------------------:|:---------------------:|:-----------------------:|
| 1 (Fundacional) | 1-32 | 1-2 (SRE + DevOps) | 6 | 5-7 | 30-50h/mes | 6-8 | 1-2 (Managers) |
| 2 (Horizontal) | 36-45 | 3 (+Redes) | 9 | 10-12 | 50-70h/mes | 10-12 | 2-3 (+Area Manager) |
| 3 (Vertical) | 48-55 | 3 (profundiza SRE) | 13 | 18-20 | 80-100h/mes | 12-14 | 3-4 (consolidado) |
| 4 (Horizontal) | 58-67 | 4 (+Soporte) | 16 | 25-30 | 100-120h/mes | 16-18 | 4-5 (+Directores) |

**Nota**: Estos números son **orientativos** basados en implementaciones típicas. Tu organización puede variar. Lo crítico es la **tendencia de crecimiento**, no los números absolutos.

---

#### **Métricas de Auto-Sostenibilidad**

**Objetivo final** de iteraciones continuas: Método deja de depender de ti como facilitador único.

**Señales de auto-sostenibilidad** (típicamente alcanzadas en Iteración 3-4):
- ✅ **3+ champions pueden entrenar a nuevos usuarios** (no solo tú)
- ✅ **Office Hours rotan entre 3 facilitadores** (no solo tú)
- ✅ **Community of Practice tiene 20+ miembros activos**
- ✅ **Nuevos equipos se unen sin que los reclutes** (demanda orgánica)
- ✅ **Management ha asignado presupuesto recurrente** (no proyecto puntual)
- ✅ **Políticas de Governance se aplican sin intervención constante**

**Cuando esto ocurre**: Has construido **programa organizacional**, no solo proyecto personal. Eso es evidencia L6 sólida.

---

### **Resumen Visual: Opciones Post-Semana 35**
	 		Semana 35
	                    (Consolidación completa)
                     						     │
		                          ↓
          ┌───────────────┴───────────────┐
          │                               											│
     Suficiente evidencia?          				 Necesitas más evidencia?
     (≥10 casos, ≥3 sponsors)        					(< criterios suficiencia)
          │      											                         │
          ↓                              											 ↓
  CAMINO 1: L6 Inmediato  					         CAMINO 2: Iteración 2
  ────────────────────             		 ────────────────────
  Semanas 36-38                     							Semanas 36-47
  │                                 									│
  ├─ S36: Preparar business case    			├─ Foundation (4 sem)
  ├─ S37: Validar con sponsor       				├─ Integration (4 sem)
  └─ S38: Presentación C-level      				└─ Measurement (4 sem)
          │                               								│
          ↓                               								↓
  Decisión L6                       						Iteración 3 o L6?
  (Aprobado / Espera 6m)            				(Evaluar S48)


---

### **Checklist Final: Preparación para Decisión**

**Antes de Semana 36** (sea Iteración 2 o L6), validar:

**Evidencia cuantitativa**:
- [ ] ≥5 casos documentados con métricas before/after
- [ ] ROI organizacional calculado (horas/mes ahorradas)
- [ ] Dashboard de Cobertura Incremental actualizado (tracker de métricas)
- [ ] Tabla de evolución (Iteración 1 con datos reales)

**Evidencia cualitativa**:
- [ ] Testimonios de 3-5 champions (pueden ser anónimos)
- [ ] Feedback de managers/sponsors
- [ ] Casos de "Impossible Task Resolution" (01) documentados
- [ ] Lessons Learned y anti-patrones formalizados

**Documentación actualizada**:
- [ ] Templates v2.0 incorporan feedback de pilotos
- [ ] Playbooks operativos con ejemplos internos
- [ ] Políticas de Governance refinadas (si hubo updates)
- [ ] Framework de 1 página actualizado (si cambió algo)

**Alineación organizacional**:
- [ ] Sponsor directo (manager) apoya L6 o Iteración 2
- [ ] Al menos 1 director/manager de otra área conoce resultados
- [ ] RRHH informado de progreso (si L6 es opción)
- [ ] IT/Compliance validó que no hay blockers críticos

**Si 12+ checks son ✅**: Ready para decisión (L6 o Iteración 2)

**Si 8-11 checks son ✅**: Casi ready — completa gaps en Semana 34-35

**Si <8 checks son ✅**: Consolida 2-4 semanas adicionales antes de decidir

---

## **Referencias para Profundizar**

Para detalles completos del modelo iterativo, consulta:
- `context_engineering_framework_implementation_EXTENDED.md` → Sección "Ciclo Iterativo de Expansión"
- `tracker_metricas_v1.md` → Tabla de Cobertura Incremental con columnas nuevas
- `context_engineering_framework.md` → Principio de iteraciones continuas (one-pager actualizado)

---

**Versión:** 2.1 (32 semanas + iteraciones continuas)  
**Fecha de actualización:** Noviembre 2025  
**Cambios vs v2.0**: Añadido buffer de consolidación (S33-35) + opciones post-Semana 32 + modelo iterativo integrado  
**Próxima revisión**: Después de retrospectiva Semana 33

---

## Métricas de Éxito del Proceso

### Después de Show & Tell (Semana 4):
- **Participación:** >60% de invitados asisten
- **Interés:** >40% quieren Office Hours  
- **Satisfacción:** >70% dicen "Muy útil"
- **Conversión:** Al menos 8 personas se apuntan a Office Hours

### Después de Office Hours (Semana 12):
- **Completadas:** Al menos 15 sesiones
- **Casos documentados:** Al menos 5 con impacto medible
- **Champions identificados:** 3-4 personas usando IA autónomamente
- **Adopción orgánica:** Al menos 2 personas replican sin tu ayuda

### Después de Presentación Formal (Semana 18):
- **Asistencia:** >50% de audiencia target
- **Interés en piloto:** Al menos 5 equipos se postulan
- **Calidad de postulaciones:** 3 equipos con commitment claro
- **Sponsorship:** Al menos 2 managers/directores apoyan públicamente

### Después de Pilotos (Semana 32):
- **Completados:** Al menos 2 de 3 equipos completan 12 semanas
- **ROI demostrable:** Al menos 1 equipo con mejora >20% en métrica clave
- **Casos documentados:** 10-15 casos de uso validados organizacionalmente
- **Expansión natural:** Al menos 1 equipo no-piloto pide unirse
- **Método replicable:** Framework documentado que otros pueden seguir

### Métricas específicas a trackear por equipo:
- **MTTA** (Mean Time To Acknowledge)
- **MTTR** (Mean Time To Resolve)
- **Throughput** (tareas/tickets completados)
- **Tiempo de PR/code review**
- **Defectos** pre-prod vs prod
- **Satisfacción del equipo** (encuestas pre/post)

---

## Sistema de Feedback y Mejora Continua

### Después de cada Show & Tell:

**Formulario Google Forms (2 min):**
```
1. ¿Qué tan útil te pareció la sesión? (1-5)
2. ¿Qué fue lo más interesante? (texto libre)
3. ¿Qué NO te convenció? (texto libre)
4. ¿Te interesaría participar en Office Hours? (Sí/No/Tal vez)
5. Si participas, ¿qué problema traerías? (texto libre, opcional)
```

---

### Después de cada Office Hours:

**Template de documentación interna:**
```markdown
## Office Hours Session #[N]

**Fecha:** [YYYY-MM-DD]
**Participante:** [Nombre/Área - puede anonimizarse después]
**Problema:** [1 línea]
**Duración real:** [X minutos]

**Contexto estructurado usado:**
[Qué información clave aportó el participante]

**Prompt final:**
[El prompt que funcionó]

**Output útil:**
[Qué consiguió]

**Tiempo ahorrado estimado:**
[Before: X, After: Y, ROI: Z%]

**¿Usuario puede replicarlo solo?** [Sí/No/Parcialmente]

**Lecciones aprendidas:**
- [Insight 1]
- [Insight 2]

**Follow-up programado:** [Fecha, si aplica]
```

---

### Después de presentación formal:

**Formulario de interés en pilotos:**
```
1. Nombre y equipo
2. ¿Por qué te interesa participar? (texto libre)
3. ¿Qué caso de uso específico quieres validar?
4. ¿Tienes sponsor de tu manager? (Sí/No)
5. Disponibilidad horaria: Champion [5-8h/sem], Participantes [2-4h/sem]
6. ¿Qué métrica quieres mejorar? (MTTA, MTTR, throughput, otra)
```

---

## Red Flags y Cómo Manejarlos

### Red Flag #1: "Nadie se apunta a Office Hours"

**Posibles causas:**
- Sesión Show & Tell no generó confianza
- Demos muy abstractas/poco relevantes  
- Timing malo (todos en crunch)
- Falta de seguridad psicológica

**Qué hacer:**
- Analiza feedback: ¿qué frenó a la gente?
- Haz sesiones más pequeñas (1 persona por vez)
- Ofrece ayuda en su contexto (no en abstracto)
- Considera empezar con 1 equipo muy interesado

---

### Red Flag #2: "Champions no siguen usando después de Office Hours"

**Posibles causas:**
- Herramientas no son accesibles (fricción técnica)
- Falta de tiempo real (no priorizado)
- Casos de uso no suficientemente valiosos
- Falta de seguimiento tuyo

**Qué hacer:**
- Follow-up explícito a la semana
- Reduce fricción técnica (simplifica acceso)
- Enfoca en casos con ROI inmediato
- Considera que ese caso/persona no es fit

---

### Red Flag #3: "Presentación formal genera poco interés"

**Posibles causas:**
- Casos internos no son convincentes
- Audiencia incorrecta (gente no relevante)
- Propuesta de piloto demasiado demandante
- Timing organizacional malo

**Qué hacer:**
- Valida casos con más gente antes de presentar
- Re-segmenta audiencia (tal vez más pequeña pero más relevante)
- Reduce ask del piloto (menos horas/semana)
- Reconsidera si es el momento organizacional correcto

---

### Red Flag #4: "Pilotos no completan 12 semanas"

**Posibles causas:**
- Commitment del equipo no era real
- Fase 1 tomó demasiado tiempo (frustración)
- Falta de soporte tuyo (abandonados)
- Cambios organizacionales (re-orgs, etc)

**Qué hacer:**
- Entrevista post-mortem: ¿qué pasó?
- Ajusta expectativas para próximos pilotos
- Más check-ins frecuentes
- Selecciona equipos más cuidadosamente

---

## Templates Útiles

### Email de Invitación a Sesión Show & Tell

```
Asunto: [Informal] Café y charla: IA en el día a día

Hola [Nombre/Equipo],

Llevo unos meses experimentando con IA (Claude, Gemini, ChatGPT) 
para mi trabajo en [área]. He tenido resultados interesantes - 
algunas cosas funcionan genial, otras son un desastre total.

Quiero compartir lo aprendido, sin filtros, en una sesión informal 
de ~60 minutos. No es una presentación formal, más bien mostrar 
mi pantalla y un MÉTODO que funciona para cualquier rol.

📅 Cuándo: [Fecha] a las [Hora]
📍 Dónde: [Sala / Link]
☕ Habrá café/snacks

No hace falta preparar nada, solo traed curiosidad (y escepticismo, 
que también vale 😄).

¿Os apuntáis? Responde a este email o en [canal de Slack].

Saludos,
[Tu nombre]

PD: Máximo 12 personas para que sea conversación, no clase. 
First come, first served.
```

---

### Mensaje de Follow-up Post Office Hours

```
Hola [Nombre],

Genial trabajar contigo ayer en [problema]. Adjunto resumen 
de lo que hicimos:

📋 Problema: [breve descripción]
🔑 Contexto clave: [lo que funcionó bien]
✅ Resultado: [output útil]
⏱ Tiempo ahorrado: [estimado]

Siguiente paso sugerido:
- [Acción concreta 1]
- [Acción concreta 2]

¿Te importa si documento esto como caso de uso? 
Lo anonimizamos si prefieres.

Hablamos en una semana para ver cómo va.

Saludos,
[Tu nombre]
```

---

### Propuesta de Piloto para Equipo

```
Propuesta: Piloto IA [Nombre del Equipo] - 12 semanas

## Objetivo
Validar impacto de Context Engineering Framework en [caso de uso 
específico del equipo] con métricas cuantificables.

## Commitment
- 1 senior "champion": 5-8h/semana
- 2-3 participantes: 2-4h/semana
- Duración: 12 semanas

## Fases

### Semanas 1-4: Foundation
- Setup de herramientas (ChatGPT Projects, Claude, Gemini + Drive)
- Base de conocimiento de [documentación específica]
- Métricas baseline: [MTTA, MTTR, o lo que aplique]

### Semanas 5-8: Integration  
- Templates de contexto para [casos de uso específicos]
- Integración con [herramientas que usan: Jira, Slack, etc.]
- 3-5 casos de uso validados

### Semanas 9-12: Measurement
- Dashboard de métricas (before/after)
- Documentación de playbooks operativos
- Presentación de resultados al resto de la org

## Soporte provisto por mí
- Office hours semanales (1h)
- Templates y frameworks
- Setup técnico y troubleshooting
- Documentación de todo el proceso

## Entregables (Semana 12)
- Métricas before/after cuantificadas
- Playbooks operativos del equipo
- 5+ casos de uso documentados
- Presentación de resultados

¿Interesados? Hagamos kickoff call para alinear detalles.
```

---

## Checklist de Preparación

### Antes de primera Show & Tell:

**Material:**
- [ ] 3 demos reales testeadas (funcionan en tu pantalla)
- [ ] Script de introducción (5 min practicado)
- [ ] Historia de fracaso preparada (auténtica)
- [ ] Formulario de feedback (Google Forms ready)

**Logística:**
- [ ] Sala reservada (o link de videoconf)
- [ ] Café/snacks pedidos (si presencial)
- [ ] Proyector/pantalla compartida testeado
- [ ] Backup plan si falla tech

**Comunicación:**
- [ ] Invitaciones enviadas (1 semana antes)
- [ ] Recordatorio enviado (1 día antes)
- [ ] Grupo identificado (5-12 personas apropiadas)

---

### Antes de Office Hours:

**Setup:**
- [ ] Calendario con slots disponibles compartido
- [ ] Template de documentación ready
- [ ] Herramientas IA disponibles (ChatGPT Plus, Claude, Gemini)
- [ ] Acceso a docs/sistemas necesarios verificado

**Por cada sesión:**
- [ ] Email previo del participante con problema
- [ ] Revisión rápida de contexto antes de sesión
- [ ] 60 min bloqueados (45 min sesión + 15 min documentación)

---

### Antes de Presentación Formal:

**Contenido:**
- [ ] 3-5 casos internos documentados y aprobados
- [ ] Permisos de participantes para usar sus casos
- [ ] Presentación v3 actualizada con casos reales
- [ ] Propuesta de piloto clara y específica

**Logística:**
- [ ] Audiencia correcta invitada (managers, seniors, interesados)
- [ ] Sala apropiada (o videoconf estable)
- [ ] Proyector/pantalla testeados
- [ ] Backup de presentación (USB + cloud)
- [ ] Formulario de interés en pilotos listo

**Comunicación:**
- [ ] Agenda socializada con antelación
- [ ] Invitaciones a audiencia correcta
- [ ] Managers/directores informados (si aplica)

---

## Próximos Pasos Inmediatos

### Esta semana:
1. [ ] Revisar este documento completo
2. [ ] Identificar grupo A para primera sesión (5-12 personas)
3. [ ] Preparar 3 demos reales (testearlas)
4. [ ] Crear formulario de feedback
5. [ ] Agendar Show & Tell #1 (Semana 1)

### Próximas 4 semanas:
1. [ ] Ejecutar 3-4 sesiones Show & Tell
2. [ ] Analizar feedback de cada una
3. [ ] Identificar 8-12 interesados en Office Hours
4. [ ] Agendar primeras Office Hours para Semana 5

### Próximas 16 semanas:
1. [ ] 15-20 Office Hours completadas
2. [ ] 5-7 casos documentados con ROI
3. [ ] 3-4 champions identificados
4. [ ] Presentación formal actualizada con casos reales

### Próximos 8 meses (32 semanas):
1. [ ] Presentación formal ejecutada (Semana 17-18)
2. [ ] 2-3 pilotos lanzados y completados (Semanas 21-32)
3. [ ] ROI organizacional demostrado
4. [ ] Business case L6 presentado (Semana 33+)

---

## Recursos y Anexos

### Herramientas útiles:
- **Google Forms:** Para encuestas de feedback
- **Notion / Confluence:** Para documentación de casos
- **Slack:** Para comunicación asíncrona y seguimiento
- **Google Calendar:** Para scheduling de Office Hours
- **Loom:** Para grabar demos (opcional, para compartir después)

### Referencias de proyecto:
- `contexto_desarrollo_profesional_ia_v2.md` - Documento principal con estrategia completa
- `context_engineering_framework.md` - Framework de 1 página (3 Leyes + 4 Fases)
- `validacion_metodo_context_engineering.md` - Análisis de originalidad y referencias
- `presentacion_ia_seniors_v3.html` - Presentación para Sesión 3 (adaptar con casos internos)
- `modelo_negocio_servicios_ia.md` - Plan de externalización (Mes 10+, NO trabajar ahora)

---

## Notas Finales

**Esto es un proceso iterativo:**
- No todo saldrá perfecto (está bien)
- Ajusta según feedback real
- Documenta fracasos (son valiosos)
- Celebra pequeños wins

**El éxito NO es:**
- 100% de adopción en la organización
- Todos convencidos desde el principio
- ROI masivo en 2 semanas

**El éxito SÍ es:**
- 3-4 champions genuinos usando IA autónomamente
- 5-7 casos con impacto medible y documentado
- Proceso documentado y replicable por otros
- Aprendizajes honestos (qué funciona, qué no, por qué)
- Método validado que puede escalar

**Recordatorio crítico:**
> Bottom-up beats top-down.
> Show beats tell.
> Real beats theoretical.
> Method beats tools.

---

**Versión:** 2.0 (32 semanas)  
**Fecha de actualización:** Octubre 2025  
**Próxima revisión:** Después de primeras 4 sesiones Show & Tell (Semana 4)  
**Contacto:** [Tu email/Slack]

---

## Cambios vs versión anterior (23 semanas)

- ✅ Timeline extendido: 23 → 32 semanas (más realista)
- ✅ Fase de preparación más robusta (Semanas 13-16)
- ✅ Más tiempo para Office Hours (5-12 semanas vs 3-6)
- ✅ Tiempo explícito para selección de pilotos (Semanas 19-20)
- ✅ Énfasis en "Context Engineering" como método universal
- ✅ Target ampliado: técnicos Y no-técnicos
- ✅ Referencias actualizadas a documentos v2 del proyecto
