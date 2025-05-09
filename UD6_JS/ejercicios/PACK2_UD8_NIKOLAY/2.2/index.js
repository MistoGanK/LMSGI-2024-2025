// Declaracion de variables HTML
let btn_reset = document.getElementById('btn_reset');
let p_time = document.getElementById('p_time');

// Variables que almacenaremos el tiempo actual desde que se genera la pagina HTML, rescribiremos esta variable con el evento
let startTime = Date.now();

/* Usaremos la siguiente funcion setInterval(función, tiempoEnMilisegundos); 
La funcion permite cada cuando tiempo es llamado automaticamente especificando el campo de tiempoEnMilisegundos, por lo cual
iremos llamando Date.now() y restaremos a la diferencia de cuando fue llamado por primera vez con el el actual y posteriormente
lo dividiremos por 1000 para obtener los segundos
*/

setInterval(()=>{
  const now = Date.now();
  const transcurrido = Math.floor((now-startTime)/1000); // El resultado devuelve milisegundos, por lo cual dividimos por 1000
  p_time.innerHTML = transcurrido;
},1000); // Con el 1000 dentro despecificamos que se ejecute cada mil milisegundos (cada segundo)

// Ahora creamos un evento 'click' del boton, que cada vez que es accionado simplemente hara un reset del p_time

btn_reset.addEventListener('click',()=>{
  // Reseteamos variable transcurrido que lleva la acumulación de segundos
  startTime = Date.now();
});