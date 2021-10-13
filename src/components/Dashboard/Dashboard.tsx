import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import { Sidebar, Chat } from "../";
import { serverConfig } from "../../server.config";
import { TState, setSocket } from "../../state";
import { useStyles } from "./styles";

export const Dashboard = () => {
  const classes = useStyles();
  const id: string = useSelector((state: TState) => state.basic.id);
  const socket: Socket = useSelector((state: TState) => state.basic.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io(serverConfig.socket, { query: { id } });
    dispatch(setSocket(newSocket));
    return () => {
      newSocket.close();
    };
  }, [id]);

  return (
    <div className={classes.root}>
      <Sidebar />
      <Chat />
    </div>
  );
};
