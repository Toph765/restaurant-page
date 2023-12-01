import img1 from './img/shrimp-fried-rice.jpg';
import img2 from './img/seafood-marinara-pasta.jpg';
import img3 from './img/monte-cristo-sandwich.jpg';
import img4 from './img/onigiri.jpg';
import img5 from './img/curry-rice.jpg';
import img6 from './img/coffee-milkshake.jpg';
import img7 from './img/devil-fruit-macaron.jpg';
import img8 from './img/tangerine-posset.jpg';

function renderMenuPage() {
    const main = document.createElement('main');
    const title = document.createElement('h1');

    title.textContent = 'Menu';
    title.classList.add('title');
    main.appendChild(title);
    
    const menuContent = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];

    for (let i = 0; i < menuContent.length; i++) {
        const div = document.createElement('div');
        const image = new Image();
        const name = document.createElement('h2');
        const price = document.createElement('div');
        if (menuContent[i] === 'item1') {
            image.src = img1;
            name.textContent = 'Shrimp Fried Rice';
            price.textContent = 'Php 175.00';
            div.append(image, name, price);
            main.appendChild(div);
        } else if (menuContent[i] === 'item2') {
            image.src = img2;
            name.textContent = 'Seafood Marinara Pasta';
            price.textContent = 'Php 210.00';
        } else if (menuContent[i] === 'item3') {
            image.src = img3;
            name.textContent = 'monte-cristo-sandwich';
            price.textContent = 'Php 140.00';
        } else if (menuContent[i] === 'item4') {
            image.src = img4;
            name.textContent = 'Onigiri';
            price.textContent = 'Php 145.00';
        } else if (menuContent[i] === 'item5') {
            image.src = img5;
            name.textContent = 'Curry Rice';
            price.textContent = 'Php 175.00';
        } else if (menuContent[i] === 'item6') {
            image.src = img6;
            name.textContent = 'Coffee Milkshake';
            price.textContent = 'Php 130.00';
        } else if (menuContent[i] === 'item7') {
            image.src = img7;
            name.textContent = 'Devil Fruit Macaron';
            price.textContent = 'Php 160.00';
        } else if (menuContent[i] === 'item8') {
            image.src = img8;
            name.textContent = 'Tangerine Posset';
            price.textContent = 'Php 150.00';
        }

        image.classList.add('menuImg');
        name.classList.add('menuName');
        price.classList.add('menuPrice');

        div.append(image, name, price);
        div.classList.add('menuItems');

        main.appendChild(div);
    }

    content.appendChild(main);
    return content;
}

export { renderMenuPage };