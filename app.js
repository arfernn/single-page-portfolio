function initializeApp() {
  let slide = document.querySelector(".index__item");
  let carousel = document.querySelector(".slider");

  document.querySelector(".round-btn.left").addEventListener('click', () => {
    carousel.scrollLeft -= slide.clientWidth; 
  });

  document.querySelector(".round-btn.right").addEventListener('click', () => {
    carousel.scrollLeft += slide.clientWidth; 
  });
}

document.addEventListener("DOMContentLoaded", initializeApp);