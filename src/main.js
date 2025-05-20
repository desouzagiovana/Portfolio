

// AOS
import './style.css';
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 800 });
});

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



