window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var span = document.querySelector(".span-brand-n");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled-navbar");
        span.classList.add("scrolled-navbar");
    } else {
        navbar.classList.remove("scrolled-navbar");
        span.classList.remove("scrolled-navbar");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');
    const elements2 = document.querySelectorAll('.fade-in2');
    const elements3 = document.querySelectorAll('.fade-in3');
    const elements4 = document.querySelectorAll('.fade-in4');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    elements2.forEach(el => observer.observe(el));
    elements3.forEach(el => observer.observe(el));
    elements4.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('.home');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    observer.observe(homeSection);
});

window.onload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', function () {
        this.classList.toggle('collapsed');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const offset = 80;

    function changeActiveLink() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const currentLink = document.querySelector(`a[href="#${section.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const lastLink = document.querySelector(`a[href="#${sections[sections.length - 1].id}"]`);
            if (lastLink) {
                lastLink.classList.add('active');
            }
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', changeActiveLink);
});

function applyFadeClass() {
    const element = document.getElementById("pesan");
    
    if (window.innerWidth <= 768) {
        element.classList.remove("fade-in");
        element.classList.add("fade-in2");
    } else {
        element.classList.remove("fade-in2");
        element.classList.add("fade-in");
    }
}

window.addEventListener("load", applyFadeClass);
window.addEventListener("resize", applyFadeClass);

  

