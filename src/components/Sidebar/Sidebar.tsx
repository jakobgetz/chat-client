import { useDispatch, useSelector } from "react-redux";
import {
  CONTACTS_KEY,
  CONVERSATIONS_KEY,
  toggleActivePage,
  TState,
} from "../../state";
import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
  Tab,
  Tabs,
  Typography,
  Dialog,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { Contacts, Conversations } from "../";
import { useStyles } from "./styles";
import { useState } from "react";
import { TabPanel } from "@material-ui/lab";

export const Sidebar = () => {
  const { id, activePage } = useSelector((state: TState) => state.basic);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleTabs = (e: any, value: any) => {
    setActiveTab(value);
  };

  return (
    <>
      <Drawer variant="permanent" anchor="left" className={classes.drawer}>
        <AppBar position="static">
          <Tabs
            indicatorColor="primary"
            onChange={handleTabs}
            value={activeTab}
          >
            <Tab label="CONVERSATIONS" />
            <Tab label="CONTACTS" />
          </Tabs>
        </AppBar>
        {/* <ButtonGroup fullWidth>
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
        </ButtonGroup> */}
        {activeTab === 0 ? <Conversations /> : <Contacts />}

        <Container className={classes.footer}>
          <Divider />
          <Typography
            variant="body2"
            align="center"
            color="primary"
            className={classes.id}
          >
            {id}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => setDialogOpen(true)}
          >
            <AddOutlinedIcon />
          </Button>
        </Container>
      </Drawer>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add Contact</DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => setDialogOpen(false)}
        >
          <CloseIcon />
        </IconButton>
        <form>
          <input type="text" />
        </form>
      </Dialog>
    </>
  );
};
