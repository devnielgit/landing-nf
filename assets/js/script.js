document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

// Activar el plugin GSAP y ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1) Animación inicial del Hero
gsap.from("#hero .hero-content", {
  duration: 1.2,
  y: 60,
  opacity: 0,
  ease: "power3.out"
});

// 2) Productos en cascada al hacer scroll
gsap.from(".producto-circulo", {
  scrollTrigger: {
    trigger: ".productos-container-circulos",
    start: "top 80%",
  },
  duration: 0.8,
  y: 40,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

// 3) Características: fade+slide
gsap.from(".caracteristica", {
  scrollTrigger: {
    trigger: "#caracteristicas",
    start: "top 75%",
  },
  duration: 0.8,
  x: -50,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out"
});

// 4) Equipo: fotos con scale
gsap.from("#equipo .miembro", {
  scrollTrigger: {
    trigger: "#equipo",
    start: "top 80%",
  },
  duration: 0.8,
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// 5) Formulario de contacto: aparición suave
gsap.from("#contacto form", {
  scrollTrigger: {
    trigger: "#contacto",
    start: "top 85%",
  },
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

});