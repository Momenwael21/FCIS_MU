// to change navBar background by scroll class active is a style class

let fixedNav = document.querySelector("nav");
let navContainer = document.querySelector(".navbar .container");
let navToggler = document.querySelector(".navbar .navbar-toggler");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    fixedNav.classList.add("active");
  } else {
    fixedNav.classList.remove("active");
  }
  navToggler.addEventListener("click", function () {
    fixedNav.classList.add("active");
  });
});

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    if (this.ariaExpanded) {
      fixedNav.classList.add("active");
    } else if (!this.ariaExpanded) {
      fixedNav.classList.remove("active");
    }
  });
