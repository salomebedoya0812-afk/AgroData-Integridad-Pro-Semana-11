const UI = (() => {
  let chart = null;

  function badge(status) {
    if (status === 'ok') return '<span class="badge ok"><i class="fa-solid fa-check"></i> Válido</span>';
    if (status === 'warning') return '<span class="badge warning"><i class="fa-solid fa-triangle-exclamation"></i> Advertencia</span>';
    return '<span class="badge danger"><i class="fa-solid fa-xmark"></i> Error</span>';
  }

  function rowClass(status) {
    if (status === 'ok') return 'row-ok';
    if (status === 'warning') return 'row-warning';
    return 'row-danger';
  }

  function issueText(issues) {
    if (!issues.length) return 'Sin problemas detectados.';
    return issues.map(issue => issue.message).join(' | ');
  }

  function renderMetrics(summary) {
    document.getElementById('totalRegistros').textContent = summary.total;
    document.getElementById('registrosValidos').textContent = summary.valid;
    document.getElementById('advertencias').textContent = summary.warnings;
    document.getElementById('errores').textContent = summary.errors;
  }

  function renderProduction(rows) {
    const tbody = document.getElementById('tablaProduccion');
    tbody.innerHTML = rows.map(row => `
      <tr class="${rowClass(row.status)}">
        <td>${row.fecha || '-'}</td>
        <td>${row.producto || '-'}</td>
        <td>${row.cantidad || '-'}</td>
        <td>${row.unidad || '-'}</td>
        <td>${row.responsable || '-'}</td>
        <td>${badge(row.status)}<br><small>${issueText(row.issues)}</small></td>
      </tr>
    `).join('');
  }

  function renderInventory(rows) {
    const tbody = document.getElementById('tablaInventario');
    tbody.innerHTML = rows.map(row => `
      <tr class="${rowClass(row.status)}">
        <td>${row.id || '-'}</td>
        <td>${row.producto || '-'}</td>
        <td>${row.cantidad || '-'}</td>
        <td>${row.unidad || '-'}</td>
        <td>${row.estado || '-'}</td>
        <td>${badge(row.status)}<br><small>${issueText(row.issues)}</small></td>
      </tr>
    `).join('');
  }

  function renderDiagnosis(issues) {
    const list = document.getElementById('listaDiagnostico');
    if (!issues.length) {
      list.innerHTML = '<li>No se detectaron problemas de integridad.</li>';
      return;
    }

    list.innerHTML = issues.map(issue => `
      <li><strong>${issue.source}</strong> · fila ${issue.rowNumber}: ${issue.message}</li>
    `).join('');
  }

  function renderChart(summary) {
    const canvas = document.getElementById('graficoIntegridad');
    if (chart) chart.destroy();

    chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Válidos', 'Advertencias', 'Errores'],
        datasets: [{
          data: [summary.valid, summary.warnings, summary.errors],
          backgroundColor: ['#15803d', '#b45309', '#b91c1c']
        }]
      },
      options: {
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  function renderAll(report) {
    renderMetrics(report.summary);
    renderProduction(report.productionRows);
    renderInventory(report.inventoryRows);
    renderDiagnosis(report.issues);
    renderChart(report.summary);
  }

  return { renderAll };
})();
