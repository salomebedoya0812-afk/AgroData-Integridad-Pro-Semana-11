const Validators = (() => {
  function empty(value) {
    return value === undefined || value === null || String(value).trim() === '';
  }

  function statusFromIssues(issues) {
    if (issues.some(issue => issue.type === 'error')) return 'error';
    if (issues.some(issue => issue.type === 'warning')) return 'warning';
    return 'ok';
  }

  function validateProductionRows(rows) {
    const seen = new Set();

    return rows.map((row, index) => {
      const issues = [];
      const rowNumber = index + 1;
      const quantity = Number(row.cantidad);

      if (empty(row.fecha)) issues.push({ type: 'error', message: 'La fecha está vacía.' });
      if (empty(row.producto)) issues.push({ type: 'error', message: 'El producto está vacío.' });
      if (empty(row.cantidad)) issues.push({ type: 'error', message: 'La cantidad está vacía.' });
      if (!empty(row.cantidad) && Number.isNaN(quantity)) issues.push({ type: 'error', message: 'La cantidad no es numérica.' });
      if (empty(row.unidad)) issues.push({ type: 'warning', message: 'La unidad está vacía.' });
      if (empty(row.responsable)) issues.push({ type: 'warning', message: 'El responsable está vacío.' });

      if (!Number.isNaN(quantity) && quantity < 0) {
        issues.push({
          type: 'error',
          message: 'La cantidad es negativa.'
        });
      }

      const key = `${row.fecha}-${row.producto}-${row.responsable}`;

      if (seen.has(key)) {
        issues.push({
          type: 'warning',
          message: 'Registro duplicado.'
        });
      } else {
        seen.add(key);
      }

      if (!Number.isNaN(quantity) && quantity === 0) {
        issues.push({ type: 'warning', message: 'La cantidad es cero; revise si es intencional.' });
      }

      if (!Number.isNaN(quantity) && quantity > 10000) {
        issues.push({ type: 'warning', message: 'Cantidad inusualmente alta.' });
      }

      return {
        ...row,
        rowNumber,
        quantity,
        issues,
        status: statusFromIssues(issues)
      };
    });
  }

  function validateInventory(items) {
    return items.map((item, index) => {
      const issues = [];
      const quantity = Number(item.cantidad);

      if (empty(item.id)) issues.push({ type: 'error', message: 'ID vacío.' });
      if (empty(item.producto)) issues.push({ type: 'error', message: 'Producto vacío.' });
      if (empty(item.cantidad)) issues.push({ type: 'error', message: 'Cantidad vacía.' });
      if (!empty(item.cantidad) && Number.isNaN(quantity)) issues.push({ type: 'error', message: 'Cantidad no numérica.' });
      if (!Number.isNaN(quantity) && quantity < 0) issues.push({ type: 'error', message: 'Cantidad negativa.' });
      if (empty(item.unidad)) issues.push({ type: 'warning', message: 'Unidad vacía.' });
      if (!['disponible', 'bajo', 'agotado', 'revision'].includes(String(item.estado).toLowerCase())) {
        issues.push({ type: 'warning', message: 'Estado no reconocido.' });
      }

      return {
        ...item,
        rowNumber: index + 1,
        quantity,
        issues,
        status: statusFromIssues(issues)
      };
    });
  }

  function createSummary(productionRows, inventoryRows) {
    const all = [...productionRows, ...inventoryRows];
    const total = all.length;
    const errors = all.filter(row => row.status === 'error').length;
    const warnings = all.filter(row => row.status === 'warning').length;
    const valid = all.filter(row => row.status === 'ok').length;

    return {
      total,
      valid,
      warnings,
      errors,
      integrityRate: total === 0 ? 0 : Math.round((valid / total) * 100)
    };
  }

  return { validateProductionRows, validateInventory, createSummary };
})();
