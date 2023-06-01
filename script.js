// script.js

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function autoPlay() {
  showSlide(currentSlide + 1);
}

setInterval(autoPlay, 5000); // Change slide every 2 seconds
