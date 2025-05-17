// Objetos con value link

const rutas = {
  'link_index': '/index.html',
  'link_subir_meme': '/views/subir_meme.html',
  'link_inicio': '/views/inicio.html',
  'link_ultimos': '/views/favoritos.html',
  'link_trending': '/views/inicio.html',
  'link_aleatorio': '/views/inicio.html',
  'link_favoritos': '/views/favoritos.html',
  'link_subidas': '/views/mis_subidas.html',
  'link_ranking': '/views/ranking.html',
  'link_post': '/views/post.html',
  'link_twitter': 'https://twitter.com',
  'link_instagram': 'https://instagram.com'
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
