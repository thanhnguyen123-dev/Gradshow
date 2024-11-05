const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const gradShowText = document.querySelector('.gradshow-text');

/* Menu toggle */
menuToggle.addEventListener('click', () => {
    // Toggle the active class on the nav and menu toggle
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

/* Resize event */
window.addEventListener('resize', () => {
    // If the window is wider than 768px, remove the active class from the nav and menu toggle
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
        document.documentElement.style.visibility = 'visible';
    });
});