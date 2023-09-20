let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

gsap.registerPlugin(ScrollTrigger);
gsap.from('.animate-home', {
    ScrollTrigger: '.animate-home',
    duration: 1.5,
    opacity: 0,
    y: -150,
    delay: 0.2
});

gsap.from('.animate-services', {
    ScrollTrigger: '.animate-services',
    duration: 1,
    opacity: 1,
    y: -150,
    stagger: 0.25
});

gsap.from('.animate-listings', {
    ScrollTrigger: '.animate-listings',
    duration: 0.25,
    opacity: 1,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-img', {
    ScrollTrigger: '.animate-img',
    duration: 0.8,
    opacity: 0,
    y: -200
});

gsap.from('.animate-contact', {
    ScrollTrigger: '.animate-contact',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 1
});

gsap.from('.animate-footer', {
    ScrollTrigger: '.animate-footer',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.4
});


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}