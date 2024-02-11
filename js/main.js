// =============Переменные================

const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');
const allNotes = localStorage.getItem("allNotes") || [];

// =============Функции===================

const renderNote = (allNotes) => {
    
    if (allNotes.length > 0) {
        allNotes.forEach(element => {
            const note = 
            `
            <li class="list-notes__note">
                <input type="text" class="input input--note" value=${element}>
                <button class="input input--del">Delete</button>
            </li>
            `;
            listNotes.insertAdjacentHTML("afterbegin", note);
        });
    }
}

const delNotesFromRender = () => {
    const notesFromRender = document.querySelectorAll('.list-notes__note');
    console.log(notesFromRender);
    if (notesFromRender.length > 0) {
        notesFromRender.forEach(element => {
            element.remove();
        })
    }
}

const pushNewNote = (value) => {
    allNotes.push(value);
}

const prepareValue = (event) => {
    event.preventDefault();
    const addValue = inputAdd.value.trim();
    if(addValue.length > 0) {
        const key = "allNotes";
        pushNewNote(addValue);
        jsonItem({key, allNotes});
        delNotesFromRender()
        renderNote(allNotes);
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

renderNote(allNotes);

//==Пример работы с локальным хранилищем==

// const fruits = ["Банан", "Яблоко", "Авокадо"];
// const fruitsJson = JSON.stringify(fruits);
// localStorage.setItem("fruits", fruitsJson);

// const fromLocal = localStorage.getItem("fruits");
// console.log(fromLocal);
// const fruitsParse = JSON.parse(fromLocal);
// console.log(fruitsParse);

