const fs = require('fs');
const path = require('path');

const required = [
  'index.html',
  'css/styles.css',
  'js/app.js',
  'js/dataService.js',
  'js/validators.js',
  'js/reports.js',
  'js/storage.js',
  'js/ui.js',
  'data/produccion_base.csv',
  'data/datos_con_errores.csv',
  'data/inventario_base.json',
  'vendor/papaparse.min.js',
  'vendor/chart.umd.js',
  'vendor/sweetalert2.all.min.js',
  'vendor/jspdf.umd.min.js',
  'vendor/fontawesome/css/all.min.css'
];

let missing = [];
for (const file of required) {
  if (!fs.existsSync(path.join(process.cwd(), file))) {
    missing.push(file);
  }
}

console.log('Revisión de archivos del proyecto');
console.log('--------------------------------');
if (missing.length) {
  console.log('Archivos faltantes:');
  missing.forEach(file => console.log(`- ${file}`));
  console.log('\nSugerencia: ejecuta npm install y luego npm run setup:libs.');
} else {
  console.log('Todos los archivos esenciales existen.');
}

const jsFiles = ['js/validators.js', 'js/reports.js'];
let todos = [];
for (const file of jsFiles) {
  const content = fs.readFileSync(path.join(process.cwd(), file), 'utf8');
  if (content.includes('TODO-ARTEFACTO')) {
    todos.push(file);
  }
}

if (todos.length) {
  console.log('\nPendientes encontrados:');
  todos.forEach(file => console.log(`- ${file}`));
  console.log('Busca TODO-ARTEFACTO en VS Code para completar la actividad.');
} else {
  console.log('\nNo se encontraron TODO-ARTEFACTO pendientes.');
}
