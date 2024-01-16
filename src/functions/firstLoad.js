import makeAbout from "../pages/about";
import makeHeader from "../pages/header";
import changeTab from "./tabChange";

const firstLoad = () => {

    const content = document.getElementById('content')
    const header = makeHeader()

    content.appendChild(header)

    content.appendChild(makeAbout());
    about = document.getElementById('about');
    about.classList.add('active');

    about.addEventListener('click', () => changeTab('about'))
    menu.addEventListener('click', () => changeTab('menu'))
    contact.addEventListener('click', () => changeTab('contact'))
    order.addEventListener('click', () => changeTab('order'))

}

export default firstLoad;