window.addEventListener('scroll', function() {
    var backgroundHeight = document.querySelector('.background-section').offsetHeight;
    var navbar = document.querySelector('.navbar');

    if (window.scrollY < backgroundHeight) {
        navbar.style.background = 'rgba(240, 240, 240, 0.5)'; // Transparent when on the background
    } else {
        navbar.style.background = '#f0f0f0'; // Opaque otherwise
    }
});

AOS.init({
    duration: 1200,
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
