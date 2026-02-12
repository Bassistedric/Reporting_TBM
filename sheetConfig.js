// ----------------------------
// Sources CSV / URLs
// ----------------------------

// Suivi PM (SUIVI_PMS) - CSV publié (LMRA_data_base)
const SUIVI_PMS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuTHHF0EDmhAxj4IbH_eqcsg8rtMUoJpo8gz5I2WAS3LhscoM-zhGH9zLVfJ00YKJsw3YiDoyqF3sJ/pub?gid=1420233608&single=true&output=csv";

// URL Apps Script dédiée à l'application Attestation (web app séparée)
const ATTESTATION_COLLECT_URL =
  "https://script.google.com/macros/s/AKfycbyVjoTjAttwzjdQqUp2a1Upvvl9A1WEvp0dse47Cp_gt6mVOYDc1P_2u372poEZiu_H/exec";

// Expose constants globally (OBLIGATOIRE pour les pages .html)
if (typeof window !== "undefined") {
  Object.assign(window, {
    SUIVI_PMS_CSV_URL,
    ATTESTATION_COLLECT_URL
  });
}
