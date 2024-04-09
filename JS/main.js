// const navMenu = document.getElementById('nav-menu');
// const toggleMenu = document.getElementById('nav-toggle');
// const closeMenu = document.getElementById('nav-close');

// Show menu
// toggleMenu.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// });

// // Hide menu
// closeMenu.addEventListener('click', () => {
//     navMenu.classList.remove('show');
// });

// // Remove menu when a link is clicked
// const navLinks = document.querySelectorAll('.nav__link');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         navMenu.classList.remove('show');
//     });
// });

// // Add 'active' class to navigation links based on scroll position
// window.addEventListener('scroll', () => {
//     const scrollY = window.pageYOffset;
//     const sections = document.querySelectorAll('section[id]');

//     sections.forEach(section => {
//         const sectionHeight = section.offsetHeight;
//         const sectionTop = section.offsetTop - 50;
//         const sectionId = section.getAttribute('id');

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector(`.nav__link[href="#${sectionId}"]`).classList.add('active');
//         } else {
//             document.querySelector(`.nav__link[href="#${sectionId}"]`).classList.remove('active');
//         }
//     });
// });
// (function () {
//     var toggle = document.querySelector('.nav-toggle');
    
//     toggle.addEventListener('click', function(e) {
//       this.classList.toggle('opened');
//     });
//   })();

(function () {
    var toggle = document.querySelector('.nav-toggle');
    var navMenu = document.getElementById('nav-menu');
    
    toggle.addEventListener('click', function(e) {
        navMenu.classList.toggle('show');
        this.classList.toggle('opened');
    });
})();
