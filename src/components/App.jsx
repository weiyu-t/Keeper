import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(myNote) {
    setNoteList((prevList) => {
      return [...prevList, myNote];
    });
  }

  function removeNote(id) {
    setNoteList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function updateNote(currentNote, index) {
    setNoteList(noteList.map((obj) => currentNote.index === obj.id || obj));
  }

  return (
    <div>
      <Header />
      <CreateArea newNote={addNote} />
      {noteList.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={removeNote}
          update={updateNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
