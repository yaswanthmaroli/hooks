import React from "react";
import { useContext } from "react";
import { LoginContext } from "./Context";

const ChildComponent = () => {
  const Login = useContext(LoginContext);

  return (
    <>
      <h1>{Login}</h1>
    </>
  );
};

export default ChildComponent;
