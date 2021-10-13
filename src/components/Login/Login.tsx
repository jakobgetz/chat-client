import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeId,
  loadContacts,
  ToggleActivePagePayload,
  TState,
} from "../../state";
import { v4 as uuidv4 } from "uuid";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export const Login: React.FC = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const activePage: ToggleActivePagePayload = useSelector(
    (state: TState) => state.basic.activePage
  );
  const classes = useStyles();

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (idRef.current) {
      dispatch(changeId(idRef.current.value));
    }
  };

  const createNewId = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(changeId(uuidv4()));
    // temporary
    dispatch(loadContacts());
  };

  return (
    <>
      <Typography
        className={classes.heading}
        color="primary"
        align="center"
        variant="h2"
      >
        CHATIFY
      </Typography>
      <form onSubmit={handleSubmit}>
        <Container>
          <TextField
            className={classes.field}
            inputRef={idRef}
            variant="outlined"
            label="Enter your Id"
            required
            fullWidth
            color="primary"
          />
          <Button className={classes.button} type="submit" color="primary">
            Login
          </Button>
          <Button onClick={createNewId} color="primary">
            CREATE NEW
          </Button>
        </Container>
      </form>
    </>
  );
};
