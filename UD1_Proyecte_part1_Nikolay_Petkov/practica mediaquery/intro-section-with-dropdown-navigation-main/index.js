const btnMenu = document.querySelector("#btn-menu");
const navHeader = document.querySelector("#nav-header");
const btnClose = document.querySelector("#btn-close img");


btnMenu.addEventListener("click", () => {
  console.log("Probando");
  navHeader.classList.add("nav-visible");

});

btnClose.addEventListener("click", () => {
  navHeader.classList.remove("nav-visible");

}); 