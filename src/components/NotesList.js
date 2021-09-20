import React from "react";
import Note from "./Note";

const NotesList = ({ notes, setNotes, filterUncompleted, filterCompleted }) => {
  return (
    <div className="notes-container">
      <ul className="notes-list">
        <h2>Uncompleted</h2>
        {filterUncompleted.map((note) => (
          <Note
            setNotes={setNotes}
            notes={notes}
            note={note}
            key={note.id}
            text={note.text}
          />
        ))}
      </ul>
      <ul className="notes-list">
        <h2>Completed</h2>
        {filterCompleted.map((note) => (
          <Note
            setNotes={setNotes}
            notes={notes}
            note={note}
            key={note.id}
            text={note.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
