//toggle icon navbar for responsive apk
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll le section active

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

//scroll reveal
    ScrollReveal({
        reset: true, 
        distance: '80px',
        duration: 2000,
        delay: 200
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .projets-box, .Contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

//type js
const typed = new Typed('.multiple-text', {
    strings: ['Développeur web', 'Développeur web', 'Développeur web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



//-------------------------- Fenêtre de détails projet simple ------------------------

// === MODALS SIMPLES & PROPRES ===

// ouvrir un modal
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    let modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('show');
  });
});

// fermer un modal
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('show');
  });
});

// fermer si on clique en dehors
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('show');
  });
});

//Progress bar
document.addEventListener("DOMContentLoaded", () => {
    const progresses = document.querySelectorAll(".skill-progress");

    progresses.forEach(bar => {
      const value = bar.getAttribute("data-progress");
      bar.style.width = value + "%";
    });
  });
