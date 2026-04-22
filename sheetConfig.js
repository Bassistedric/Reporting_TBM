// ----------------------------
// Sources CSV / URLs
// ----------------------------

// Ancien export consolidé utilisé en fallback
const SUIVI_PMS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQuTHHF0EDmhAxj4IbH_eqcsg8rtMUoJpo8gz5I2WAS3LhscoM-zhGH9zLVfJ00YKJsw3YiDoyqF3sJ/pub?gid=1420233608&single=true&output=csv";

// Source Equipes-TBM déjà utilisée côté QHSE
const EQUIPES_SHEET_BASE_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNJqvjeu_Hox7I64HhX3y4j1SBWHswa6QO1mPwHEt2siXMP609WT__DnuGK-0Brlfq5D1a2R_iyL3g/pub?output=csv";
const EQUIPES_AFFECTATIONS_GID = "496527492";

// Source brute TBM (LMRA_data_base > feuille tbm)
// À privilégier via un endpoint consolidé ou un export dédié
const TBM_RAW_SHEET_ID = "14wzgqFLCUenM4oXwYQyx3Z3ZwniW3-BWp7wYiZswyrE";
const TBM_RAW_GID = "1773113526";
const TBM_RAW_CSV_URL =
  `https://docs.google.com/spreadsheets/d/${TBM_RAW_SHEET_ID}/export?format=csv&gid=${TBM_RAW_GID}`;

// Source dédiée tbPM
const TBPM_DATA_URL = "https://script.google.com/macros/s/AKfycbw4yJAf5PJH8G_TRmHAUaTy9yavXrIz_wgtT8C6O4PaUOt5vOhW7qzcSyARUS01EADh7Q/exec";

// URL Apps Script dédiée à l'application Attestation
const ATTESTATION_COLLECT_URL =
  "https://script.google.com/macros/s/AKfycbyVjoTjAttwzjdQqUp2a1Upvvl9A1WEvp0dse47Cp_gt6mVOYDc1P_2u372poEZiu_H/exec";

if (typeof window !== "undefined") {
  Object.assign(window, {
    SUIVI_PMS_CSV_URL,
    EQUIPES_SHEET_BASE_URL,
    EQUIPES_AFFECTATIONS_GID,
    TBM_RAW_SHEET_ID,
    TBM_RAW_GID,
    TBM_RAW_CSV_URL,
    TBPM_DATA_URL,
    ATTESTATION_COLLECT_URL
  });
}
