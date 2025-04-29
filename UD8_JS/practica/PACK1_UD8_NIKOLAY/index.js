//1.1
console.log("Ejercicio 1.1:")

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
console.log("Ejercicio 1.2:")

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
console.log("Ejercicio 1.3:")

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
console.log("Ejercicio 1.4:")
