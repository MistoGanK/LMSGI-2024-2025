// Variables de los elementos HTML 
let body_html = document.getElementById('body_html'); 
let section_html = document.getElementById('section_html');
let pop_up_container = document.getElementById('pop_up');
let btn_accept = document.getElementById('btn_accept');
let btn_decline = document.getElementById('btn_decline');

// Mostrar POP up al cargar la pagina
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    pop_up_container.classList.add('show_container');
    body_html.classList.add('black_light_background');

  },1000);
});

// Función Aparición del pop up
function show_pop_up(){
  setTimeout(()=>{
    // Limiar las clases antes añadidas
    pop_up_container.classList.remove('hide_container');
    pop_up_container.classList.add('show_container');

    body_html.classList.remove('white_background');
    body_html.classList.add('black_light_background');

    section_html.classList.remove('fade_out');

  },2500);
};

// Buttons event listeners

btn_decline.addEventListener('click',()=>{
  alert("Que grosero!");
  // Aplicar primero el fadeout
  section_html.classList.add('fade_out');

  setTimeout(()=>{
    body_html.classList.add('white_background');
    pop_up_container.classList.add('hide_container');
    show_pop_up();
    },400); 

});

btn_accept.addEventListener('click', () =>{
  alert("Quien acepta sin preguntar?");
  section_html.classList.add('fade_out');

  setTimeout(()=>{
    body_html.classList.add('white_background');
    pop_up_container.classList.add('hide_container');
    show_pop_up();
    },400); 

});



