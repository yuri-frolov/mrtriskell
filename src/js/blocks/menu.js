document.addEventListener('DOMContentLoaded', () => {

  const desktopMenuBtn = document.querySelector('.header__desktop-menu-btn');
  const desktopHamburger = document.querySelector('.header__desktop-menu-btn.hamburger');
  const desktopmenu = document.querySelector('.desktopmenu');

  function desktopMenuOpen() {
    /* Дефолтно открытый таб */
    tabLinks[0].click();
    desktopHamburger.classList.add('hamburger--active');
    desktopmenu.classList.add('desktopmenu--opened');
  };

  function desktopMenuClose() {
    desktopHamburger.classList.remove('hamburger--active');
    desktopmenu.classList.remove('desktopmenu--opened');
  }

  function menuSwitcher(event) {
    let desktopMenuIsOpen = desktopmenu.classList.contains('desktopmenu--opened');
    /* Если меню закрыто и клик по кнопке */
    if (!desktopMenuIsOpen && event.target === desktopMenuBtn) {
      desktopMenuOpen();
      return;
    }
    /* Если меню открыто и клик по кнопке */
    if (desktopMenuIsOpen && event.target === desktopMenuBtn) {
      desktopMenuClose();
      return;
    }
    /* Если меню открыто и клик по меню или по его потомкам */
    if (desktopMenuIsOpen && event.target === desktopmenu || desktopmenu.contains(event.target)) {
      return;
    }
    /* Если меню открыто и клик мимо меню */
    if (desktopMenuIsOpen && event.target !== desktopmenu || desktopmenu.contains(event.target)) {
      desktopMenuClose();
      return;
    }
  }

  document.addEventListener('click', menuSwitcher);

  //////////////////TABS///////////////////////
  let tabLinks = document.querySelectorAll('.desktopmenu__link');
  const tabLinkActiveClass = 'desktopmenu__link--active';

  const tabPanes = document.querySelectorAll('.desktopmenu__tab');
  const tabPaneActiveClass = 'desktopmenu__tab--active';

  function openTabs(links, tabs) {
    links.forEach(link => {
      let linkId = link.getAttribute('data-id');
      let matchedTab = document.getElementById(`${linkId}`);

      link.addEventListener('click', () => {

        for (let i = 0; i < links.length; i++) {
          links[i].classList.remove(tabLinkActiveClass);
        }

        for (let i = 0; i < links.length; i++) {
          tabs[i].classList.remove(tabPaneActiveClass);
        }

        link.classList.add(tabLinkActiveClass);
        matchedTab.classList.add(tabPaneActiveClass);
      });

    });
  }
  openTabs(tabLinks, tabPanes);

  /* закрыть десктопное меню, если окно меньше 1256px */
  window.addEventListener('resize', () => {
    if (window.screen.availWidth < 1256) {
      desktopMenuClose();
    }
  });
});
