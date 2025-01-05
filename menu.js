const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// JavaScript for at håndtere klik og aktiv tilstand
document.querySelectorAll(".menu-link").forEach((item) => {
  item.addEventListener("click", function () {
    // Fjern 'active' klassen fra alle links
    document.querySelectorAll(".menu-link").forEach((link) => link.classList.remove("active"));

    // Tilføj 'active' klassen til det klikede link
    item.classList.add("active");
  });
});
