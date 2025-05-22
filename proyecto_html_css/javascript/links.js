// Objetos con value link
let var_host = location.hostname;
console.log("host",var_host);

let base_url = window.location.hostname === '127.0.0.1' ? "" : "/repo"

const rutas = {
  'link_index': base_url+'/index.html',
  'link_subir_meme': base_url+'/views/subir_meme.html',
  'link_inicio': base_url+'/views/inicio.html',
  'link_ultimos': base_url+'/views/favoritos.html',
  'link_trending': base_url+'/views/inicio.html',
  'link_aleatorio': base_url+'/views/inicio.html',
  'link_favoritos': base_url+'/views/favoritos.html',
  'link_subidas': base_url+'/views/mis_subidas.html',
  'link_ranking': base_url+'/views/ranking.html',
  'link_post': base_url+'/views/post.html',
  'link_registro': base_url+'/views/registro.html',
  'link_recuperar_contr': base_url+'/views/recuperar_contr.html'
};

for (let clase in rutas){
  const elementos = document.getElementsByClassName(clase);
  // Esto equivale a; const link_index = document.getElementsByClassName('link_index');
  // Pero iteramos en nuestra constante rutas por cada uno de sus indices
  for (let i of elementos){
    i.addEventListener('click',()=>{
      window.location.href = rutas[clase];
    });
  };
};
// // Debug
// for (let clase in rutas){
//   const elementos = document.getElementsByClassName(clase);
//   console.log('elemento:',elementos);

//   for (let i of elementos){
//     console.log('i:',i);
//   }
// };
