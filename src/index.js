import { createHeader } from './header';
import { createHomeSection } from './home';
import { createMenu } from './menu';
import './style.css';


function createPageContents() {
    const content = document.querySelector('#content');
    
    const [header, homeBtn, menuBtn, contactBtn] = createHeader();
    content.appendChild(header);

    const [homeSection, reserveBtn] = createHomeSection();
    content.appendChild(homeSection);

    const menu = createMenu();

    homeBtn.addEventListener('click', e => {
        menu.remove();
        content.appendChild(homeSection);
    })

    menuBtn.addEventListener('click', e => {
        homeSection.remove();
        content.appendChild(menu);
    });

    reserveBtn.addEventListener('click', e => {
        homeSection.remove();
        content.appendChild(menu);
    });

};

createPageContents();
