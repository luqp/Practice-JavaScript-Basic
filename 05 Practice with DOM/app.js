const descriptionList = document.getElementsByClassName('descriptionList')[0];
const button = document.querySelector('.changeDescription');
const input = document.querySelector('input.inputList');
const div = document.querySelector('div.allList');
const displayList = document.querySelector('.displayList');
const ul = document.querySelector('ul');
//const liItems = document.querySelectorAll('li');
const list = ul.children;
const addItem = document.querySelector('.addItem');
const inputItem = document.querySelector('input.inputItem');

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

//const delectLast = document.querySelector('button.deletLast');
//const delectFirst = document.querySelector('button.deletFirst');

/* for (let i = 0; i < liItems.length; i++) {
    liItems[i].addEventListener('mouseover', () => {
        liItems[i].textContent = liItems[i].textContent.toUpperCase();
    });
    liItems[i].addEventListener('mouseout', () => {
        liItems[i].textContent = liItems[i].textContent.toLowerCase();
    });
} */

/* ul.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toUpperCase();
    }
});

ul.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
    }
}); */

function matchTheButton (li, sibling) {
    if (li == li.parentNode.firstElementChild) {
        addSpecificButton(li, 'Up');
        sibling.removeChild(sibling.querySelector('.up'));
    }
    else if (sibling == li.parentNode.firstElementChild) {
        addSpecificButton(sibling, 'Up');
        li.removeChild(li.querySelector('.up'));
    }
    else if (sibling == li.parentNode.lastElementChild) {
        addSpecificButton(sibling, 'Down');
        li.removeChild(li.querySelector('.down'));
    }
    else if (li == li.parentNode.lastElementChild) {
        addSpecificButton(li, 'Down');
        sibling.removeChild(sibling.querySelector('.down'));
    }
}

function addSpecificButton (item, specificText) {
    if(specificText == 'Up'){
        item.insertBefore(addButton(specificText), item.firstElementChild);
    }
    else {
        item.insertBefore(addButton(specificText), item.lastElementChild);
    }
}

function attachButtonsToItem (item, buttons) {
    for (let i = 0; i < buttons.length; i++) {
        item.appendChild(addButton(buttons[i]));
    }
}

function addButton (text) {
    let button = document.createElement('button');
    button.className = text.toLowerCase();
    button.textContent = text;
    return button;
}

for (let i = 0; i < list.length; i++) {
    if (list[i] === ul.firstElementChild) {
        attachButtonsToItem(list[i], ['Down', 'Remove']);
    }
    else if (list[i] === ul.lastElementChild) {
        attachButtonsToItem(list[i], ['Up', 'Remove']);
    }
    else {
        attachButtonsToItem(list[i], ['Up', 'Down', 'Remove']);
    }
}


ul.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        if (event.target.className == 'remove') {
            ul.removeChild(li);
            
        }
        else if (event.target.className == 'up') {
            let previousLi = li.previousElementSibling;
            matchTheButton(li, previousLi);
            if (previousLi) {
                ul.insertBefore(li, previousLi);
            }
        }
        else { 
            let nextLi = li.nextElementSibling;
            matchTheButton(li, nextLi);
            if (nextLi) {
                // nextLi.insertAdjacentElement('afterend', li);
                ul.insertBefore(nextLi, li);
            }
        }
    }
});

displayList.addEventListener('click', () => {
    if (div.style.display == 'none') {
        displayList.textContent = 'Hide List';
        div.style.display = 'block';
    }
    else {
        displayList.textContent = 'Show List';
        div.style.display = 'none';
    }
});

button.addEventListener('click', () => {
    if (input.value === '') {
        return;
    }
    descriptionList.innerHTML = input.value + ':';
    input.value = '';
});

addItem.addEventListener('click', () => {
    if (inputItem.value === '') {
        return;
    }
    let li = document.createElement('li');
    li.textContent = inputItem.value;
    attachButtonsToItem(li, ['Up', 'Remove']);
    ul.appendChild(li);
    let previous = li.previousElementSibling;
    addSpecificButton(previous, 'Down');
    inputItem.value = '';
});


/* delectLast.addEventListener('click', () => {
    let li = document.querySelector('ul li:last-child');
    ul.removeChild(li);
});

delectFirst.addEventListener('click', () => {
    let li = document.querySelector('ul li:first-child');
    ul.removeChild(li);
}); */