import { Button, DialogTitle, TextField } from "@material-ui/core";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Contact } from "../../classes";
import { addContact } from "../../state";

type Props = {
  closeDialog: () => void;
};

export const NewContactDialogue: React.FC<Props> = ({ closeDialog }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (nameRef.current && idRef.current) {
      dispatch(
        addContact(new Contact(nameRef.current.value, idRef.current.value))
      );
    }
    closeDialog();
  };

  return (
    <>
      <DialogTitle>Add Contact</DialogTitle>
      <form onSubmit={handleSubmit}>
        <TextField
          inputRef={nameRef}
          label={"Name"}
          variant="outlined"
        ></TextField>
        <TextField inputRef={idRef} label={"ID"} variant="outlined"></TextField>
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          <AddOutlinedIcon />
        </Button>
      </form>
    </>
  );
};
