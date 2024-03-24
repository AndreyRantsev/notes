// =============Переменные================

const form = document.querySelector('#form');
const inputAdd = form.querySelector('#inputAdd');
const listNotes = document.querySelector('#listNotes');
const allNotes = JSON.parse(localStorage.getItem("allNotes")) || [];
const inputSearch = document.querySelector("#search");
const key = "allNotes";

// =============Функции===================

const renderNote = (allNotes) => {
    if (allNotes.length > 0) {
        allNotes.forEach(element => {
            const note = 
            `
            <li class="list-notes__note">
                <div class="list-notes__wrapper-input">
                    <textarea type="text" class="input input--note">${element}</textarea>
                    <button class="edit">Edit</button>
                </div>
                <button class="input input--del">Delete</button>
            </li>
            `;
            listNotes.insertAdjacentHTML("afterbegin", note);
        });
    }
}

if (allNotes.length > 0){
    renderNote(allNotes);  
}

const delNotesFromRender = () => {
    const notesFromRender = document.querySelectorAll('.list-notes__note');
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
        pushNewNote(addValue);
        jsonItem({key, allNotes});
        delNotesFromRender();
        renderNote(allNotes);
        delInputValue();
    }
}

const setItem = (object) => {
    localStorage.setItem(object.key, object.allNotes);
}

const jsonItem = (object) => {
    object.allNotes = JSON.stringify(object.allNotes);
    setItem(object);
}

const delInputValue = () => {
    inputAdd.value = "";
}

const delNote = (event) => {
    const btnRemove = event.target;
    if (btnRemove.classList.contains('input--del')){
        const note = btnRemove.closest(".list-notes__note");
        const noteInput = note.querySelector(".input--note");
        const noteInputValue = noteInput.value;
        const currentDelNote = allNotes.indexOf(noteInputValue);
        allNotes.splice(currentDelNote, 1);
        jsonItem({key, allNotes});
        delNotesFromRender();
        renderNote(allNotes);
    }
}

const searchNotes = (e) => {
    let searchValue = e.target.value.toLowerCase();
    const allInputs = document.querySelectorAll(".input--note");
    allInputs.forEach(element => {
        const valueNote = element.value.toLowerCase();
        if(valueNote.indexOf(searchValue) === -1){
            element.closest(".list-notes__note").style.display = "none";    
        } else {
            element.closest(".list-notes__note").style.display = "flex";
        }
    });
    
}


const toggleEdit = (event) => {
    const noteInput = event.target.closest(".input--note");
    if (noteInput) {
        noteInput.focus();
        const noteItem = noteInput.closest(".list-notes__note");
        noteItem.classList.add('focus');
        
        const onBlur = () => {
            const noteValue = noteInput.value;
            changeNote(noteValue); 
            noteItem.classList.remove('focus');
            
            noteInput.removeEventListener("blur", onBlur);
        };
        
        noteInput.addEventListener("blur", onBlur);
    }
}

if (listNotes) {
    listNotes.addEventListener('click', toggleEdit);
}

const changeNote = (noteValue) => {

}

// =============События===================

form.addEventListener('submit', prepareValue);

listNotes.addEventListener('click', delNote);

inputSearch.addEventListener('input', searchNotes);

listNotes.addEventListener('click', toggleEdit);

