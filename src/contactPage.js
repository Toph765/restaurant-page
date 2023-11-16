function renderContactPage() {
    const main = document.createElement('main');
    const contactContent = ['telephone', 'email', 'reservation'];

    for (let i= 0; i < contactContent.length; i++) {
        const div = document.createElement('div');

        if (contactContent[i] === 'telephone') {
            div.textContent = 'Cellphone No.: 777-7777-777';
        } else if (contactContent[i] === 'email') {
            div.textContent = 'E-mail: re-baratie@email.com'
        } else if (contactContent[i] === 'reservation') {
            const form = document.createElement('form');
            const btn = document.createElement('button');
            const formContent = ['name', 'telephone', 'email', 'number', 'textarea'];

            for (let j = 0; j < formContent.length; j++) {
                const divForm = document.createElement('div');
                const label = document.createElement('label');
                if (formContent[j] === 'name') {
                    const name = document.createElement('input');
                    name.setAttribute('id', 'name');
                    name.setAttribute('type', 'text');
                    name.setAttribute('name', 'name');
                    label.setAttribute('for', 'name');
                    label.textContent = 'Name: ';
                    divForm.append(label, name);
                } else if (formContent[j] === 'telephone') {
                    const phone = document.createElement('input');
                    phone.setAttribute('id', 'phone');
                    phone.setAttribute('type', 'telephone');
                    phone.setAttribute('name', 'phone');
                    label.setAttribute('for', 'phone');
                    label.textContent = 'Phone No.: '
                    divForm.append(label, phone);
                } else if (formContent[j] === 'email') {
                    const email = document.createElement('input');
                    email.setAttribute('id', 'email');
                    email.setAttribute('type', 'email');
                    email.setAttribute('name', 'name');
                    label.setAttribute('for', 'email');
                    label.textContent = 'E-mail: ';
                    divForm.append(label, email);
                } else if (formContent[j] === 'number') {
                    const seat = document.createElement('input');
                    seat.setAttribute('id', 'seat');
                    seat.setAttribute('type', 'number');
                    seat.setAttribute('name', 'seat');
                    seat.setAttribute('min', '1');
                    seat.setAttribute('max', '10');
                    label.setAttribute('for', 'seat');
                    label.textContent = 'Number of seat/s: ';
                    divForm.append(label, seat);
                } else if (formContent[j] === 'textarea') {
                    const text = document.createElement('textarea');
                    text.setAttribute('id', 'text');
                    text.setAttribute('cols', '30');
                    text.setAttribute('rows', '4');
                    text.setAttribute('wrap', 'hard');
                    text.setAttribute('maxlength', '100');
                    label.setAttribute('for', 'text');
                    label.textContent = 'Comments/Suggestions: ';
                    divForm.append(label, text);
                }
                form.appendChild(divForm);
            }

            btn.textContent = 'Submit';
            form.appendChild(btn);
            div.appendChild(form);
        }
        main.append(div);
    }
    
    content.appendChild(main);

    return content;
}

export { renderContactPage };