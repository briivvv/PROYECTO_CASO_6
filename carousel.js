const images = document.querySelectorAll('.carousel img');
let current = 0;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

images[current].classList.add('active'); // Mostrar la primera imagen
setInterval(showNextImage, 4000); // Cambia cada 4 segundos