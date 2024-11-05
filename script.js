const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const gradShowText = document.querySelector('.gradshow-text');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


const updateText = () => {
    if (gradShowText != null) {
        if (window.innerWidth <= 1140) {
            gradShowText.textContent = "GS2024";
        }
        else {
            gradShowText.textContent = "GRADSHOW 2024";
        }
    }
}

window.addEventListener('resize', () => {
    updateText();
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    updateText();
    requestAnimationFrame(() => {
        document.documentElement.style.visibility = 'visible';
    });
});