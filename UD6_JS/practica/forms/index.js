const main_form = document.getElementById("id_form");

// console.log(main_form);
// console.log(document.forms[0]); // Primer formulario que del documento
// console.log(main_form.forms[0].nom);
// console.log(main_form.n);
// console.log(main_form["nom"]);

// xssa.style["form-size"] = "12px";

// console.log(main_form.elements);

const inputNom = main_form["nom"].value;
const divFormMessageError = document.getElementsByClassName('formMessageError');
const divFormMessageOkey = document.getElementsByClassName('formMessageOkey');
const inputForm = document.getElementById('nom');

// Se puede usar pseudo selectores de CSS en JS
const inputColor2 = document.querySelector('input[name="color"]:checked');

main_form.addEventListener('submit',(e)=>{
  e.preventDefault();
  divFormMessageOkey[0].innerHTML = '';
  divFormMessageError[0].innerHTML = '';

  if(inputNom && inputColor2){
    console.log(divFormMessageOkey);
    divFormMessageOkey[0].innerHTML = '<p>Muy bine mi hijo</p>'
    main_form.reset();

  }else{
    console.log(divFormMessageError);
    divFormMessageError[0].innerHTML = '<p>Por favor porque</p>'
  };

});
// load or DOMContentLoaded
// Load espera a que carge TODOS los recursos de la pagina web (carga mas lenta)
window.addEventListener("load",()=>{

});

window.addEventListener('DOMContentLoaded',()=>{

});

nom.addEventListener('keydown',()=>{
  
});
// Corchetes, caracteres permitidos, raiz longitud aceptada {minimo,maximo}, poniendo un espacio(literal)funciona
let exp = /^[a-zA-Z]{3}$/;
// luego en el campo if se pone la variable exp.test(inputVariable)

// FRAGMENTO PARA REGISTRO DE PROYECTO
document.addEventListener('keydown',(e)=>{
  if(e.key === 'Enter' || e.key === 'p' && exp.test(inputForm)){
    console.log("EPAAA ENTER???");
    confirm("Seguro bro?")
    main_form.requestSubmit();

  };
  console.log(e.key);
})

inputForm.addEventListener('paste',(e)=>{
  e.preventDefault();
  console.log("Adonde vas bobo?")
});


// blur for password > aaaa to **** 

// function checkRadio(){
//   const radios = main_form.elements['color'];

//   let selectedValue = null;
//   for (const radio of radios){
//     if(radio.checked){
//       selectedValue = radio.value;
//       break;
//     }
//   }
// };

