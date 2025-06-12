const task_input = document.getElementById('task_input');
const add_task = document.getElementById('add_task');
const filter = document.getElementById('filter');
const task_list = document.getElementById('task_list');

function addTask(input){
  var var_li = document.createElement('li');

  var var_p = document.createElement('p');
  var var_button = document.createElement('button');

  var p_content = document.createTextNode(input.value);
  var_p.appendChild(p_content);

  var button_content = document.createTextNode('Eliminar');
  var_button.appendChild(button_content);

  var_li.append(var_p,var_button);

  return var_li;
};

add_task.addEventListener('click',()=>{
  task_list.appendChild(addTask(task_input));
  task_input.value = "";
  console.log("last element child",task_list.lastElementChild)

});


task_input.addEventListener('keydown',(e)=>{
  if (e.key === 'Enter'){
    task_list.appendChild(addTask(task_input));
    task_input.value = "";
    console.log("last element child",task_list.lastElementChild)
    }
  }

);
console.log("last element child",task_list.lastElementChild)

task_list.addEventListener('click',(e)=>{
  if(e.target.matches('p')){
    e.target.classList.toggle('completed_tasks_style');
  }else if(e.target.matches('button')){
    // Obtenemos el elemnto li
    let var_li = e.target.closest('li');
    let var_li_p = var_li.querySelector('p');
    if(var_li_p.classList.contains('completed_tasks_style')){
      var_li.remove();
    }
  }
}); 

filter.addEventListener('change',()=>{
  // get al child elements from the ul
  const var_ul_li = task_list.children;
  if(filter.value === 'all'){
      for(let i = 0; i<var_ul_li.length; i++){
        var_ul_li[i].classList.remove('hide_container');
      }
  }else if (filter.value === 'completed'){
    for(let i = 0; i <var_ul_li.length;i++){
        var li_p = var_ul_li[i].querySelector('p');
      if (li_p.classList.contains('completed_tasks_style')){
        var_ul_li[i].classList.remove('hide_container');
        var_ul_li[i].classList.add('show_container');
      }else{
        var_ul_li[i].classList.remove('show_container');
        var_ul_li[i].classList.add('hide_container');
      }
    }
  }else if (filter.value === 'pending'){
    for(let i = 0; i<var_ul_li.length;i++){
        var li_p = var_ul_li[i].querySelector('p');
      if(!li_p.classList.contains('completed_tasks_style')){
          var_ul_li[i].classList.remove('hide_container');
          var_ul_li[i].classList.add('show_container');
      }else{
        var_ul_li[i].classList.remove('show_container');
        var_ul_li[i].classList.add('hide_container');
      }
    }    
  }
});

