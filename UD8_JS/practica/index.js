console.log("Hola amigos de youtube");

//Variables
{
  var x = 1; //Variables VAR pueden ser llamados fuera de bloques
}
console.log(x);
/*Todas las funciones son iguales en JS (NO hay distinción con constructor o no)*/
/* Fucniones con return o no*/
function fc(){
  console.log("Soy una funcion uwU");
  return "pepito";
};

fc();

function f(){
  var a = 10
  console.log(a)
  var a = 11 // Variable VAR permite redeclararse DENTRO del mismo BLOQUE
};

f();

function suma(a,b){
  return a+b;
}
console.log("suma()",suma(2,2));

const suma2 = (a,b) => a+b;
console.log("suma2 = (a,b)",suma2);

let y = 2;
console.log(y);

const w = 3;
console.log(w);

//Objetos
const persona = {nom:"Ana",edat:25};
console.log(persona);
persona.edat = 30;
console.log(persona);

//Tipo
console.log(typeof x);
console.log(typeof persona);
var b = null;
console.log(typeof b);
var c;
console.log(typeof c);
var d = undefined;
console.log(typeof d);

//Comprovaciones
console.log(y == w);
var palabra = "palabra";
var numero = 2;
console.log(palabra+numero); //Concatena y devuelve STRING si hay un STRING
console.log(palabra/numero);

/*
--Comparadores

== (Igual)
=== (Igual en valor y tipo)

*/

//Parse
let e = "5";
console.log(typeof e);
console.log(typeof +e); //Si se puede interpretar como "Numero" se le puede parsear asi

var f = "4.14";
console.log(typeof Math.trunc(f));

//Arrays
var nums = [1,2,3,4,5,'flafdsa'];
console.log(nums)
console.log("Posicion: 3: ",nums[2]);

let arrayNums = new Array();
arrayNums[0] = 4;
arrayNums[1] = 4;

console.log(arrayNums);

let arrayNombres = new Array('Nikolay','Joshy','Juanjo');
console.log(arrayNombres);

let nums1 = new Array(10);
console.log(nums1);
console.log(typeof nums1[0]);
console.log(typeof nums1);

let nums2 = new Array(5).fill(0);
console.log(nums2);

nums2.push(6); //Añade un valor despues de la ultima posicion
console.log(nums2); 

nums2.pop();
console.log(nums2); //Elimina el ultimo valor de la lista

nums2[0] = 5;
let eliminat = nums.shift();
console.log(eliminat);
console.log(nums2);

nums3 = new Array(1,2,3,4,5);
console.log(nums3.join('-'));
console.log(typeof nums3.join('-'));

console.log(nums3.sort());

palabras = new Array(10,5,8,3,1);
console.log(palabras.sort()); // Sort ordena por orden ASCCI

var edat = 20;
var missatge = (edat >=18) ? "Mayor de edad" : "Menor de edat";
console.log(missatge);

console.log("Iteración For clasica")
for (let i = 0; i < 5; i++){
  console.log(i);
}

var max = 10;

console.log("For in..")
for (let n in palabras){ //Itera incrementalmente del propio index
  console.log(palabras[n]); //Itera en la posicion especificada del index
  console.log(n); //Mustra el indice 
}

console.log("For of")
for (let num of palabras){ //El index Itera sobre los valores del objeto array unicamente
  console.log(num);
}

const nums4 = [1,2,3,4,5];
nums4.forEach((nums4) =>{
  console.log(nums4)
});

function fncAnon (){
  console.log("Funcion anonima");
}

fncAnon();

let fncAnon1 = (nom) => {
  console.log(nom)
};

fncAnon1("Niki");

/*Objeto lista Set() obviara entradas duplicadas */
const llistat = new Set();
llistat.add(8);
llistat.add(4);
llistat.add(4);
llistat.add(5);
llistat.add(6);

console.log(llistat);

const llistat2 = new Set([1,2,3,4,5,6,7]);
const llistat3 = new Set("estudiante")

console.log(llistat2);
console.log(llistat3.size);

llistat3.delete("t");
console.log(llistat3);

console.log(llistat3.has("s"));

/*Objeto lista map */
const provincia = new Map();
provincia.set(1,"Madrid").set(2,"Balears");

console.log(provincia)

const personas = new Map();
personas.set("nom","Niki").set("edad",18).set(1,[1,2,3,4,5]);
console.log(personas);
console.log("funcion get: ",personas.get(1));
console.log("funcion get nom",personas.get("nom"));

const claus = provincia.keys();
const valors = provincia.values();

provincia.forEach((p) =>{
  console.log(p);
})

for (let [clau,valor] of provincia){
  console.log(clau,valor);
}

/*Desestructuración JS*/
const numericos = [1,2,3];
const[a1,b1,c1] = numericos;
/* Pasa a variables los valores del array */
console.log(a1);
console.log(b1);
console.log(c1);
/*No altera el original*/
console.log(numericos);

let nom2 = "nikolay"
const persona1 = {
  nom:nom2,
  apellido:"Petkov"
}

console.log(persona1);
/*Se puede simplicar la assignación si ponemos la variable directamente*/
let nom3 = "Pepe";
const persona2 ={
  nom3,
  apellido:"Popo"
}

console.log(persona2);

// alert("Heeey que miras piñin");

console.log("La persona "+persona1.nom+" Se ha logeado correctamente");
// Interpolación de variables en concateno
console.log(`La persona ${persona1.nom} \ se ha logeado correctamente`);

// Operador spreed (Propagar)
const datos = [1,2,3];
const datitos = [...datos,4,5,6];
/* Pasa a variables los valores del array */
console.log("operador Spread:",datitos);

// Puedes poner valor por defecto de las variables de entrada de la funcion 
function resta (a=0,b=0){
  return a-b
}

console.log(resta());

function multiplicar(...numeros1){
  let resultado = 1;
  for (let num of numeros1){
    resultado *= num;
  }
  return resultado;
}

console.log("Resultado de multiplicar()",multiplicar(1,2,3,4,5));