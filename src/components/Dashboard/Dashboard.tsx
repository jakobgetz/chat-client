import { Sidebar, Chat } from "../";
import { useStyles } from "./styles";

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <Chat />
    </div>
  );
};
