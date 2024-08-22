import React from "react";

function Note(items) {
  return (
    <div className="note">
      <h1>{items.title}</h1>
      <p>{items.content}</p>
    </div>
  );
}

export default Note;
