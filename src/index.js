function component() {
    const content = document.querySelector('#content');
    const header = document.createElement('header');
    const main = document.createElement('main');

    const headerTab = ["Home", "Menu", "Contact"];
    const mainContent = ["image", "name", "text"]

    for (let i = 0; i < headerTab.length; i++) {
        const div = document.createElement('div');
        div.textContent = headerTab[i];
        header.appendChild(div);
    }

    for (let j = 0; j < mainContent.length ; j++) {
        if (mainContent[j] === 'image') {
            const image = document.createElement('img');
            image.setAttribute('src', 'food-pexels-dorota-semla.jpg');
            image.setAttribute('alt', 'food');
            main.appendChild(image);
        } else if (mainContent[j] === 'name') {
            const name = document.createElement('h1');
            name.textContent = 're: Baratie';
            main.appendChild(name);
        } else if (mainContent[j] === 'text') {
            const description = document.createElement('div');
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt repellat incidunt ducimus facilis, accusantium aperiam reprehenderit, nam quia, molestiae perferendis in possimus optio rerum maxime? Dolorem culpa ipsum ullam!'
            main.appendChild(description);
        }
    }

    content.appendChild(header);
    content.appendChild(main);

    return content;
}


document.body.appendChild(component());