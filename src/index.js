import { renderHomePage } from "./homePage.js";

const content = document.querySelector('#content');
const header = document.createElement('header');
const headerTab = ["Home", "Menu", "Contact"];

for (let i = 0; i < headerTab.length; i++) {
    const div = document.createElement('div');
    div.textContent = headerTab[i];
    header.appendChild(div);
}

content.appendChild(header);

document.body.appendChild(renderHomePage());