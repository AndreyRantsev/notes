// =============Переменные================

const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');

// =============Функции===================

const prepareValue = (event) => {
    event.preventDefault();
    const addValue = inputAdd.value.trim();
    if(addValue.length > 0) {
        const note = 
        `
        <li class="list-notes__note">
            <input type="text" class="input input--note" value=${addValue}>
            <button class="input input--del">Delete</button>
        </li>
        `;
        listNotes.insertAdjacentHTML("afterbegin", note);
    }
}

// =============События===================

form.addEventListener('submit', prepareValue);
