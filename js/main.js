// =============Переменные================

const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');

// =============Функции===================

const renderNote = (value) => {
    const note = 
        `
        <li class="list-notes__note">
            <input type="text" class="input input--note" value=${value}>
            <button class="input input--del">Delete</button>
        </li>
        `;
        listNotes.insertAdjacentHTML("afterbegin", note);
}

const prepareValue = (event) => {
    event.preventDefault();
    const addValue = inputAdd.value.trim();
    if(addValue.length > 0) {
        renderNote(addValue);
    }
}

// =============События===================

form.addEventListener('submit', prepareValue);
