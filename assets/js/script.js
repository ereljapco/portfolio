const nav = document.querySelector('#nav');
const navToggleBtn = document.querySelector('#navToggleBtn');
const navlinks = document.querySelectorAll('.nav__link');

navToggleBtn.addEventListener('click', () => {
  if (nav.classList.contains('nav--display')) {
    navToggleBtn.classList.remove('header__hamburger-btn--close');
    nav.classList.remove('nav--display');
    return;
  }

  navToggleBtn.classList.add('header__hamburger-btn--close');
  nav.classList.add('nav--display');
});

navlinks.forEach((navLink) =>
  navLink.addEventListener('click', () => {
    navToggleBtn.classList.remove('header__hamburger-btn--close');
    nav.classList.remove('nav--display');
  })
);
