import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { addConversation, TState } from "../../state";
import { FC } from "react";
import { Contact } from "../../classes";

type Props = {
  closeDialog: () => void;
};

export const NewConversationDialogue: FC<Props> = ({ closeDialog }) => {
  const contacts: Contact[] = useSelector(
    (state: TState) => state.basic.contacts
  );
  const dispatch = useDispatch();

  const handleAddConversation = (contact: Contact) => {
    dispatch(addConversation(contact));
    closeDialog();
  };

  return (
    <>
      <DialogTitle>Add Conversation</DialogTitle>
      <List>
        {contacts.length === 0 ? (
          <div>You do not have any contacts yet</div>
        ) : !contacts.some((contact) => !contact.inConversation) ? (
          <div>You have already added all contacts to your conversations</div>
        ) : (
          contacts
            .filter((contact) => !contact.inConversation)
            .map((contact) => (
              <ListItem
                button
                onClick={() => handleAddConversation(contact)}
                key={contact.id}
              >
                <ListItemAvatar>
                  <Avatar>{/* <PersonIcon /> */}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact.name} />
              </ListItem>
            ))
        )}
      </List>
    </>
  );
};
