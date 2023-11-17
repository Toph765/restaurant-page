
function renderHomePage() {
    const main = document.createElement('main');
    const mainContent = ["image", "name", "text", "schedule"];

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
        } else if (mainContent[j] === 'schedule') {
            const schedule = document.createElement('div');
            schedule.textContent = 'Tuesday - Friday: 10:00am - 8:00pm Saturday & Sunday: 10am - 12:00pm';
            main.appendChild(schedule);
        }
    }

    content.appendChild(main);

    return content;
}

export { renderHomePage };