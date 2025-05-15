// Investigar el target dentro de <li>, con if comprovar si <li> tiene clase o no 

// Declaración de elementos HTML
let input_task = document.getElementById('task_input');

let btn_add_task = document.getElementById('add_task');

let ul_task_list = document.getElementById('task_list');

// Variables declaration
let var_input_content = '';

// Event listener of input 
input_task.addEventListener('input',()=>{
  var_input_content = input_task.value;
  console.log(var_input_content); // En input se usa .value en vez de textContent
});

function fnc_add_task(){
  input_string_value = input_task.value.trim(); // Coger el valor del input y eliminar espacios en blanco comienzo/final
  // Validamos que NO este vacio el input, caso contrario devolver y no hacer nada
  if(input_string_value === '') return;
  // Crear elemento <li>
  let var_li = document.createElement('li'); // Crear elemento <li> en cada llamada
  // Crear elemento <button>
  let var_button = document.createElement('button');
  var_button.classList.add('class_btn_del');
  var_button.append('Eliminar');
  // Crear elemento <p>
  let var_p = document.createElement('p');
  var_p.classList.add('class_p_del');
  var_p.append(input_string_value); // Introducirle el input value
  // Juntar el <p> y <button> al <li>
  var_li.append(var_p,var_button);
  // Añadirla al contenedor lista padre <ul>
  ul_task_list.appendChild(var_li);
  // Resetear el campo input
  input_task.value = '';
};

function fnc_complete_task(){
  var_p.classList.classList.add('completed_tasks_style');
};

// Event listener btn_add_task
btn_add_task.addEventListener('click',fnc_add_task);
// Event listener "enter input"
input_task.addEventListener('keydown',(event)=>{ // El (event) es el objeto del propio evento
  if(event.key === 'Enter'){
    fnc_add_task();
  }
});


// Event listener var_p
var_p.addEventListener('click',fnc_complete_task);