// @ts-check
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');
const div = document.createElement('div');
const label = document.createElement('label');
let checkboxGeneral = document.createElement('input');

label.textContent = "Hide the don't confirmends"
div.appendChild(label);
checkboxGeneral.type = 'checkbox';
div.appendChild(checkboxGeneral);

ul.parentNode.insertBefore(div, ul);

function createLiTag(text) {
    function createElement (nameElement, property, value) {
        const elementHTML = document.createElement(nameElement);
        elementHTML[property] = value;
        return elementHTML; 
    }
    function appendToLiElement (nameElement, property, value) {
        const element = createElement (nameElement, property, value)
        li.appendChild(element);
        return element;
    }
    const li = document.createElement('li');
    li.textContent = text;
    
    const label = appendToLiElement('label', 'textContent', 'Confirmed');
    label.appendChild(createElement('input', 'type', 'checkbox'));
    appendToLiElement('button', 'textContent', 'Edit');
    appendToLiElement('button', 'textContent', 'Remove');

    return li;
}

checkboxGeneral.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    const listLi = ul.children;
    if (isChecked) {
        for (let i = 0; i < listLi.length; i++) {
            if (listLi[i].className !== 'responded') {
                listLi[i].style.display = 'none';
            }
        }
    }

    if (!checkboxGeneral.checked) {
        for (let i = 0; i < listLi.length; i++) {
            listLi[i].style.display = 'block';
        }
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
        const li = createLiTag(input.value);
        input.value = '';
        ul.appendChild(li);
    }
});

ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const isChecked = checkbox.checked;
    const li = checkbox.parentNode.parentNode;
    
    if (isChecked) {
        li.className = 'responded';
    }
    else {
        li.className = '';
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    const button = e.target;
    const li = button.parentNode;
    const action = button.textContent.toLowerCase();
    const acctionNames = {
        remove: () => {
            ul.removeChild(li)
        },
        edit: () => {
            const inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.value = li.childNodes[0].textContent; // HardCode try to evit
            li.insertBefore(inputName, li.firstElementChild);
            li.childNodes[0].textContent = ''; // HardCode try to evit
            button.textContent = 'Save';
        },
        save: () => {
            const input = li.firstElementChild
            li.childNodes[0].textContent = input.value; // HardCode try to evit
            li.removeChild(input);
            button.textContent = 'Edit';
        }
    };

    acctionNames[action]();
});