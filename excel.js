// ── EXCEL IMPORT ENGINE ──
// Reads .xlsx / .xls and maps columns to store data
// Expected columns: 門市名稱, 區域, 今日營收, 週日PSD, 週一PSD, 週二PSD, 週三PSD, 週四PSD, 週五PSD, 週六PSD

function initExcelImport(dropZoneId, fileInputId, onSuccess) {
  const zone = document.getElementById(dropZoneId);
  const input = document.getElementById(fileInputId);
  if (!zone || !input) return;

  zone.addEventListener('click', () => input.click());

  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) processExcel(file, onSuccess);
  });

  input.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) processExcel(file, onSuccess);
    input.value = '';
  });
}

function processExcel(file, onSuccess) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const wb = XLSX.read(e.target.result, { type: 'binary' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, { defval: '' });

      if (!rows.length) { showToast('⚠️ Excel 沒有資料，請確認格式'); return; }

      const REQUIRED = ['門市名稱', '區域', '今日營收'];
      const headers = Object.keys(rows[0]);
      const missing = REQUIRED.filter(r => !headers.includes(r));
      if (missing.length) {
        showToast(`⚠️ 缺少欄位：${missing.join('、')}`, 4000);
        showFormatHelp();
        return;
      }

      const DOW_COLS = ['週日PSD','週一PSD','週二PSD','週三PSD','週四PSD','週五PSD','週六PSD'];
      const stores = rows.map((r, i) => {
        const psd = {};
        DOW_COLS.forEach((col, d) => {
          psd[d] = parseInt(r[col]) || 0;
        });
        // Fallback: if no PSD cols, use today's revenue as base
        const hasPSD = DOW_COLS.some(c => headers.includes(c));
        if (!hasPSD) {
          const existing = getStores();
          const match = existing.find(s => s.name === String(r['門市名稱']).trim());
          if (match) { Object.assign(psd, match.psd); }
          else { for (let d = 0; d < 7; d++) psd[d] = parseInt(r['今日營收']) || 0; }
        }
        return {
          id: i + 1,
          name: String(r['門市名稱']).trim(),
          area: String(r['區域']).trim(),
          today: parseInt(r['今日營收']) || 0,
          psd,
        };
      }).filter(s => s.name && s.today > 0);

      if (!stores.length) { showToast('⚠️ 沒有有效資料列'); return; }

      saveStores(stores);
      showToast(`✓ 成功匯入 ${stores.length} 間門市資料`);
      if (typeof onSuccess === 'function') onSuccess(stores);
    } catch (err) {
      console.error(err);
      showToast('⚠️ 讀取失敗，請確認是有效的 Excel 檔案', 4000);
    }
  };
  reader.readAsBinaryString(file);
}

function showFormatHelp() {
  const el = document.getElementById('formatHelp');
  if (el) el.style.display = 'block';
}

// ── EXPORT TEMPLATE ──
function exportTemplate() {
  const headers = ['門市名稱','區域','今日營收','週日PSD','週一PSD','週二PSD','週三PSD','週四PSD','週五PSD','週六PSD'];
  const sample = [
    ['台北信義店','北部',8420,7100,7800,7650,7900,8100,10200,10800],
    ['台北西門店','北部',5100,5200,7100,6900,7000,7300,9100,9600],
    ['台中逢甲店','中部',7980,6900,7500,7300,7600,7700,9600,10100],
  ];
  const ws = XLSX.utils.aoa_to_sheet([headers, ...sample]);
  ws['!cols'] = headers.map(() => ({ wch: 14 }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, '門市業績');
  XLSX.writeFile(wb, 'UG_業績匯入範本.xlsx');
  showToast('✓ 範本已下載');
}
