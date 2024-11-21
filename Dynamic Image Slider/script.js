let index = 0;
const slides = document.querySelectorAll(".slide");
const interval = 3000; // Speed of auto-scrolling (in ms)

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${-100 * i}%)`;
    slide.querySelector(".caption").style.opacity = i === idx ? "1" : "0";
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

setInterval(nextSlide, interval); // Auto-scroll
