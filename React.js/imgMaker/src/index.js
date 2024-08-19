import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellcheck="true">
      img maker
    </h1>
    <img src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
