diff --git a/attestation/Code.gs b/attestation/Code.gs
new file mode 100644
index 0000000000000000000000000000000000000000..f9e98ca23ca35a8f8794ced4f7a10d454d720a86
--- /dev/null
+++ b/attestation/Code.gs
@@ -0,0 +1,36 @@
+const ABSENCES_SHEET_NAME = 'ABSENCES';
+
+function doPost(e) {
+  const payload = JSON.parse(e.postData.contents || '{}');
+  const data = payload.data || {};
+
+  const headers = ['timestamp', 'week', 'metier', 'pm', 'chantier', 'ce', 'ouvrier', 'user', 'flag'];
+  const sh = getSheetByNameOrCreate(ABSENCES_SHEET_NAME, headers);
+  sh.appendRow([
+    new Date().toISOString(),
+    data.week || '',
+    data.metier || '',
+    data.pm || '',
+    data.chantier || '',
+    data.ce || '',
+    data.ouvrier || '',
+    data.user || '',
+    data.flag || 'Absent+15js'
+  ]);
+
+  return respond({ ok: true, sheet: ABSENCES_SHEET_NAME, row: sh.getLastRow() });
+}
+
+function getSheetByNameOrCreate(name, headers) {
+  const ss = SpreadsheetApp.getActive();
+  let sh = ss.getSheetByName(name);
+  if (!sh) {
+    sh = ss.insertSheet(name);
+    sh.appendRow(headers);
+  }
+  return sh;
+}
+
+function respond(obj) {
+  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
+}
export const APP_NAME = "tbPM";

if (typeof window !== 'undefined') {
  Object.assign(window, { APP_NAME, SHEET_BASE_URL, METIER_TO_GID, TBM_GID, SUIVI_PMS_CSV_URL, COLLECT_URL, ATTESTATION_COLLECT_URL });
}

