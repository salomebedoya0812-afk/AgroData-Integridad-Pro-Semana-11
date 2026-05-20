const DataService = (() => {
  async function loadText(path) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`No fue posible leer el archivo: ${path}`);
    }
    return response.text();
  }

  async function loadJson(path) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`No fue posible leer el JSON: ${path}`);
    }
    return response.json();
  }

  async function loadCsv(path) {
    const csv = await loadText(path);
    const parsed = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      transformHeader: header => header.trim(),
      transform: value => typeof value === 'string' ? value.trim() : value
    });

    if (parsed.errors.length > 0) {
      console.warn('Advertencias al leer CSV:', parsed.errors);
    }

    return parsed.data;
  }

  async function loadAllData() {
    const produccionBase = await loadCsv('data/produccion_base.csv');
    const produccionConErrores = await loadCsv('data/datos_con_errores.csv');
    const inventario = await loadJson('data/inventario_base.json');

    return {
      produccion: [...produccionBase, ...produccionConErrores],
      inventario
    };
  }

  return { loadAllData, loadCsv, loadJson };
})();
