// ---> Busquedab block <---> none
const searchBtn = document.getElementById("search_btn");
const barraBusqueda = document.querySelector(".search_box");

searchBtn.addEventListener("click", () => {
  barraBusqueda.classList.toggle("search_box_visible");
});

// ---> Dropw donw menu block <---> none

document.addEventListener("DOMContentLoaded", () => {
  const dropDownMenuIcon = document.getElementById("drop_down_icon");
  const dropDownMenu = document.querySelector(".drop_down_menu");

  if (dropDownMenuIcon && dropDownMenu) {
      console.log("Elementos encontrados:", dropDownMenuIcon, dropDownMenu);

      dropDownMenuIcon.addEventListener("click", () => {
          console.log("¡Click detectado!");
          dropDownMenu.classList.toggle("hide_show_drop_down"); // -->Problema resuelto añadiendo !important en el Display
      });
  } else {
      console.error("No se encontraron los elementos requeridos.");
  }
});

