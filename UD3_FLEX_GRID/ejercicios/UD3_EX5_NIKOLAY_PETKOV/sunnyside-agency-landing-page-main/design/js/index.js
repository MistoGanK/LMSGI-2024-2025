 /* ---> Buttons*/
 const btnShowMenu = document.getElementById("btnBurger");
 
 /* ---> Classes*/

 const dropDownMenuContainer = document.querySelector(".nav__body");
 const menuLIst = document.querySelector(".nav__list");
 const creativeContainer = document.querySelector(".creative");

 /* ---> Interactive classes*/

 const displayContainer = document.querySelector(".show_container");
 const hideContainer = document.querySelector(".hide_container");

 /* ---> Actoins*/

 btnShowMenu.addEventListener("click",() => {
  dropDownMenuContainer.classList.toggle("show_container");
  menuLIst.classList.toggle("show_container");
  creativeContainer.classList.toggle("hide_container");
 });
