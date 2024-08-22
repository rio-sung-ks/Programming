import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function getTime() {
    let now = new Date().toLocaleTimeString();
    setTime(now);
  }

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
