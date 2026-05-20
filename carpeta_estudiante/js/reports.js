const Reports = (() => {
  function buildPlainTextReport(report) {
    const lines = [];
    lines.push('REPORTE DE INTEGRIDAD - AGRODATA INTEGRIDAD PRO');
    lines.push('=================================================');
    lines.push(`Fecha de generación: ${new Date().toLocaleString()}`);
    lines.push('');
    lines.push(`Total de registros analizados: ${report.summary.total}`);
    lines.push(`Registros válidos: ${report.summary.valid}`);
    lines.push(`Advertencias: ${report.summary.warnings}`);
    lines.push(`Errores: ${report.summary.errors}`);
    lines.push(`Porcentaje de integridad: ${report.summary.integrityRate}%`);
    lines.push('');
    lines.push('PROBLEMAS DETECTADOS:');

    report.issues.forEach((issue, index) => {
      lines.push(`${index + 1}. [${issue.type.toUpperCase()}] ${issue.source} fila ${issue.rowNumber}: ${issue.message}`);
    });

    return lines.join('\n');
  }

  function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportTxt(report) {
    downloadFile('reporte_integridad.txt', buildPlainTextReport(report), 'text/plain;charset=utf-8');
  }

  function exportJson(report) {
    downloadFile('reporte_integridad.json', JSON.stringify(report, null, 2), 'application/json;charset=utf-8');
  }

  function exportPdf(report) {
    // TODO-ARTEFACTO-03:
    // Completa la exportación PDF usando jsPDF.
    // Pista:
    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();
    // doc.text('Reporte de integridad', 14, 20);
    // doc.save('reporte_integridad.pdf');
    Swal.fire({
      icon: 'warning',
      title: 'PDF pendiente',
      text: 'Debes completar la función exportPdf en js/reports.js.'
    });
  }

  return { buildPlainTextReport, exportTxt, exportJson, exportPdf };
})();
