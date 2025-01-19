// Кнопка клика
const burger = document.querySelector('.burger__btn'); // Кнопка бургер

// Появляющиеся и скрывающиеся элементы
const navbarMenu = document.querySelector('.nav__bar-menu'); // Навигационное меню
const address = document.querySelector('.header__contact'); // Контактная информация
const menu = document.querySelector('.nav-menu'); // Другое меню

// Функция для скрытия меню и показа кнопки бургер
function hideMenu() {
  navbarMenu.classList.remove('active');
  address.classList.remove('active');
  menu.classList.remove('active');
  burger.classList.remove('hidden'); // Показываем кнопку бургер
}

// Функция для отображения меню и скрытия кнопки бургер
function showMenu() {
  navbarMenu.classList.add('active');
  address.classList.add('active');
  menu.classList.add('active');
  burger.classList.add('hidden'); // Скрываем кнопку бургер
}

// Обработчик клика по кнопке бургер
burger.addEventListener('click', function () {
  // Если меню не открыто, показываем меню и скрываем кнопку бургер
  if (!navbarMenu.classList.contains('active')) {
    showMenu();
  } else {
    hideMenu(); // Если меню открыто, скрываем меню и показываем кнопку бургер
  }
});

// Обработчик клика за пределами меню
document.addEventListener('click', function (event) {
  // Проверяем, что клик был за пределами элементов
  if (
    !navbarMenu.contains(event.target) && 
    !address.contains(event.target) && 
    !menu.contains(event.target) && 
    !burger.contains(event.target)
  ) {
    hideMenu(); // Скрываем меню и показываем кнопку бургер
  }
});



