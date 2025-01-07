const footerinfa = document.querySelector('.footer__infa');
const footermagazin = document.querySelector('.footer__magazin');

const footerinfaList = footerinfa.nextElementSibling;
const footermagazinList = footermagazin.nextElementSibling;

footerinfa.addEventListener('click', () => {
    if (footerinfaList.style.display === 'none' || footerinfaList.style.display === '') {
        footerinfaList.style.display = 'block';
    } else {
        footerinfaList.style.display = 'none';
    }
});

footermagazin.addEventListener('click', () => {
    if (footermagazinList.style.display === 'none' || footermagazinList.style.display === '') {
        footermagazinList.style.display = 'block';
    } else {
        footermagazinList.style.display = 'none';
    }
});


if (window.innerWidth > 600) {
    list.style.display = 'block';
} 
