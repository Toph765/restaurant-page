
function renderHomePage() {
    const main = document.createElement('main');
    const mainContent = ["name", "image", "text", "schedule"];

    for (let j = 0; j < mainContent.length ; j++) {
        if (mainContent[j] === 'image') {
            const image = document.createElement('img');
            image.classList.add('homeImg');
            image.setAttribute('src', 'food-pexels-dorota-semla.jpg');
            image.setAttribute('alt', 'food');
            main.appendChild(image);
        } else if (mainContent[j] === 'name') {
            const name = document.createElement('h1');
            name.classList.add('homeName');
            name.textContent = 're: Baratie';
            main.appendChild(name);
        } else if (mainContent[j] === 'text') {
            const description = document.createElement('div');
            description.classList.add('homeText');
            description.textContent = 'Experience the culinary wonders of the world of One Piece!'
            main.appendChild(description);
        } else if (mainContent[j] === 'schedule') {
            const schedule = document.createElement('div');
            schedule.classList.add('homeSchedule');
            schedule.textContent = 'Tuesday - Friday: 10:00am - 8:00pm || Saturday & Sunday: 10am - 12:00pm';
            main.appendChild(schedule);
        }
    }

    content.appendChild(main);

    return content;
}

export { renderHomePage };