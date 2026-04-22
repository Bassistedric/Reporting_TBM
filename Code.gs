const TBM_SHEET_NAME = 'tbm';
const CHANTIER_LABEL_ABSENT = 'Signalé absent';
const CHANTIER_COLOR_ABSENT = '#ff0000';

function doPost(e) {
  const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
  const data = payload.data || {};

  const sh = getSheetByName_(TBM_SHEET_NAME);
  const headerMap = getHeaderMap_(sh);

  const rowValues = buildRowValues_(headerMap, data);
  const rowIndex = sh.getLastRow() + 1;
  sh.getRange(rowIndex, 1, 1, rowValues.length).setValues([rowValues]);

  colorChantierCell_(sh, rowIndex, headerMap);

  return respond_({ ok: true, sheet: TBM_SHEET_NAME, row: rowIndex });
}

function getSheetByName_(name) {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName(name);
  if (!sh) throw new Error('Feuille introuvable: ' + name);
  return sh;
}

function getHeaderMap_(sheet) {
  const lastCol = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map((h) => String(h || '').trim().toLowerCase());
  const map = {};
  headers.forEach((h, i) => {
    if (h) map[h] = i;
  });
  return map;
}

function buildRowValues_(headerMap, data) {
  const lastIndex = Object.values(headerMap).length ? Math.max.apply(null, Object.values(headerMap)) : 0;
  const row = new Array(lastIndex + 1).fill('');

  const set = (headerName, value) => {
    const key = String(headerName || '').toLowerCase();
    if (typeof headerMap[key] === 'number') row[headerMap[key]] = value;
  };

  set('timestamp', new Date().toISOString());
  set('month', data.month || '');
  set('day', data.day || '');
  set('metier', data.metier || '');
  set('pm', data.pm || '');
  set('chantier', CHANTIER_LABEL_ABSENT);
  set('ce', data.ce || '');
  set('equipe', data.equipe || data.ce || '');
  set('ouvrier', data.ouvrier || '');
  set('user', data.user || data.pm || data.ce || '');
  set('flag', data.flag || 'Absent+15js');
  set('status', 'OK');

  return row;
}

function colorChantierCell_(sheet, rowIndex, headerMap) {
  const chantierColIndex = headerMap.chantier;
  if (typeof chantierColIndex !== 'number') return;
  sheet.getRange(rowIndex, chantierColIndex + 1).setFontColor(CHANTIER_COLOR_ABSENT);
}

function respond_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
