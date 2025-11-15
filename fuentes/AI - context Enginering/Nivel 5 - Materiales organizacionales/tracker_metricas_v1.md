# Tracker de Métricas — Context Engineering
## Template Google Sheets / Excel Ready-to-Use

**Versión:** 1.0  
**Formato:** CSV (importable a Google Sheets, Excel, Airtable)  
**Actualización:** Semanal (mínimo), de forma manual o con integraciones

---

## 📊 Cómo Usar Este Tracker

1. **Copiar a Google Sheets** (recomendado para equipo):
   - Abrir Google Sheets
   - Pegar contenido CSV abajo (Data → "Paste from plain text")
   - Darle formato (colores, ancho columnas)

2. **Copiar a Excel** (si prefieres local):
   - Copiar tabla, pegar en Excel
   - Darle formato y fórmulas

3. **Actualizar tras cada Office Hour**:
   - Añadir fila nueva con datos del caso
   - Calcular ROI
   - Subir foto o enlace a caso documentado (si aplica)

4. **Revisar semanalmente**:
   - ¿Progresamos hacia targets? (mira columna ROI total)
   - ¿Hay patrones en qué funciona?
   - ¿Qué roles reclutamos?

---

## 📋 Headers y Definiciones

```
Semana | Fecha | Nombre / Anónimo | Rol / Equipo | Dominio | Problema Resuelto |
Iteración | Tiempo Antes | Tiempo Después | ROI % | Métrica (MTTA/MTTR/etc) |
Herramienta | Contexto Usado | Validación | Documentado |
Replicable | Champions Activos Total | Sponsors Management | Notas | Link Caso
```

| Header | Significado | Ejemplo | Obligatorio |
|---|---|---|---| 
| **Semana** | S1-S32 | S3 | ✅ |
| **Fecha** | DD/MM/YYYY | 31/10/2025 | ✅ |
| **Nombre** | Persona o "Anonimizado" | "Juan" o "Dev-SRE-A" | ✅ |
| **Rol/Equipo** | Qué hace | Dev / SRE / Soporte / RRHH / etc | ✅ |
| **Dominio** | Área funcional | SRE / DevOps / Redes / Soporte / Finanzas | ✅ |
| **Problema Resuelto** | Problema específico abordado | Incident Response / Code Review / Troubleshooting | ✅ |
| **Iteración** | Número de iteración | 1 / 2 / 3 / etc | ✅ |
| **Tiempo Antes** | Cuánto tardaba sin IA | 2h 30min | ✅ |
| **Tiempo Después** | Cuánto tardó con IA | 15 min | ✅ |
| **ROI %** | % Reducción tiempo | 90% (fórmula: 1 - Después/Antes) | ✅ |
| **Métrica Clave** | MTTA/MTTR/Throughput/etc | MTTA (mean time to ack) | ✅ |
| **Herramienta** | ChatGPT / Claude / Gemini / RAG | Claude Pro | ✅ |
| **Contexto Usado** | Qué información se pasó | Logs sanitizados, runbooks | ✅ |
| **Validación** | Cómo se validó (R0/R1/R2/R3) | Peer review + test | ✅ |
| **Documentado** | ¿Caso está documentado? | Sí / No / Parcial | ✅ |
| **Replicable** | ¿Otro puede hacerlo solo? | Sí / No / Necesita help | ⚠️ |
| **Champions Activos Total** | Número acumulado de champions | 3 / 6 / 12 | ✅ |
| **Sponsors Management** | Sponsors en management (acumulado) | 1 (Manager directo) / 2 (+Area Manager) / 4 (+2 Directores) | ✅ |
| **Notas** | Observaciones, aprendizajes | "Primera vez con este patrón, fácil" | ❌ |
| **Link Caso** | URL a documento del caso | [link a Confluence / MD] | ⚠️ |

**Nueva columnas añadidas (modelo iterativo):**
- **Dominio**: Área funcional del problema. Trackea cobertura horizontal (cuántos dominios diferentes).
- **Problema Resuelto**: Problema específico. Trackea profundidad (cuántos problemas por dominio).
- **Iteración**: Número de iteración en la que se resolvió este caso. Permite analizar evolución iteración a iteración.
- **Champions Activos Total**: Número acumulado de champions hasta esta fila. Muestra crecimiento de comunidad.
- **Sponsors Management**: Sponsors en management (acumulado). **Crítico para L6**: evidencia de path de construcción de autoridad bottom-up (Peers → Managers → Directivos).



---

## 📊 Datos CSV Ready-to-Use (Copiar a tu Sheets)
**Versión actualizada con columnas de Cobertura Incremental:**

