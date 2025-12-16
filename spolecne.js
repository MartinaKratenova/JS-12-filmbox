
// 3. Hamburger menu
const menuButton = document.querySelector('#menu-tlacitko');
const menuItems = document.querySelector('#menu-polozky');
const menuBurgerCross = document.querySelector('.navbar').querySelector('.fas');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('show');
    menuBurgerCross.classList.toggle('fa-bars');
    menuBurgerCross.classList.toggle('fa-xmark');
});



