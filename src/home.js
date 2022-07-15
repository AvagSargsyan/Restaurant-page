import Icon from './assets/icons/github.svg';

function createHomeSection() {
    
    // main section
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Welcome To <br> Tasty Lunch Restaurant'
    const introduction = document.createElement('p');
    introduction.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit reprehenderit quos molestias. <br>Officia enim consectetur aliquid voluptatum minus! Magnam quisquam voluptatem officia consectetur nesciunt.'
    const reserveBtn = document.createElement('button');
    reserveBtn.innerText = 'RESERVATION';
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');

    mainContent.appendChild(heading);
    mainContent.appendChild(introduction);
    mainContent.appendChild(reserveBtn);
    main.appendChild(mainContent);

    // footer section
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');

    const authorInfo = document.createElement('p');
    authorInfo.innerHTML = 'Copyright &copy; 2022 AvagSargsyan';
    const githubLink = document.createElement('a');
    githubLink.setAttribute('href', 'https://github.com/AvagSargsyan');
    githubLink.setAttribute('target', '_blank');

    // load the github logo
    const myIcon = new Image();
    myIcon.src = Icon;
    githubLink.appendChild(myIcon);

    footer.appendChild(authorInfo);
    footer.appendChild(githubLink);
    main.appendChild(footer);

    return [main, reserveBtn];
}

export {
    createHomeSection
};
