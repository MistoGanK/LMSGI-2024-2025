// HTML VARIABLES
let register_form = document.getElementById('register_form');

// Inputs
let form_input_usuario = document.getElementById('usuario');
let form_input_email = document.getElementById('email');
let form_input_password = document.getElementById('password');
let html_form = document.getElementsByName('form');

// CSS classes
let jsPassWordValidator = document.querySelector('.jsPassWordValidator');
let validate_style = document.querySelector('.jsValidated');

// HTML passErrorDiv
let pMin = document.getElementById('pMin');
let pMax = document.getElementById('pMax');
let pUp = document.getElementById('pUp');
let pNum = document.getElementById('pNum')
let pLow = document.getElementById('pLow');
let pSpe = document.getElementById('pSpe');

let imgProgress = document.getElementById('imgProgress');
// SRC img for imgProgress
const veryWeakImg = '../assets/icons/progress_very_weak.png';
const weakImg = '../assets/icons/progress_weak.png';
const normalImg = '../assets/icons/progress_normal.png';
const strongImg = '../assets/icons/progress_strong.png';
const veryStrong = '../assets/icons/progress_very_strong.png';

let passProgress = document.querySelector('.pass_progress');
let progressDiv = document.getElementById('progress');
let pProgress = document.getElementById('pProgress');

let valPassImg = document.getElementById('valPassImg');
let valPassP = document.getElementById('valPassP');

// HTML err_containers
let formErrDiv = document.getElementsByClassName('form_err_div');
let errP = document.getElementsByClassName('err_p');
let errImg = document.getElementsByClassName('err_img');
let divUserErr = document.getElementById('divUserErr');
let divEmailErr = document.getElementById('divEmailErr');

const successIcon = '../assets/icons/recommend_48dp_77CD5D_FILL0_wght500_GRAD0_opsz48.svg';
const failIcon = '../assets/icons/report_24dp_BB271A_FILL0_wght500_GRAD0_opsz24.png';
 
// Submit
let submit_button = document.getElementById('submit_button');

// Password Section
form_input_password.addEventListener('paste',(e)=>{
  e.preventDefault();
});
// Password Functions validators
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
};

const objPassChecksLength = Object.keys(passWordChecks).length;

// Show preset validation password
form_input_password.addEventListener('focus',(e)=>{
  jsPassWordValidator.classList.add("showContainer");
  passProgress.classList.add("showContainer");
  progressDiv.classList.add('pwVeryWeak');

});
form_input_password.addEventListener('blur',(e)=>{
  jsPassWordValidator.classList.remove("showContainer");
  passProgress.classList.remove("showContainer");
});

// Progress var function 
function fncProgressVar(){
// All progress Classes
let progressClasses = ['pwVeryWeak','pwWeak','pwNormal','pwStrong','pwVeryStrong'];
// The logic is If the element if contain the class, add it and remove all the others on a iteration
let y = Object.values(passWordChecks).filter(Boolean).length;
  switch (y){
    case 1:{
      const cls = 'pwVeryWeak';
      for (let i of progressClasses){
        if (i===cls){
          progressDiv.classList.add(i);
          imgProgress.src = veryWeakImg;
        }else{
          progressDiv.classList.remove(i);
        };
      };
      pProgress.textContent = "Muy Debil"
      break;
    };
    case 2:{
    
      break;
    };
    case 3:{
      const cls = 'pwWeak';
      for (let i of progressClasses){
        if (i==cls){
          progressDiv.classList.add(i);
          imgProgress.src = weakImg;
        }else{
          progressDiv.classList.remove(i);
        };
      };
    pProgress.textContent = "Debil"
    break;
    };
    
    case 4:{
      const cls = 'pwNormal';
       for (let i of progressClasses){
        if (i==cls){
          progressDiv.classList.add(i);
          imgProgress.src = normalImg;
        }else{
          progressDiv.classList.remove(i);
        };
      };
      pProgress.textContent = "Normal"
      break;
    };

    case 5:{
       const cls = 'pwStrong';
       for (let i of progressClasses){
        if (i == cls){
          progressDiv.classList.add(i);
          imgProgress.src = strongImg;
        }else{
          progressDiv.classList.remove(i);
        };
      };
      pProgress.textContent = "Fuerte"
      break;
    };

    case 6:{
      const cls = 'pwVeryStrong';
      for (let i of progressClasses){ 
        if (i == cls){
          progressDiv.classList.add(i);
          imgProgress.src = veryStrong;
        }else{
          progressDiv.classList.remove(i);
        };
      };
      pProgress.textContent = "Muy Fuerte"
      break;
    };
  };

};

