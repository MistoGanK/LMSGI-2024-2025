// HTML VARIABLES
let register_form = document.getElementById('register_form');
// Inputs
let form_input_usuario = document.getElementById('usuario');
let form_input_email = document.getElementById('email');
let form_input_password = document.getElementById('password');
let html_form = document.getElementsByName('form');

// CSS classes
let jsPassWordValidator = document.querySelector('.jsPassWordValidator');

// HTML passErrorDiv
let pMin = document.getElementById('pMin');
let pMax = document.getElementById('pMax');
let pUp = document.getElementById('pUp');
let pNum = document.getElementById('pNum')
let pLow = document.getElementById('pLow');
let pSpe = document.getElementById('pSpe');

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
let validate_style = document.querySelector('.jsValidated');

// Password Booleans
let passWordChecks = {
  boolLengthMax: false,
  boolLengthMin: false,
  boolLowerCase: false,
  boolUpperCase: false,
  boolNumber: false,
  boolSpecial: false,
}
// Show preset validation password
form_input_password.addEventListener('focus',(e)=>{
  form_input_password.classList.add("unvalidatedPassword");
  jsPassWordValidator.classList.add("showContainer");
});
form_input_password.addEventListener('blur',(e)=>{
  form_input_password.classList.remove("unvalidatedPassword");
  jsPassWordValidator.classList.remove("showContainer");
});

form_input_password.addEventListener('keyup',(e)=>{
  // Min
  if (!passLenghtMin(form_input_password.value)){
    pMin.classList.remove('jsValidated');
  }else{  
    passWordChecks.boolLengthMin = true;
    pMin.classList.add('jsValidated');
  }
  // Max
  if(!passLenghtMax(form_input_password.value)){
    pMax.pMax.classList.remove('jsValidated')
  }else{
    passWordChecks.boolLengthMax = true;
    pMax.classList.add('jsValidated');
  }
  // Lower case
  if(!passLowerCase(form_input_password.value)){
    pLow.classList.remove('jsValidated');
  }else{
    passWordChecks.boolLowerCase = true;
    pLow.classList.add('jsValidated');
  }
  // Upper case
  if(!passUpperCase(form_input_password.value)){
    pUp.classList.remove('jsValidated');
  }else{
    passWordChecks.boolUpperCase = true;
    pUp.classList.add('jsValidated');
  }
  // Number
  if(!passNumber(form_input_password.value)){
    pNum.classList.remove('jsValidated');
  }else{
    passWordChecks.boolNumber = true;
    pNum.classList.add('jsValidated');
  }
  // Special
  if(!passSpecialLetter(form_input_password.value)){
    pSpe.classList.remove('jsValidated');
  }else{
    passWordChecks.boolSpecial = true;
    pSpe.classList.add('jsValidated');
  }
});

// Submit Control

register_form.addEventListener('submit', (e) => {
  // Checks if any boolean is false
  e.preventDefault(); 
  console.log('Submit event triggered.');

  for (let i of Object.values(passWordChecks)) {
    if (!i) {
      return; 
    }
  }
  // If all true submit the form
  console.log('All conditions met. Submitting the form...');
  register_form.submit(); 
});
