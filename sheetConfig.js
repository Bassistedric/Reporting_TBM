sheetConfig.js
diff --git a/sheetConfig.js b/sheetConfig.js
index 4b9557cceec4bc0822bab387f434efec171def32..e08116aa4ce2a995ef801b69fe70374c8d716fad 100644
--- a/sheetConfig.js
+++ b/sheetConfig.js
@@ -1,13 +1,36 @@
 export const SHEET_BASE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNJqvjeu_Hox7I64HhX3y4j1SBWHswa6QO1mPwHEt2siXMP609WT__DnuGK-0Brlfq5D1a2R_iyL3g/pub?output=csv";
 
 export const METIER_TO_GID = {
   Elec: "0",
   HVAC_REF: "2005844218"
 };
 
 export const TBM_GID = "2013584163";
 
+// Attestation TBM (AFFECTATIONS_SEMAINE dans le classeur Equipes-TBM)
+export const AFFECTATIONS_GID = "";
+
+// Base/GID de la feuille "tbm" du classeur LMRA_data_base
+// Si LMRA_BASE_URL n'est pas renseignée, SHEET_BASE_URL sera utilisée.
+export const LMRA_BASE_URL = "";
+export const LMRA_TBM_GID = "";

// Suivi PM (SUIVI_PMS) - CSV publié (LMRA_data_base)
export const SUIVI_PMS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuTHHF0EDmhAxj4IbH_eqcsg8rtMUoJpo8gz5I2WAS3LhscoM-zhGH9zLVfJ00YKJsw3YiDoyqF3sJ/pub?gid=1420233608&single=true&output=csv";

+
+// URL Apps Script LMRA/TBM (app existante)
+export const COLLECT_URL = "https://script.google.com/macros/s/AKfycbw53EiERifnozNg9ybNfbn_Ofm9NrFquashw_mbYoWyqtQROS6xXXzwVT2UQ4XxcJYK/exec";
+
+// URL Apps Script dédiée à l'application Attestation (web app séparée)
+export const ATTESTATION_COLLECT_URL = "https://script.google.com/macros/s/AKfycbyVjoTjAttwzjdQqUp2a1Upvvl9A1WEvp0dse47Cp_gt6mVOYDc1P_2u372poEZiu_H/exec";
+
 // Expose constants globally for non-module scripts
if (typeof window !== 'undefined') {
  Object.assign(window, {
    SHEET_BASE_URL,
    METIER_TO_GID,
    TBM_GID,
    SUIVI_PMS_CSV_URL,
    AFFECTATIONS_GID,
    LMRA_BASE_URL,
    LMRA_TBM_GID,
    COLLECT_URL,
    ATTESTATION_COLLECT_URL
  });
}

