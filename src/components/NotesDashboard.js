import React, { useState } from 'react';

function NotesDashboard({ user, onLogout }) {
  const [notes, setNotes] = useState([]);
  const [editNoteId, setEditNoteId] = useState(null);
  const [noteContent, setNoteContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleNoteChange = (event) => {
    setNoteContent(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addOrUpdateNote = () => {
    if (editNoteId) {
      // Update existing note
      setNotes(notes.map(note => note.id === editNoteId ? { ...note, content: noteContent } : note));
    } else {
      // Add new note
      const newNote = { id: Date.now(), content: noteContent };
      setNotes([...notes, newNote]);
    }
    setNoteContent('');
    setEditNoteId(null);
  };

  const editNote = (id) => {
    const note = notes.find(note => note.id === id);
    setNoteContent(note.content);
    setEditNoteId(id);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
      <div>
        <input
          type="text"
          placeholder="Search notes"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <textarea value={noteContent} onChange={handleNoteChange} />
        <button onClick={addOrUpdateNote}>{editNoteId ? 'Update' : 'Add'} Note</button>
      </div>
      <ul>
        {filteredNotes.map(note => (
          <li key={note.id}>
            {note.content}
            <button onClick={() => editNote(note.id)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesDashboard;

