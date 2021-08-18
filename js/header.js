const mobileToggle = document.getElementById('mobile_toggle');
const mobileMenu = document.querySelector('.mobile_menu');



mobileToggle.addEventListener('click', function() {
    if(mobileToggle.classList.contains('opened')) {
        mobileToggle.classList.remove('opened');
        mobileMenu.classList.remove('menu_drop_down')
    }
    else {mobileToggle.classList.add('opened');
         mobileMenu.classList.add('menu_drop_down')}
});