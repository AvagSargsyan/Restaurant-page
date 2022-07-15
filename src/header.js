function createHeader() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerList = document.createElement('ul');

    const headerItemLogo = document.createElement('div');
    headerItemLogo.innerText = 'Logo';
    headerItemLogo.classList.add('logo');
    const headerItemHome = document.createElement('li');
    headerItemHome.innerText = 'HOME';
    headerItemHome.setAttribute('id', 'home-btn');
    const headerItemMenu = document.createElement('li');
    headerItemMenu.innerText = 'MENU';
    headerItemHome.setAttribute('id', 'menu-btn');
    const headerItemContact = document.createElement('li');
    headerItemContact.innerText = 'CONTACT';
    headerItemHome.setAttribute('id', 'contact-btn');

    // adding contents
    headerList.appendChild(headerItemHome);
    headerList.appendChild(headerItemMenu);
    headerList.appendChild(headerItemContact);
    
    header.appendChild(headerItemLogo);
    header.appendChild(headerList);

    const homeBtn = headerItemHome;
    const menuBtn = headerItemMenu;
    const contactBtn = headerItemContact;

    return [header, homeBtn, menuBtn, contactBtn];
}

export {
    createHeader
};
