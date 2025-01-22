document.addEventListener("DOMContentLoaded", () => {
    const favoriteButtons = document.querySelectorAll(".popular__favorites");

    favoriteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Предотвращает обновление страницы
            button.classList.toggle("active");
        });
    });
});

// Получаем все кнопки "Добавить в избранное" и "Добавить в корзину"
const addToFavoritesButtons = document.querySelectorAll('.popular__favorites');
const addToCartButtons = document.querySelectorAll('.popular__card-carzina');

// Получаем элементы для отображения количества
const favoritsValue = document.querySelector('#favorits__value');
const karzinaValue = document.querySelector('#karzina__value');

// Переменные для счётчиков с сохранением данных из localStorage
let countFavorites = parseInt(localStorage.getItem('countFavorites')) || 0;
let countCart = parseInt(localStorage.getItem('countCart')) || 0;

// Отображаем сохранённые значения при загрузке страницы
favoritsValue.textContent = countFavorites;
karzinaValue.textContent = countCart;

// Обработчик событий для кнопок добавления в избранное
addToFavoritesButtons.forEach(button => {
    button.addEventListener('click', () => {
        countFavorites++;
        favoritsValue.textContent = countFavorites;
        localStorage.setItem('countFavorites', countFavorites);
        console.log(`Товар добавлен в избранное. Общее количество: ${countFavorites}`);
    });
});

// Обработчик событий для кнопок добавления в корзину
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        countCart++;
        karzinaValue.textContent = countCart;
        localStorage.setItem('countCart', countCart);
        console.log(`Товар добавлен в корзину. Общее количество: ${countCart}`);
    });
});
