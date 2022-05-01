const elements = {
  mobileHeader: '.header-mobile',
  mobileHeaderActive: 'header-mobile--active',

  desktopHeader: '.header-desktop',
  desktopHeaderContainer: '.header-desktop>.container',
  desktopHeaderActive: 'header-desktop--active',

  main: '.main',
};

const screen = {
  tablet: 768,
  desktop: 1256,
};

const state = {
  screen: undefined,
};

const settings = {
  headerScrolledHeight: 200,
};

const mobileHeader = document.querySelector(elements.mobileHeader);
const desktopHeader = document.querySelector(elements.desktopHeader);
const desktopHeaderContainer = document.querySelector(elements.desktopHeaderContainer);
const main = document.querySelector(elements.main);

function enableMobileHeader() {
  desktopHeader.classList.remove(elements.desktopHeaderActive);
  mobileHeader.classList.add(elements.mobileHeaderActive);
  let mobileHeaderHeight = mobileHeader.offsetHeight - 1;
  main.style.marginTop = mobileHeaderHeight.toString() + 'px';
};

function enableDesktopHeader() {
  mobileHeader.classList.remove(elements.mobileHeaderActive);
  desktopHeader.classList.add(elements.desktopHeaderActive);
  let desktopHeaderHeight = desktopHeader.offsetHeight - 1;
  main.style.marginTop = desktopHeaderHeight.toString() + 'px';
};

function headerToggle(exp) {

  switch (exp) {

    case 'mobile':
      enableMobileHeader();
      break;

    case 'tablet':
      enableMobileHeader();
      break;

    case 'desktop':
      enableDesktopHeader();
      break;
  }
};

function checkScreenState() {
  if (window.innerWidth < screen.tablet) {
    state.screen = 'mobile';
    headerToggle(state.screen);
  }
  if (window.innerWidth >= screen.tablet && window.innerWidth < screen.desktop) {
    state.screen = 'tablet';
    headerToggle(state.screen);
  }
  if (window.innerWidth >= screen.desktop) {
    state.screen = 'desktop';
    headerToggle(state.screen);
  }
  console.log(state.screen);// logs
};

window.addEventListener('DOMContentLoaded', () => {
  checkScreenState();
});

window.addEventListener('resize', () => {
  checkScreenState();
});

/////////////////Скрытие шапки при скролле////////////////////////////
/* Вспомогательные именованные функции */
function addClass() {
  desktopHeader.classList.add('header-desktop--scrolled');
};

function removeClass() {
  desktopHeader.classList.remove('header-desktop--scrolled');
  desktopMenuClose();
};

function checkScrollPosition() {
  let scrollPosition = scrollY;
  //console.log(scrollPosition); // logs

  if (scrollPosition >= settings.headerScrolledHeight) {
    desktopHeader.classList.add('header-desktop--scrolled');
    desktopHeaderContainer.addEventListener('mouseenter', removeClass);
    desktopHeaderContainer.addEventListener('mouseleave', addClass);
  }

  if (scrollPosition < settings.headerScrolledHeight) {
    desktopHeader.classList.remove('header-desktop--scrolled');
    desktopHeaderContainer.removeEventListener('mouseenter', removeClass);
    desktopHeaderContainer.removeEventListener('mouseleave', addClass);
  }
};

window.addEventListener('scroll', function() {
  checkScrollPosition();
});
