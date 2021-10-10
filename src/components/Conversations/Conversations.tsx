import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import { useSelector, useDispatch } from "react-redux";
import { Contact, TState, openChat } from "../../state";

export const Conversations = () => {
  const conversations: Contact[] = (
    useSelector((state: TState) => state.basic.contacts) as Contact[]
  )?.filter((contact) => contact.inConversation);
  const dispatch = useDispatch();

  return (
    <>
      <ForumOutlinedIcon color="primary" />
      <List>
        {conversations?.map((contact) => (
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
