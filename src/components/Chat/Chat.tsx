import { List, ListItem, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TState } from "../../state";
import { Contact, Message } from "../../classes";
import { useStyles } from "./styles";
import { MessageBox } from "../";

export const Chat = () => {
  const chat: Message[] = useSelector((state: TState) =>
    state.basic.contacts.filter((contact: Contact) => contact.selectedToChat)
  )[0]?.chat;
  const classes = useStyles();
  return (
    <div>
      <List>
        {chat?.map((message) => (
          <ListItem>
            <div>
              <Typography color="primary">{message.message}</Typography>
              <Typography>
                {message.sender} {message.timestamp}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
      <MessageBox />
    </div>
  );
};
