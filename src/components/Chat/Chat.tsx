import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Contact, Message, TState } from "../../state";

export const Chat = () => {
  const chat: Message[] = useSelector((state: TState) =>
    state.basic.contacts.filter((contact: Contact) => contact.selectedToChat)
  )[0]?.chat;
  useEffect(() => console.log(chat), [chat]);
  return (
    <div>
      {chat?.map((message) => (
        <>
          <p>{message.message}</p>
          <p>
            {message.id} {message.timestamp}
          </p>
        </>
      ))}
    </div>
  );
};
