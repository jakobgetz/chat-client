import { useDispatch, useSelector } from "react-redux";
import { TState } from "../../state";
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
} from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import {
  Contacts,
  Conversations,
  NewContactDialogue,
  NewConversationDialogue,
} from "../";
import { useStyles } from "./styles";
import { useState } from "react";

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
      {setDialogOpen && (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          {activeTab === 0 ? (
            <NewConversationDialogue closeDialog={() => setDialogOpen(false)} />
          ) : (
            <NewContactDialogue closeDialog={() => setDialogOpen(false)} />
          )}
        </Dialog>
      )}
    </>
  );
};
