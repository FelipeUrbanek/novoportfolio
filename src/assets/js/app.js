var navbarTogglerIcon = document.querySelector(".navbar-toggler");
var navbar = document.querySelector("#navbar");
var isOpen = false;
navbar.style.backgroundColor = "transparent";
navbar.style.transition = "background-color 50ms ease";

navbarTogglerIcon.addEventListener("click", function () {
  if (isOpen) {
    setTimeout(() => {
      navbar.style.backgroundColor = "transparent";
      isOpen = false;
    }, 300);
  } else {
    navbar.style.backgroundColor = "white";
    isOpen = true;
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 45 && isOpen) {
    navbarTogglerIcon.click();
  }
});

AOS.init({
  easing: "ease-in-out-sine",
  once: true,
});

$(document).ready(function () {
  $(".banner").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
      },
      600: {
        items: 1,
        nav: false,
        dots: true,
      },
      1000: {
        items: 1,
        loop: true,
        dots: false,
        nav: true,
      },
    },
  });

  $(".produtos-carrousel").owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
        loop: true,
        nav: false,
        dots: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 4,
        loop: true,
        dots: true,
        nav: true,
      },
    },
  });

  $(".fornecedores-carrousel").owlCarousel({
    loop: false,
    margin: 88,
    dots: false,
    nav: false,
    touchDrag: false, // Habilitar gestos de arrastar (swipe)
    mouseDrag: false,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        touchDrag: true, // Habilitar gestos de arrastar (swipe)
        mouseDrag: true,
        items: 2,
        margin: 20,
        loop: true,
        nav: false,
        dots: true,
      },
      600: {
        touchDrag: true, // Habilitar gestos de arrastar (swipe)
        mouseDrag: true,
        items: 3,
        nav: true,
        dots: true,
      },
      1000: {
        items: 5,
        loop: true,
        dots: false,
        nav: true,
      },
    },
  });
});
