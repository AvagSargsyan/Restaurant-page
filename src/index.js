import { createHeader } from './header';
import { createHomeSection } from './home';
import { createMenu } from './menu';
import { createContactPage } from './contact';
import './style.css';

function createPageContents() {
    const content = document.querySelector('#content');
    
    const [header, homeBtn, menuBtn, contactBtn] = createHeader();
    content.appendChild(header);

    const [homeSection, reserveBtn] = createHomeSection();
    content.appendChild(homeSection);

    const menu = createMenu();

    const contact = createContactPage();

    homeBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(homeSection);
    })

    menuBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(menu);
    });

    reserveBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(menu);
    });

    contactBtn.addEventListener('click', e => {
        while (content.childNodes.length > 1) {
            content.removeChild(content.lastChild);
        }
        content.appendChild(contact);
    })

};

createPageContents();
