const makeContact = () => {
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contactDiv');
    contact.classList.add('main')
    const contactText = document.createElement('p');
    contactText.textContent = 'contact here';
    contact.appendChild(contactText);
    return contact;
}

export default makeContact;