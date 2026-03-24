// Chargement du header
fetch("header.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    document.querySelector("header").innerHTML = data;
    ChangePageActive();//appele la fonction pour que le header est le temps de charger entierement
    
    const burger = document.getElementById("burger_menu");//Menu burger
    const nav = document.getElementById("header_nav");

    if (burger && nav) {
      burger.addEventListener("click", function() {
        burger.classList.toggle("active");
        nav.classList.toggle("open");
        
        document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "auto";//pas de defillement quand burger ouvert
      });
    }
  });

// Chargement du footer
fetch("footer.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    document.querySelector("footer").innerHTML = data;
  });

//Change dans le header le lien en actif pour pouvoir le différencier
function ChangePageActive() {
  const pageActu = window.location.pathname.split("/").pop();//Recupère le nom de la page 

  const navLiens = document.querySelectorAll("#header_nav a");//Recupère les liens

  navLiens.forEach(link => {
    const lienPage = link.getAttribute("href");//Récupère l'attribut href du lien

    if (lienPage === pageActu || (pageActu === "" && lienPage === "index.html")) {
      link.classList.add("active");//ajoute class avtive a la page
    }
  });
}



//Back to top
const topBtn = document.getElementById("Top");

// Détecte le défilement
window.onscroll = function() {
  // Si on a défilé a plus de 100px
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};



// Gestion du changement de formulaire Partenaires / Magasins
document.addEventListener("DOMContentLoaded", function() {
    const selector = document.getElementById('type_formulaire');//recupere la value de l'option type_formulaire

    const formAutres = document.getElementById('form_autres');
    const formMagasin = document.getElementById('form_magasin');

    const blocText = document.querySelector('.bloc_text');//recupere tout les paragraphes du bloc_text
    const paragraphs = blocText.querySelectorAll('p');

    if (selector) {
        selector.addEventListener('change', function() {
            if (this.value === 'magasin') {
                formAutres.classList.add('hidden');
                formMagasin.classList.remove('hidden');

                //on cache les deux premiers paragraphes et on affiche les deux autres
                paragraphs[0].classList.add('hidden');
                paragraphs[1].classList.add('hidden');
                paragraphs[2].classList.remove('hidden');
                paragraphs[3].classList.remove('hidden');
            } else {
                formAutres.classList.remove('hidden');
                formMagasin.classList.add('hidden');

                //inverse
                paragraphs[0].classList.remove('hidden');
                paragraphs[1].classList.remove('hidden');
                paragraphs[2].classList.add('hidden');
                paragraphs[3].classList.add('hidden');
            }
        });
    }
});