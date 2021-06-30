import { Reducer } from "react";

type TState = {
  id?: string;
};

type TAction = {
  type: string;
  payload?: any;
};

export const ACTIONS = {
  CHANGE_ID: "CHANGE_ID",
};

const basicReducer: Reducer<TState, TAction> = (state: TState, action: TAction) => {
  switch (action.type) {
    case ACTIONS.CHANGE_ID:
      return { id: action.payload };
    default:
      return state;
  }
};

export default basicReducer;
