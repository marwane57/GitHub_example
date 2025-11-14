"use strict";

// ------------------------------------------------------
// Jeu du Plus / Moins
// ------------------------------------------------------

let secret = 0;
let essais = [];

// ------------------------------------------------------
// 1. Fonction de tirage aléatoire (vue en cours)
//    Retourne un nombre entier entre min et max inclus
// ------------------------------------------------------
function tirageNombre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ------------------------------------------------------
// 2. Initialisation du jeu
//    - tirage du nombre secret
//    - remise à zéro des essais
//    - remise à zéro des affichages
// ------------------------------------------------------
function demarrerJeu() {
    secret = tirageNombre(1, 50);
    essais = [];
}

// ------------------------------------------------------
// 3. Affichage de l’historique des essais
//    - construire une chaîne HTML avec tous les essais
//    - utiliser une boucle for et le tableau essais[]
// ------------------------------------------------------
function afficherHistorique() {
    let texte = "<h3>Historique de essais</h3>";

    if (essais.length === 0) {
        texte += "<p>Aucun essai pour l'instant.</p>";
    } else {
        texte += "<ul>";
        for (let i = 0; i < essais.length; i++) {
            texte += "<li>Essai " + (i + 1) + " : " + essais[i] + "</li>";
        }
        texte += "</ul>";
    }

}

// ------------------------------------------------------
// 4. Fonction appelée quand l’utilisateur clique sur “Tester”
//    - lit la valeur saisie
//    - la convertit en nombre
//    - la stocke dans le tableau essais[]
//    - compare avec le secret
//    - affiche l’indice ("plus", "moins", "bravo")
// ------------------------------------------------------
function tester() {
    let valeur = ()
    let indice = ()

    if (|| valeur < 1 || valeur > 50) {
        indice.textContent = "Veuillez entrer un nombre entre 1 et 50.";
        return;
    }


    if (valeur < secret) {
        indice.textContent = "C'est plus !";
    } else if (valeur > secret) {
        indice.textContent = "C'est moins !";
    } else {
        indice.textContent =
            "Bravo ! Vous avez trouvé en " + essais.length + " essai(s).";
    }

}

// ------------------------------------------------------
// 5. Mise en place des événements au chargement de la page
// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btnTester").addEventListener("click", tester);
    document.querySelector("#btnRejouer").addEventListener("click", demarrerJeu);

    demarrerJeu();
});