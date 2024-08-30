import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm({ addThought }) {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    if (text.trim().length === 0) {
      return;
    }
    event.preventDefault();
    const thought = {
      id: generateId(),
      text,
      expiresAt: getNewExpirationTime(),
    };
    addThought(thought);
    setText("");
  };
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
