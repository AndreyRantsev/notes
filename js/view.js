export class View{
    constructor (){
        this.form = document.querySelector('#form');
        this.inputAdd = form.querySelector('#inputAdd');
        this.content = document.querySelector('#content');
    }

    renderNote = (allNotes) => {
        this.delList();
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
}