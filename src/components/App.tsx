import React, { useReducer } from "react";
import basicReducer from "../state";
import Login from "./Login";

function App() {
  const [state, dispatch] = useReducer(basicReducer, {});
  return (
    <>
      <Login dispatch={dispatch} />
      Hello World
      {state.id}
    </>
  );
}

export default App;
