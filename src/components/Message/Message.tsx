import { Typography } from "@material-ui/core";
import { FC } from "react";
import { Message as M } from "../../classes";

type Props = {
  message: M;
};

export const Message: FC<Props> = ({ message }) => (
  <div>
    <Typography color="primary">{message.message}</Typography>
    <Typography>
      {message.sender} {message.timestamp}
    </Typography>
  </div>
);
