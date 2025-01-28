    function afficheVille() {
        // 1. Récupération de la valeur courante du select avec son id
        let nomVilleChoisie = document.getElementById("villeSelect").value;
        
        
        // 2. Récupération de la liste de toutes les div correspondant à une div de météo
        // grâce à la classe « ville »
        let villes = document.getElementsByClassName("ville");
        
        // 3. Parcours de la liste des div météo. On cache celles non sélectionnées.
        for (let i = 0; i < villes.length; i++) {
            // l’attribut id de l’élément est comparée à la ville choisie
            if (villes[i].id == nomVilleChoisie) {
                // garder l'élément visible
                villes[i].style.display = "";
            } else {
                // cacher l'élément
                villes[i].style.display = "none";
            }
        }
    }