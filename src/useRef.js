import React, { useEffect, useState, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");

  const count = useRef(0);
  const sizeRef = useRef(null);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleChange = () => {
    //onpressing direct access to DOM element input and change its size
    sizeRef.current.style.width = "500px";
    sizeRef.current.focus();
  };

  return (
    <>
      {/* This is an example of useRef which allow us to create mutuable variables without rerender */}
      <h1 style={{ color: "red" }}>Examples of UseRef</h1>
      <input type="Text" onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <h1>Render : {count.current}</h1>

      {/* This is an example of useRef for access directly on DOM element */}

      {/* here sizeRef have access to input */}
      <input type="Text" ref={sizeRef} />

      <button onClick={handleChange}>click</button>
    </>
  );
};

export default UseRef;

// Here by use of useRef we can able to change values without rerender .
