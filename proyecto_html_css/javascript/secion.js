// Constantes
const loginPage = 'views/inicio.html'; // Usa misma ruta en todo el código
const inactivityTreshold = 120000; // 2 min
const warningTreshold = 30000; // 30 seg

// Elementos
const link_log_out = document.querySelector('.link_log_out');

document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        console.log("Usuario logueado:", currentUser.user);
        if (link_log_out) link_log_out.classList.add('show_element');
        startInactivityTimer(); // Solo inicia timers si hay sesión
    } else {
        console.log("No hay sesión activa");
        if (link_log_out) link_log_out.classList.remove('show_element');
    }
});

// Cierre manual
if (link_log_out) {
    link_log_out.addEventListener('click', (e) => {
        e.preventDefault();
        clearAllTimers(); // Limpiar timers primero
        localStorage.removeItem('currentUser');
        window.location.href = loginPage;
    });
}

let inactivityTimer;
let warningTimer;

function clearAllTimers() {
    clearTimeout(inactivityTimer);
    clearTimeout(warningTimer);
}

function startInactivityTimer() {
    clearAllTimers();
    inactivityTimer = setTimeout(showWarning, inactivityTreshold - warningTreshold);
}

function showWarning() {
    if (confirm("¿Sigues ahí? La sesión se cerrará en 30 segundos.")) {
        startInactivityTimer();
    } else {
        logout();
    }
}

function logout() {
    clearAllTimers();
    localStorage.removeItem('currentUser');
    alert("Sesión cerrada por inactividad");
    window.location.href = loginPage;
}

// Eventos que reinician el timer
['mousemove', 'keydown', 'click', 'scroll'].forEach(event => {
    window.addEventListener(event, startInactivityTimer);
});
