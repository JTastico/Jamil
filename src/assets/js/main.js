document.addEventListener('DOMContentLoaded', () => {
  // ===== MODE TOGGLE =====
  const toggleMode = document.getElementById('toggle-mode');
  const html = document.documentElement;

  // Check for saved user preference
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
      html.classList.add('dark-mode');
      toggleMode.textContent = '☀️';
  } else if (savedMode === 'false') {
      html.classList.remove('dark-mode');
      toggleMode.textContent = '🌙';
  }

  // Toggle mode
  toggleMode.addEventListener('click', () => {
      html.classList.toggle('dark-mode');
      const isDark = html.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      toggleMode.textContent = isDark ? '☀️' : '🌙';
  });

  // ===== SCROLL ANIMATIONS =====
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
  });

  // ===== PROJECTS =====
  const projectsContainer = document.getElementById('projects-container');
  const proyectos = [
      {
          title: "Portafolio Personal",
          description: "Sitio web personal para mostrar mis proyectos y habilidades como desarrollador.",
          tags: ["HTML", "CSS", "JavaScript", "PHP"]
      },
      {
          title: "Sistema de Gestión",
          description: "Aplicación web para administrar inventarios y clientes de pequeñas empresas.",
          tags: ["PHP", "MySQL", "Bootstrap"]
      },
      {
          title: "E-commerce",
          description: "Tienda online con carrito de compras y pasarela de pagos integrada.",
          tags: ["React", "Node.js", "MongoDB"]
      },
      {
          title: "App del Clima",
          description: "Aplicación que muestra el pronóstico del tiempo usando una API pública.",
          tags: ["JavaScript", "API", "CSS"]
      },
      {
          title: "Red Social",
          description: "Plataforma para conectar usuarios con intereses similares.",
          tags: ["React", "Firebase", "TailwindCSS"]
      },
      {
          title: "Juego de Memoria",
          description: "Juego interactivo para probar tu memoria con cartas.",
          tags: ["JavaScript", "HTML5", "CSS3"]
      }
  ];

  proyectos.forEach(proyecto => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
          <h3>${proyecto.title}</h3>
          <p>${proyecto.description}</p>
          <div class="tags">${
              proyecto.tags.map(tag => `<span class="tag">${tag}</span>`).join('')
          }</div>
      `;
      projectsContainer.appendChild(projectCard);
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);

          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // ===== SKILL CARD HOVER ANIMATION =====
document.querySelectorAll('.skill-card').forEach(card => {
  const img = card.querySelector('img');
  
  card.addEventListener('mouseover', () => {
      anime({
          targets: img,
          scale: [0, 1],
          rotate: '1turn',
          opacity: [0, 1],
          easing: 'easeOutElastic(1, .8)',
          duration: 600, // Más rápida que la animación inicial
          delay: 0 // Sin retraso para que sea inmediata
      });
  });

  card.addEventListener('mouseout', () => {
      anime({
          targets: img,
          scale: 1,
          rotate: '0deg',
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 300 // Rápida transición de vuelta
      });
  });
});

  // ===== CONTACT FORM VISIBILITY =====
  const contactForm = document.querySelector('.contact-form');
  contactForm.classList.add('visible');

  // Función para enviar el mensaje al WhatsApp
  document.querySelector('.contact-form').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevenir el envío normal del formulario

      // Obtener los valores de los campos del formulario
      const nombre = document.querySelector('input[type="text"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const mensaje = document.querySelector('input[type="text"]').value;

      // Crear el mensaje que se enviará por WhatsApp
      const mensajeWhatsApp = `Hola, tengo una consulta: %0A%0ANombre: ${nombre}%0AEmail: ${email}%0AAsunto: ${mensaje}`;

      // Reemplaza el número de teléfono con tu número de WhatsApp (sin el + y el código de país)
      const numeroWhatsApp = '991010001'; // Cambia este número por el tuyo
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

      // Redirigir a la URL de WhatsApp
      window.open(urlWhatsApp, '_blank');
  });

  // ===== ANIME.JS SKILL ICONS ANIMATION =====
  anime({
      targets: '.skill-card img',
      scale: [0, 1], // Escala desde 0 hasta su tamaño original
      rotate: '1turn', // Rota 360 grados
      opacity: [0, 1], // Aparece desde transparente
      delay: anime.stagger(100), // Retraso escalonado para cada ícono
      easing: 'easeOutElastic(1, .8)', // Efecto elástico
      duration: 1200 // Duración de la animación
  });

  document.querySelectorAll('.skill-card').forEach(card => {
    const img = card.querySelector('img');
    
    card.addEventListener('mouseover', () => {
      anime.remove(img); // Detiene animaciones previas
      anime({
          targets: img,
          translateY: [-20, 0], // Se mueve hacia arriba y vuelve
          scale: [0.8, 1], // Escala sutil
          opacity: [0.7, 1],
          easing: 'easeOutBounce', // Efecto de rebote
          duration: 800,
          delay: 0
      });
  });
  
    card.addEventListener('mouseout', () => {
        anime.remove(img);
        anime({
            targets: img,
            translateY: 0,
            scale: 1,
            opacity: 1,
            easing: 'easeOutQuad',
            duration: 300
        });
    });
});

  // ===== PARTICLE EFFECT =====
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  document.body.appendChild(canvas);

  // Resize canvas
  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Particles configuration
  const particles = [];
  const particleCount = 50;
  const colors = ['rgba(37, 99, 235, 0.5)', 'rgba(147, 197, 253, 0.4)', 'rgba(191, 219, 254, 0.3)'];

  // Particle class
  class Particle {
      constructor(x, y) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 5 + 2;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.speedX = Math.random() * 2 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.life = 100;
      }

      update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.life--;
          this.size *= 0.98;
      }

      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
      }
  }

  // Create particles on mouse move
  document.addEventListener('mousemove', (e) => {
      for (let i = 0; i < 2; i++) {
          particles.push(new Particle(e.clientX, e.clientY));
      }
  });

  // Animation loop
  function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();

          if (particles[i].life <= 0 || particles[i].size <= 0.5) {
              particles.splice(i, 1);
              i--;
          }
      }

      requestAnimationFrame(animateParticles);
  }

  animateParticles();

  console.log('✨ Portafolio cargado correctamente');
});