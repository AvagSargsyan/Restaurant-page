import LocationIcon from './assets/icons/location.svg';
import ClockIcon from './assets/icons/clock.svg';
import PhoneIcon from './assets/icons/phone.svg';
import MessageIcon from './assets/icons/message.svg';

function createContactPage() {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');

    const contactHeading = document.createElement('h1');
    contactHeading.innerText = 'Contact us';

    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content');

    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contact-info');

    // address
    const locationIcon = new Image();
    locationIcon.src = LocationIcon;

    const address = document.createElement('div');
    address.appendChild(locationIcon);
    const addressText = document.createElement('p');
    addressText.innerHTML = '2865 Washington Street <br>Beaverton, CA 20134'
    address.appendChild(addressText);
    
    // hoursOpen
    const clockIcon = new Image();
    clockIcon.src = ClockIcon;

    const hoursOpen = document.createElement('div');
    hoursOpen.appendChild(clockIcon);
    const hoursOpenText = document.createElement('p');
    hoursOpenText.innerHTML = 'Mon - Thurs: 8am - 8pm <br>Fri - Sun: 8am - 11pm';
    hoursOpen.appendChild(hoursOpenText);

    // phone
    const phoneIcon = new Image();
    phoneIcon.src = PhoneIcon;

    const phone = document.createElement('div');
    phone.appendChild(phoneIcon);
    const phoneText = document.createElement('p');
    phoneText.innerText = '(223)-880 5155';
    phone.appendChild(phoneText);

    
    // contactInfo children
    contactInfo.appendChild(address);
    contactInfo.appendChild(hoursOpen);
    contactInfo.appendChild(phone);
    
    // form
    // message us
    const messageIcon = new Image();
    messageIcon.src = MessageIcon;

    const message = document.createElement('div');
    message.appendChild(messageIcon);
    const messageText = document.createElement('p');
    messageText.innerText = 'Message us';
    message.setAttribute('id', 'message');
    message.appendChild(messageText);

    const contactForm = document.createElement('form');
    contactForm.setAttribute('action', '#');
    
    // fullName
    const nameContainer = document.createElement('div');
    const fullNameLabel = document.createElement('label');
    fullNameLabel.innerText = 'FULL NAME';
    fullNameLabel.setAttribute('for', 'full-name');

    const fullNameInput = document.createElement('input');
    fullNameInput.setAttribute('type', 'text');
    fullNameInput.setAttribute('id', 'full-name');
    fullNameInput.setAttribute('name', 'fullName');
    fullNameInput.setAttribute('placeholder', 'full name');
    nameContainer.appendChild(fullNameLabel);
    nameContainer.appendChild(fullNameInput);

    // email
    const emailContainer = document.createElement('div');
    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'EMAIL';
    emailLabel.setAttribute('for', 'email');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'email');
    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailInput);

    // messageInput
    const messageContainer = document.createElement('div');
    const messageLabel = document.createElement('label');
    messageLabel.innerText = 'MESSAGE';
    messageLabel.setAttribute('for', 'message');

    const messageInput = document.createElement('input');
    messageInput.setAttribute('type', 'textfield');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('placeholder', 'Your message');
    messageContainer.appendChild(messageLabel);
    messageContainer.appendChild(messageInput);

    // submit button
    const sendBtn = document.createElement('input');
    sendBtn.setAttribute('type', 'submit');
    sendBtn.setAttribute('value', 'Send');

    const formElements = document.createElement('div');
    formElements.setAttribute('id', 'form-fields');

    formElements.appendChild(nameContainer);
    formElements.appendChild(emailContainer);
    formElements.appendChild(messageContainer);
    // form children
    contactForm.appendChild(message);
    contactForm.appendChild(formElements);
    contactForm.appendChild(sendBtn);

    // contactContent children
    contactContent.appendChild(contactInfo);
    contactContent.appendChild(contactForm);

    // contactContainer children
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactContent);

    return contactContainer;
}

export {
    createContactPage
};
