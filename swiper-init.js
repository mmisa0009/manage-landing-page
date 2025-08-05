const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,   // default for small screens
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {           // from 768px width (tablet)
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {          // from 1024px width (desktop)
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const hamburgerLines = document.getElementById("hamburgerLines");
  const closeIcon = document.getElementById("closeIcon");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isActive = navMenu.classList.contains("active");

    hamburgerLines.style.display = isActive ? "none" : "flex";
    closeIcon.style.display = isActive ? "block" : "none";
  });
});