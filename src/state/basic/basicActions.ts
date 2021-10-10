import { v4 as uuidv4 } from "uuid"; //temporary
import { Contact } from ".";

export const CHANGE_ID = "CHANGE_ID";
export const TOGGLE_ACTIVE_PAGE = "TOGGLE_ACTIVE_PAGE";
export const LOAD_CONTACTS = "LOAD_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const ADD_CONVERSATION = "ADD_CONVERSATION";
export const OPEN_CHAT = "OPEN_CHAT";

export type BasicActionType =
  | "CHANGE_ID"
  | "TOGGLE_ACTIVE_PAGE"
  | "LOAD_CONTACTS"
  | "ADD_CONTACT"
  | "ADD_CONVERSATION"
  | "OPEN_CHAT";

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
      {
        name: "Thomas",
        id: "Thomas",
        inConversation: false,
        selectedToChat: false,
      },
      {
        name: "Michael",
        id: "Michael",
        inConversation: false,
        selectedToChat: false,
      },
      {
        name: "Mike",
        id: "Mike",
        inConversation: false,
        selectedToChat: false,
      },
    ],
  };
};

export const addContact = () => {
  return {
    type: ADD_CONTACT,
    payload: { name: "New", id: uuidv4(), inConversation: false },
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
        { id: payload.id, message: "hi", timestamp: "0" },
        { id: "Thomas", message: "yo", timestamp: "1" },
        { id: payload.id, message: "wazzup?", timestamp: "2" },
        { id: "Thomas", message: "nothin", timestamp: "3" },
      ],
    },
  };
};
