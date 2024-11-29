const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
});
// Configurar visibilidad inicial del menú según el tamaño de pantalla
function setMenuVisibility() {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex'; 
    } else {
        navLinks.style.display = 'none'; 
    }
}
setMenuVisibility();
window.addEventListener('resize', setMenuVisibility);