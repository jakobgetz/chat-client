import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import { useDispatch, useSelector } from "react-redux";
import { TState, Contact, openChat } from "../../state";

export const Contacts = () => {
  const contacts: Contact[] = useSelector(
    (state: TState) => state.basic.contacts
  );
  const dispatch = useDispatch();

  return (
    <>
      <PermContactCalendarOutlinedIcon color="primary" />
      <List>
        {contacts?.map((contact) => (
          <ListItem
            button
            onClick={() => dispatch(openChat(contact))}
            key={contact.id}
          >
            <ListItemAvatar>
              <Avatar>{/* <PersonIcon /> */}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
