function createMenu(content) {

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

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
    menuTitle4.innerText = 'SALADS';
    const menuContent4 = document.createElement('p');
    menuItem4.setAttribute('id', 'menu-item1');
    menuContent4.innerHTML = 'Tasty Meal .......... 4$ <br>Tasty Meal .......... 9$$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 13$ <br>Tasty Meal .......... 6,90$ <br>Tasty Meal .......... 3,50$ <br>Tasty Meal .......... 4$ <br>Tasty Meal .......... 8,50$ <br>Tasty Meal .......... 5$ <br>Tasty Meal .......... 7,70$ <br>'

    menuItem4.appendChild(menuTitle4);
    menuItem4.appendChild(menuContent4);

    const menuItem5 = document.createElement('div');
    const menuTitle5 = document.createElement('h2');
    menuTitle5.innerText = 'DRINKS';
    const menuContent5 = document.createElement('p');
    menuItem5.setAttribute('id', 'menu-item1');
    menuContent5.innerHTML = 'Good Drink .......... 10$ <br>Good Drink .......... 19$$ <br>Good Drink .......... 15,50$ <br>Good Drink .......... 13$ <br>Good Drink .......... 20,90$ <br>Good Drink .......... 33,50$ <br>Good Drink .......... 10$ <br>Good Drink .......... 8,50$ <br>'

    menuItem5.appendChild(menuTitle5);
    menuItem5.appendChild(menuContent5);

    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);
    menuContainer.appendChild(menuItem3);
    menuContainer.appendChild(menuItem4);
    menuContainer.appendChild(menuItem5);

    return menuContainer;
}

export {
    createMenu
};
