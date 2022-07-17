function createMenu(content) {

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    const menuHeading = document.createElement('h1');
    menuHeading.innerText = 'Menu';

    const menuItemContainer = document.createElement('div');
    menuItemContainer.setAttribute('id', 'menu-item-container');

    const menuItem1 = document.createElement('div');
    const menuTitle1 = document.createElement('h2');
    menuTitle1.innerText = 'BEEF';
    const menuContent1 = document.createElement('p');
    menuItem1.setAttribute('id', 'menu-item1');
    menuContent1.innerHTML = 'Tasty Meal .......... 10$ <br>Tasty Meal .......... 19$$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 9$ <br>Tasty Meal .......... 17$ <br>'

    menuItem1.appendChild(menuTitle1);
    menuItem1.appendChild(menuContent1);

    const menuItem2 = document.createElement('div');
    const menuTitle2 = document.createElement('h2');
    menuTitle2.innerText = 'CHICKEN';
    const menuContent2 = document.createElement('p');
    menuItem2.setAttribute('id', 'menu-item1');
    menuContent2.innerHTML = 'Tasty Meal .......... 10$ <br>Tasty Meal .......... 19$$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>'

    menuItem2.appendChild(menuTitle2);
    menuItem2.appendChild(menuContent2);

    const menuItem3 = document.createElement('div');
    const menuTitle3 = document.createElement('h2');
    menuTitle3.innerText = 'PORK';
    const menuContent3 = document.createElement('p');
    menuItem3.setAttribute('id', 'menu-item1');
    menuContent3.innerHTML = 'Tasty Meal .......... 10$ <br>Tasty Meal .......... 19$$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>'

    menuItem3.appendChild(menuTitle3);
    menuItem3.appendChild(menuContent3);

    const menuItem4 = document.createElement('div');
    const menuTitle4 = document.createElement('h2');
    menuTitle4.innerText = 'LAMB';
    const menuContent4 = document.createElement('p');
    menuItem4.setAttribute('id', 'menu-item1');
    menuContent4.innerHTML = 'Tasty Meal .......... 9$ <br>Tasty Meal .......... 15,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 20,90$ <br>Tasty Meal .......... 33,50$ <br>Tasty Meal .......... 10$ <br>Tasty Meal .......... 8,50$ <br>'

    menuItem4.appendChild(menuTitle4);
    menuItem4.appendChild(menuContent4);

    const menuItem5 = document.createElement('div');
    const menuTitle5 = document.createElement('h2');
    menuTitle5.innerText = 'SALADS';
    const menuContent5 = document.createElement('p');
    menuItem5.setAttribute('id', 'menu-item1');
    menuContent5.innerHTML = 'Tasty Meal .......... 9$$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 6,90$ <br>Tasty Meal .......... 3,50$ <br>Tasty Meal .......... 4$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 5$ <br>Tasty Meal .......... 7,70$ <br>'

    menuItem5.appendChild(menuTitle5);
    menuItem5.appendChild(menuContent5);


    const menuItem6 = document.createElement('div');
    const menuTitle6 = document.createElement('h2');
    menuTitle6.innerText = 'DRINKS';
    const menuContent6 = document.createElement('p');
    menuItem6.setAttribute('id', 'menu-item1');
    menuContent6.innerHTML = 'Good Drink .......... 10$ <br>Good Drink .......... 19$$ <br>Good Drink .......... 15,50$ <br>Good Drink .......... 13$ <br>Good Drink .......... 20,90$ <br>Good Drink .......... 33,50$ <br>Good Drink .......... 10$ <br>Good Drink .......... 8,50$ <br>'

    menuItem6.appendChild(menuTitle6);
    menuItem6.appendChild(menuContent6);

    menuItemContainer.appendChild(menuItem1);
    menuItemContainer.appendChild(menuItem2);
    menuItemContainer.appendChild(menuItem3);
    menuItemContainer.appendChild(menuItem4);
    menuItemContainer.appendChild(menuItem5);
    menuItemContainer.appendChild(menuItem6);
    
    menuContainer.appendChild(menuHeading);
    menuContainer.appendChild(menuItemContainer);
    return menuContainer;
}

export {
    createMenu
};
