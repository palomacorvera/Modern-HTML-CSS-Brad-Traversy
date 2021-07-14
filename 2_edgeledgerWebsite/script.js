function initMap() {
    const loc = { lat: 42.361145, lng: -71.057083 };
    const map = new google.maps.Map(document.querySelector('.mapa')
    , {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({ position: loc, map: map});
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navegador').style.opacity = 0.9;
    } else {
      document.querySelector('#navegador').style.opacity = 1;
    }
  });

$('#navegador a, .boton').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });