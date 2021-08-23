//Grab the hambugger menu icon and 
const mobileToggle = document.getElementById('mobile_toggle');
const mobileMenu = document.querySelector('.mobile_menu');



mobileToggle.addEventListener('click', function() {
    if(mobileToggle.classList.contains('opened')) {
        mobileToggle.classList.remove('opened');  // close X - hambugger menu
        mobileMenu.classList.remove('menu_drop_down') //close dropdown menu
    }
    else {mobileToggle.classList.add('opened');
         mobileMenu.classList.add('menu_drop_down')}
});

//close mobile menu when we click on any of the mobile menu links
mobileMenu.addEventListener('click', closeMobileMenu);
function closeMobileMenu() {
    mobileToggle.classList.remove('opened');
    mobileMenu.classList.remove('menu_drop_down')
}