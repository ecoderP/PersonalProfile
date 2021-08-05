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

// Hide projects
const landingPages = document.querySelector('#landing_pages');
const toggleLandingPages = document.querySelector('#toggle_landing_pages');




landingPages.addEventListener('click', function() {
    if(toggleLandingPages.classList.contains('open_project')) {
        toggleLandingPages.classList.remove('open_project');
    }
    else {toggleLandingPages.classList.add('open_project');
    toggleReact.classList.remove('open_project');
    toggleJScripts.classList.remove('open_project');
    toggleHtmlEmail.classList.remove('open_project')}
});
const reactProjects = document.querySelector('#react');
const toggleReact = document.querySelector('#toggle_react');

reactProjects.addEventListener('click', function() {
    if(toggleReact.classList.contains('open_project')) {
        toggleReact.classList.remove('open_project');
    }
    else {toggleReact.classList.add('open_project');
    toggleLandingPages.classList.remove('open_project');
    toggleJScripts.classList.remove('open_project');
    toggleHtmlEmail.classList.remove('open_project')}
});

const jsProjects = document.querySelector('#j_scripts');
const toggleJScripts = document.querySelector('#toggle_j_scripts');

jsProjects.addEventListener('click', function() {
    if(toggleJScripts.classList.contains('open_project')) {
        toggleJScripts.classList.remove('open_project');
    }
    else {toggleJScripts.classList.add('open_project');
        toggleLandingPages.classList.remove('open_project');
        toggleReact.classList.remove('open_project');
        toggleHtmlEmail.classList.remove('open_project')}
});

const htmlEmail = document.querySelector('#html_email');
const toggleHtmlEmail = document.querySelector('#toggle_html_email');

htmlEmail.addEventListener('click', function() {
    if(toggleHtmlEmail.classList.contains('open_project')) {
        toggleHtmlEmail.classList.remove('open_project');
    }
    else {toggleHtmlEmail.classList.add('open_project');
        toggleLandingPages.classList.remove('open_project');
        toggleReact.classList.remove('open_project');
        toggleJScripts.classList.remove('open_project')}
});