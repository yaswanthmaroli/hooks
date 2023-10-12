import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const cssStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  const calculation = useMemo(() => {
    return expensiveFunction(number);
  }, [number]);

  return (
    <>
      <h1 style={{ color: "red" }}>Examples of UseMemo</h1>

      <div style={cssStyles}>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.valueAsNumber)}
          value={number}
        />
        <h2>Calculation : {calculation}</h2>
        <button onClick={() => setDark(!dark)}>toggle</button>
      </div>
    </>
  );
};

const expensiveFunction = (num) => {
  console.log("loop started");
  for (let i = 0; i < 1000; i++) {
    return num;
  }
};

export default UseMemo;

// Here one function expensive Function which heavy calculation at first we call it at begining and on each time rerender the function get calls and it delays the
//performance of application Here when we click on toggle also call expensive Function by rerendr here we useMemo and inside useMemo call expensive Function usememo
// is just same as useeffect but usememo can able to return value and also able to store it in one variables.
