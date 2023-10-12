import React from "react";
import UseState from "./UseState";
import UseStateAsObject from "./UseStateAsObject";
import UseEffect from "./UseEffect";
import Context from "./createContext/Context";
import UseRef from "./useRef";
import UseReducer from "./UseReducer";
import UseMemo from "./UseMemo";
import UseCallBack from "./UseCallBack";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UseState />
      <UseStateAsObject />
      <UseEffect />
      <Context />
      <UseRef />
      <UseReducer />
      <UseMemo />
      <UseCallBack />
    </div>
  );
};

export default App;
