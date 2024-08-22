import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// const test = notes[0].title;

function App() {
  return (
    <div>
      <Header />
      {notes.map((items) => (
        <Note title={items.title} content={items.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
