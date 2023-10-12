import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState();

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>useState as Single value</h1>
      <input
        type="Text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <p>
        {name} have clicked {counter} times
      </p>
      <button onClick={handleCounter}>click</button>
    </div>
  );
};

export default UseState;
