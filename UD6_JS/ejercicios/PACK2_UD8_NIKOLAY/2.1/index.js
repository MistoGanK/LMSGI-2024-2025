// Variables que almacenaran height y width
let currentWidth;
let currentHeight;

// Variables <p> del Dom que mostraremos el contenido
let p_width = document.getElementById('p_width');
let p_height = document.getElementById('p_height')

// Funcion height y width 
function getWidth(){
  return window.innerWidth; 
};
function getHeight(){
  return window.innerHeight;
};

// Inicializar las <p>
p_width.innerHTML = window.innerWidth;
p_height.innerHTML = window.innerHeight;
// Event listener de cambio de la pantalla 

window.addEventListener('resize', () => {
  p_height.innerHTML = getHeight();
  p_width.innerHTML = getWidth();
});