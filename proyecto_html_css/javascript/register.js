// HTML VARIABLES
let register_form = document.getElementById('register_form');
// Inputs
let form_input_usuario = document.getElementById('usuario');
let form_input_email = document.getElementById('email');
let form_input_password = document.getElementById('password');
let html_form = document.getElementsByName('form');

// CSS classes
let jsPassWordValidator = document.querySelector('.jsPassWordValidator');

// Elements for CSS
let pMin;

// Submit
let submit_button = document.getElementById('submit_button');

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
  return /[^a-zA-Z0-9]/.test(pass);
};

// Password Booleans
let passWordChecks = {
  boolLengthMax: false,
  boolLengthMin: false,
  boolLowerCase: false,
  boolUpperCase: false,
  boolNumber: false,
  boolSpecial: false,
}

form_input_password.addEventListener('keyup',(e)=>{
  if (!passLenghtMin(form_input_password.value)){
    console.log("Longitud minima de 5");
    form_input_password.classList.add("unvalidatedPassword");
    jsPassWordValidator.classList.add("showContainer");
  }else{
    form_input_password.classList.remove("unvalidatedPassword");
    jsPassWordValidator.classList.remove("showContainer");
    passWordChecks.boolLengthMin = true;
  }
  if(!passLenghtMax(form_input_password.value)){
  }else{
    passWordChecks.boolLengthMax = true;
  }
  if(!passLowerCase(form_input_password.value)){
  }else{
    passWordChecks.boolLowerCase = true;
  }
  if(!passUpperCase(form_input_password.value)){
  }else{
    passWordChecks.boolUpperCase = true;
  }
  if(!passNumber(form_input_password.value)){
  }else{
    passWordChecks.boolNumber = true;
  }
  if(!passSpecialLetter(form_input_password.value)){
  }else{
    passWordChecks.boolSpecial = true;
  }
});

// Submit Control

register_form.addEventListener('submit', (e) => {
  // Checks if any boolean is false
  e.preventDefault(); 
  console.log('Submit event triggered.');

  for (let i of Object.values(passWordChecks)) {
    console.log('Checking condition:', i);
    if (!i) {
      console.log('Password does not meet all requirements.');
      return; 
    }
  }

  // If all true submit the form
  console.log('All conditions met. Submitting the form...');
  register_form.submit(); 
});
