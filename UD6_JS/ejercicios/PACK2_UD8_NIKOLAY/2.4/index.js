// a) Selecciona la secció (section) amb un identificador “container” sense utilitzar querySelector.
let section_id = document.getElementById('container');
console.log(section_id); // Debug

// b) Selecciona la secció (section) amb un identificador “container” mitjançant querySelector.
let section_query = document.querySelector('#container'); // Con querySelector has de especificar "que selecionamos"
console.log(section_query); // Debug

// c) Selecciona tots els elements que hi hagi en una llista amb una classe“second”.
let li_class_second = document.getElementsByClassName('second');
console.log(li_class_second); // Devuelve una coleción HTML, HTMLCollection, para acceder individualmente al elemnto con [n]

// d) Selecciona un element de la llista amb una classe “third”, però només l'element de la llista ordenada.
let lista_organizada_third = document.querySelectorAll('ol .third'); // Funcionamiento indentico al selector CSS
console.log(lista_organizada_third); // Debug

// e) Afegeix el text "Hola!" al final de la secció amb un identificador de contenidor.
section_id.append("Hola!") // Añade texto puro al final del Elemento

// f) Afegeix la classe “main” al div amb una classe “footer”.
let div_footer = document.querySelector('.footer');
div_footer.classList.add('main'); // No se modificar directamente con getElementsByClassName porque devuelve un NodeList y se ha de iterar en los elementos
console.log(div_footer); // Debug

// g) Treu la classe “main” del div amb una class “footer”.
div_footer.classList.remove('main') // Las clases se gestionan con classList 
console.log(div_footer); // Debug

// h) Crea un element li nou.
let li_elment = document.createElement('li');
console.log(li_elment); // Debug

// i) Dona-li a l’element li el text "four".
li_elment.textContent = "four"
console.log(li_elment,li_elment.textContent); // Debug

// j) Afegeix l’element li a l'element ul.
let ul_element = document.querySelector('ul');
ul_element.append(li_elment);

// k) Passa per tots els elements de la llista ordenada i dona’ls un color de fons de color "verd".
list_organizada = document.querySelectorAll('ol li'); // Obtenemos todos los elemntos de <li> de <ol>
list_organizada.forEach((li,indice)=>{ // li es el nodo <li> y indice la posición
  li.style.backgroundColor = '#9ac244';
});

// l) Elimina el div amb una classe “footer”.
div_footer.remove();