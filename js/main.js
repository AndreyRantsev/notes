// =============Переменные================

const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');
const allNotes = localStorage.getItem("allNotes") || [];

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

const pushNewNote = (value) => {
    allNotes.push(value);
}

const prepareValue = (event) => {
    event.preventDefault();
    const addValue = inputAdd.value.trim();
    if(addValue.length > 0) {
        const key = "allNotes";
        renderNote(addValue);
        pushNewNote(addValue);
        jsonItem({key, allNotes});
    }
}

const setItem = (object) => {
    localStorage.setItem(object.key, object.allNotes);
}

const jsonItem = (object) => {
    object.allNotes = JSON.stringify(object.allNotes);
    setItem(object);
}
// =============События===================

form.addEventListener('submit', prepareValue);

//==Пример работы с локальным хранилищем==

// const fruits = ["Банан", "Яблоко", "Авокадо"];
// const fruitsJson = JSON.stringify(fruits);
// localStorage.setItem("fruits", fruitsJson);

// const fromLocal = localStorage.getItem("fruits");
// console.log(fromLocal);
// const fruitsParse = JSON.parse(fromLocal);
// console.log(fruitsParse);

