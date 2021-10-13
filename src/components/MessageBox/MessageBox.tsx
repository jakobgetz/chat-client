import { Button, Container, TextField } from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import { Contact, Message } from "../../classes";
import { appendMessage, TState } from "../../state";
import { useStyles } from "./styles";

export const MessageBox = () => {
  const classes = useStyles();
  const id: string = useSelector((state: TState) => state.basic.id);
  const contacts: Contact[] = useSelector(
    (state: TState) => state.basic.contacts
  );
  const socket: Socket = useSelector((state: TState) => state.basic.socket);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    if (socket) {
      socket.on("receive-message", (message: any) => {
        dispatch(
          appendMessage(
            new Message(
              message.message,
              message.sender,
              message.recipient,
              false
            )
          )
        );
      });
      return () => {
        socket.off("receive-message");
      };
    }
  }, [socket]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text !== "") {
      const message = new Message(
        text,
        id,
        contacts.filter((contact) => contact.selectedToChat && contact)[0].id
      );
      socket.emit("send-message", message);
      dispatch(appendMessage(message));
      setText("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container className={classes.footer}>
          <div style={{ width: "70%", display: "inline-block" }}>
            <TextField
              label={"Write a message"}
              multiline
              fullWidth
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
            ></TextField>
          </div>
          <Button
            variant="outlined"
            color="primary"
            className={classes.sendButton}
            onClick={handleSubmit}
          >
            <AddOutlinedIcon />
          </Button>
        </Container>
      </form>
    </>
  );
};
