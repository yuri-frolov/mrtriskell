document.addEventListener('DOMContentLoaded', () => {
  const mobMenuBtn = document.querySelector('.header__mobile-menu-btn');
  const mobHamburger = document.querySelector('.header__mobile-menu-btn.hamburger');
  const mobmenu = document.querySelector('.mobmenu');

  mobMenuBtn.addEventListener('click', () => {
    mobHamburger.classList.toggle('hamburger--active');
    mobmenu.classList.toggle('mobmenu--opened');
  });


const submenus = document.querySelectorAll('.submenu');

for (let submenu of submenus) {
  let list = document.querySelector('.submenu__list');
  submenu.addEventListener('click', () => {
    list.classList.toggle('submenu__list--hidden');
  });
}

window.addEventListener('resize', () => {
  if (window.screen.availWidth > 1256) {
    mobHamburger.classList.remove('hamburger--active');
    mobmenu.classList.remove('mobmenu--opened');
  }
});

});
