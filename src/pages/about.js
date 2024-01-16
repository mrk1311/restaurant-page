const makeAbout = () => {
    const about = document.createElement('div');
    about.setAttribute('id', 'aboutDiv');
    about.classList.add('main')
    const aboutText = document.createElement('p');
    aboutText.textContent = 'We are a family owned and operated restaurant that has been serving the community for over 30 years. We pride ourselves on our fresh ingredients and our friendly staff. Come on in and try our famous pizza!';
    about.appendChild(aboutText);

    return about;
}

export default makeAbout;