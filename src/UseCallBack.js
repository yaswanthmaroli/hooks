// useCallback is a React hook that memoizes a callback function and returns the memoized function.
// This is useful for preventing unnecessary re-renders of child components that rely on callback
// functions passed down as props. Here's an example of how to use useCallback:

import React, { useState, useCallback } from "react";

function ChildComponent({ onClick }) {
  console.log("ChildComponent rendering");
  return <button onClick={onClick}>Click me</button>;
}

const UseCallBack = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1 style={{ color: "red" }}>Examples of useCallback</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default UseCallBack;

//here i have parent component and child component if parent component rerender child components also rerender but here by using callback
// when the props passed change then only the function perform.
