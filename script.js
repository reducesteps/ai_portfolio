// Add any JavaScript functionality here

// Dark theme toggle
const body = document.querySelector('body');
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = 'Toggle Theme';
themeToggleBtn.style.position = 'fixed';
themeToggleBtn.style.bottom = '10px';
themeToggleBtn.style.right = '10px';
body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Simple animation for header on page load
const header = document.querySelector('header');
header.style.opacity = '0';
window.addEventListener('load', () => {
    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = '1';
    }, 500);
});