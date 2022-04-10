const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu mobile

const navLink = document.querySelectorAll(".nav-link");
console.log(navLink);
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((item) => item.addEventListener("click", linkAction));

//  CHANGE BACKGROUND HEADER

scrollHeader = () => {
  const header = document.getElementById("header");
  scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// popular swiper

let swiperPopular = new Swiper(".popular-container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grapCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

let mixerFeatured = mixitup(".featured-content", {
  selectors: {
    target: ".featured-card",
  },
  animation: {
    duration: 300,
  },
});

// link active featured

const linkFeactured = document.querySelectorAll(".featured-item");

const activeFeatured = () => {
  linkFeactured.forEach((item) => item.classList.remove("active-featured"));
  linkFeactured.classList.add("active-featured");
};
linkFeactured.forEach((item) => item.addEventListener("click", activeFeatured));

// SHOW SCROLLUP

const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
});

// SCROLLREVEAL

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home-title, .popular-container, .features-img, .featured-filters`);
sr.reveal(`.home-subtitle`, { delay: 500 });
sr.reveal(`.home-elec`, { delay: 600 });
sr.reveal(`.home-img`, { delay: 700 });
sr.reveal(`.home-car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home-button`, { delay: 1000, origin: "bottom" });
sr.reveal(`.about-group, .offer-data`, { origin: "left" });
sr.reveal(`.about-data, .offer-img`, { origin: "right" });
sr.reveal(`.features-map`, { delay: 600, origin: "bottom" });
sr.reveal(`.features-card`, { interval: 300 });
sr.reveal(`.featured-card, .logos-content, .footer-content`, { interval: 100 });
