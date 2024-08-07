import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(inpObj) {
    setNotes((prev) => {
      return [...prev, inpObj];
    });
  }

  function deleteNotes(noteId) {
    setNotes((prev) => {
      return prev.filter((noteObject, index) => {
        return index !== noteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((noteObject, index) => {
        return (
          <Note key={index} onDelete={deleteNotes} id={index} {...noteObject} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
