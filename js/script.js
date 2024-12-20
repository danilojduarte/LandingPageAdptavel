// Seleciona o botão hamburguer e o menu
const hamburguer = document.getElementById('hamburguer');
const navLinks = document.getElementById('navLinks');

// Adiciona funcionalidade ao clicar no botão hamburguer
hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
