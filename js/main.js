// start header
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
// end header

// start intro
let readMore = document.querySelector(".intro button");
let readArrow = document.querySelector(".intro button::before");
let introContent = document.querySelector(".intro .intro-content");

readMore.addEventListener("click", () => {
  if (readMore.classList.contains("more")) {
    readMore.classList.replace("more", "less");
    readMore.innerHTML = "اقرأ أقل";
    introContent.style.height = "auto";
  } else if (readMore.classList.contains("less")) {
    readMore.classList.replace("less", "more");
    readMore.innerHTML = "اقرأ المزيد";
    introContent.style.height = "350px";
  }
});
// end intro
