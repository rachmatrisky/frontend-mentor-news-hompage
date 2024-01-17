const openMenu = document.querySelector("#icon-menu");
const closeMenu = document.querySelector("#icon-menu-close");
const nav = document.querySelector("nav");
const bgBlack = document.querySelector(".bg-black");

openMenu.addEventListener("click", () => {
  nav.style.display = "block";
  bgBlack.style.opacity = "0.6";
});

closeMenu.addEventListener("click", () => {
  nav.style.display = "none";
  bgBlack.style.opacity = "0";
});