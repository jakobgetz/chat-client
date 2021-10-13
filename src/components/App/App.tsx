import { useSelector } from "react-redux";
import { Dashboard, Login } from "../";
import { TState } from "../../state";

export function App() {
  const id = useSelector((state: TState) => state.basic.id);
  return (
    <>
      {id ? <Dashboard /> : <Login />}
    </>
  );
}
