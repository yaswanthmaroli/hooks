import React, { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [othercount, setOtherCount] = useState(5);

  // Variation without dependencies

  // this is example without variation when we useEffect without variation useEffect will run on everychange on component Here the component is UseEffect
  //   useEffect(() => {
  //     document.title = `${count} times`;
  //   });

  //Variation with empty array
  // this is an example of useEffect with empty array dependencies

  // here document.title only changes on initial time of render after it will not render this is helpful in the cases of data fetching like that
  //   useEffect(() => {
  //     document.title = `${count} times`;
  //   }, []);

  //variation with dependencies
  // this is an example of useEffect with depencies here the useEffect run only when other count changes

  //   useEffect(() => {
  //     document.title = `${othercount}`;
  //   }, [othercount]);

  const handleCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>EXAMPLES OF UseEffect</h1>

      <p>have clicked {count} times</p>
      <button onClick={handleCounter}>click</button>

      <p>have clicked {othercount} times</p>
      <button onClick={() => setOtherCount(othercount + 5)}>click</button>
    </div>
  );
};

export default UseEffect;
