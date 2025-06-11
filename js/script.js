document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navOverlay = document.querySelector('.nav-overlay');
  const closeMenu = document.querySelector('.close-menu');

  function closeSidebar() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('open');
    navOverlay.classList.remove('active');
  }

  hamburger.addEventListener('click', function() {
    navMenu.classList.add('active');
    hamburger.classList.add('open');
    navOverlay.classList.add('active');
  });

  closeMenu.addEventListener('click', closeSidebar);
  navOverlay.addEventListener('click', closeSidebar);
});