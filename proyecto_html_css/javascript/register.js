// Usuari (Arrat de objetos usuario)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Const redirection link
const indexHtml = '../index.html';
const adminHtml = 'admin.html';

// HTML VARIABLES
let register_form = document.getElementById('register_form');
let form_container = document.querySelector('.form_container');
let user_selection = document.querySelector('.user_selection');

// Inputs
let form_input_usuario = document.getElementById('usuario');
let form_input_email = document.getElementById('email');
let form_input_password = document.getElementById('password');
let form_input_rePassword = document.getElementById('rePassword');
let html_form = document.getElementsByName('form');

let userTypeSelection = document.getElementsByName('typeUser');
let userReaderLabel = document.querySelector('label[for="userReader"]');
let userAdminLabel = document.querySelector('label[for="userAdmin"]');

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
 
// Submit disabled on preset
let submit_button = document.getElementById('submit_button');

// Password Section
const imgEyeOpen = '../assets/icons/visibility_100dp_12130F_FILL0_wght500_GRAD0_opsz48.svg'; 
const imgEyeClosed ='../assets/icons/visibility_off_100dp_666666_FILL0_wght500_GRAD0_opsz48.svg'

let imgEye = document.getElementById('imgEye');
let imgEye2 = document.getElementById('imgEye2');

let btn_pw_visibility = document.getElementById('btn_pw_visibility');
let btn_pw_visibility2 = document.getElementById('btn_pw_visibility2');

// Password Booleans
let passWordChecks = {
  boolLengthMax: false,
  boolLengthMin: false,
  boolLowerCase: false,
  boolUpperCase: false,
  boolNumber: false,
  boolSpecial: false,
};
// Email Boolean
let emailBoolean = false;
// User Boolean
let userBoolean = false;

let samePassWord = false;

const objPassChecksLength = Object.keys(passWordChecks).length;

// Function display/hide password (btn_pw_visibility (e) )
function passwordVisibility(e){
  if (form_input_password.type === 'password'){
      form_input_password.type = 'text';
      imgEye.src = imgEyeOpen;
  }else{
    form_input_password.type = 'password';
    imgEye.src = imgEyeClosed;
  }
};

function passwordVisibility2(e){
  if(form_input_rePassword.type === 'password'){
    form_input_rePassword.type = 'text';
    imgEye2.src = imgEyeOpen;
  }else{
    form_input_rePassword.type = 'password';
    imgEye2.src = imgEyeClosed;
  }
};

function checkSamePassword(e){
  if(form_input_password.value === form_input_rePassword.value){
    samePassWord = true;
    form_input_rePassword.classList.remove('unvalidatedPassword');
  }else{
    samePassWord = false;
    form_input_rePassword.classList.add('unvalidatedPassword');
  }
};

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
// If we want to implement no spaces inside
function passNospaces(pass){
  return /[\s/]/.test(pass);
};

// Show preset validation password
form_input_password.addEventListener('focus',(e)=>{
  jsPassWordValidator.classList.add("showContainer");
  passProgress.classList.add("showContainer");
  progressDiv.classList.add('pwVeryWeak');

});
// form_input_password.addEventListener('blur',(e)=>{
//   jsPassWordValidator.classList.remove("showContainer");
//   passProgress.classList.remove("showContainer");
// });

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

function passWordChecking () {
// Checks if any boolean is false
  for (let i of Object.values(passWordChecks)) {
    if (!i) {
      return false; 
    }
  }
  return true;
};

// Name Validation
function userValidation(e){
  if(!passLenghtMin(form_input_usuario.value)){
      userBoolean = false;
      divUserErr.classList.add('showContainer');
      form_input_usuario.classList.add('unvalidatedPassword');
     for (let i of divUserErr.children){
        if(i.classList.contains('err_p')){
          i.classList.remove('jsValidated');
          i.innerHTML = 'Nombre no valido'
        }else if(i.tagName == 'IMG'){
          i.src = failIcon;
        }
      }
    }else{
      userBoolean = true;
      form_input_usuario.classList.remove('unvalidatedPassword');
      for (let i of divUserErr.children){
        if(i.classList.contains('err_p')){
          i.classList.add('jsValidated');
          i.innerHTML = 'Nombre Valido'
        }else if(i.tagName == 'IMG'){
          i.src = successIcon;
        }
      }
    }
};

