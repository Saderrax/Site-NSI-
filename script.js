/* ============================================================
   SÉANCE 3 — JavaScript : rendre la page interactive
   ============================================================
   Ce fichier contient les 3 exercices de l'Activité 1
   et la zone fil rouge pour l'Activité 2.

   Lis les commentaires et complète les zones ✏️
   ============================================================ */


/* ── UTILITAIRE — Année dans le footer ────────────────────────── */
const annee = document.getElementById("annee");
if (annee) annee.textContent = new Date().getFullYear();


/* ============================================================
   EXERCICE A — Bouton qui change la couleur de fond
   ============================================================
   Objectif : au clic sur #btn-couleur, alterner la couleur
   de fond du body entre une couleur claire et une couleur sombre.
   ============================================================ */

const btnCouleur = document.getElementById("btn-couleur");

// Cette variable mémorise l'état actuel (clair ou sombre)
let estSombre = false;

btnCouleur.addEventListener("click", function() {

  if (estSombre) {
    // ✏️ Remettre le fond clair
    // document.body.style.backgroundColor = "...";

  } else {
    // ✏️ Mettre le fond sombre
    // document.body.style.backgroundColor = "...";
  }

  // Inverser l'état pour le prochain clic
  estSombre = !estSombre;

});


/* ============================================================
   EXERCICE B — Compteur
   ============================================================
   Objectif :
     - Le bouton #btn-plus incrémente le compteur
     - Le bouton #btn-moins décrémente le compteur
     - Le compteur ne peut pas descendre sous 0
   ============================================================ */

const btnPlus  = document.getElementById("btn-plus");
const btnMoins = document.getElementById("btn-moins");
const affCompteur = document.getElementById("compteur");

// Variable qui stocke la valeur actuelle du compteur
let valeurCompteur = 0;

// ✏️ Ajouter le listener pour le bouton "+"
btnPlus.addEventListener("click", function() {
  // ✏️ Incrémenter valeurCompteur et mettre à jour affCompteur.textContent

});

// ✏️ Ajouter le listener pour le bouton "−"
btnMoins.addEventListener("click", function() {
  // ✏️ Décrémenter valeurCompteur SEULEMENT si valeurCompteur > 0
  // ✏️ Mettre à jour affCompteur.textContent

});


/* ============================================================
   EXERCICE C — Champ texte interactif
   ============================================================
   Objectif : au clic sur #btn-valider, afficher dans #affichage
   le texte saisi dans #saisie.
   ============================================================ */

const inputSaisie  = document.getElementById("saisie");
const btnValider   = document.getElementById("btn-valider");
const affTexte     = document.getElementById("affichage");

btnValider.addEventListener("click", function() {

  // Récupérer le texte saisi
  const texte = inputSaisie.value;

  // ✏️ Afficher le texte dans affTexte
  // Piste : affTexte.textContent = "Tu as écrit : " + texte;

  // ✏️ Bonus : vider le champ après validation
  // inputSaisie.value = "";

});


/* ============================================================
   ACTIVITÉ 2 — FIL ROUGE
   ============================================================
   ✏️ Colle ici le JavaScript généré par l'IA pour ta
   fonctionnalité interactive.

   Avant de coller, vérifie :
     [ ] Chaque getElementById correspond à un id qui existe dans ton HTML
     [ ] Tu comprends quel événement déclenche l'action
     [ ] Tu peux expliquer ce que fait chaque ligne

   ============================================================ */

/* === CODE GÉNÉRÉ PAR L'IA (à coller ici) === */


/* ============================================================
   JOURNAL DE BORD — ACTIVITÉ 2
   ============================================================

   Fonctionnalité choisie :

   Prompt envoyé à l'IA :

   Ce qui a fonctionné du premier coup :

   Ce qui n'a pas fonctionné :

   Modifications que j'ai apportées :

   Une chose que j'ai apprise grâce à l'IA :

   ============================================================ */
