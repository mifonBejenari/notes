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
    form.current.updateForm(note);
  };

  const handleRemoveNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    updateList(newNotes)
  };

  // const { notes } = this.state;
  return (
    <Fragment>
      <NoteForm onSubmit={addNote} ref={form}/>
      <ol className="note--list">
        {notes.map((note) => (
          <li key={note.id} className={`note${note.done === true ? ' note--done' : ''}`}>
            <div className="note__header">
              <h1>{note.noteTitle}</h1>
              <button onClick={() => handleRemoveNote(note.id)}>X</button>
            </div>

            <div className={`note__body${note.done === true ? ' note__body--done' : ''}`}>{note.noteText}</div>
            <div className="note__date">
              {note.changed === note.created ? (
                <div className="note__time note--created">created: {note.created}</div>
              ) : (
                <>
                  <div className="note__time note__time--created">created: {note.created}</div>
                  <div className="note__time note__time--changed">changed: {note.changed}</div>
                </>
              )}
            </div>

            <div className="note__actions">
              <button onClick={() => handleEditNote(note)}>E</button>
            </div>
          </li>))}
      </ol>
    </Fragment>
  )
};

export default NotesList;