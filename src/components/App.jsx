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
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
