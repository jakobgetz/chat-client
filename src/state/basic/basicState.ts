import {
  BasicAction,
  CHANGE_ID,
  TOGGLE_ACTIVE_PAGE,
  LOAD_CONTACTS,
  ADD_CONTACT,
  ADD_CONVERSATION,
  OPEN_CHAT,
} from ".";

export type Message = {
  id: string;
  message: string;
  timestamp: string;
};

export type Contact = {
  name: string;
  id: string;
  inConversation: boolean;
  chat?: Message[];
  selectedToChat: boolean;
};

export type BasicState = {
  id?: string;
  activePage?: string;
  contacts?: Contact[];
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
      return { ...state, contact: state.contacts?.concat(action.payload) };
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
    default:
      return state;
  }
};
