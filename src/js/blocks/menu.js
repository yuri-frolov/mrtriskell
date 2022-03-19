document.addEventListener('DOMContentLoaded', () => {
  const mobMenuBtn = document.querySelector('.header__mobile-menu-btn');
  const mobHamburger = document.querySelector('.header__mobile-menu-btn.hamburger');
  const mobmenu = document.querySelector('.mobmenu');

  const desktopMenuBtn = document.querySelector('.header__desktop-menu-btn');
  const desktopHamburger = document.querySelector('.header__desktop-menu-btn.hamburger');
  const desktopmenu = document.querySelector('.desktopmenu');

  mobMenuBtn.addEventListener('click', () => {
    mobHamburger.classList.toggle('hamburger--active');
    mobmenu.classList.toggle('mobmenu--opened');
  });

  desktopMenuBtn.addEventListener('click', () => {
    desktopHamburger.classList.toggle('hamburger--active');
    desktopmenu.classList.toggle('desktopmenu--opened');
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 1256) {
      mobHamburger.classList.remove('hamburger--active');
      mobmenu.classList.remove('mobmenu--opened');
    }

    if (window.screen.availWidth < 1256) {
      desktopHamburger.classList.remove('hamburger--active');
      desktopmenu.classList.remove('desktopmenu--opened');
    }
  });
});
