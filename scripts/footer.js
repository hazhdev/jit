const footerinfa = document.querySelector('.footer__infa');
const footermagazin = document.querySelector('.footer__magazin');

const footerinfaList = footerinfa.nextElementSibling;
const footermagazinList = footermagazin.nextElementSibling;

if (window.innerWidth > 600) {
    list.style.display = 'block';
} 

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


function setListDisplay(list) {
    if (window.innerWidth > 600) {
        list.style.display = 'block'; // В десктопной версии всегда показываем список
    }
}
;

// Устанавливаем начальное состояние для десктопа
setListDisplay(footerinfaList);
setListDisplay(footermagazinList);
