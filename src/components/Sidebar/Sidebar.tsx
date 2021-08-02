import { useDispatch, useSelector } from "react-redux";
import {
  CONTACTS_KEY,
  CONVERSATIONS_KEY,
  toggleActivePage,
  TState,
} from "../../state";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  Typography,
} from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { Contacts, Conversations } from "../";
import { useStyles } from "./styles";

export const Sidebar = () => {
  const { id, activePage } = useSelector((state: TState) => state.basic);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Drawer variant="permanent" anchor="left" className={classes.drawer}>
        <ButtonGroup fullWidth>
          <Button
            className={classes.navButton}
            size="large"
            onClick={() => dispatch(toggleActivePage(CONVERSATIONS_KEY))}
            color="primary"
            variant={
              activePage === CONVERSATIONS_KEY ? "contained" : "outlined"
            }
          >
            Conversations
          </Button>
          <Button
            className={classes.navButton}
            size="large"
            onClick={() => dispatch(toggleActivePage(CONTACTS_KEY))}
            color="primary"
            variant={activePage === CONTACTS_KEY ? "contained" : "outlined"}
          >
            Contacts
          </Button>
        </ButtonGroup>
        {activePage === CONVERSATIONS_KEY ? <Conversations /> : <Contacts />}

        <Container className={classes.footer}>
          <Button variant="outlined" color="primary" fullWidth>
            <AddOutlinedIcon />
          </Button>
          <Typography
            variant="body2"
            align="center"
            color="primary"
            className={classes.id}
          >
            {id}
          </Typography>
        </Container>
      </Drawer>
    </>
  );
};
