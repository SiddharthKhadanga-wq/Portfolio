// Typing animation for name
window.addEventListener('DOMContentLoaded', () => {
    const name = "Siddharth Khadanga";
    const nameEl = document.getElementById('animated-name');
    let idx = 0;

    function type() {
        if (idx <= name.length) {
            nameEl.textContent = name.slice(0, idx);
            idx++;
            setTimeout(type, 80);
        }
    }
    type();
});

// Responsive Nav Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Contact form feedback
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formMsg.textContent = "Thank you for reaching out! I'll get back to you soon.";
        contactForm.reset();
    });
}

// Animate on scroll for .animate-up and .animate-card
function revealOnScroll() {
    const reveals = document.querySelectorAll('.animate-up, .animate-card');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
            el.style.visibility = 'visible';
            el.classList.add('revealed');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate-up, .animate-card').forEach(el => {
        el.style.visibility = 'hidden';
    });
    revealOnScroll();
});