import makeAbout from '../pages/about';
import makeMenu from '../pages/menu';
import makeOrder from '../pages/order';
import makeContact from '../pages/contact';

function changeTab(tab) {
    const content = document.getElementById('content');
    const about = document.getElementById('about');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    const order = document.getElementById('order');

    content.removeChild(content.lastChild);

    if (tab === 'about') {
        content.appendChild(makeAbout());
        about.classList.add('active');
        menu.classList.remove('active');
        contact.classList.remove('active');
        order.classList.remove('active');
    } else if (tab === 'menu') {
        content.appendChild(makeMenu());
        about.classList.remove('active');
        menu.classList.add('active');
        contact.classList.remove('active');
        order.classList.remove('active');
    } else if (tab === 'contact') {
        content.appendChild(makeContact());
        about.classList.remove('active');
        menu.classList.remove('active');
        contact.classList.add('active');
        order.classList.remove('active');
    } else if (tab === 'order') {
        content.appendChild(makeOrder());
        about.classList.remove('active');
        menu.classList.remove('active');
        contact.classList.remove('active');
        order.classList.add('active');
    }
};

export default changeTab;