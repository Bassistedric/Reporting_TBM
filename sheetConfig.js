// ----------------------------
// Sources CSV / IDs
// ----------------------------
const SHEET_BASE_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNJqvjeu_Hox7I64HhX3y4j1SBWHswa6QO1mPwHEt2siXMP609WT__DnuGK-0Brlfq5D1a2R_iyL3g/pub?output=csv";

const METIER_TO_GID = {
  Elec: "0",
  HVAC_REF: "2005844218"
};

const TBM_GID = "2013584163";

// Attestation TBM (AFFECTATIONS_SEMAINE dans le classeur Equipes-TBM)
const AFFECTATIONS_GID = "";

// Base/GID de la feuille "tbm" du classeur LMRA_data_base
// Si LMRA_BASE_URL n'est pas renseignée, SHEET_BASE_URL sera utilisée.
const LMRA_BASE_URL = "";
const LMRA_TBM_GID = "";

// Suivi PM (SUIVI_PMS) - CSV publié (LMRA_data_base)
const SUIVI_PMS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuTHHF0EDmhAxj4IbH_eqcsg8rtMUoJpo8gz5I2WAS3LhscoM-zhGH9zLVfJ00YKJsw3YiDoyqF3sJ/pub?gid=1420233608&single=true&output=csv";

// URL Apps Script LMRA/TBM (app existante)
const COLLECT_URL =
  "https://script.google.com/macros/s/AKfycbw53EiERifnozNg9ybNfbn_Ofm9NrFquashw_mbYoWyqtQROS6xXXzwVT2UQ4XxcJYK/exec";

// URL Apps Script dédiée à l'application Attestation (web app séparée)
const ATTESTATION_COLLECT_URL = "";

// Expose constants globally
if (typeof window !== "undefined") {
  Object.assign(window, {
    SHEET_BASE_URL,
    METIER_TO_GID,
    TBM_GID,
    AFFECTATIONS_GID,
    LMRA_BASE_URL,
    LMRA_TBM_GID,
    SUIVI_PMS_CSV_URL,
    COLLECT_URL,
    ATTESTATION_COLLECT_URL
  });
}