```
Semana,Fecha,Nombre,Rol/Equipo,Dominio,Problema Resuelto,Iteración,Tiempo Antes,Tiempo Después,ROI %,Métrica,Herramienta,Contexto Usado,Validación,Documentado,Replicable,Champions Activos Total,Sponsors Management,Notas,Link Caso
S1,31/10/2025,Dev-A,Backend Dev,DevOps,Code Testing,1,1h 30min,20 min,78%,Coverage Test,ChatGPT Plus,Code + funciones similares previas,Peer Review,Sí,Sí,3,1 (Manager directo),Primer caso; muy rápido,[link]
S2,07/11/2025,SRE-B,Infraestructura,SRE,Incident Response,1,3h,15 min,92%,MTTR Incident,Claude Pro,Logs sanitizados + postmortem previo,Tests + visual,Sí,Parcial,3,1 (Manager directo),Necesitó 2 iteraciones en contexto,[link]
S2,08/11/2025,Support-C,Helpdesk,Soporte,Ticket Response,1,40 min,5 min,88%,Ticket Response Time,Gemini,Knowledge base + 3 ejemplos,Manual check,Sí,Sí,4,1 (Manager directo),Puedo usar como template ahora,[link]
S3,14/11/2025,RRHH-D,Recursos Humanos,RRHH,CV Screening,1,2h,10 min,92%,CV Screening Time,ChatGPT,Job description + CV template,Manager approval,Sí,No,5,1 (Manager directo),Datos sensibles; solo yo puedo replicar,[link]
S3,15/11/2025,Dev-E,Dev,DevOps,Code Review,1,1h,8 min,87%,PR Review Time,Claude,Repository context + style guide,Integrated tests,Sí,Sí,6,2 (+Area Manager DevOps),Ahora todos usan esto,[link]
S4,21/11/2025,Ops-F,Operaciones,SRE,Report Generation,1,2h 30min,12 min,92%,Report Generation,ChatGPT Plus,Datos de Grafana + template anterior,Visual check,Sí,Sí,6,2 (+Area Manager),Template reutilizable,[link]
S5,28/11/2025,Dev-G,Backend,DevOps,API Documentation,1,3h,25 min,86%,Doc Time,Claude Pro,API spec + swagger + ejemplos,Peer review,Sí,Parcial,7,2 (+Area Manager),Necesita ajustes manuales finales,[link]
S13,05/01/2026,SRE-H,SRE,SRE,Capacity Planning,2,4h,30 min,88%,Planning Time,Claude Pro,Historical metrics + forecasting,Senior review,Sí,Sí,8,2 (consolidado),Iteración 2: profundización SRE,[link]
S15,19/01/2026,Net-I,Networking,Redes,Troubleshooting Configs,2,2h,20 min,83%,MTTR Network,ChatGPT,Runbooks + configs sanitized,Peer review,Sí,Parcial,10,2 (consolidado),Iteración 2: nuevo dominio (Redes),[link]
S22,09/03/2026,SRE-J,SRE,SRE,Runbook Auto-generation,3,1h 30min,10 min,89%,Runbook Creation,Claude Pro,Postmortems + architecture,Tests + review,Sí,Sí,12,4 (+2 Directores),Iteración 3: workflows avanzados SRE,[link]
S31,11/05/2026,Fin-K,Finance,Finanzas,Financial Report Analysis,4,3h,25 min,86%,Report Analysis,GPT-5,Financial data + compliance rules,Director approval,Sí,No,14,5 (+Director Finanzas),Iteración 4: nuevo dominio regulado,[link]
```

**Explicación de filas ejemplo:**
- **S1-S7 (Iteración 1)**: Piloto inicial en múltiples dominios (SRE, DevOps, Soporte, RRHH). Sponsors: 1-2 (Manager directo + Area Manager).
- **S13-S15 (Iteración 2)**: Expansión horizontal (nuevo dominio: Redes) + profundización vertical (SRE capacity planning). Sponsors: 2 consolidados.
- **S22 (Iteración 3)**: Profundización vertical en SRE (runbook auto-generation). Sponsors: 4 (+ 2 Directores).
- **S31 (Iteración 4)**: Expansión horizontal a Finanzas (área regulada). Sponsors: 5 (+ Director Finanzas).

**Path de sponsors visible**: 1 → 2 → 4 → 5 (construcción bottom-up de coalición)

---

## 📈 Fórmulas Recomendadas (para Google Sheets o Excel)

