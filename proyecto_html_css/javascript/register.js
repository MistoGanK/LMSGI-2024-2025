// HTML VARIABLES
let form_input_usuario = document.getElementById('usuario');
let form_input_email = document.getElementById('email');
let form_input_password = document.getElementById('password');
let html_form = document.getElementsByName('form');
let jsPassWordValidator = document.querySelector('.jsPassWordValidator');

// Password Section
form_input_password.addEventListener('paste',(e)=>{
  e.preventDefault();
});

// Password Function validator
function passLenghtMin(pass){
 return pass.length > 4 // Minimum 4 letters
};
function passLenghtMax(pass){
 return pass.length < 20 // Maximum 20 letters
};
function passLowerCase(pass){
  return /[a-z]/.test(pass);
};
function passUpperCase(pass){
  return /[A-Z]/.test(pass);
};
function passNumber(pass){
  return /[0-9]/.test(pass);
};
function passSpecialLetter(pass){
  return /^[a-zA-Z0-9]/.test(pass);
};

form_input_password.addEventListener('keyup',(e)=>{
  if (!passLenghtMin(form_input_password.value)){
    console.log("Longitud minima de 5");
    form_input_password.classList.add("unvalidatedPassword");
    jsPassWordValidator.classList.add("showContainer");
  }else{
    form_input_password.classList.remove("unvalidatedPassword");
    jsPassWordValidator.classList.remove("showContainer");

  }
  console.log(form_input_password.value) // Debug
});