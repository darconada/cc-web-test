# Política de Datos v1.0 — Context Engineering Framework
## Sanitización, Permisos y Governance Básica

**Versión:** 1.0  
**Fecha:** Octubre 2025  
**Audiencia:** Equipos, IT/Security, Legal (aprobadores)  
**Propósito:** Definir qué datos se pueden indexar en conocimiento bases IA y cuáles no

---

## 1. Principio General

**Regla de oro:**  
Si alguna vez te sentirías incómodo con que un dato fuera público en LinkedIn, **no lo indexes sin anonimizar**.

**Aplicación concreta:**
- ✓ Runbooks, arquitecturas, configs no-sensibles → OK indexar
- ✓ Logs (sin IPs privadas, passwords) → OK indexar  
- ✓ Postmortems (anonimizados) → OK indexar
- ✗ Passwords, API keys, tokens → **NUNCA indexar**
- ✗ Salarios, CVs, datos de empleados → **NUNCA indexar sin anonimizar**
- ✗ Contratos con clientes específicos → **Revisar con Legal**

---

## 2. Clasificación de Datos

### **Verde** — Públicos o internos sin restricción
**Definición:** Datos que puedes compartir dentro de Ionos sin problema.

**Ejemplos:**
- Runbooks operativos genéricos
- Documentación de arquitectura (sin detalles internos super-críticos)
- Guías de troubleshooting
- Procesos generales
- Postmortems anonimizados
- Documentación de herramientas

**Acción:** Indexar directamente en knowledge base IA.

---

### **Ámbar** — Internos con restricción de área
**Definición:** Datos internos que solo debe ver tu área o personas autorizadas.

**Ejemplos:**
- Configs específicas de Ionos (sanitizadas)
- Información operativa interna del equipo
- Casos históricos de tu área
- Métricas internas (no salarios)
- Procesos específicos del equipo

**Acción:**
1. Indexar en knowledge base
2. Configurar permisos (acceso solo a equipo o grupo específico)
3. Documentar nivel de restricción en metadata
4. Revisar anualmente si sigue siendo restricción necesaria

---

### **Rojo** — Confidencial, NO indexar
**Definición:** Datos que bajo ninguna circunstancia deben indexarse en IA.

**Ejemplos:**
- Passwords, API keys, tokens, secrets
- PII (Personally Identifiable Information): DNI, teléfonos, emails personales, direcciones
- Salarios, información financiera personal
- Credenciales de bases de datos corporativas
- Información médica o legal sensible
- Datos de clientes (dependiendo de contrato)
- Insider information o información sobre adquisiciones
- Contratos confidenciales

**Acción:** Nunca indexar. Si necesitas usarlo en prompt → **Anonimizar primero**.

---

## 3. Proceso de Sanitización (Antes de Indexar)

### **Paso 1: Clasificar**
Antes de subir cualquier documento a knowledge base IA, pregúntate:

```
1. ¿Tiene passwords, API keys o secrets?
   → SÍ: Remover, indexar sin esos datos
   → NO: Continuar

2. ¿Tiene PII (nombres completos, teléfonos, emails personales)?
   → SÍ: Anonimizar o remover
   → NO: Continuar

3. ¿Tiene información confidencial (salarios, contratos internos)?
   → SÍ: Revisar con manager/Legal
   → NO: OK indexar
```

### **Paso 2: Sanitizar**

**Remover:**
- Passwords → Sustituir por `[PASSWORD_REMOVED]`
- API keys → Sustituir por `[API_KEY_REMOVED]`
- Emails personales → Sustituir por `[EMAIL_REMOVED]`
- Teléfonos → Sustituir por `[PHONE_REMOVED]`
- Nombres específicos (si requiere anonimización) → Sustituir por `[EMPLOYEE_A]`

**Ejemplo antes:**
```
Connect with user.name@example.com password: SuperSecret123!
or reach John Garcia at +34-915-123456
```

**Ejemplo después:**
```
Connect with [EMAIL_REMOVED] password: [PASSWORD_REMOVED]
or reach [EMPLOYEE_NAME] at [PHONE_REMOVED]
```

### **Paso 3: Documentar Metadata**

Cuando subes documento a knowledge base, añade:

```
Título: [Nombre claro]
Categoría: [SRE / Dev / Soporte / etc]
Clasificación: [Verde / Ámbar / Rojo-No Usar]
Sensibilidad: [Pública / Interna / Restringida]
Última actualización: [Fecha]
Owner: [Persona responsible, puede ser rol genérico]
Permisos: [Todos / Solo Equipo X / Por solicitud]
```

---

## 4. Acceso y Compartir

### **¿Quién puede acceder a la knowledge base?**

| Clasificación | Acceso | Aprobación |
|---|---|---|
| **Verde** | Cualquiera en Ionos | Manager aprueba documentación |
| **Ámbar** | Equipo específico o autorizados | Manager/Lead team |
| **Rojo** | Nadie (no indexar) | N/A |

### **¿Puedo compartir la knowledge base fuera de Ionos?**

**Verde:** Sí, con cuidado. Asegura que no hay datos específicos de Ionos.

**Ámbar:** No sin aprobación explícita de Legal/Manager.

