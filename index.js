document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    let isMobile = window.matchMedia("(max-width: 480px)").matches;

    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    function hideSidebar() {
        if (isMobile && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }

    // Hide sidebar when clicking outside of it or the hamburger menu
    document.addEventListener('click', function(event) {
        if (isMobile && !sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            hideSidebar();
        }
    });

    // Hide sidebar on scroll, but only if the scroll event is outside the sidebar
    document.addEventListener('scroll', function(event) {
        if (isMobile && !sidebar.contains(document.activeElement)) {
            hideSidebar();
        }
    }, true);

    // Update isMobile on window resize
    window.addEventListener('resize', function() {
        isMobile = window.matchMedia("(max-width: 480px)").matches;
    });

    // Initialize AOS (Animate On Scroll Library)
    AOS.init({
        duration: 1200,
    });

    // Add any additional existing functionality here
});
