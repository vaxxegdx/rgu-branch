function showMenu(element) {
    const parentLi = element.closest('.nav-int__item');

    const currentSubMenu = parentLi.querySelector('.nav-int__menu-wrap');
    const currentMenu = parentLi.querySelector('.nav-int__menu');
    const currentLink = parentLi.querySelector('.nav-int__link');
    
    if (currentSubMenu) {
        currentSubMenu.classList.add("nav-int__menu-wrap--open");
        currentLink.setAttribute('aria-expanded', 'true');
        currentMenu.setAttribute('aria-hidden', 'false');
    }
    if (currentLink) {
        currentLink.classList.add("nav-int__link--selected");
    }
}

function hideMenu(element) {
    const parentLi = element.closest('.nav-int__item');

    const currentSubMenu = parentLi.querySelector('.nav-int__menu-wrap');
    const currentMenu = parentLi.querySelector('.nav-int__menu');
    const currentLink = parentLi.querySelector('.nav-int__link');
    
    if (currentSubMenu) {
        currentSubMenu.classList.remove("nav-int__menu-wrap--open");
        currentLink.setAttribute('aria-expanded', 'false');
        currentMenu.setAttribute('aria-hidden', 'true');
    }
    if (currentLink) {
        currentLink.classList.remove("nav-int__link--selected");
    }
}