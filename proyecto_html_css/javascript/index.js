const searchBtn = document.getElementById("search_btn");
const barraBusqueda = document.querySelector(".search_box");

searchBtn.addEventListener("click", () => {
  barraBusqueda.classList.toggle("search_box_visible");
});