**Rojo:** Nunca.

### **¿Qué pasa si alguien solicita acceso a documentos Ámbar?**

**Proceso:**
1. Persona envía solicitud a ti o al propietario del documento
2. Propietario revisa quién es y por qué necesita acceso
3. Si es legítimo (mismo equipo, proyecto relacionado) → Aprobar acceso
4. Si no está claro → Escalamos a manager
5. Documentar decisión para auditoría

---

## 5. Prompts: Qué Puedes Enviar a IA y Qué No

### **Antes de pegar un prompt:**

**PERMITIDO:**
```
"Analiza este log de error [LOG SANITIZADO sin IPs internas]:
ERROR: Connection timeout in module X
Stack trace: [...]

¿Cuál es la causa probable?"
```

**NO PERMITIDO:**
```
"Analiza este log:
ERROR: Connection timeout in 192.168.1.100 from user john.garcia@ionos.com
API Key: sk_live_xyz123abc...
"
```

### **Checklist Antes de Enviar Prompt:**

```
☐ ¿Removí passwords, API keys, secrets?
☐ ¿Removí o anonimicé PII (emails personales, teléfonos, nombres completos)?
☐ ¿Es documentación públicamente disponible o interna autorizada?
☐ ¿Sentiría miedo si OpenAI/Anthropic leyera esto en voz alta?

Si alguna respuesta es "no" → NO enviar. Editar primero.
```

---

## 6. Retención y Limpieza de Datos

### **¿Cuánto tiempo se guardan prompts?**

| Plataforma | Retención | Acceso | Política |
|---|---|---|---|
| **ChatGPT Projects** | OpenAI policy | OpenAI (no humanos a menos que reporte) | Revisar OpenAI privacy |
| **Claude Pro** | Anthropic policy | Anthropic (no entrenan con tus datos) | Revisar Anthropic privacy |
| **Gemini** | Google policy | Google (relacionado a tu cuenta Google) | Revisar Google privacy |
| **RAG Local** (Pinecone, Weaviate) | Según configuración | Solo tu organización | Tu responsabilidad |

**Acción recomendada:**
1. Entiende política de privacidad de cada plataforma
2. Para datos muy sensibles, usa RAG local (se queda dentro de Ionos)
3. Recuerda: no indexar datos que no quieras que existan en cloud

---

## 7. Auditoría y Revisión Periódica

### **Cada 3 meses:**
- ¿Hay documentos Ámbar que deberían ser Verde (más abiertos)?
- ¿Hay documentos Verde que deberían ser Ámbar (más restrictivos)?
- ¿Hay datos que no debieron indexarse?
- ¿Algún acceso que ya no es válido?

### **Cada 12 meses:**
- Revisión completa de knowledge base
- Borrar documentos obsoletos
- Actualizar clasificaciones
- Alinear con cambios en políticas de compliance

### **Cómo reportar problema:**
Si encuentras dato sensible indexado por error:
1. Informa a [tu nombre/manager]
2. Se remover inmediatamente
3. Se revisar cómo llegó ahí (error de proceso)
4. Se actualizar checklist si es necesario

---

## 8. Herramientas Recomendadas por Sensibilidad

### **Datos Verde o Ámbar de equipo:**
✓ ChatGPT Projects  
✓ Claude Pro (Projects)  
✓ Gemini + Google Drive  
✓ Pinecone/Weaviate en cloud con permisos

### **Datos Ámbar Sensibles o Rojo (requiere excepciones):**
✓ RAG Local (Pinecone/Weaviate self-hosted)  
✓ Sistema interno con integración custom  
✗ ChatGPT Projects (sin encriptación adicional)  
✗ Gemini (Google tiene demasiados datos)

---

## 9. Excepciones y Escaladas

### **¿Necesito indexar dato que cae entre Verde y Ámbar?**

**Proceso:**
1. Describe el dato y por qué lo necesitas
2. Envía a [Manager] + [IT/Security]
3. Ellos evalúan riesgo
4. Aprueban con restricciones específicas o deniegan
5. Documentar decisión

**Ejemplo de escalada:**
- Necesito indexar postmortems de incidentes (internos sensibles)
- ¿Puedo?  
→ Sí, pero anonimizados (quitar nombres, IPs internas) y acceso solo a SRE

---

## 10. Responsabilidades

| Rol | Responsabilidad |
|---|---|
| **Tú** | Sanitizar datos antes de indexar, usar checklist |
| **Manager del área** | Aprobar clasificación Ámbar, supervisar acceso |
| **IT/Security** | Revisar políticas, auditoría semestral, escaladas |
| **Legal** | Revisar si aplica GDPR, HIPAA u otra normativa |

---

## Referencias y Aprobaciones

| Documento | Versión | Aprobado por | Fecha |
|---|---|---|---|
| Esta política | 1.0 | [Pendiente: IT/Security] | — |

**Próxima revisión:** Enero 2026 o post-Semana 12 si hay incidentes

---

**Versión 1.0 | Octubre 2025**  
**Estado:** Borrador para aprobación IT/Security  
**Próximo paso:** Compartir con IT/Legal, iterar con feedback, firmar aprobación