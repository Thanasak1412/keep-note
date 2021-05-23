import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Fab, Zoom } from "@material-ui/core";

const startNote = {
  title: "",
  content: "",
};

function CreateArea({ newNote }) {
  const [note, setNote] = useState(startNote);
  const { title, content } = note;

  function onChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function onClick(e) {
    note !== startNote && newNote(note);
    setNote(startNote);
    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={onChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <hr />
        <textarea
          onChange={onChange}
          name="content"
          placeholder="Take a Note.."
          rows="3"
          value={content}
        />
        <Fab onClick={onClick}>
          <Zoom in={true}>
            <AddCircleIcon />
          </Zoom>
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
