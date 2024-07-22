const noteForm = document.getElementById('noteForm');
const noteText = document.getElementById('noteText');
const notesList = document.getElementById('notesList');

let notes = [];

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (noteText.value.trim()) {
        const note = {
            id: Date.now(),
            text: noteText.value.trim()
        };
        notes.push(note);
        noteText.value = '';
        renderNotes();
    }
});

function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach(note => {
        const div = document.createElement('div');
        div.className = 'note';
        div.innerHTML = `<div class="note-content">${note.text}</div><button class="delete-button" onclick="deleteNote(${note.id})">Borrar</button>`;
        notesList.appendChild(div);
    });
}

function deleteNote(id) {
    notes = notes.filter(note => note.id!== id);
    renderNotes();
}