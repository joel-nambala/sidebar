'use strict';

const openNav = document.querySelector('.nav__open');
const closeNav = document.querySelector('.sidenav__close');
const sidenav = document.querySelector('.sidenav');

openNav.addEventListener('click', function () {
  sidenav.classList.toggle('sidenav__show');
});

closeNav.addEventListener('click', function () {
  sidenav.classList.remove('sidenav__show');
});
