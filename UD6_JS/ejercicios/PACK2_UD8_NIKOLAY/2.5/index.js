// Declaración de elementos html
let html_ul = document.querySelector('ul');

// Declaración de los botones
let btn_add_task = document.getElementById('btn_add_task');
let btn_remv_firts = document.getElementById('btn_remv_firts');
let btn_remv_last = document.getElementById('btn_remv_last');

// Declaracion de variables <li>

// btn_add_task event listener pront
btn_add_task.addEventListener('click',()=> {
  let var_li = document.createElement('li'); // Debe de ir dentro de la función anonima para volverse a crear cada vez
  let var_task = prompt("Enter a new task to the list");
  var_li.textContent = var_task;
  html_ul.append(var_li);
});

// btn_remv_firts event listener
btn_remv_firts.addEventListener('click',()=> {
  if(html_ul.firstElementChild){
    html_ul.removeChild(html_ul.firstElementChild)
  }
});

// btn_remv_last event listener
btn_remv_last.addEventListener('click',()=>{
  if(html_ul.lastElementChild){
    html_ul.removeChild(html_ul.lastElementChild)
  }
});

