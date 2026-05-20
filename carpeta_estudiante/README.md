# AgroData Integridad Pro - Artefacto del entorno

## Semana 11

**Tema:** Manejo de archivos y datos simples; integridad y organización de información.  
**Actividad:** Artefacto del entorno: configuración, script o mini-solución.  
**Evidencia:** Archivos del proyecto + README breve.

---

## 1. Qué vas a construir

Vas a trabajar con una web llamada **AgroData Integridad Pro**, una mini-solución que permite revisar archivos de datos rurales en formatos `.csv` y `.json`, detectar problemas de integridad, visualizar resultados en gráficos y generar reportes.

El sistema está casi listo, pero tiene partes que debes configurar, ejecutar y mejorar desde VS Code.

---

## 2. Qué aprenderás

Al finalizar, deberás ser capaz de:

- Instalar librerías necesarias para una web profesional.
- Reconocer la función de archivos `.html`, `.css`, `.js`, `.csv`, `.json`, `.md` y `.txt`.
- Analizar datos simples y detectar errores de integridad.
- Diferenciar registros válidos, advertencias y errores.
- Generar reportes en texto, JSON y PDF.
- Documentar el funcionamiento de una mini-solución.

---

## 3. Librerías utilizadas

Este proyecto usa cinco librerías externas instaladas con `npm`:

| Librería | Función dentro del proyecto |
|---|---|
| PapaParse | Leer y convertir archivos CSV en datos procesables |
| Chart.js | Crear gráficos sobre la calidad de los datos |
| SweetAlert2 | Mostrar mensajes profesionales de error, éxito y advertencia |
| Font Awesome | Agregar íconos visuales a la interfaz |
| jsPDF | Exportar reportes en PDF |

---

## 4. Primer paso: abrir el proyecto en VS Code

Abre en VS Code esta carpeta:

```text
carpeta_estudiante/
```

No abras solamente un archivo. Debes abrir la carpeta completa para que las rutas funcionen correctamente.

---

## 5. Instalar dependencias

Abre la terminal integrada de VS Code y ejecuta:

```bash
npm install
```

Luego ejecuta:

```bash
npm run setup:libs
```

Esto creará una carpeta llamada:

```text
vendor/
```

Ahí se copian las librerías que la página necesita para funcionar correctamente.

---

## 6. Revisar el estado del proyecto

Ejecuta:

```bash
npm run check
```

Este comando revisa si existen archivos importantes, librerías y marcas `TODO-ARTEFACTO` pendientes.

---

## 7. Ejecutar la web

Ejecuta:

```bash
npm run start
```

Luego abre el enlace que aparece en la terminal, normalmente:

```text
http://127.0.0.1:5173
```

---

## 8. Qué debes revisar en la web

Cuando la web abra correctamente, revisa:

1. Que cargue el archivo CSV.
2. Que cargue el archivo JSON.
3. Que aparezca una tabla de registros.
4. Que se muestren tarjetas de resumen.
5. Que se genere un gráfico.
6. Que aparezcan advertencias o errores de integridad.
7. Que funcionen los botones de exportación.

---

## 9. Errores intencionales que debes encontrar

El proyecto trae errores y tareas pendientes. Debes buscarlos y corregirlos.

Busca en VS Code:

```text
TODO-ARTEFACTO
```

Debes revisar principalmente estos archivos:

```text
js/validators.js
js/reports.js
data/produccion_base.csv
data/inventario_base.json
evidencias/README_BREVE_ENTREGA.md
```

---

## 10. Tareas mínimas del estudiante

Debes completar como mínimo:

1. Ejecutar correctamente el proyecto con las librerías instaladas.
2. Detectar problemas de integridad en CSV y JSON.
3. Completar la validación de cantidad negativa en `js/validators.js`.
4. Completar la detección de registros duplicados en `js/validators.js`.
5. Completar o mejorar la exportación PDF en `js/reports.js`.
6. Corregir mínimo tres datos problemáticos en los archivos de la carpeta `data/`.
7. Completar la bitácora y el README breve de entrega.

---

## 11. Archivos de evidencia

Completa estos archivos:

```text
evidencias/bitacora_artefacto.md
evidencias/checklist_integridad.md
evidencias/README_BREVE_ENTREGA.md
```

---

## 12. Entrega final

Debes entregar la carpeta completa del proyecto corregido, incluyendo:

- Código modificado.
- Datos corregidos.
- Evidencias diligenciadas.
- README breve de entrega.

---

## 13. Recomendación

No corrijas todo al mismo tiempo. Trabaja en este orden:

1. Instala librerías.
2. Ejecuta la página.
3. Revisa consola del navegador.
4. Busca los `TODO-ARTEFACTO`.
5. Corrige una función a la vez.
6. Vuelve a ejecutar.
7. Documenta la evidencia.
