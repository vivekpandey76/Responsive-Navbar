const navbar__bar = document.getElementsByClassName("navbar__bars")[0];
const navbar__links = document.getElementsByClassName("navbar__links");
navbar__bar.addEventListener("click", () => {
  for (let i = 0; i < navbar__links.length; i++) {
    navbar__links[i].classList.toggle("active");
  }
});
