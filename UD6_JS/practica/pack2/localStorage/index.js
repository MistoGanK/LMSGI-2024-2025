const usuarios = [];
let usuario = {
  nombre: "Manolo",
  edad:20,
  alias:"Manu"
}

localStorage.setItem('usuarios',JSON.stringify(usuarios));

usuarios = JSON.parse(localStorage.getItem('usuarios'));
usuarios.push(usuario);
localStorage.setItem('usuarios',JSON.stringify(usuarios)) || [];

