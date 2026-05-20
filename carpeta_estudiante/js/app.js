let currentReport = null;

function collectIssues(validatedRows, source) {
  const issues = [];
  validatedRows.forEach(row => {
    row.issues.forEach(issue => {
      issues.push({
        source,
        rowNumber: row.rowNumber,
        type: issue.type,
        message: issue.message
      });
    });
  });
  return issues;
}

async function analyzeData() {
  try {
    Swal.fire({
      title: 'Analizando archivos...',
      text: 'Leyendo CSV, JSON y validando integridad.',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    const data = await DataService.loadAllData();
    const productionRows = Validators.validateProductionRows(data.produccion);
    const inventoryRows = Validators.validateInventory(data.inventario);
    const summary = Validators.createSummary(productionRows, inventoryRows);
    const issues = [
      ...collectIssues(productionRows, 'CSV producción'),
      ...collectIssues(inventoryRows, 'JSON inventario')
    ];

    currentReport = {
      generatedAt: new Date().toISOString(),
      summary,
      issues,
      productionRows,
      inventoryRows
    };

    StorageService.saveReport(currentReport);
    UI.renderAll(currentReport);

    Swal.fire({
      icon: summary.errors > 0 ? 'warning' : 'success',
      title: 'Análisis finalizado',
      text: `Se analizaron ${summary.total} registros. Errores: ${summary.errors}. Advertencias: ${summary.warnings}.`
    });
  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Error al analizar',
      text: error.message
    });
  }
}

function requireReport() {
  if (!currentReport) {
    currentReport = StorageService.getReport();
  }

  if (!currentReport) {
    Swal.fire({
      icon: 'info',
      title: 'Primero analiza los datos',
      text: 'Presiona el botón Analizar datos antes de exportar reportes.'
    });
    return null;
  }

  return currentReport;
}

document.getElementById('btnAnalizar').addEventListener('click', analyzeData);
document.getElementById('btnExportarTXT').addEventListener('click', () => {
  const report = requireReport();
  if (report) Reports.exportTxt(report);
});
document.getElementById('btnExportarJSON').addEventListener('click', () => {
  const report = requireReport();
  if (report) Reports.exportJson(report);
});
document.getElementById('btnExportarPDF').addEventListener('click', () => {
  const report = requireReport();
  if (report) Reports.exportPdf(report);
});
