let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.header-button-toggle');
let headerIcon = document.querySelector('.header-icon');

navMain.classList.remove('navigation-nojs');
navToggle.classList.remove('header-button-toggle-nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation-closed')) {
    navMain.classList.remove('navigation-closed');
    navMain.classList.add('navigation-opened');
    headerIcon.classList.remove('header-icon-closed');
    headerIcon.classList.add('header-icon-opened');
  } else {
    navMain.classList.add('navigation-closed');
    navMain.classList.remove('navigation-opened');
    headerIcon.classList.remove('header-icon-opened');
    headerIcon.classList.add('header-icon-closed');
  }
  if (navToggle.classList.contains('header-button-toggle-closed')) {
    navToggle.classList.remove('header-button-toggle-closed');
    navToggle.classList.add('header-button-toggle-opened');
  } else {
    navToggle.classList.add('header-button-toggle-closed');
    navToggle.classList.remove('header-button-toggle-opened');
  }
});
