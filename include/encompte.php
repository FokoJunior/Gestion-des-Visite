<?php
// Informations de connexion à la base de données 
include 'connexion.php';

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom_utilisateur = $_POST["nom_utilisateur"];
    $email = $_POST["email"];
    $services = $_POST["services"];
    $roles = $_POST["roles"];
    $mot_passe = $_POST["mot_passe"];

    // Hash du mot de passe
    $mot_passe_hash = password_hash($mot_passe, PASSWORD_DEFAULT);

    // Préparer la requête SQL pour insérer les données dans la table
    $sql = "INSERT INTO comptes (nom_utilisateur,email, services, roles, mot_passe) VALUES ('$nom_utilisateur', ''$email',$services', '$roles', '$mot_passe_hash')";

    // Exécuter la requête
    if ($conn->query($sql) === TRUE) {
        header("Location: ../administrateur/listecompte.php");
    } else {
        echo "Erreur lors de l'inscription: " . $conn->error;
    }
}

// Fermer la connexion
$conn->close();
?>
