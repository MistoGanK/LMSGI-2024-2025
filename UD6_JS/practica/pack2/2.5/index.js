const htmlUlElement = document.querySelector('ul');
const btn_add_task = document.getElementById('btn_add_task');
const btn_remv_firts = document.getElementById('btn_remv_firts');
const btn_remv_last = document.getElementById('btn_remv_last');


function newLi(){
  let newLi = document.createElement('li');
  let varPrompt = prompt("Nuevo elemento: ");
  let liContent = document.createTextNode(varPrompt);
  newLi.appendChild(liContent);

  console.log(newLi, newLi.textContent);
  return newLi;
}

btn_add_task.addEventListener('click',()=>{
  htmlUlElement.appendChild(newLi());
});

btn_remv_firts.addEventListener('click',()=>{
  htmlUlElement.children[0].remove();
});

btn_remv_last.addEventListener('click',()=>{
  var lastEl = (htmlUlElement.childElementCount)-1;
  console.log(lastEl);
  htmlUlElement.children[lastEl].remove();
});