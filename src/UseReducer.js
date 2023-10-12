//first step import useReducer from react
import React, { useReducer } from "react";

const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

//initial State
const initialState = { count: 1 };

//reducer contain 2 argument state have current value and here action is increment or decrement
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      return {
        count: state.count + 1,
      };

    case ACTION.DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: ACTION.INCREASE });
  };

  const handleDecrease = () => {
    dispatch({ type: ACTION.DECREASE });
  };

  return (
    <>
      <h1>example of useReducer</h1>
      <button onClick={handleIncrease}>increment</button>
      <h1>{state.count}</h1>
      <button onClick={handleDecrease}>decrement</button>
    </>
  );
};

export default UseReducer;

//first step import useReducer from react

//second step const [state,dispatch] = useReducer(reducer, initialstate)      UseReducer have 2 argument

//Thirs step const initialState here example is counter so const initialCount: {count:1}

//Fourth step const reducer  = (state, action)=>{

//                             switch(action.type){
// case:'increment' return { state.count + 1}

//case: 'decrement' return {state.count -1}

//fifth step value  is {state.count} and on click increment dispatch ({type:'increment'}) and on decremnt dispatch({type:'decrement'})

// }
//   }
