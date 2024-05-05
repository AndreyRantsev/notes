export class View{
    constructor (allNotes){
        this.form = document.querySelector('#form');
        this.inputAdd = form.querySelector('#inputAdd');
        this.content = document.querySelector('#content');
        this.inputSearch = document.querySelector("#search")
        this.renderNote(allNotes)
    }

    renderNote = (allNotes) => {
        const list = document.createElement('ul');
        list.id = 'listNotes';
        list.className = 'list-notes';
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
                list.insertAdjacentElement('beforeend', noteElement)
            });
            fragment.appendChild(list);
            this.content.appendChild(fragment);
        }
    }
    delList = () => {
        const list = document.querySelector('#listNotes')
        if(list){
            list.remove();
        }
    }
    delInputValue = () => {
        this.inputAdd.value = "";
    }
    searchNotes = (e) => {
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
}