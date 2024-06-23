document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    let isMobile = window.matchMedia("(max-width: 480px)").matches;
    let isNavigating = false;

    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    function hideSidebar() {
        if (isMobile && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }

    document.addEventListener('click', function(event) {
        if (isMobile && !sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            hideSidebar();
        }
    });

    sidebar.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            isNavigating = true;
        }
    });

    sidebar.addEventListener('transitionend', function() {
        setTimeout(() => isNavigating = false, 500);
    });

    document.addEventListener('scroll', function(event) {
        if (isMobile && !isNavigating && !sidebar.contains(event.target)) {
            hideSidebar();
        }
    }, true);

    window.addEventListener('resize', function() {
        isMobile = window.matchMedia("(max-width: 480px)").matches;
    });

    AOS.init({
        duration: 1200,
    });

});
