function trackScroll() {
  const storeScroll = function() {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  document.addEventListener('scroll', storeScroll, { passive: true });

  storeScroll();
}

$(document).ready(function() {
  trackScroll();

  $('.lazy').Lazy();
});