### Resumen de Cobertura Incremental (Nuevo)
DOMINIOS CUBIERTOS: =COUNTA(UNIQUE(E:E)) → Ejemplo: 5 (SRE, DevOps, Soporte, Redes, Finanzas)
PROBLEMAS DIFERENTES: =COUNTA(UNIQUE(F:F)) → Ejemplo: 8 (Incident Response, Code Review, etc.)
ITERACIÓN ACTUAL: =MAX(G:G) → Ejemplo: 4
CHAMPIONS ACTIVOS: =MAX(P:P) → Ejemplo: 14 (último valor de columna Champions Activos Total)
SPONSORS MANAGEMENT: [Extraer último valor de Q:Q] → Ejemplo: "5 (1 Manager + 1 Area Manager + 2 Directores + 1 Director Finanzas)"
ROI ACUMULADO MENSUAL: =SUMPRODUCT((TIMEVALUE(H:H)-TIMEVALUE(I:I))*0.8) → Ejemplo: 120h/mes ahorradas (0.8 factor mensualización)


**Nota**: La columna **Sponsors Management** es texto descriptivo, no numérico. Para dashboards, puedes crear columna auxiliar numérica (1, 2, 4, 5) y graficar crecimiento.



### Columna ROI % (Automático)

Fórmula: `=1 - (D/C)` donde C = Tiempo Antes, D = Tiempo Después

En Google Sheets:
```
=IF(C2="","",ROUND((1-TIMEVALUE(D2)/TIMEVALUE(C2))*100,1)&"%")
```

### Resumen Semanal (Debajo de la tabla)

```
TOTAL CASOS S1-S5: =COUNTIF(A:A,"S*")  → Ejemplo: 7
TIEMPO AHORRADO: =SUM(C:C)-SUM(D:D)  → Ejemplo: 9h 45min
ROI PROMEDIO: =AVERAGE(E:E)  → Ejemplo: 89%
PERSONAS HABILITADAS: =COUNTA(B:B)  → Ejemplo: 7 personas
HERRAMIENTAS MÁS USADAS: =MODE(F:F)  → Ejemplo: ChatGPT Plus (4 casos)
CASOS REPLICABLES: =COUNTIF(J:J,"Sí")  → Ejemplo: 5 de 7
DOCUMENTACIÓN COMPLETA: =COUNTIF(H:H,"Sí")  → Ejemplo: 6 de 7
```

---

## 🎯 Targets vs Realidad (Tracker de Progreso)

**Copia esta tabla abajo en tu Sheets para trackear progreso:**

```
MÉTRICA,TARGET S12,REALIDAD S1-S5,% COMPLETADO,ESTADO
Casos documentados,5-7,"[=COUNTIF(H:H,'Sí')]",?,🟡
Personas habilitadas,8-12,"[=COUNTA(B:B)]",?,🟡
Equipos diferentes,3-4,"[=COUNTA(C:C)]",?,🟡
ROI promedio,>75%,"[=AVERAGE(E:E)]",?,🟡
Herramientas comprobadas,2-3,"[=COUNTA(F:F)]",?,🟡
Casos replicables,60%+,"[=COUNTIF(J:J,'Sí')/COUNTA(B:B)]",?,🟡
Tiempo total ahorrado,>40h,"[=SUM(C:C)-SUM(D:D)]",?,🟡
```

---

## 📝 Ejemplo de Fila Completa (Cómo Llenarla)

**Caso Real (Semana 3):**

| Campo | Valor | Notas |
|---|---|---|
| **Semana** | S3 | |
| **Fecha** | 14/11/2025 | |
| **Nombre** | "RRHH-D" (anonimizado) | Privacidad: usa rol, no nombre real |
| **Rol/Equipo** | Recursos Humanos | |
| **Problema** | "Analizar 30 CVs para posición Backend Dev y resumir top 5" | Conciso, específico |
| **Tiempo Antes** | 2h | Sin IA tardaba 4 min por CV × 30 = 120 min |
| **Tiempo Después** | 10 min | Prompt bien estructurado, validación por manager |
| **ROI %** | 92% | (1 - 10/120) × 100 = 91.7% ≈ 92% |
| **Métrica** | CV Screening Time | Métrica organizacional: RRHH usa esto |
| **Herramienta** | ChatGPT | Acceso via ChatGPT Plus empresa |
| **Contexto Usado** | "Job description, criterios de selección, 2 CVs exitosos previos" | PCM7 completo (contexto + few-shot) |
| **Validación** | Manager approval | R2 (no crítico pero importante): persona autorizada revisa |
| **Documentado** | Sí | ✅ Caso completo con template prompt |
| **Replicable** | No | ❌ Tiene datos de candidatos (PII), solo RRHH-D puede usar |
| **Notas** | "Datos sensibles, solo yo puedo replicar. Pero template de prompt SÍ es transferible" | Aprendizaje clave |
| **Link Caso** | [URL a Confluence o MD] | Documentación completa del caso |

