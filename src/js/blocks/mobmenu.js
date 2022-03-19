const submenus = document.querySelectorAll('.submenu');

for (let submenu of submenus) {
  let list = document.querySelector('.submenu__list');
  submenu.addEventListener('click', () => {
    list.classList.toggle('submenu__list--hidden');
  });
}
