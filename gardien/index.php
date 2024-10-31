<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="../css/script.css">
    <script src="../js/index.js"></script>


</head>
<body>
    <div class="form-container">
        <h2> Se Connecter </h2>
        <form action="../include/connectgar.php" id="formulaire" method="post">
  
          <label for="nom_utilisateur"> Nom d'utilisateur <span class="required">*</span></label>
          <input type="text" id="nom_utilisateur" name="nom_utilisateur" required />
  
          <label for="mot_passe"> mot de passe <span class="required">*</span></label>
          <input type="password" id="mot_passe" name="mot_passe" required />
  
  
          <div id="message-erreur"></div>
          <!-- <button type="submit">Se Connecter</button>  -->
          <button type="submit" onclick="return validateForm()">Se Connecter</button>

          <!-- <button type="submit" onclick="validerFormulaire(event)">Se Connecter</button>  -->
           <!-- <div id="message"></div>  Message de succès ou erreur -->

        </form>

        <div id="message"></div>
        
      </div>
</body>
</html>