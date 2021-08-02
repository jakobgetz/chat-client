import { BasicAction, CHANGE_ID, TOGGLE_ACTIVE_PAGE } from ".";

export type BasicState = {
  id?: string;
  activePage?: string;
};

export const initialBasicState: BasicState = {};

export const basicReducer = (
  state: BasicState = initialBasicState,
  action: BasicAction
) => {
  switch (action.type) {
    case CHANGE_ID:
      return { ...state, id: action.payload };
    case TOGGLE_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    default:
      return state;
  }
};
