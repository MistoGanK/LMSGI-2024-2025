document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const adminNavBar = document.getElementById('adminNavBar');
    
    const logoutBtn = document.getElementById('logoutBtn');

    // Redirigir si no es editor
    if (!currentUser || currentUser.usertype !== 'userAdmin') {
        window.location.href = '../index.html';
        return; // Detener ejecución
    }

    // Mostrar menú de admin
    adminHeader.style.display = 'block';

    // Cerrar sesión
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = '../index.html';
    });
});