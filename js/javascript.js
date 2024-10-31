const input = document.getElementById('mot_passe');
    const placeholderText = "Contient au moins 8 caractères,une majuscule, une minuscule, un chiffre et un caractère spécial. ";
    let i = 0;

    function scrollPlaceholder() {
        input.placeholder = placeholderText.substring(i) + placeholderText.substring(0, i);
        i = (i + 1) % placeholderText.length;
    }

    setInterval(scrollPlaceholder, 200); // Fait défiler toutes les 200ms