// Email Validation 
function emailValidation(e){
   if(!passLenghtMin(form_input_email.value) || !passLenghtMax(form_input_email.value)){
    emailBoolean = false;
    divEmailErr.classList.add('showContainer');
    form_input_email.classList.add('unvalidatedPassword');
   for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.remove('jsValidated');
        i.innerHTML = 'Email no valido'
      }else if(i.tagName == 'IMG'){
        i.src = failIcon;
      }
    }
  }else{
    emailBoolean = true;
    form_input_email.classList.remove('unvalidatedPassword');
    for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.add('jsValidated');
        i.innerHTML = 'Email Valido'
      }else if(i.tagName == 'IMG'){
        i.src = successIcon;
      }  
    }
  }
};

function getSelectedUser(radioButtons){
  for (let i =  0; i < radioButtons.length; i++){
    if(radioButtons[i].checked){ // Comprueva los radios buttons en check
      return radioButtons[i].value // Devuelve el valor 
    }
  }
    return null; // Si no hay selecionados
};

// Shake effect 
function shakeField(e) {
  e.classList.add('shake_active');

   setTimeout(() => {
    e.classList.remove('shake_active');
  }, 320);
};

form_input_email.addEventListener('blur',(e)=>{
  let emailValue = form_input_email.value;
  let emailFreagment = emailValue.split('@');

  form_input_usuario.value = emailFreagment[0];
});

// Password prevent copyPaste
form_input_password.addEventListener('paste',(e)=>{
  e.preventDefault();
});

// Password Validation
form_input_password.addEventListener('keyup',(e)=>{
  passWordValidation();
});
form_input_rePassword.addEventListener('keyup',(e)=>{
  checkSamePassword(e);
});
// Passwrod Visibility
btn_pw_visibility.addEventListener('click',(e)=>{
  passwordVisibility(e);
});
btn_pw_visibility2.addEventListener('click',(e)=>{
  passwordVisibility2(e);
});

form_input_usuario.addEventListener('keyup',(e)=>{
  userValidation(e);
});

form_input_email.addEventListener('keyup',(e)=>{
  emailValidation(e);
});

// Booleans for localStorage

let userLocalBoolean = false;
let emailLocalBoolean = false;
let passWordLocalBoolean = false;

// Local Storage Functions
function checkExistUser(userContent){
  const isUserRegistered = users.find(user => user.user === userContent);
  if (isUserRegistered){
      userLocalBoolean = true;
      shakeField(form_input_usuario);
      divUserErr.classList.add('showContainer');
      form_input_usuario.classList.add('unvalidatedPassword');
     for (let i of divUserErr.children){
        if(i.classList.contains('err_p')){
          i.classList.remove('jsValidated');
          i.innerHTML = 'Nombre ya registrado'
        }else if(i.tagName == 'IMG'){
          i.src = failIcon;
        }
      }
  }else{
      userLocalBoolean = false;
      form_input_usuario.classList.remove('unvalidatedPassword');
      for (let i of divUserErr.children){
        if(i.classList.contains('err_p')){
          i.classList.add('jsValidated');
          i.innerHTML = 'Nombre Valido'
        }else if(i.tagName == 'IMG'){
          i.src = successIcon;
        }
      }
  }
}

