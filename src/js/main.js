function showMenu(element) {
    const parentLi = element.closest('.nav-int__item');

    const currentSubMenu = parentLi.querySelector('.nav-int__menu-wrap');
    const currentLink = parentLi.querySelector('.nav-int__link');
    
    if (currentSubMenu) {
        currentSubMenu.classList.add("nav-int__menu-wrap--open");
    }
    if (currentLink) {
        currentLink.classList.add("nav-int__link--selected");
    }
}

function hideMenu(element) {
    const parentLi = element.closest('.nav-int__item');

    const currentSubMenu = parentLi.querySelector('.nav-int__menu-wrap');
    const currentLink = parentLi.querySelector('.nav-int__link');
    
    if (currentSubMenu) {
        currentSubMenu.classList.remove("nav-int__menu-wrap--open");
    }
    if (currentLink) {
        currentLink.classList.remove("nav-int__link--selected");
    }
}