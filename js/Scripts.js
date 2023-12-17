document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarSupportedContent');
    var overlay = document.querySelector('.overlay');

    function toggleMenu() {
      navbarCollapse.classList.toggle('visible');
      overlay.classList.toggle('visible');
      overlay.classList.toggle('dark');
    }

    navbarToggler.addEventListener('click', toggleMenu);

    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('visible')) {
          toggleMenu();
        }
      });
    });
});