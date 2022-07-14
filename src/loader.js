function loadFullPage() {
    // header section
    // creating contents
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerList = document.createElement('ul');

    const headerItemLogo = document.createElement('li');
    headerItemLogo.innerText = 'Logo';
    const headerItemHome = document.createElement('li');
    headerItemHome.innerText = 'HOME';
    const headerItemMenu = document.createElement('li');
    headerItemMenu.innerText = 'MENU';
    const headerItemContact = document.createElement('li');
    headerItemContact.innerText = 'CONTACT';

    // adding contents
    headerList.appendChild(headerItemLogo);
    headerList.appendChild(headerItemHome);
    headerList.appendChild(headerItemMenu);
    headerList.appendChild(headerItemContact);
    
    header.appendChild(headerList);
    content.appendChild(header);
    
    // main section
    // creating contents
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const heading = document.createElement('h1');
    heading.innerText = 'Welcome To Tasty Lunch Restaurant'
    const introduction = document.createElement('p');
    introduction.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit reprehenderit quos molestias. Officia enim consectetur aliquid voluptatum minus! Magnam quisquam voluptatem officia consectetur nesciunt.'
    const reserveBtn = document.createElement('button');
    reserveBtn.innerText = 'RESERVATION';

    // adding contents
    main.appendChild(heading);
    main.appendChild(introduction);
    main.appendChild(reserveBtn);

    content.appendChild(main);

    // footer section
    // adding contents
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    const authorInfo = document.createElement('p');
    authorInfo.innerHTML = 'Copyright &copy; 2022 AvagSargsyan';
    const githubLink = document.createElement('a');

    // try to load the github logo later
    
    // const githubLogo = document.createElement('img');
    // githubLogo.setAttribute('src', '#');

    // adding contents
    // githubLink.appendChild(githubLogo);

    footer.appendChild(authorInfo);
    footer.appendChild(githubLink);
    
    content.appendChild(footer);
}

export {
    loadFullPage
};
