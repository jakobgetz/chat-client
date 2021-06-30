import React, { useReducer, useRef, Dispatch } from "react";
import basicReducer, { ACTIONS } from "../state";

type Props = {
  dispatch: Dispatch<any>;
};
const Login: React.FC<Props> = ({ dispatch }) => {
  const idRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.CHANGE_ID, payload: idRef.current?.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your Id</label>
        <input type="text" ref={idRef} required />
        <button type="submit">Login</button>
        <button>Create New Id</button>
      </form>
    </div>
  );
};
export default Login;
