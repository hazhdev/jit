const button = document.getElementById('burger');
const nav =  document.getElementById('header__nav');

button.addEventListener('click', () => {
    if (nav.style.display === 'none') {
        nav.style.display === 'block'
    } else {
        nav.style.display === 'none'
    }
})