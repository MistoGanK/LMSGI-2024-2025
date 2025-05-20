const div = document.querySelector('div');
const p = document.querySelector('p');
const button = document.querySelector('button');

// Varios eventos dentro del mismo contenedor
div.addEventListener('click',()=>{
  console.log("click div");
});
p.addEventListener('click',()=>{
  console.log("click p");
});
button.addEventListener('click',(e)=>{
  console.log("click button");
  e.stopPropagation();
});

const a = document.getElementsByTagName('a');
console.log(a[0]);

a[0].addEventListener('click',(e)=>{
  if(!confirm("Seguro mi bro?")){
    e.preventDefault();
  };
});

const img = document.getElementsByTagName('img');
img[0].addEventListener('contextmenu',(e)=>{
  e.preventDefault();
});