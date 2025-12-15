
// 3. Hamburger menu
const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const krizek = document.querySelector('.navbar').querySelector('.fas');

menuTlacitko.addEventListener('click', () => {
    menuPolozky.classList.toggle('show');
    krizek.classList.toggle('fa-bars');
    krizek.classList.toggle('fa-xmark');
});



