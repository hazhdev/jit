document.addEventListener("DOMContentLoaded", () => {
    const favoriteButtons = document.querySelectorAll(".popular__favorites");

    favoriteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Предотвращает обновление страницы
            button.classList.toggle("active"); // Переключает класс "active"
        });
    });
});