function checkExistEmail(emailContent){
   const isEmailRegistered = users.find (user => user.email === emailContent);
   if (isEmailRegistered){
    emailLocalBoolean = true;
    shakeField(form_input_email);
    divEmailErr.classList.remove('showContainer');
    divEmailErr.classList.add('showContainer');
    form_input_email.classList.remove('unvalidatedPassword');
    form_input_email.classList.add('unvalidatedPassword');
   for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.remove('jsValidated');
        i.innerHTML = 'Email ya registrado'
      }else if(i.tagName == 'IMG'){
        i.src = failIcon;
      }
    }
  }else{
    emailLocalBoolean = false;
    form_input_email.classList.remove('unvalidatedPassword');
    for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.add('jsValidated');
        i.innerHTML = 'Email Valido'
      }else if(i.tagName == 'IMG'){
        i.src = successIcon;
      }  
    }
  }
}
function checkExistsPassword(passWordContent){
  const isPassWordRegistered = users.find (user => user.password == passWordContent);
  if (isPassWordRegistered){
    passWordLocalBoolean = true;
    shakeField(form_input_email);
    divEmailErr.classList.add('showContainer');
    form_input_email.classList.add('unvalidatedPassword');
   for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.remove('jsValidated');
        i.innerHTML = 'Contraseña ya registrada'
      }else if(i.tagName == 'IMG'){
        i.src = failIcon;
      }
    }
  }else{
    passWordLocalBoolean = false;
    form_input_email.classList.remove('unvalidatedPassword');
    for (let i of divEmailErr.children){
      if(i.classList.contains('err_p')){
        i.classList.add('jsValidated');
        i.innerHTML = 'Contraseña Valida'
      }else if(i.tagName == 'IMG'){
        i.src = successIcon;
      }  
    }
  }
}

function addUser(userContent, emailContent, passWordContent, userType) {
  // Check for any duplicated data
  checkExistUser(userContent);
  checkExistEmail(emailContent);
  checkExistsPassword(passWordContent);
  
  // If all condition meet insert the user
  if (!userLocalBoolean && !emailLocalBoolean && !passWordLocalBoolean) {
    users.push({
      user: userContent,
      email: emailContent,
      password: passWordContent,
      usertype: userType
    });
    
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser",JSON.stringify({
      user: userContent,
      email: emailContent,
      userType: userType
    }));
    
    console.log("User registered on LocalStorage");

    // Añadir al usuario
    
    // Reset the fields after 
    form_input_usuario.value = "";
    form_input_email.value = "";
    form_input_password.value = ""; 
    form_input_rePassword.value = ""; 

    // Redireccionamiento según usuario
    if (userType === 'userReader') {
      window.location.href = indexHtml;
    } else {
      window.location.href = adminHtml;
    }
  } else {
    console.log("User exists on Local Storage");
    return;
  }
};

// Submit prevent default control 
function formSubmitControl (e){ // Target the event of the field
  
  e.preventDefault(); 
  // Comprovación de los booleans
  passWordValidation(); 
  emailValidation(form_input_email);
  userValidation(form_input_usuario); 
  checkSamePassword(); 

  const isPasswordValid = passWordChecking(); // Save the result of true or false

  if(isPasswordValid && emailBoolean && userBoolean && samePassWord){
    console.log('Conditions meet, submit form');

    // Obtener valores del formulario
    const username = form_input_usuario.value;
    const email = form_input_email.value;
    const password = form_input_password.value;

    // Obtener el rol seleccionado por el usuario
    const selectedRole = getSelectedUser(userTypeSelection);

    // Validar que se haya seleccionado un rol
    if (selectedRole === null) {
        console.log('Error: No se ha seleccionado un tipo de usuario (Lector o Admin).');
        shakeField(user_selection); 
        return; 
    }
      addUser(username,email,password,selectedRole);

      passWordValidation();
      checkSamePassword();
      userValidation(form_input_usuario);
      emailValidation(form_input_email);

      // Redirigir a admin on index
      
  }else{
    console.log('Conditions not meet, prevent submit form');
    // Hight Light Fields for user Feedback and shake container
    shakeField(form_container);
    if (!isPasswordValid){
      passWordValidation(e);
    };
    if(!emailBoolean){
      emailValidation(e);
    }else{

    };
    if(!userBoolean){
      userValidation(form_input_usuario);
    }else{

    };
    if(!samePassWord){
      checkSamePassword(e);
    }else{

    }
  };
  
};

register_form.addEventListener('keypress',(e) =>{ 
  if (e.key === 'Enter'){
    console.log("Submit controled from enter")
    formSubmitControl(e);
  }
});

register_form.addEventListener('submit', (e) => {
      formSubmitControl(e);
      console.log("Submit controled from button")
});
