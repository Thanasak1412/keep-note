import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Fab, Zoom } from "@material-ui/core";

function Note({ id, note, title, content, deleteNote, editNote }) {
  const [updateNote, setUpdateNote] = useState(null);
  let updateNoteElem = null;

  function updateChange(e) {
    const { value, name } = e.target;

    setUpdateNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  }

  function onUpdateSubmit(e) {
    console.log(updateNote);
    editNote(updateNote);

    setUpdateNote(null);
    e.preventDefault();
  }

  if (!!updateNote) {
    updateNoteElem = (
      <form className="create-note">
        <input
          onChange={updateChange}
          name="title"
          value={updateNote.title}
          placeholder="Title"
        />
        <hr />
        <textarea
          onChange={updateChange}
          name="content"
          value={updateNote.content}
          placeholder="Take a Note.."
          rows="3"
        />
        <Fab onClick={onUpdateSubmit}>
          <Zoom in={true}>
            <EditIcon />
          </Zoom>
        </Fab>
      </form>
    );
  }

  return (
    <div>
      <div className="note">
        <h1>{title}</h1>
        <hr />
        <p>{content}</p>
        <Fab>
          <Zoom in={true} onClick={() => deleteNote(id)}>
            <DeleteIcon />
          </Zoom>
        </Fab>
        <Fab>
          <Zoom
            in={true}
            onClick={() => {
              console.log(note);
              setUpdateNote(note);
            }}
          >
            <EditIcon />
          </Zoom>
        </Fab>
      </div>
      {updateNoteElem}
    </div>
  );
}

export default Note;
