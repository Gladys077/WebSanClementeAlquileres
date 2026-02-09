// Menú responsive
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Cerrar el menú al hacer clic en un enlace
  const links = document.querySelectorAll(".nav-links a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});

// Function to initialize a carousel
function initializeCarousel(carouselContainer) {
  const track = carouselContainer.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = carouselContainer.querySelector(".carousel-button-right");
  const prevButton = carouselContainer.querySelector(".carousel-button-left");
  const dotsNav = carouselContainer.querySelector(".carousel-indicators");

  let currentIndex = 0;

  // Create indicator dots
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-indicator");
    if (index === 0) dot.classList.add("active");
    dotsNav.appendChild(dot);
  });

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicator dots
    carouselContainer
      .querySelectorAll(".carousel-indicator")
      .forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
  }

  function moveNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function movePrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Next button
  nextButton.addEventListener("click", moveNext);

  // Previous button
  prevButton.addEventListener("click", movePrev);

  // Indicator dots
  dotsNav.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;

    currentIndex = Array.from(dotsNav.children).indexOf(targetDot);
    updateCarousel();
  });

  // Initialize
  updateCarousel();
}

// Initialize all carousels
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");
  carousels.forEach(initializeCarousel);
});

// Funciones para abrir y cerrar modales
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
