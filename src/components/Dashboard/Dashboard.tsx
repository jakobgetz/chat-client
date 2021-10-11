import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Sidebar, Chat } from "../";
import { TState, setSocket } from "../../state";
import { useStyles } from "./styles";

export const Dashboard = () => {
  const classes = useStyles();
  const id = useSelector((state: TState) => state.basic.id);
  const dispatch = useDispatch();

  //@ts-ignore
  useEffect(() => {
    const newSocket = io("http://localhost:5000", { query: id });
    dispatch(setSocket(newSocket));
    return () => newSocket.close();
  }, [id]);

  return (
    <div className={classes.root}>
      <Sidebar />
      <Chat />
    </div>
  );
};
