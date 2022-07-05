var pwaCard = document.querySelector('#pwa');
var pwaCardContent = pwaCard.querySelector('.card__content');
var pwaCardDetails = pwaCard.querySelector('.card__details');
var detailsShown = false;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function() {
      console.log('SW registered');
    });
}


