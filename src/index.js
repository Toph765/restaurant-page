import { renderHomePage } from "./homePage.js";
import { renderMenuPage } from "./menuPage.js";
import { renderContactPage } from "./contactPage.js";

const content = document.querySelector('#content');
const header = document.createElement('header');
const headerTab = ["Home", "Menu", "Contact"];

for (let i = 0; i < headerTab.length; i++) {
    const btn = document.createElement('button');
    btn.classList.add(headerTab[i]);
    btn.textContent = headerTab[i];
    header.appendChild(btn);
}

content.appendChild(header);

document.body.appendChild(renderHomePage());

const menuTab = document.querySelector('.Menu');
const homeTab = document.querySelector('.Home');
const contactTab = document.querySelector('.Contact');

menuTab.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    document.body.appendChild(renderMenuPage());
})

homeTab.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    document.body.appendChild(renderHomePage());
})

contactTab.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    document.body.appendChild(renderContactPage());
})