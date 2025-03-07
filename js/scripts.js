const toggleButton = document.getElementById('toggleMode');
const body = document.body;
const heroSection = document.getElementById('hero');

toggleButton.addEventListener('click', () => {
    const isNightMode = body.classList.toggle('night');
    if (isNightMode) {
        toggleButton.innerHTML = '🌞 Modo Diurno';
        heroSection.classList.add('night-mode');
    } else {
        toggleButton.innerHTML = '🌙 Modo Noturno';
        heroSection.classList.remove('night-mode');
    }
});
