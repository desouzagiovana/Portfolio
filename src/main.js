

// AOS
import './style.css';
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 800 });
});


////////////


// estrelas
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = [];

for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha <= 0 || star.alpha >= 3) {
            star.speed = -star.speed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 9 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const header = document.getElementById("header");

    header.style.transform = `translateY(${scrollY * 0.5}px)`;
});

///////////////////////////////////////

 const root = document.documentElement;            // seu elemento <html>
  const toggle = document.getElementById('theme-toggle');
  const icon   = document.getElementById('theme-icon');

 

  // 2️⃣ Toggle no clique
  if (toggle) {
    toggle.addEventListener('click', () => {
      // inverte
      const isDark = !root.classList.contains('dark');
      root.classList.toggle('dark');

      // atualiza ícone
      icon.classList.replace(isDark ? 'fa-sun' : 'fa-moon',
                             isDark ? 'fa-moon' : 'fa-sun');

      // salva preferência
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      console.log('Dark mode:', isDark);
    });
  }

  // 3️⃣ Reage a mudanças no SO se não houver preferência manual
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        const nowDark = e.matches;
        root.classList.toggle('dark', nowDark);
        icon.classList.replace(nowDark ? 'fa-sun' : 'fa-moon',
                               nowDark ? 'fa-moon' : 'fa-sun');
      }
    });