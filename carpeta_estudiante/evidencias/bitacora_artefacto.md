# Bitácora del artefacto - Semana 11

## Nombre del estudiante


## 1. Configuración del entorno

| Acción                      | Resultado obtenido                         | Captura o evidencia |
| --------------------------- | ------------------------------------------ | ------------------- |
| Abrí el proyecto en VS Code | Proyecto cargado correctamente             | OK                  |
| Ejecuté npm install         | Instalación de dependencias exitosa        | OK                  |
| Ejecuté npm run setup:libs  | Se creó carpeta vendor con librerías       | OK                  |
| Ejecuté npm run check       | Se detectaron o corrigieron TODO-ARTEFACTO | OK                  |
| Ejecuté npm run start       | La web funciona en localhost               | OK                  |


## 2. Archivos revisados

| Archivo                    | Qué contiene                    | Problema encontrado                        |
| -------------------------- | ------------------------------- | ------------------------------------------ |
| data/produccion_base.csv   | Datos de producción agrícola    | Algunos valores vacíos y registros válidos |
| data/datos_con_errores.csv | Datos con errores intencionales | Negativos, duplicados, campos vacíos       |
| data/inventario_base.json  | Inventario de productos         | Cantidad negativa y datos inválidos        |
| js/validators.js           | Validaciones de integridad      | Se completaron reglas TODO                 |
| js/reports.js              | Exportación de reportes         | Se completó exportación PDF                |


## 3. Problemas de integridad detectados

| Nº | Archivo | Registro o línea | Problema           | Corrección propuesta |
| -- | ------- | ---------------- | ------------------ | -------------------- |
| 1  | CSV     | 2026-05-25       | Cantidad negativa  | Se valida como error |
| 2  | CSV     | 2026-05-26       | No numérico        | Se corrige o elimina |
| 3  | CSV     | 2026-05-28       | Registro duplicado | Se elimina duplicado |


## 4. Mejoras aplicadas

| Archivo modificado | Cambio realizado                     | Por qué mejora el sistema          |
| ------------------ | ------------------------------------ | ---------------------------------- |
| js/validators.js   | Validación de negativos y duplicados | Detecta errores de integridad real |
| js/reports.js      | Exportación PDF completa             | Permite reporte profesional        |
| data archivos      | Corrección de valores críticos       | Mejora calidad de datos            |


## 5. Conclusión

Se aprendió a trabajar con archivos CSV y JSON, validar datos de entrada, detectar errores de integridad como valores vacíos, negativos y duplicados. Además, se implementó un sistema de reporte que permite visualizar la calidad de los datos de forma gráfica y exportable.
