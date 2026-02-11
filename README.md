diff --git a/README.md b/README.md
index 152b604093a6d0219351010f97e5dd0dfb882055..7a0bccdd7a3571227dd1642f810fe7351a8fbd27 100644
--- a/README.md
+++ b/README.md
@@ -1,14 +1,49 @@
 # QHSE
 Safety ap by Cco
 
 ## Configuration
 
 Sheet information for the TBM page is stored in `sheetConfig.js`. Update the
 following constants in that file to change the data sources without touching the
 application logic:
 
 - `SHEET_BASE_URL`
 - `METIER_TO_GID`
 - `TBM_GID`
 
 After editing `sheetConfig.js`, reload `tbm.html` to use the new values.
+
+## Attestation TBM (app séparée pour contrôle PM)
+
+La page `attestation.html` est une application séparée de LMRA/TBM, dédiée au contrôle
+PM à partir des données:
+
+- `AFFECTATIONS_SEMAINE` (classeur Equipes-TBM)
+- `tbm` (classeur LMRA_data_base)
+
+### 1) Configurer les sources
+Dans `sheetConfig.js`, renseigner:
+
+- `AFFECTATIONS_GID`: GID de `AFFECTATIONS_SEMAINE`
+- `LMRA_BASE_URL`: URL CSV publiée du classeur LMRA_data_base
+- `LMRA_TBM_GID`: GID de la feuille `tbm`
+- `ATTESTATION_COLLECT_URL`: URL `/exec` d'une web app Apps Script **dédiée** à l'attestation
+
+### 2) Déployer une web app Apps Script séparée
+Créer un projet Apps Script séparé et y coller `attestation/Code.gs`.
+
+- Le script écrit uniquement dans une feuille `ABSENCES`
+- Structure des colonnes: `timestamp, week, metier, pm, chantier, ce, ouvrier, user, flag`
+- Aucun email n'est envoyé
+
+Déployer cette web app (accès selon votre besoin interne), puis copier l'URL `/exec`
+dans `ATTESTATION_COLLECT_URL`.
+
+### 3) Utilisation
+Ouvrir `attestation.html` puis:
+
+- Choisir en cascade: **Métier → Semaine → PM → Chantier → Chef d'équipe**
+- Vérifier les ouvriers (vert = présent en TBM, rouge = non trouvé)
+- Renseigner `Utilisateur`
+- Cliquer `Absent+15js` à côté d'un ouvrier pour envoyer directement la ligne
+  dans `ABSENCES`
