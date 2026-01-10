function showMenu(element) {
    const parentLi = element.closest('.header__nav-int-item');

    const currentSubMenu = parentLi.querySelector('.header__nav-int-menu-wrap');
    const currentLink = parentLi.querySelector('.header__nav-int-link');
    
    if (currentSubMenu) {
        currentSubMenu.classList.add("header__nav-int-menu-wrap--open");
    }
    if (currentLink) {
        currentLink.classList.add("header__nav-int-link--selected");
    }
}

function hideMenu(element) {
    const parentLi = element.closest('.header__nav-int-item');

    const currentSubMenu = parentLi.querySelector('.header__nav-int-menu-wrap');
    const currentLink = parentLi.querySelector('.header__nav-int-link');
    
    if (currentSubMenu) {
        currentSubMenu.classList.remove("header__nav-int-menu-wrap--open");
    }
    if (currentLink) {
        currentLink.classList.remove("header__nav-int-link--selected");
    }
}