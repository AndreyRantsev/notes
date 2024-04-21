export class Model{
    constructor (){
        this.allNotes = JSON.parse(localStorage.getItem("allNotes")) || [];
        this.key = "allNotes";
    }
    pushNewNote = (value) => {
        this.allNotes.push(value);
        this.jsonItem(this.key, this.allNotes);
    }
    
    jsonItem = (key, allNotes) => {
        const stringAllNotes = JSON.stringify(allNotes);
        localStorage.setItem(key, stringAllNotes);
    }
}