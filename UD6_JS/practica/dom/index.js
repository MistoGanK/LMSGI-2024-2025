// Dom
// console.log(document);
// console.log(document.title);
// console.log(document.location);
// console.log(document.head);
// console.log(document.body);

const contenidor = document.getElementById("container");
console.log(contenidor);

// Se puede iterar, esta en vivo
const items = document.getElementsByClassName=("item");
console.log(items);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);

const contenidor2 = document.querySelector("#container");
console.log(contenidor2);

const primerItem = document.querySelectorAll(".item");
console.log(primerItem);

const hijoItem = document.querySelector("ul .item");
console.log(primerItem);

// const ul = document.querySelector("ul");
// console.log(ul.querySelectorAll(".item"));

console.log(document.getElementsByName("titol"));
console.log(document.getElementsByTagName("li"));

// Añadir elementos con JS

var text = "Element 5";
var li = document.createElement("li"); 
var textNode = document.createTextNode(text); // Crea el elemento
li.appendChild(textNode); // Añade contenido txt al texto
li.setAttribute("class","item");
li.name = "hola";

console.log(li);

// Insertar elementos en la ultima posición
const ul = document.querySelector("ul");
ul.appendChild(li); // Añade elemento <li> al <ul>, en la ultima posición

// Insertar un elemento es posición especificada
const header  = document.createElement("header"); // Crear el elemento
var textHeader = document.createTextNode("Hola"); // Crear el contenido del elemento
header.appendChild(textHeader); // Insertar el contenido al elemento

const h1 = document.querySelector("h1");
const pare = h1.parentNode;
console.log(pare);
pare.insertBefore(header, h1); // Especificas del padre del header, despues de que elemento se insertara el elemento h1
// pare.removeChild(header,h1) // Especificas el primer elemento que remplazara al segundo elemento

//removeChild
// header.removeChild(textHeader); // Elimina el contenido de un elemento
console.log(header.firstChild);

header.removeChild(header,firstChild);

const h1_new = document.createElement("h1");

// h1_new.innerHTML = "<span>Titol nou</span>"; // Interpreta e incerta
// h1_new.textContent = "<span>Titol nou</span>"; // No interpreta, inserta
// h1_new.textContent = "<span>Titol nou</span>"; // No interpreta, inserta


const newTextHeader = document.createTextNode("new tittle");
h1_new.appendChild(newTextHeader);
header.appendChild(h1_new);
h1.remove();

pare.removeChild(h1_new,h1);

// contenidor.innerHTML += "<p>Aixo es un tercer paragraf</p>"; // Interprete + texto
// contenidor.innerHTML += `<p class="${tercer}">Aixo es un ${tercer} paragraf</p>`; // Interprete + textp + varaibles

const a = document.querySelector("a");
a.target = "_blank";
a.href = "https://google.com";

// a.replaceChild(textHeader,a.firstChild);
// a.textContent = "Hola";

console.log(a.hasAttribute("target"));
// a.toggleAttribute("class","show");

console.log(a.attributes[0]); // Muestra todos los atributos del elemento en formato array

// Modificaciones de estilo
li.style.color = "red";
li.style.fontSize = "24 px"; // Modificas directamente el estilo
li.style["font-size"] = "24 px"; // Accedes la propiedad del estilo y modificas

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("click");
});
