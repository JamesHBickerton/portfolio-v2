"use strict";

// Variables:
const navContainer = document.querySelector(".navContainer");
const navBar = document.querySelector(".navBar");

const hero = document.querySelector(".heroSection");
const navHeight = navContainer.getBoundingClientRect().height;

////////////////////////////////////////////////
///////////////////////////////////////////////

const hoverOver = function (e) {
  if (e.target.classList.contains("navbarLink")) {
    const link = e.target;
    const siblings = link
      .closest(".navContainer")
      .querySelectorAll(".navbarLink");
    const logo = link.closest(".navContainer").querySelector("svg");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

navContainer.addEventListener("mouseover", hoverOver.bind(0.5));

navContainer.addEventListener("mouseout", hoverOver.bind(1));

///////////////////////////////////////////////////////////// STICKY NAV

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navContainer.classList.add("sticky");
  else navContainer.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(hero);

////////////////////////////////////////////////////////////////SLIDER COMPONENT

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider_btn--left");
  const btnRight = document.querySelector(".slider_btn--right");

  let currentSlide = 0;
  const maximumSlide = slides.length;

  // Functions
  const goToSlide = function (slideIndex) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === slideIndex) slide.classList.add("active");
    });
  };

  // Event listeners
  btnRight.addEventListener("click", function () {
    currentSlide++;
    if (currentSlide === maximumSlide) currentSlide = 0;
    goToSlide(currentSlide);
  });
  btnLeft.addEventListener("click", function () {
    currentSlide--;
    if (currentSlide < 0) currentSlide = maximumSlide - 1;
    goToSlide(currentSlide);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") btnRight.click();
    if (e.key === "ArrowLeft") btnLeft.click();
  });

  goToSlide(currentSlide);
};

slider();
