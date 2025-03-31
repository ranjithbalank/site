
// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
});

// Navbar Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.classList.toggle('hidden', scrollTop > lastScrollTop && scrollTop > 50);
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Scroll Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.clan-card, .portfolio-card, .accordion-item').forEach(item => {
    observer.observe(item);
});
