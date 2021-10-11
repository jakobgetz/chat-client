import { Socket } from "socket.io-client";
import { Contact, Message } from "../../classes";

export const CHANGE_ID = "CHANGE_ID";
export const TOGGLE_ACTIVE_PAGE = "TOGGLE_ACTIVE_PAGE";
export const LOAD_CONTACTS = "LOAD_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const ADD_CONVERSATION = "ADD_CONVERSATION";
export const OPEN_CHAT = "OPEN_CHAT";
export const APPEND_MESSAGE = "APPEND_MESSAGE";
export const SET_SOCKET = "SET_SOCKET";

export type BasicActionType =
  | "CHANGE_ID"
  | "TOGGLE_ACTIVE_PAGE"
  | "LOAD_CONTACTS"
  | "ADD_CONTACT"
  | "ADD_CONVERSATION"
  | "OPEN_CHAT"
  | "APPEND_MESSAGE"
  | "SET_SOCKET";

export type BasicAction<payload> = {
  type: BasicActionType;
  payload?: payload;
};

export const changeId = (payload: string) => ({
  type: CHANGE_ID,
  payload,
});

export const CONVERSATIONS_KEY = "conversations";
export const CONTACTS_KEY = "contacts";
export type ToggleActivePagePayload = "conversations" | "contacts";
export const toggleActivePage = (
  payload: ToggleActivePagePayload
): BasicAction<ToggleActivePagePayload> => ({
  type: TOGGLE_ACTIVE_PAGE,
  payload,
});

export const loadContacts = (): BasicAction<Contact[]> => {
  return {
    type: LOAD_CONTACTS,
    payload: [
      new Contact("Thomas", "Thomas"),
      new Contact("Michael", "Michael"),
      new Contact("Mike", "Mike"),
    ],
  };
};

export const addContact = (payload: Contact) => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const addConversation = (payload: Contact) => ({
  type: ADD_CONVERSATION,
  payload: { ...payload, inConversation: true },
});

export const openChat = (payload: Contact): BasicAction<Contact> => {
  /**
   * if a chat does allready exist just open the chat, else load it also
   */
  return {
    type: OPEN_CHAT,
    payload: {
      ...payload,
      selectedToChat: true,
      chat: [
        new Message("hi", payload.id, "ich"),
        new Message("yo", "ich", payload.id),
        new Message("wazzup", payload.id, "ich"),
        new Message("nothin", "ich", payload.id),
      ],
    },
  };
};

export const appendMessage = (payload: Message): BasicAction<Message> => {
  return {
    type: APPEND_MESSAGE,
    payload,
  };
};

export const setSocket = (payload: Socket): BasicAction<Socket> => ({
  type: SET_SOCKET,
  payload,
});
