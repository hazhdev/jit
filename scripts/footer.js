const footerinfa = document.querySelector('.footer__infa');
const footermagazin = document.querySelector('.footer__magazin');

const footerinfaList = footerinfa.nextElementSibling;
const footermagazinList = footermagazin.nextElementSibling;

footerinfa.addEventListener('click', () => {
    footerinfaList.style.display = footerinfaList.style.display === 'none' || footerinfaList.style.display === '' ? 'block' : 'none';
});

footermagazin.addEventListener('click', () => {
    footermagazinList.style.display = footermagazinList.style.display === 'none' || footermagazinList.style.display === '' ? 'block' : 'none';
});
