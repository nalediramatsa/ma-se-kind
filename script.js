const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('header');

menuButton.addEventListener('click',()=>{
    header.classList.toggle('menu-open');
});