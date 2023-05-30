$(document).ready(function() {
  $(".box").hover(
    function() {
      // Au survol de la boîte
      $(this).addClass("card-hover");
      TweenMax.to($(this).find(".title"), 0.3, { fontSize: "18px" });
      TweenMax.to($(this).find(".description"), 0.3, { display: "block" });
    },
    function() {
      // Lorsque le survol est terminé
      $(this).removeClass("card-hover");
      TweenMax.to($(this).find(".title"), 0.3, { fontSize: "24px" });
      TweenMax.to($(this).find(".description"), 0.3, { display: "none" });
    }
  );
});

// Sélectionnez les éléments du carrousel
var carteGauche = document.querySelector('.col-3:nth-child(1) .card');
var carteCentrale = document.querySelector('.col-6 .card');
var carteDroite = document.querySelector('.col-3:nth-child(3) .card');

// Ajoutez des écouteurs d'événements de clic aux cartes
carteGauche.addEventListener('click', function() {
  echangerContenuCartes(carteCentrale, carteGauche);
});

carteDroite.addEventListener('click', function() {
  echangerContenuCartes(carteCentrale, carteDroite);
});

// Fonction pour échanger le contenu des cartes
function echangerContenuCartes(carte1, carte2) {
  var tempHTML = carte1.innerHTML;
  carte1.innerHTML = carte2.innerHTML;
  carte2.innerHTML = tempHTML;
}


