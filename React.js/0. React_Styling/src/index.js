//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";

let message = "";
const date = new Date();
// const time = date.getHours();
// const time = date.getHours()+6;
const time = date.getHours() + 2;
console.log(time);
const customStyle = { color: "pink" };

if (time < 12) {
  message = "Good morning 🌻";
  //   customStyle.color = "green"
} else if (time < 18) {
  message = "Good afternoon 🌱";
  //   customStyle.color = "orange"
} else {
  message = "Good evening 🌙";
  //   customStyle.color = "navy"
}

ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
