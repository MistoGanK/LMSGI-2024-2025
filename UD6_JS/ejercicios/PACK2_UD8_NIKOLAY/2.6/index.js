// Investigar el target dentro de <li>, con if comprovar si <li> tiene clase o no 

// Declaración de elementos HTML
let input_task = document.getElementById('task_input');

let btn_add_task = document.getElementById('add_task');

let ul_task_list = document.getElementById('task_list');

let select_filter = document.getElementById('filter');

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
    var_button.append('Eliminar');
    // Crear elemento <p>
    let var_p = document.createElement('p');
    var_p.append(input_string_value); // Introducirle el input value
    // Juntar el <p> y <button> al <li>
    var_li.append(var_p,var_button);
    // Añadirla al contenedor lista padre <ul>
    ul_task_list.appendChild(var_li);
    // Resetear el campo input
    input_task.value = '';
    console.log(ul_task_list);
  
  };

function fnc_complete_task(){
  var_p.classList.toggle('completed_tasks_style'); 
};

// Event listener btn_add_task
btn_add_task.addEventListener('click',fnc_add_task);
// Event listener "enter input"
input_task.addEventListener('keydown',(event)=>{ // El (event) es el objeto del propio evento
  if(event.key === 'Enter'){ // Si detecta que la tecla presionada es enter, ejecuta la función
    fnc_add_task();
  }
});
// Event listener sobre <ul>
// El event en el event listener escucha cualquier evento dentro del contenedor, por lo que se puede aplicar sobre el propio evento
// Funciones para indentificar que se hace o que se indentifica sobre el elemnto clickado
ul_task_list.addEventListener('click',event =>{
  if (event.target.matches('p')){ // Si detecta que se ha hecho click en <p>, se aplica la clase
    event.target.classList.toggle('completed_tasks_style');

  }else if(event.target.matches('button')){ // Detecta si se ha hecho click en <button>
    // Buscamos el <li> padre
    let li = event.target.closest('li'); // Al referenciar el <li> mas sercano, obtenemos el contenedor padre ya que button esta dentro de <li>
    // Si no es, retorna nada
    if (!li) return;

    // Buscamos dentro del <li> el <p> y comprovamos su clase
    let p = li.querySelector('p'); // Una vez tengamos el <li>, substraemos el elemento <p>
    if (p.classList.contains('completed_tasks_style')){  // Si la <p> substraida contiene la classe, la eliminamos
      // Eliminar el <li> entero
      li.remove();
    }
  }

});

// Event listener del select filter
select_filter.addEventListener('change',()=>{
  // Guardar en una variable el valor actual 
  let selected_value = select_filter.value;
  // Comparamos el valor 
  if (selected_value === 'all'){
    // console.log("todos"); // Debug
    for (let li of ul_task_list.children){
      li.classList.remove('hide_container');
    }
  }
  // For loop cada hijo de <ul>, se asume que son elementos <li>
  else if(selected_value === 'completed'){
    // console.log("completados") // Debug
    for (let li of ul_task_list.children){ // Iteramos sobre cada li y selecionaremos todos los elementos <p>
      let p = li.querySelector('p'); 
      // La comprovación la haremos sobre la clase de <p> y posteriormente enseñaremos o esconderemos el <li>
      if(p.classList.contains('completed_tasks_style')){
        li.classList.remove('hide_container');
        li.classList.add('show_container');
      }else{
        li.classList.remove('show_container');
        li.classList.add('hide_container');
      }
    }
  }
  else if(selected_value === 'pending'){
    // console.log("Pendientes") // Debug
    for (let li of ul_task_list.children){
        let p = li.querySelector('p'); 
      if(p.classList.contains('completed_tasks_style')){
        li.classList.remove('show_container');
        li.classList.add('hide_container');
      }else{
        li.classList.remove('hide_container');
        li.classList.add('show_container');
      }
    }
  }
  else{
    return; // Control por si se incerta manualmente una clase inexsitente?
  }
});