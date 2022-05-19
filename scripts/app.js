const menuBtn = document.querySelector('.menu__container');
const burgerImage = document.querySelector('.menu__container div img');
const navMenu = document.querySelector('.container__features');
const pageOverlay = document.querySelector('#overlay');

menuBtn.addEventListener('click', function () {
  navMenu.classList.toggle('menu-active');

  // Change menu image
  if (burgerImage.getAttribute('src') == 'images/icon-hamburger.svg') {
    burgerImage.src = 'images/icon-close.svg';
    pageOverlay.style.display = 'block';
  } else {
    pageOverlay.style.display = 'none';
    burgerImage.src = 'images/icon-hamburger.svg';
  }
});

pageOverlay.addEventListener('click', function () {
  pageOverlay.style.display = 'none';
  navMenu.classList.remove('menu-active');
  burgerImage.src = 'images/icon-hamburger.svg';
});

