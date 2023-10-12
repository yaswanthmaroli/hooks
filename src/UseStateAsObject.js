import React, { useState } from "react";

const UseStateAsObject = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });

  const handleCounter = () => {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  };

  const handleNameChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  return (
    <>
      <h1 style={{ color: "red", marginTop: 40 }}>
        // useState as object example
      </h1>
      <input type="Text" onChange={handleNameChange} value={details.name} />
      <p>
        {details.name} have clicked {details.counter} times
      </p>
      <button onClick={handleCounter}>click</button>
    </>
  );
};

export default UseStateAsObject;
