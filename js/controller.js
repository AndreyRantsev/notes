import { Model } from "./model.js";
import { View } from "./view.js";

const model = new Model();
const view = new View(model.allNotes);

view.form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const addValue = view.inputAdd.value.trim();
    if(addValue.length > 0) {
        model.pushNewNote(addValue);
        view.delList();
        view.renderNote(model.allNotes);
        view.delInputValue();
    }
});

view.content.addEventListener('click', (event) => {
    const btnRemove = event.target;
    if (btnRemove.classList.contains('input--del')){
        const note = btnRemove.closest(".list-notes__note");
        const noteInput = note.querySelector(".input--note");
        const noteInputValue = noteInput.value;
        const currentDelNote = model.allNotes.indexOf(noteInputValue);
        model.delNote(currentDelNote)
        view.delList();
        view.renderNote(model.allNotes);
    }
});
