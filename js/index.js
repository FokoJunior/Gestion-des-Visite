// Fonction qui valide les éléments du formulaire de connexion

function validateForm() {
    const nom_utilisateur = document.getElementById('nom_utilisateur').value;
    const mot_passe = document.getElementById('mot_passe').value;
    const messageDiv = document.getElementById('message');
    
    // Réinitialiser le message
    messageDiv.textContent = '';

    // Vérification de la validité
    if (nom_utilisateur === '' || mot_passe === '') {
        messageDiv.textContent = 'Veuillez remplir tous les champs.';
        messageDiv.style.color = 'red';
        return false; // Empêche le rechargement de la page
    }

    // Vérification de la longueur du mot de passe
    if (mot_passe.length < 6) {
        messageDiv.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        messageDiv.style.color = 'red';
        return false; // Empêche le rechargement de la page
    }

    // Si tout est correct
    messageDiv.textContent = 'Formulaire soumis avec succès !';
    messageDiv.style.color = 'green';
    return false; // Empêche le rechargement de la page
}



































// function validerFormulaire(event) {
//     event.preventDefault(); // Empêche le rechargement de la page

//     // Récupération des valeurs des champs
//     const nom = document.getElementById('nom_utilisateur').value.trim();
//     const email = document.getElementById('mot_passe').value.trim();
//     const message = document.getElementById('message');

//     // Réinitialisation du message à chaque tentative de validation
//     message.innerHTML = '';

//     // Vérification des champs
//     if (nom_utilisateur === '' || mot_passe === '') {
//         // Affiche un message d'erreur si un champ est vide
//         afficherNotification('error', 'Tous les champs doivent être remplis.');
//     } else if (!validerPassword(mot_passe)) {
//         // Vérification du format du mot de passe
//         afficherNotification('error', 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
//     } else {
//         // Affiche un message de réussite si tout est correct
//         afficherNotification('success', 'OK');
//     }
// }

// // Fonction pour afficher une notification
// function afficherNotification(type, texte) {
//     const message = document.getElementById('message');
//     const notification = document.createElement('div');
//     notification.classList.add('notification', type);
//     notification.textContent = texte;

//     // Ajout de la notification
//     message.appendChild(notification);

//     // Disparition automatique du message après 5 secondes
//     setTimeout(() => {
//         notification.remove();
//     }, 6000);
// }

// // Fonction pour valider le format du mot de passe
// //Contient au moins 8 caractères,une majuscule, une minuscule, un chiffre et un caractère spécial.

// function validerPassword(mot_passe) {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return regex.test(mot_passe);
// }