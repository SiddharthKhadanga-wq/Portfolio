// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--open');
    navToggle.classList.toggle('nav__toggle--open');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            // Close nav on mobile after click
            navMenu.classList.remove('nav__menu--open');
            navToggle.classList.remove('nav__toggle--open');
        }
    });
});

// Contact Form Handler (Demo: shows alert instead of sending)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out, ' + contactForm.name.value + '! I will get back to you soon.');
        contactForm.reset();
    });
}