---

## 🔄 Ciclo de Actualización Recomendado

**Cada Friday (Fin de semana):**
1. Añadir nuevas filas de casos Office Hours de la semana
2. Actualizar total de tiempo ahorrado, ROI promedio
3. Revisar qué funciona bien, qué no
4. Notas para siguientes sesiones

**Cada Mes:**
1. Revisar targets vs realidad
2. Ajustar estrategia si patrones cambian
3. Compartir resumen con manager/sponsor

**Cada 4 Semanas (Semanas 4, 8, 12, 16, 20, 24, 28, 32):**
1. Compilar métricas para presentación
2. Seleccionar mejores 3-5 casos para usar en decks
3. Validar con participantes permisos para usar casos

---

## 🔒 Privacidad y Anonimización

**Reglas al llenar tracker:**

1. **Nombres:** Usa rol + letra o "Anonimizado"
   - ❌ "Juan García de Equipos de Dev"
   - ✅ "Dev-A" o "Backend Dev"

2. **Datos sensibles en columna Problema:** Generaliza
   - ❌ "Analizar logs de customer_id=12345"
   - ✅ "Analizar logs de customer para detectar fraude"

3. **Datos en columna Contexto Usado:** Describe solo tipo
   - ❌ "[Adjunto: contraseña=xyz, db=prod_ionos]"
   - ✅ "[Logs sanitizados, docs públicas, templates previos]"

4. **Link Caso:** Si documentación tiene PII, marcar "Acceso restringido"

---

## 📊 Dashboard Simple (Opcional, para Presentaciones)

Puedes crear gráficos simples en Google Sheets (o PowerBI si tienes):

```
Gráfico 1: ROI % promedio por rol (barras)
Gráfico 2: Tiempo ahorrado acumulado por semana (línea)
Gráfico 3: Herramientas más usadas (pie)
Gráfico 4: Distribución casos por métrica (barras)
```

---

## 📊 Dashboard de Cobertura Incremental (Opcional)

Para trackear evolución organizacional a lo largo de iteraciones, puedes crear tabla resumen:

**Tabla: Evolución Organizacional por Iteración**

| Iteración | Semanas | Dominios Cubiertos | Workflows/Casos | Casos Documentados | ROI Mensual Acumulado | Champions Activos | Sponsors Management |
|:---------:|:-------:|:------------------:|:---------------:|:------------------:|:---------------------:|:-----------------:|:-------------------:|
| 1 | 1-12 | 1-2 | 5-7 | 5-7 | 30-50h/mes | 3-6 | 1-2 |
| 2 | 13-24 | 2-3 | 8-12 | 10-15 | 50-80h/mes | 6-10 | 2-3 |
| 3 | 25-36 | 3-4 | 13-18 | 18-25 | 80-120h/mes | 10-14 | 3-4 |
| 4 | 37-48 | 4-5 | 20-25 | 30-40 | 120-160h/mes | 14-18 | 4-6 |

**Instrucciones**:
1. Copia esta tabla a nueva pestaña en tu Google Sheets
2. Rellena con datos reales de tu tracker (fórmulas arriba)
3. Crea gráficos de línea: Iteración (X) vs Champions/Sponsors (Y)
4. Usa en presentaciones para mostrar escalado del método

**Por qué esta tabla es crítica para L6**:
- Muestra **construcción de coalición bottom-up** (columna Sponsors Management)
- Evidencia **escalado sostenible** (Champions crecen sin tu intervención directa)
- Demuestra **ROI acumulado** (no solo casos aislados)
- Trackea **cobertura transversal** (múltiples dominios, no silo único)

---



---

## 💾 Backup y Compartir

**Exportar tracker:**
- Google Sheets: Descargar como CSV o Excel
- Excel: Guardar como .xlsx y compartir via cloud (OneDrive, Drive, etc)

**Compartir con manager/sponsor:**
- Resumen semanal: Email con top 3 casos
- Resumen mensual: Link a Sheets (acceso de lectura)
- Business case S33: Extrae métricas consolidadas

---

**Versión 1.0 | Octubre 2025**  
**Última actualización:** Octubre 31, 2025  
**Próxima estructura ampliada:** Después de 20 casos documentados (v1.1)