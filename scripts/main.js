const searchTabs = document.querySelectorAll('.search__tab');

searchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        searchTabs.forEach(tab => {
            tab.classList.remove('search__tab--active');
        });
        tab.classList.add('search__tab--active');
    });
});
