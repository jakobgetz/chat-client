import { List, ListItem, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../state";
import { Contact, Message as M } from "../../classes";
import { useStyles } from "./styles";
import { MessageBox, Message } from "../";

export const Chat = () => {
  const chat: M[] = useSelector((state: TState) =>
    state.basic.contacts.filter((contact: Contact) => contact.selectedToChat)
  )[0]?.chat;
  const classes = useStyles();
  return (
    <div>
      <List>
        {chat?.map((message) => (
          <ListItem>
            <Message message={message} />
          </ListItem>
        ))}
      </List>
      <MessageBox />
    </div>
  );
};
