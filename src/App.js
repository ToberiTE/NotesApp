import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import NotesList from "./components/NotesList";

function App() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [filterUncompleted, setFilterUncompleted] = useState([]);
  const [filterCompleted, setFilterCompleted] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      let notesLocal = JSON.parse(localStorage.getItem("notes"));
      setNotes(notesLocal);
    }
  }, []);

  useEffect(() => {
    setFilterUncompleted(notes.filter((notes) => notes.completed === false));
    setFilterCompleted(notes.filter((notes) => notes.completed === true));
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <header>
        <h1>My Notes</h1>
      </header>
      <Form
        notes={notes}
        setNotes={setNotes}
        inputText={inputText}
        setInputText={setInputText}
      />
      <NotesList
        setNotes={setNotes}
        notes={notes}
        filterUncompleted={filterUncompleted}
        filterCompleted={filterCompleted}
      />
    </div>
  );
}

export default App;
