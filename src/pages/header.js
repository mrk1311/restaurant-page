import changeTab from "../functions/tabChange";

const makeHeader = () => {
    const header = document.createElement('div');
    header.id = 'header';

    const about = document.createElement('div');
    about.id = 'about';
    about.classList.add('header-item');
    about.textContent = 'About';
    header.appendChild(about);

    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.classList.add('header-item');
    menu.textContent = 'Menu';
    header.appendChild(menu);

    const order = document.createElement('div');
    order.id = 'order';
    order.classList.add('header-item');
    order.textContent = 'Order';
    header.appendChild(order);

    const contact = document.createElement('div');
    contact.id = 'contact';
    contact.classList.add('header-item');
    contact.textContent = 'Contact';
    header.appendChild(contact);

    return header;
}

export default makeHeader;