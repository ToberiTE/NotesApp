import React from "react";

const Note = ({ note, notes, setNotes, text }) => {
  const deleteNoteHandler = () => {
    setNotes(notes.filter((item) => item.id !== note.id));
  };
  const completeNoteHandler = () => {
    setNotes(
      notes.map((selectedNote) => {
        if (selectedNote.id === note.id) {
          return {
            ...selectedNote,
            completed: !selectedNote.completed,
          };
        }
        return selectedNote;
      })
    );
  };

  return (
    <div className={`note fade-in ${note.completed ? "completed-note" : ""}`}>
      <li className="note-item">{text}</li>
      <button
        onClick={completeNoteHandler}
        className={`completed-btn ${
          note.completed ? "completed-btn-hidden" : ""
        }`}
      >
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteNoteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Note;
