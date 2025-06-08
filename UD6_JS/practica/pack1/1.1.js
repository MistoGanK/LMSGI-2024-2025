// 1.1
console.log("\r\n 1.1:")
const nomMascotes = ["Max", "Bella", "Charlie", "Luna"];
const edadtMascotes = [5,3,7,2];

let maxLenght = Math.max(nomMascotes.length,edadtMascotes.length);
console.log(maxLenght);

const mascota = [];
// Construir array de objectos mascotas 
for (let i = 0; i<maxLenght; i++){
  mascota.push({
    nom: nomMascotes[i],
    edat: edadtMascotes[i] 
  });
};
function mediaEdad (objArray){
  let suma = 0;
  let division = objArray.length;
  for (let i of objArray){
    suma += i.edat;
  }
  return suma/division;
}
// Media de edad de las mascotas
console.log("Array de objectos mascota: ",mascota);
console.log("Edad media de las mascotas: ",mediaEdad(mascota));

// 1.2 
console.log("\r\n 1.2:")

const frasePrueba = "Y alli le vi, en las monstañas, el caballo gey de las montañas, llore";
function fraseStats (frase){
  let totalCaracteres = (frase.trim()).length;
  let totalPalabras = (frase.split(' ')).length;
  let fraseMayuscula = frase.toUpperCase();

  return [totalCaracteres,totalPalabras,fraseMayuscula];
};

console.log(fraseStats(frasePrueba));

// 1.3
console.log("\r\n 1.3:")
const aliasNombre = "Pepopte";
const aliasApellido = "Robote";
function aliasZidador (nombre,apellido){
  let alias = nombre.charAt(0)+apellido.substring(1,apellido.length);
  return alias;
};

console.log("Tu nuevo alias maquina:",aliasZidador(aliasNombre,aliasApellido));

// 1.4
console.log("\r\n 1.4:")

const descuentoAplicado = 0.8;
const precioOriginal = 1000;
function aplicarDescuento (precio,descuento){
  resultado = Math.round((precio / (descuento+1)));
  return ("Precio final con descuento: "+resultado);
};
console.log(aplicarDescuento(precioOriginal,descuentoAplicado));

// 1.5 
console.log("\r\n 1.5:");

const testArray = [1,4,6,8,10,44,50,20,88,27];
function parZidador (integerArray){
  let result = [];
    for (let i of integerArray){
      if((i % 2) === 0){
      result.push(i);
    }
  }
  return result;
};

console.log("pares: ",parZidador(testArray));

// 1.6
console.log("\r\n 1.6:");
const conjuntoPalabras =  ["Hora de aventuras","World Of Warcraft","El Jose","Pepe","Eduardo Mico"];
function palabraMasLarga (arrayPalabras){
  let resultado = [];
  let largest = 0;
  // Primero encontramos la palabra/s mas larga del array
  for (let i of arrayPalabras){
    if(i.length > largest){
      largest = i.length;
    }
  }
  // Ahora añadimos al array todas la palabras que sean igual al maximo
  for (let i of arrayPalabras){
    if(i.length === largest){
      resultado.push(i);
    }
  }
  return resultado;
};

console.log("La palabras mas largas són: ",palabraMasLarga(conjuntoPalabras));

// 1.7
console.log("\r\n 1.7:");
const playList = [];
console.log("Playlist veranito: ",playList);

function addSong(chosePlayList,song){
  chosePlayList.push(song);
};
function delLastSong(chosePlayList){
  chosePlayList.pop();
};
function showList(chosePlayList){
  console.log("Playlist: ")
  for (let i of chosePlayList){
    console.log(i);
  }
};

addSong(playList,"Caballo de las praderas");
addSong(playList,"Jorge Marinero");
addSong(playList,"Pendulum");
addSong(playList,"Unicorn on mentafetanime");

showList(playList);

delLastSong(playList);

showList(playList);

// 1.8
console.log("\r\n 1.8:");
const randMin = 10;
const randMax = 20;
function randNumberRang(min, max){
  return Math.floor((Math.random()*(max-min+1))+min);
}
console.log("Rand number: ",randNumberRang(randMin,randMax));

// 1.9
console.log("\r\n 1.9:");
estudiantes = [];

function añadirEstudiante (nombre,edad,nota){
  if(typeof(nombre) === 'string' && typeof(edad) === 'number' && typeof(nota) === 'number'){
    estudiantes.push({
    nombre: nombre,
    edad: edad,
    nota:nota
    });
  }else{
    return
  }
};

function mostrarEstudiantes(objecArray){
  console.log("Estudiantes: ")
  for (let i in objecArray){
    console.log(i,objecArray[i])
  };
};
function mejorNota(objecArray){
  let bestStudents = [];
  let bestGrade = 0;
  for(let i of objecArray){
    if(i.nota > bestGrade){
      bestGrade = i.nota;
    }
  };
  console.log(bestGrade);

  console.log("Mejores Estudiantes")
  for (let i of objecArray){
    if (i.nota === bestGrade){
      bestStudents.push(i);
    } 
  }
  return bestStudents;
};

añadirEstudiante("Manolo",20,10);
añadirEstudiante("Josardo",24,9);
añadirEstudiante("Joshy",21,10);
añadirEstudiante("Bombai",18,5);
añadirEstudiante("Pepo",30,8);
añadirEstudiante("Dexter",18,2);

mostrarEstudiantes(estudiantes);
const mejores = mejorNota(estudiantes);
console.log(mejores);

// 1.10
console.log("\r\n 1.10:");
const inventario =  [];

function añadirProducto (nombre, cantidad, precio){
  if (typeof(nombre)==='string' && typeof(cantidad) === 'number' && typeof(precio) === 'number'){
    inventario.push({
      nombre:nombre,
      cantidad:cantidad,
      precio:precio
    });
  }else{
    return 'Parametros incorrectos'
  }
};

function actualizarCantidad(nombre, cantidad) {
  // 1. Validación de tipos
  if (typeof nombre !== 'string' || typeof cantidad !== 'number') {
    return 'Datos ingresados en formato incorrecto';
  }
  // 2. Buscar y actualizar producto
  let productoExiste = false;
  
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      inventario[i].cantidad = cantidad;
      productoExiste = true;
      break; 
    }
  }
  // 3. Retornar el resultado
  if (productoExiste) {
    return 'Cantidad actualizada correctamente';
  } else {
    return 'El producto no existe en la base de datos';
  }
};

function valorTotalIventario (inventario){
  let resultado = 0;
  for (let i of inventario){
    resultado += i.cantidad*i.precio;
  }
  console.log("Valor total del inventario:", resultado);
  return resultado
};

function listIventario (inventario){
  console.log("Lista: ")
  for (let i of inventario){
    console.log(i);
  }
};

function detallesProducto(nombre, inventario) {
  if (typeof nombre !== 'string') {
    return 'Tipo de dato invalido';
  }
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      return inventario[i]; // Retorna el objeto si lo encuentra
    }
  }
  return 'Este producto no existe en la base de datos';
}

añadirProducto("PS5",10,500.00);
añadirProducto("PS4",20,200.00);
añadirProducto("Steam Deck",30,480.00);
añadirProducto("Nintento Switch 2",30,480.00);
añadirProducto("Sillas gamer",5,100.00);
añadirProducto("Raton gamer",10,50.00);

var producto = detallesProducto("PS5",inventario);
console.log(producto);

actualizarCantidad("PS5",5);
var producto = detallesProducto("PS5",inventario);
console.log(producto);

listIventario(inventario);

valorTotalIventario(inventario);