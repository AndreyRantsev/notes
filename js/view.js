export class View{
    constructor (){
        this.form = document.querySelector('#form');
        this.inputAdd = form.querySelector('#inputAdd');
        this.listNotes = document.querySelector('#listNotes')
    }

    renderNote = (allNotes) => {
        const fragment = document.createDocumentFragment();
        if (allNotes.length > 0) {
            allNotes.forEach(element => {
                const noteElement = document.createElement('li');
                noteElement.className = 'list-notes__note'
                noteElement.innerHTML = `
                    <div class="list-notes__wrapper-input">
                        <textarea type="text" class="input input--note">${element}</textarea>
                        <button class="edit">Edit</button>
                    </div>
                    <button class="input input--del">Delete</button>
                `;
                fragment.appendChild(noteElement);
            });
            const listNotes = document.querySelector('#listNotes');
            listNotes.insertBefore(fragment, listNotes.firstChild);
        }
    }
}