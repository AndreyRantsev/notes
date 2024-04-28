import { Model } from "./model.js";
import { View } from "./view.js";

const model = new Model();
const view = new View();

view.form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const addValue = view.inputAdd.value.trim();
    if(addValue.length > 0) {
        model.pushNewNote(addValue);
        view.renderNote(model.allNotes);
    }
});