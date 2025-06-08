//  a) Selecciona la secció (section) amb un identificador “container” sense utilitzar querySelector.
const containerId = document.getElementById('container');

// b) Selecciona la secció (section) amb un identificador “container” mitjançantquerySelector.
const containerQ = document.querySelector('#container');

// c) Selecciona tots els elements que hi hagi en una llista amb una classe “second”.
const ulHtml = document.querySelector('ul').getElementsByClassName('second');
console.log(ulHtml);
console.log("[0]",ulHtml[0].textContent)

const ulHtmlElement = document.getElementsByTagName('ul');
console.log("UlElemen",ulHtmlElement);
// const ulLiFirts = ulHtml.getElementsByClassName('second');
// console.log(ulLiFirts);

// d) Selecciona un element de la llista amb una classe “third”, però només l'element de la llista ordenada.
const olHtml = document.querySelector('ol').getElementsByClassName('third');
console.log(olHtml);
const olLi = olHtml[0];
console.log(olLi);

// e) Afegeix el text "Hola!" al final de la secció amb un identificador de contenidor.
containerId.append("Hola!");
// f) Afegeix la classe “main” al div amb una classe “footer”.
const divFooter = document.querySelector('.footer');
divFooter.classList.add('main1');
console.log(divFooter);

console.log(divFooter);
const divFooterC = document.getElementsByClassName('footer');
divFooterC[0].classList.add('main2');
console.log(divFooterC);

// g) Treu la classe “main” del div amb una class “footer”.
divFooter.classList.remove('main1');
console.log(divFooter);

divFooterC[0].classList.remove('main2');
console.log(divFooterC[0]);

// h) Crea un element li nou.
let nouElement = document.createElement('li');
console.log(nouElement);

// i) Dona-li a l’element li el text "four".
var nouElementText = document.createTextNode('Four');
nouElement.appendChild(nouElementText);
console.log("textNode:",nouElement.textContent);

var textPrueba = "Hola";
nouElement.textContent = textPrueba;
console.log("textContent:",nouElement.textContent);

// textNode añade el nodo texto
nouElement.appendChild(nouElementText);
console.log("textNode:",nouElement.textContent);

// textContetn sobescribe todo el contenido textual del elemnto
nouElement.textContent = textPrueba;
console.log("textContent:",nouElement.textContent); 

// Iteraciones en textNode de un elemento 
// childNodes devuelve absoulamente todos los nodos hijos decendientes del elemnto, es decir un NodeList
console.log("lenght of childNodes:",ulHtmlElement[0].childNodes.length)
// children solo deveulve descendientes de nodos tipo elementos, es decir HTMLCollection
console.log("lenght of children:",ulHtmlElement[0].children.length)

// Iteración sobre NodeList, borrar el nodo que en su textContent sea  = one
for (let i = 0; i< ulHtmlElement[0].childNodes.length; i++){
  if(ulHtmlElement[0].childNodes[i].textContent === 'one'){
    ulHtmlElement[0].childNodes[i].remove();
  }
}
    console.log("nodo: ",ulHtmlElement[0].childNodes[3].textContent);

// j) Afegeix l’element li a l'element ul.
ulHtmlElement[0].appendChild(nouElement);

// k) Passa per tots els elements de la llista ordenada i dona’ls un color de fons de color "verd".
const olElement = document.querySelector('ol');
console.log(olElement.children.length)
console.log(olElement);

for (let i = 0; i<olElement.children.length; i++){
  if(olElement.children[i].tagName === 'LI'){
    olElement.children[i].classList.add('greenBk');
  }
}

// l) Elimina el div amb una classe “footer”.
const divElements = document.querySelectorAll('div');
for (let i = 0; i<divElements.length; i++){
  if(divElements[i].tagName === 'DIV' && divElements[i].classList.contains('footer')){
    divElements[i].remove();
  }
}
// Creacion de una colecion 

const objcCollection = [];
objcCollection.push  ({
  name: "Manolo",
  age: 20,
  alias: "Manu",
  joined: Date().toLocaleLowerCase()
});
objcCollection.push  ({
  name: "Josardo",
  age:30,
  alias: "Josito",
  joined: Date().toLocaleLowerCase()
});
objcCollection.push  ({
  name: "Orco",
  age: 18,
  alias: "Orki",
  joined: Date().toLocaleLowerCase()
});

console.log(objcCollection);  

console.log(objcCollection.length) // Ni existe children ni childNodes
let mayores = [];
for (let i = 0; i < objcCollection.length; i++){
  if(objcCollection[i].age > 18){
    mayores.push(objcCollection[i].name)
  };
}
console.log(mayores);