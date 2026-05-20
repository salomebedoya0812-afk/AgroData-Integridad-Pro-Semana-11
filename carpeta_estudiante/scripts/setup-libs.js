const fs = require('fs');
const path = require('path');

const root = process.cwd();
const vendor = path.join(root, 'vendor');
const faDir = path.join(vendor, 'fontawesome');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(source, target) {
  if (!fs.existsSync(source)) {
    console.error(`No se encontró: ${source}`);
    process.exitCode = 1;
    return;
  }
  ensureDir(path.dirname(target));
  fs.copyFileSync(source, target);
  console.log(`Copiado: ${target}`);
}

function copyDir(source, target) {
  if (!fs.existsSync(source)) {
    console.error(`No se encontró: ${source}`);
    process.exitCode = 1;
    return;
  }
  ensureDir(target);
  fs.cpSync(source, target, { recursive: true });
  console.log(`Copiada carpeta: ${target}`);
}

ensureDir(vendor);

copyFile(path.join(root, 'node_modules', 'papaparse', 'papaparse.min.js'), path.join(vendor, 'papaparse.min.js'));
copyFile(path.join(root, 'node_modules', 'chart.js', 'dist', 'chart.umd.js'), path.join(vendor, 'chart.umd.js'));
copyFile(path.join(root, 'node_modules', 'sweetalert2', 'dist', 'sweetalert2.all.min.js'), path.join(vendor, 'sweetalert2.all.min.js'));
copyFile(path.join(root, 'node_modules', 'jspdf', 'dist', 'jspdf.umd.min.js'), path.join(vendor, 'jspdf.umd.min.js'));
copyDir(path.join(root, 'node_modules', '@fortawesome', 'fontawesome-free', 'css'), path.join(faDir, 'css'));
copyDir(path.join(root, 'node_modules', '@fortawesome', 'fontawesome-free', 'webfonts'), path.join(faDir, 'webfonts'));

console.log('\nListo. Las librerías fueron copiadas a la carpeta vendor/.');
