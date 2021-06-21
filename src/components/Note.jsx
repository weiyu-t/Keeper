import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PublishIcon from "@material-ui/icons/Publish";

function Note(props) {
  const [editing, setEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    title: props.title,
    content: props.content
  });

  function updateNote(e) {
    const { name, value } = e.target;

    setCurrentNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <div>
      {!editing ? (
        <div className="note">
          <h1>{currentNote.title}</h1>
          <p>{currentNote.content}</p>
          <button
            onClick={() => {
              props.delete(props.id);
            }}
          >
            <DeleteIcon />
          </button>
          <button
            onClick={() => {
              setEditing(true);
            }}
          >
            <EditIcon />
          </button>
        </div>
      ) : (
        <div className="note">
          <textarea
            className="updating"
            name="title"
            onChange={updateNote}
            value={currentNote.title}
          ></textarea>
          <textarea
            className="updating"
            name="content"
            onChange={updateNote}
            value={currentNote.content}
            rows={2}
          ></textarea>
          <button
            onClick={() => {
              props.update(currentNote, props.id);
              setEditing(false);
            }}
          >
            <PublishIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Note;
