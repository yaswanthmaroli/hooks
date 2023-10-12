import React from "react";
import MainComponent from "./MainComponent";
import { createContext } from "react";

export const LoginContext = createContext();

const Context = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>example of main context</h1>
      <LoginContext.Provider value={"anything"}>
        <MainComponent />
      </LoginContext.Provider>
    </>
  );
};

export default Context;

// Here First step is createContext from redux
//secondly store the createcontext in variable LoginContext
// thirdly provide that variable LoginContext.provider and value in every child component here i can use value any thing on any child component of context component without prop drilling
//fourth import usecontext from redux in where we want to use value and store the values in any variables here login = useContext(LoginContext) and then use {login} values any where on component.
