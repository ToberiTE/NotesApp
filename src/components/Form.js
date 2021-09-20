import React from "react";

const Form = ({ inputText, setInputText, notes, setNotes }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitNotesHandler = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        placeholder={"Add note..."}
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="notes-input"
      />
      <button
        onClick={submitNotesHandler}
        className="notes-button"
        type="submit"
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
