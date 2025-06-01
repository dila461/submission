const menuOpenButton = document.querySelector('#menu-open-button');
const menucloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

const menuCloseButton = document.querySelector('#menu-close-button');

menuCloseButton.addEventListener("click", () =>
menuOpenButton.click());