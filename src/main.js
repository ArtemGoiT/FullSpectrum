document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');
  const body = document.body;

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  document.addEventListener('click', function (event) {
    // Проверяем, был ли клик вне области меню и открыто ли меню
    if (!menu.contains(event.target) && !menu.classList.contains('is-hidden')) {
      menu.classList.add('is-hidden'); // Закрываем меню
    }
  });

  function toggleMenu() {
    menu.classList.toggle('is-hidden');
  }
});
