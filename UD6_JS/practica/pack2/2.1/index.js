const p_height = document.getElementById('p_height');
const p_width = document.getElementById('p_width');
// Inizialization
  p_height.innerHTML = window.innerHeight;
  p_width.innerHTML = window.innerWidth;
window.addEventListener('resize',(e)=>{
  p_height.innerHTML = window.innerHeight;
  p_width.innerHTML = window.innerWidth;
});