const makeMenu = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menuDiv');
    menu.classList.add('main')
    const menuText = document.createElement('p');
    menuText.textContent = 'pizza, rice, milk';
    menu.appendChild(menuText);
    return menu;
}

export default makeMenu;