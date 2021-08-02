import { Sidebar } from "../";
import { useStyles } from "./styles";

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Sidebar />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aperiam
          aut dolorem recusandae, quia nihil cum quae quam culpa architecto
          reprehenderit facere accusamus! Nisi ex aliquam, amet consequatur
          culpa eum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aperiam
          aut dolorem recusandae, quia nihil cum quae quam culpa architecto
          reprehenderit facere accusamus! Nisi ex aliquam, amet consequatur
          culpa eum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aperiam
          aut dolorem recusandae, quia nihil cum quae quam culpa architecto
          reprehenderit facere accusamus! Nisi ex aliquam, amet consequatur
          culpa eum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aperiam
          aut dolorem recusandae, quia nihil cum quae quam culpa architecto
          reprehenderit facere accusamus! Nisi ex aliquam, amet consequatur
          culpa eum.
        </p>
      </div>
    </div>
  );
};
