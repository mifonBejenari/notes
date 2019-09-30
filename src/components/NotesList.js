import React, { Fragment, useState, useRef, useEffect } from 'react'
import NoteForm from "./NoteForm";

const NotesList = props => {

  const [notes, setNotes] = useState([]);
  const form = useRef('');

  useEffect(() => {
    const noteList = localStorage.getItem('notesList');

    if (noteList !== null){
      setNotes(JSON.parse(noteList))
    }
  }, []);

  const updateList = (newNotes) => {
    localStorage.setItem('notesList', JSON.stringify(newNotes));

    setNotes(newNotes);
  };

  const notesSetIds = (notes1) => {
    notes1 = notes1.map((note, i) => {
      note.id = i + 1;

      return note;
    });
    updateList(notes1);
  };


  const addNote = (newNote) => {
    let currentNotes = [...notes];
    const { id } = newNote;

    if (id !== false) {
      currentNotes = currentNotes.map((note) => {
        if (note.id === id) {
          return newNote;

        } else {
          return note;
        }
      });
      updateList(currentNotes)
    }
    else {
      const newNotes = [...notes, newNote];
      notesSetIds(newNotes)
    }
  };


  const handleEditNote = (note) => {
    form.updateForm(note);
  };

  const handleRemoveNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    updateList(newNotes)
  };

  // const { notes } = this.state;
  return (
    <Fragment>
      <NoteForm onSubmit={addNote} ref={form}/>
      <ol>
        {notes.map((note) => (
          <li key={note.id} className={note.done === true ? 'note--done' : ''}>
            <div>{note.noteText}</div>
            <div>
              {note.changed === note.created ? (
                <div>created: {note.created}</div>
              ) : (
                <>
                  <div>created: {note.created}</div>
                  <div>changed: {note.changed}</div>
                </>
              )}
            </div>

            <button onClick={() => handleEditNote(note)}>E</button>
            <button onClick={() => handleRemoveNote(note.id)}>X</button>
          </li>))}
      </ol>
    </Fragment>
  )
};

export default NotesList;