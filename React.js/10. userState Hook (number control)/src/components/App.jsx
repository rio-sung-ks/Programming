import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  console.log(count[0]);

  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>+</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
