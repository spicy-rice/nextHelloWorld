import React, { useState } from "react";
function Counting() {
  const [count, setCount] = useState(0);

  function addToCount() {
    setCount(count + 1);
  }

  function minusToCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Your count number is...{count}</p>
      <button onClick={addToCount}>+</button>
      <button onClick={minusToCount}>-</button>
    </div>
  );
}
export default function Counter() {
  Counting;
  return <h1>Counter</h1>;
}
