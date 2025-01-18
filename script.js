// Example of an eerie flickering effect for text
document.querySelectorAll('.flicker-effect').forEach(element => {
    setInterval(() => {
        element.style.opacity = (Math.random() > 0.5) ? 1 : 0;
    }, 100);
});
