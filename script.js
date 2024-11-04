const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
nav.classList.toggle('active');
menuToggle.classList.toggle('active');
});

window.addEventListener('resize', () => {
if (window.innerWidth > 600) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
}
});
