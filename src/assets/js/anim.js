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
