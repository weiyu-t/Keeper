import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [showOrNot, SetShowOrNot] = useState(false);
  function show() {
    SetShowOrNot(true);
  }

  const [myNote, setMyNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setMyNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(e) => {
          props.newNote(myNote);
          e.preventDefault();
          setMyNote({ title: "", content: "" });
        }}
      >
        {showOrNot && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={myNote.title}
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          rows={showOrNot ? "3" : "1"}
          value={myNote.content}
          onClick={() => show()}
        />
        <Zoom in={showOrNot}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
