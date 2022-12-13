const navMenuElement = document.querySelector('.header-nav');
const navToggleElement = navMenuElement.querySelector('.header-nav__toggle');
const menuElement = navMenuElement.querySelectorAll('.header-nav__link');

navMenuElement.classList.remove('header-nav--nojs');

navToggleElement.addEventListener('click', () => {
  if (navMenuElement.classList.contains('header-nav--closed')) {
    navMenuElement.classList.remove('header-nav--closed');
    navMenuElement.classList.add('header-nav--opened');
    document.body.classList.add('header__overflow-hidden');
  } else {
    navMenuElement.classList.remove('header-nav--opened');
    navMenuElement.classList.add('header-nav--closed');
    document.body.classList.remove('header__overflow-hidden');
  }
})

menuElement.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (navMenuElement.classList.contains('header-nav--closed')) {
      navMenuElement.classList.remove('header-nav--closed');
      navMenuElement.classList.add('header-nav--opened');
      document.body.classList.add('header__overflow-hidden');
    } else {
      navMenuElement.classList.remove('header-nav--opened');
      navMenuElement.classList.add('header-nav--closed');
      document.body.classList.remove('header__overflow-hidden');
    }
  })
})
