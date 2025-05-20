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

