/* Botones dropDownMenu y dropDownList */
const btnShowDropDownContainer = document.getElementById("btn_show_drop_down_menu");
const btnHideDropDownContainer = document.getElementById("btn_show_drop_down_list");
const btnShowFreatures = document.getElementById("btn_show_freatures");
const btnHideFreatures = document.getElementById("btn_hide_freatures");
const btnShowCompany = document.getElementById("btn_show_company");
const btnHideCompany = document.getElementById("btn_hide_company");

const btnShowCompanyDesktop = document.getElementById("btn_show_company_desktop");
const btnHideCompanyDesktop = document.getElementById("btn_hide_company_desktop");
const btnShowFreaturesDesktop = document.getElementById("btn_show_freatures_desktop");
const btnHideFreaturesDesktop = document.getElementById("btn_hide_freatures_desktop");

/* Contenedores dropDownMenu y dropDownList */
const dropDownMenuContainer = document.querySelector(".drop_down_menu");
const dropDownList = document.querySelector(".freatures_drop_down");
const freatureContainer = document.querySelector(".freatures_container");
const companyContainer = document.querySelector(".company_container"); 
const singInOnContainer = document.querySelector(".sing_in_on");
const registerContainer = document.getElementById("register");
const liElements = dropDownMenuContainer.querySelectorAll("li");
/* Fondo negro */
const blackBackground = document.querySelector(".black_background");

//---> Mostrar el menú y ocultar el botón btnShowDropDownContainer
btnShowDropDownContainer.addEventListener("click", () => {
  dropDownMenuContainer.style.display = "flex";  // Mostrar el contenedor
  btnShowDropDownContainer.style.display = "none";  // Ocultar el botón
  btnHideDropDownContainer.style.display = "flex";  // Mostrar el botón de ocultar
  blackBackground.style.display = "flex"; // Mostar el fondo negro
});

//---> Ocultar el menú y mostrar el botón btnShowDropDownContainer
btnHideDropDownContainer.addEventListener("click", () => {
  dropDownMenuContainer.style.display = "none";  // Ocultar el contenedor
  btnShowDropDownContainer.style.display = "flex";  // Mostrar el botón
  btnHideDropDownContainer.style.display = "none";  // Ocultar el botón de ocultar
  blackBackground.style.display = "none"; // Ocultar el fondo negro
});

//---> Mostar contenedor freatures , ocultar boton show_freatures y mostrar boton hide_freatures
btnShowFreatures.addEventListener("click", () => {
  freatureContainer.style.display = "flex"; // Mostrar el contenedor
  btnShowFreatures.style.display = "none"; // Ocultar el boton
  btnHideFreatures.style.display = "inline-block"; // Mostrar el botón de ocultar
});

//---> Oculat contenedor freatures, mostrar boton show_freatures, ocultar boton hide_freatures
btnHideFreatures.addEventListener("click", () => {
  freatureContainer.style.display = "none"; // Oculat contenedor
  btnHideFreatures.style.display = "none"; // Oculat boton
  btnShowFreatures.style.display = "inline-block"; //Mostrar boton
});

//---> Mostar contenedor company , ocultar boton show_company y mostrar boton hide_company
btnShowCompany.addEventListener("click", () => {
  companyContainer.style.display = "flex"; // Mostrar el contenedor
  btnShowCompany.style.display = "none"; // Ocultar el boton
  btnHideCompany.style.display = "inline-block"; // Mostrar el botón de ocultar
});

/* ---> Ocular contenedor company, mostrar boton show_company y ocular hide_company */
btnHideCompany.addEventListener("click", () => {
  companyContainer.style.display = "none"; //Ocultar el contenedor 
  btnHideCompany.style.display = "none"; //Oculat el boton
  btnShowCompany.style.display = "inline-block" //Mostar boton
});

//---> Funcion para manejar el cambio de pantalla //
const handleResize = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1440) {
    //---> Header Menu //
    dropDownMenuContainer.style.display = "flex";
    dropDownMenuContainer.style.backgroundColor = "transparent";
    dropDownMenuContainer.style.flexDirection = "row"; 
    dropDownMenuContainer.style.height = "auto";
    dropDownMenuContainer.style.gapn = "0";
    dropDownMenuContainer.style.width = "100%";
    dropDownMenuContainer.style.alignItems = "center";
    blackBackground.style.display = "none"; 
    btnShowDropDownContainer.style.display = "none"; 
    btnHideDropDownContainer.style.display = "none";
    dropDownMenuContainer.style.padding = "0";

    //---> Log In Log Out container //
    singInOnContainer.style.flexDirection = "row";
    singInOnContainer.style.gap = "25px";
    singInOnContainer.style.paddingRight = "30px";
    registerContainer.style.padding = "20px";


    //---> Mostar contenedor freatures , ocultar boton show_freatures y mostrar boton hide_freatures
    btnShowFreaturesDesktop.addEventListener("click", () => {
    freatureContainer.style.display = "flex"; // Mostrar el contenedor
    btnShowFreaturesDesktop.style.display = "none"; // Ocultar el boton
    btnHideFreaturesDesktop.style.display = "inline-block"; // Mostrar el botón de ocultar
     });

    //---> Oculat contenedor freatures, mostrar boton show_freatures, ocultar boton hide_freatures
    btnHideFreaturesDesktop.addEventListener("click", () => {
    freatureContainer.style.display = "none"; // Oculat contenedor
    btnHideFreaturesDesktop.style.display = "none"; // Oculat boton
    btnShowFreaturesDesktop.style.display = "inline-block"; //Mostrar boton
    });

    //---> Mostar contenedor company , ocultar boton show_company y mostrar boton hide_company
    btnShowCompanyDesktop.addEventListener("click", () => {
    companyContainer.style.display = "flex"; // Mostrar el contenedor
    btnShowCompanyDesktop.style.display = "none"; // Ocultar el boton
    btnHideCompanyDesktop.style.display = "inline-block"; // Mostrar el botón de ocultar
    });

    /* ---> Ocular contenedor company, mostrar boton show_company y ocular hide_company */
    btnHideCompanyDesktop.addEventListener("click", () => {
    companyContainer.style.display = "none"; //Ocultar el contenedor 
    btnHideCompanyDesktop.style.display = "none"; //Oculat el boton
    btnShowCompanyDesktop.style.display = "inline-block" //Mostar boton
    });

    //---> Botones Freatures/company //
  } else {
    dropDownMenuContainer.style.display = "none";
    dropDownMenuContainer.style.backgroundColor = "var(--AlmostWhite)";
    dropDownMenuContainer.style.flexDirection = "column"; 
    dropDownMenuContainer.style.width = "250px";
    btnShowDropDownContainer.style.display = "flex"; 
    btnHideDropDownContainer.style.display = "none"; 
  };

};

// Llamar a la función en el evento resize
window.addEventListener("resize", handleResize);
  
