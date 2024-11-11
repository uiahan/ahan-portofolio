window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var toggle = document.querySelector("#toggle");  // Referensi ke toggle checkbox
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled-navbar"); // Tambahkan kelas scrolled-navbar dan dark
        // Memastikan checkbox dicentang jika dark mode aktif
        if (!toggle.checked) {
            toggle.checked = false;  // Centang checkbox jika scroll lebih dari 50px
        }
    } else {
        navbar.classList.remove("scrolled-navbar");  // Hapus kelas scrolled-navbar dan dark
    }
});

document.querySelector("#toggle").addEventListener("change", function () {
    var navbar = document.querySelector(".navbar");
    var span = document.querySelector(".span-brand-n");

    if (this.checked) {
        navbar.classList.add("dark"); // Tambahkan kelas dark jika toggle diaktifkan
        span.classList.add("scrolled-navbar"); // Sesuaikan dengan efek scroll jika diperlukan
    } else {
        navbar.classList.remove("dark");
        span.classList.remove("scrolled-navbar");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in, .fade-in2, .fade-in3, .fade-in4');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('.home');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
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

document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.home').classList.toggle('dark-mode'); 
    document.querySelector('.home-text').classList.toggle('dark'); 
    document.querySelector('.about-text').classList.toggle('dark'); 
    document.querySelector('.portofolio').classList.toggle('dark'); 
    document.querySelector('.body-text').classList.toggle('dark');  
    document.querySelector('.header-text').classList.toggle('dark');  
    document.querySelector('.skills').classList.toggle('dark'); 
    document.querySelector('.dark-text').classList.toggle('dark-mode'); 
    document.querySelector('.hr').classList.toggle('dark'); 
    document.querySelector('.navbar-toggler-icon').classList.toggle('dark'); 
    document.querySelector('.gallery').classList.toggle('dark'); 
    document.querySelector('.contact').classList.toggle('dark'); 
    document.querySelector('.navbar-brand').classList.toggle('dark-mode'); 
    document.querySelector('.span-brand-n').classList.toggle('dark-mode'); 
    document.querySelector('.nav-link').classList.toggle('dark-mode'); 
    document.querySelector('p').classList.toggle('dark-mode'); 
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('dark-mode');
    });
    // Toggle untuk semua elemen dengan kelas 'header-text2' dan 'body-text2'
    document.querySelectorAll('.header-text2').forEach(element => {
        element.classList.toggle('dark');
    });
    document.querySelectorAll('.body-text2').forEach(element => {
        element.classList.toggle('dark');
    });
    document.querySelector('.navbar-brand').classList.toggle('dark-mode');
});

// Selektor elemen toggle dan bagian 'about'
const toggle = document.getElementById("toggle");
const aboutSection = document.getElementById("about");

// Tambah atau hapus kelas dark-mode ketika toggle aktif atau non-aktif
toggle.addEventListener("change", () => {
    if (toggle.checked) {
        aboutSection.classList.add("dark-mode");
    } else {
        aboutSection.classList.remove("dark-mode");
    }
});

document.getElementById('toggle').addEventListener('change', function() {
    const lightImage = document.getElementById('wave-image');
    const darkImage = document.getElementById('wave-image-dark');

    if (this.checked) {
        // Ketika toggle aktif, tampilkan gambar gelap dengan transisi opacity
        lightImage.style.opacity = '0';
        darkImage.style.opacity = '1';
    } else {
        // Ketika toggle tidak aktif, tampilkan gambar biasa dengan transisi opacity
        lightImage.style.opacity = '1';
        darkImage.style.opacity = '0';
    }
});















  

