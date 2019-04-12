const navTrigger = document.querySelector(".nav-trigger");
const slidingNav = document.querySelector(".nav-links");
const navLis = document.querySelectorAll(".nav-links li");
const navigationLinks = document.querySelectorAll(".nav-links a");

const animateLinks = () => {
  navLis.forEach((navLi, index) => {
    if (slidingNav.classList.contains("nav-active")) {
      navLi.style.animation = `navLinksShow .5s ease forwards ${index / 5 +
        0.4}s `;
    } else {
      navLi.style.animation = `navLinksHide .5s ease`;
    }
  });
};

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (slidingNav.classList.contains("nav-active")) {
      slidingNav.classList.remove("nav-active");
    }
    if (navTrigger.classList.contains("nav-trigger-change")) {
      navTrigger.classList.toggle("nav-trigger-change");
    }
    animateLinks();
  });
});

navTrigger.addEventListener("click", () => {
  slidingNav.classList.toggle("nav-active");
  animateLinks();
  navTrigger.classList.toggle("nav-trigger-change");
});
