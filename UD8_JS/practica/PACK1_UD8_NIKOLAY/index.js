//1.1
console.log("Ejercicio 1.1: ")
console.log("\n")

const nomMascotes = ["Max", "Bella", "Charlie", "Luna"];
const edatsMascotes = [5, 3, 7, 2];
const mascota = [];

const max = Math.max(nomMascotes.length,edatsMascotes.length);

function objectivice (){
  for(var i = 0; i<max; i++){
    mascota.push(
      {
        nombre: nomMascotes[i] ?? null, //Si no encuentra un valor en el array devolvera lo siguente
        edad: edatsMascotes[i] ?? null
      });
  }
};

objectivice();
console.log("Resultado de objectivice: ",mascota);

function media (...n){
  let resultado = 0;
    for( const {nombre,edad} of mascota){
      resultado += edad
    }
    return resultado/mascota.length
};

console.log("Media de edad de las mascotas:", media());

//1.2
console.log("Ejercicio 1.2: ")
console.log("\n")

function detallePalabra(palabra){
  // Mostrar la longitud de la palabra
  console.log("longitud de la palabra: ",palabra.length);
  var palabras = [];
  var palabra_var = "";
  //Mostrar el nombre total de palabras
    for (var i = 0; i<palabra.length; i++){
      if(palabra.charAt(i) == ' '){
        palabras.push(palabra_var);
        palabra_var = "";
      }else{
        palabra_var += palabra.charAt(i);
      }
    }

  if (palabra_var !== ""){
    palabras.push(palabra_var)
  }

  console.log("Se ha encontrado: ",palabras.length, " Palabras",", las cuales son: ");
  for(var i = 0; i<palabras.length; i++){
    console.log("\n",palabras[i]);
  }
  //Convertir todas las letras en mayusculas he imprimir el resultado
  console.log("Mayusculización: ",palabra.toUpperCase());
};

detallePalabra("Hola como estamos amigos de youtube");

//1.3
console.log("Ejercicio 1.3: ")
console.log("\n")

function aliasNizador (nombre, apellido){
  var_nombre ="";
  var_apellido ="";
  // Poner los dos primeros caracteres del nombre
  for(var i = 0; i<2; i++){
    var_nombre += nombre.charAt(i);
  };

  // Quitar los dos primeros caracteres del apellido
  for(var i = 0; i<apellido.length; i++){
    if(i >= 2){
      var_apellido += apellido.charAt(i);
    }else{

    }
  };

  console.log("Tu nuevo alias crack!: ",var_nombre+var_apellido);

};

aliasNizador("Pepote","Jorge");

//1.4
console.log("Ejercicio 1.4: ")
console.log("\n")

function aplicarDescuento (precio,descuento){
  descuento = (descuento/100)+1;
  precio = precio/descuento;
  return console.log("Precio final con descuento de ",descuento,"%, es de: ",precio, "€");
};

aplicarDescuento(100,10);

// 1.5
console.log("Ejercicio 1.5: ")
console.log("\n")

/* Importarte destacar: 

for in: Recorre indices string, enfocado mas a objetos
for of: Recorre indices de array, enfocado a arrays

*/

function parNizador(arr){
  let var_n = [];
  for (let n of arr){
    if (n % 2 === 0){
      var_n.push(n);
    }
  };

  console.log("Los numeros pares encontrados, són: ")
  for (let n of var_n){
    console.log(n);
  };

};

parNizador([10,2,3,5,7,12,14,9]);

// 1.6
console.log("Ejercicio 1.6: ")
console.log("\n")
function palabraMasLarga(arr){
  let var_greater = "";
  let var_like_greater = [];
    for (let n of arr){
      if(n.length > var_greater.length){
        var_greater = n;
      }
    }
    // Una vez obtenido la longitud del mas grande volvemos a iterar para comprovar si hay mas de la misma longitud 
    var_like_greater.push(var_greater);
    for (let n of arr){
      if(n.length === var_greater.length && n !== var_greater){
        var_like_greater.push(n);
      }
    }
  //Imprimir el resultado, iterando por posibles repeticiones de longitud maxima
  console.log("La palabra/s mas larga/s es: ")
  for (let n of var_like_greater){
    console.log(n);
  }
}
palabraMasLarga(["Hoola","Programación","Hora de aventuras","La pantera rosa","World Of Warcraft"]);

// 1.7
console.log("Ejercicio 1.7: ")
console.log("\n")
const canciones = [];
function addSongs (arr){
  for (let n of arr){
    canciones.push(n);
  }
};
function delSong(){
  canciones.pop();
};
function showList(){
  console.log("Lista de canciones: ")
  for(let n of canciones){
    console.log(n);
  }
};

addSongs(["Baby Girl","Till Collapse","In the End","Papercut","WitchCraft"]);
showList();
delSong();
showList();

// 1.8

console.log("Ejercicio 1.8: ")
console.log("\n")

function randNumber(min=0,max=0){
  var rand_number = Math.floor(Math.random() * (max - min + 1)) + min;
  return console.log("Numero aleatorio generado: ",rand_number);
};
randNumber(10,20);

// 1.9

console.log("Ejercicio 1.9: ")
console.log("\n")

 class Persona {
  constructor(nombre,edad,nota){
    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;
  }
 }
 const estudiantes = [];
//  Función Insertar persona
 function insertarEstudiante(var_nombre = null,var_edad = null,var_nota = null){
  const var_persona = new Persona(var_nombre,var_edad,var_nota);
  estudiantes.push(var_persona);
  return console.log("Estudiante Insertado: ",var_persona);
 };
//  Función lista de estudiantes
 function listaEstudiantes(){
  console.log("Lista de estudiantes: ")
  for(let n of estudiantes){
    console.log(n);
  }
 };
//  Función estudiante con mejor nota
 function mejorNota(){
  let var_nota = 0;
  let estudiantesTop = [];
  for (let n of estudiantes){
    if(n.nota > var_nota){
      var_nota = n.nota;
    }
  };
  for(let n of estudiantes){
    if(n.nota == var_nota){
      estudiantesTop.push(n);
    }
  }
  console.log("Estudiante/s con la/s mejor/es nota/s:",estudiantesTop);
 };

 insertarEstudiante("Nikolay",24,7);
 insertarEstudiante("Pepe",20,10);
 insertarEstudiante("Manolo",60,10);
 insertarEstudiante("Borki",22,6);
 listaEstudiantes();
 mejorNota();


console.log("Ejercicio 1.10: ");
console.log("\n");

class iventario {
  constructor(nom,quantitat,preu){
    this.nom = nom;
    this.quantitat = quantitat;
    this.preu = preu;
  };
};
const items = [];
// Función añadir producto
function addProduct (var_nom = null, var_quantitat = null, var_preu = null) {
  let var_product = new iventario (var_nom,var_quantitat,var_preu);
  items.push(var_product);
  console.log("Producto añadido: ",var_product);
}
addProduct("RumboBot",10,100);
addProduct("Termomix",20,150);
addProduct("Kaspirator",5,300);
addProduct("Refrigenator",2,500);
addProduct("SuperSteelSlash",30,15);
// Función actualizar cantidad
function updateQuantity(var_product_name,var_quantity){
  const i = 0;
  for (let n of items){
    if (n.nom == var_product_name){
      console.log("Producto: ",n.nom," Cantidad: ",n.quantitat);
      items[i].quantitat = var_quantity;
      console.log("Producto: ",n.nom, "Cantidad actualizada: ",items[i].quantitat);
      break;
    };
    i += 1;
  };
}
updateQuantity("RumboBot",5);