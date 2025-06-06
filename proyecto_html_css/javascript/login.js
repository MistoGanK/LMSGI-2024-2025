document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const users = JSON.parse(localStorage.getItem('users')) || []; // Usuarios almacenados en el localStorage
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Guardamos los valores de los inputs 
        const username = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;
        
        // Buscamos al usuairo en nuestro local storage
        const user = users.find(u => u.user === username && u.password === password);
        

        if (user) {
            // Guardar sesión
            localStorage.setItem('currentUser', JSON.stringify({
                user: user.user,
                email: user.email,
                usertype: user.usertype
            }));
            
            // Redirigir según tipo de usuario
            window.location.href = user.usertype === 'userAdmin' 
                ? 'admin.html' 
                : '../index.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});

// Verificamos si hay una sesión activa para redirigirlo
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
    window.location.href = currentUser.usertype === 'userAdmin' 
        ? 'admin.html' 
        : '../index.html';
}