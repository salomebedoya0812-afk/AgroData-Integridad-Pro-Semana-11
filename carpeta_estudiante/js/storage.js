const StorageService = (() => {
  const KEY = 'agrodata_integridad_reporte';

  function saveReport(report) {
    localStorage.setItem(KEY, JSON.stringify(report));
  }

  function getReport() {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  }

  return { saveReport, getReport };
})();
