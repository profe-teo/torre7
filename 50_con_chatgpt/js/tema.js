const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️ Modo claro';
  } else {
    toggleBtn.textContent = '🌙 Modo oscuro';
  }
});
