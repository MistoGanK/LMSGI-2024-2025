const htmlBody = document.querySelector('body');
const section_html = document.getElementById('section_html');
const pop_up = document.getElementById('pop_up');
const btn_show = document.getElementById('btn_show');
const btn_accept = document.getElementById('btn_accept');
const btn_decline = document.getElementById('btn_decline');


function showModal (){
  btn_show.classList.toggle('hide_container');
  pop_up.classList.toggle('show_container');
  htmlBody.classList.toggle('black_light_background');
};


btn_show.addEventListener('click',()=>{
  showModal();
});
btn_accept.addEventListener('click',()=>{
  alert("Has aceptado");
  showModal();
});
btn_decline.addEventListener('click',()=>{
  showModal();
});
