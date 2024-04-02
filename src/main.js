document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.mobail-overley');
  const toggleButton = document.querySelector('[data-menu-open]');
  const closeButton = document.querySelector('[data-menu-close]');

  // Функция для открытия бургер-меню
  function openMenu() {
    overlay.classList.add('is-hidden');
  }

  // Функция для закрытия бургер-меню
  function closeMenu() {
    overlay.classList.remove('is-hidden');
  }

  // Обработчик клика по кнопке открытия
  toggleButton.addEventListener('click', openMenu);

  // Обработчик клика по кнопке закрытия
  closeButton.addEventListener('click', closeMenu);

  // Обработчик клика вне меню для закрытия
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      closeMenu();
    }
  });
});
