import { Socket } from "socket.io-client";
import { Message, Contact } from "../../classes";
import {
  BasicAction,
  CHANGE_ID,
  TOGGLE_ACTIVE_PAGE,
  LOAD_CONTACTS,
  ADD_CONTACT,
  ADD_CONVERSATION,
  OPEN_CHAT,
  APPEND_MESSAGE,
  SET_SOCKET,
} from ".";

export type BasicState = {
  id?: string;
  activePage?: string;
  contacts?: Contact[];
  socket?: Socket;
};

export const initialBasicState: BasicState = {};

export const basicReducer = (
  state: BasicState = initialBasicState,
  action: BasicAction<any>
) => {
  switch (action.type) {
    case CHANGE_ID:
      return { ...state, id: action.payload };
    case TOGGLE_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case ADD_CONTACT:
      return { ...state, contacts: state.contacts?.concat(action.payload) };
    case ADD_CONVERSATION:
      return {
        ...state,
        contacts: state.contacts?.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case OPEN_CHAT:
      return {
        ...state,
        contacts: state.contacts?.map((contact) =>
          contact.id === action.payload.id
            ? action.payload
            : { ...contact, selectedToChat: false }
        ),
      };
    case APPEND_MESSAGE:
      return {
        ...state,
        contacts: state.contacts?.map((contact) => {
          if (action.payload.outGoing) {
            return contact.id === action.payload.recipient
              ? { ...contact, chat: contact.chat?.concat(action.payload) }
              : contact;
          }
          return contact.id === action.payload.sender
            ? { ...contact, chat: contact.chat?.concat(action.payload) }
            : contact;
        }),
      };
    case SET_SOCKET:
      console.log(action.payload);
      return { ...state, socket: action.payload };
    default:
      return state;
  }
};
