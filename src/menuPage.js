function renderMenuPage() {
    const main = document.createElement('main');
    const menuContent = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];

    for (let i = 0; i < menuContent.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h2');
        const price = document.createElement('div');
        if (menuContent[i] === 'item1') {
            image.setAttribute('src', 'shrimp-fried-rice.jpg');
            name.textContent = 'Shrimp Fried Rice';
            price.textContent = 'Php 175.00';
            div.append(image, name, price);
            main.appendChild(div);
        } else if (menuContent[i] === 'item2') {
            image.setAttribute('src', 'seafood-marinara-pasta.jpg');
            name.textContent = 'Seafood Marinara Pasta';
            price.textContent = 'Php 210.00';
        } else if (menuContent[i] === 'item3') {
            image.setAttribute('src', 'monte-cristo-sandwich.jpg');
            name.textContent = 'monte-cristo-sandwich';
            price.textContent = 'Php 140.00';
        } else if (menuContent[i] === 'item4') {
            image.setAttribute('src', 'onigiri.jpg');
            name.textContent = 'Onigiri';
            price.textContent = 'Php 145.00';
        } else if (menuContent[i] === 'item5') {
            image.setAttribute('src', 'curry-rice.jpg');
            name.textContent = 'Curry Rice';
            price.textContent = 'Php 175.00';
        } else if (menuContent[i] === 'item6') {
            image.setAttribute('src', 'coffee-milkshake.jpg');
            name.textContent = 'Coffee Milkshake';
            price.textContent = 'Php 130.00';
        } else if (menuContent[i] === 'item7') {
            image.setAttribute('src', 'devil-fruit-macaron.jpg');
            name.textContent = 'Devil Fruit Macaron';
            price.textContent = 'Php 160.00';
        } else if (menuContent[i] === 'item8') {
            image.setAttribute('src', 'tangerine-posset.jpg');
            name.textContent = 'Tangerine Posset';
            price.textContent = 'Php 150.00';
        }
        div.append(image, name, price);
        main.appendChild(div);
    }

    content.appendChild(main);
    return content;
}

export { renderMenuPage };