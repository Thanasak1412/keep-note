import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function newNote(note) {
    // params => (note) = new note
    setNotes((prevNote) => {
      return [note, ...prevNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function editNote(editNote) {
    setNotes((prevNotes) => {
      return prevNotes.map((prevNote) => {
        return editNote.id === prevNote.id && editNote;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea newNote={newNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            note={note}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
