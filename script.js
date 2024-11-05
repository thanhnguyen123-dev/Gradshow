const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const gradShowText = document.querySelector('.gradshow-text');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


window.addEventListener('resize', () => {
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