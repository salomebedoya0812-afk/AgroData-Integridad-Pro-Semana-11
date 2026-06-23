# README breve de entrega - AgroData Integridad Pro

## 1. Nombre del estudiante

SALOMÉ BEDOYA ARENAS

## 2. Descripción del artefacto

La web AgroData Integridad Pro permite analizar archivos CSV y JSON relacionados con producción e inventario agrícola, detectando errores de integridad como datos vacíos, duplicados, valores negativos y registros incorrectos. También genera reportes visuales y exportables.

## 3. Tecnologías y librerías utilizadas

| Tecnología o librería | Función                 |
| --------------------- | ----------------------- |
| HTML                  | Estructura de la página |
| CSS                   | Diseño visual           |
| JavaScript            | Lógica del sistema      |
| PapaParse             | Lectura de archivos CSV |
| Chart.js              | Gráficos de integridad  |
| SweetAlert2           | Mensajes interactivos   |
| Font Awesome          | Íconos                  |
| jsPDF                 | Exportación de PDF      |


## 4. Cómo ejecutar el proyecto

Escribe los comandos utilizados.

```bash
npm install
npm run setup:libs
npm run check
npm run start
```

## 5. Errores encontrados

| Error             | Archivo             | Solución aplicada         |
| ----------------- | ------------------- | ------------------------- |
| Cantidad negativa | validators.js / CSV | Validación de error       |
| Duplicados        | CSV                 | Uso de Set para detección |
| Datos vacíos      | CSV/JSON            | Validación de campos      |


## 6. Conclusión

Se fortalecieron habilidades en manejo de datos estructurados, validación de información y generación de reportes. Se comprendió la importancia de la integridad de datos en sistemas reales.
