const menuCloseButton = document.querySelector('#menu-close-button');
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarOverlay = document.getElementById('sidebar-overlay');

if (menuOpenButton && menuCloseButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

const menuCloseButton = document.querySelector('#menu-close-button');

menuCloseButton.addEventListener("click", () =>
menuOpenButton.click())
};