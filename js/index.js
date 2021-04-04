AOS.init();

document.getElementById('scroll-down').addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
})