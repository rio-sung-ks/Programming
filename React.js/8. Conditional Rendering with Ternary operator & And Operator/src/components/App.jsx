import React from "react";
import Login from "./Login";

const isLoggedin = false;

const currentTime = new Date().getHours();
console.log(currentTime);
var x = 5;

function App() {
  return (
    <div className="container">
      {
        // isLoggedin ? <h1>Hello</h1> : <Login />
        currentTime > 14 && <h1>why are you still working?</h1>
      }
    </div>
  );
}

export default App;
