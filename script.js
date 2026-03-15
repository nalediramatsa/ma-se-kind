const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('header');
// Select all nav links
const navLinks = document.querySelectorAll('.menu-links a'); //grabs every <> inside .menu-links

//Toggle menu on hamburger/logo click
menuButton.addEventListener('click',()=>{
    header.classList.toggle('menu-open');
});

//Close menu when a nav link is clicked
navLinks.forEach(link => { //this loops over each link
    link.addEventListener('click', () => {
    // Remove the menu-open class to close the menu
        header.classList.remove('menu-open');
//When a link is clicked, hide the menu overlay and return the hamburger icon to its original state
    });
});