// Password Validation Function
function passWordValidation(){
// Min
  if (!passLenghtMin(form_input_password.value)){
    passWordChecks.boolLengthMin = false;
    pMin.classList.remove('jsValidated');
  }else{  
    passWordChecks.boolLengthMin = true;
    pMin.classList.add('jsValidated');
  }
  // Max
  if(!passLenghtMax(form_input_password.value)){
    passWordChecks.boolLengthMax = false;
    pMax.classList.remove('jsValidated')
  }else{
    passWordChecks.boolLengthMax = true;
    pMax.classList.add('jsValidated');
  }
  // Lower case
  if(!passLowerCase(form_input_password.value)){
    passWordChecks.boolLowerCase = false;
    pLow.classList.remove('jsValidated');
  }else{
    passWordChecks.boolLowerCase = true;
    pLow.classList.add('jsValidated');
  }
  // Upper case
  if(!passUpperCase(form_input_password.value)){
    passWordChecks.boolUpperCase = false;
    pUp.classList.remove('jsValidated');
  }else{
    passWordChecks.boolUpperCase = true;
    pUp.classList.add('jsValidated');
  }
  // Number
  if(!passNumber(form_input_password.value)){
    passWordChecks.boolNumber = false;
    pNum.classList.remove('jsValidated');
  }else{
    passWordChecks.boolNumber = true;
    pNum.classList.add('jsValidated');
  }
  // Special
  if(!passSpecialLetter(form_input_password.value)){
    passWordChecks.boolSpecial = false;
    pSpe.classList.remove('jsValidated');
  }else{
    passWordChecks.boolSpecial = true;
    pSpe.classList.add('jsValidated');
  }

  // If condition meet
  let x = 0;
  for (let i of Object.values(passWordChecks)) {
    if (!i) {
    }else{
      x += 1;
      };
    if (x === objPassChecksLength){
      valPassImg.src = successIcon;
      valPassP.innerHTML = 'Contraseña valida'
      valPassP.classList.add('jsValidated');
      form_input_password.classList.remove('unvalidatedPassword');
    }else{
      valPassImg.src = failIcon;
      valPassP.innerHTML = 'Contraseña no valida'
      valPassP.classList.remove('jsValidated');
      form_input_password.classList.add('unvalidatedPassword');
    };
  };

  // Count for prgress bar
  fncProgressVar();

};

// Password Validation
form_input_password.addEventListener('keyup',(e)=>{
  passWordValidation();
});

// Name Validation

form_input_usuario.addEventListener('keyup',(e)=>{
  if(!passLenghtMin(form_input_usuario.value)){
    divUserErr.classList.add('showContainer');
   for (let i of divUserErr.children){
      if(i.classList.contains('err_p')){
        i.classList.remove('jsValidated');
        i.innerHTML = 'Nombre no valido'
      }else if(i.tagName == 'IMG'){
        i.src = failIcon;
      }
    }
  }else{
    for (let i of divUserErr.children){
      if(i.classList.contains('err_p')){
        i.classList.add('jsValidated');
        i.innerHTML = 'Nombre Valido'
      }else if(i.tagName == 'IMG'){
        i.src = successIcon;
      }
    
    }
  }
});

// Email Validation 

form_input_email.addEventListener('keyup',(e)=>{
   if(!passLenghtMin(form_input_email.value)){
    divEmailErr.classList.add('showContainer');
   for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.remove('jsValidated');
        i.innerHTML = 'Email no valido'
      }else if(i.tagName == 'IMG'){
        i.src = failIcon;
      }
    }
  }else{
    for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.add('jsValidated');
        i.innerHTML = 'Email Valido'
      }else if(i.tagName == 'IMG'){
        i.src = successIcon;
      }
    }
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



