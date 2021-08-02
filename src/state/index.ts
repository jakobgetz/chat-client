import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { basicReducer } from "./basic";

export type InitialState = object;
export const initialState: InitialState = {};

const reducer = combineReducers({
  basic: basicReducer,
});

const key = "whatsapp-chat-clone";
const localState = localStorage.getItem(key);
const state = localState ? JSON.parse(localState) : initialState;

export const store = createStore(
  reducer,
  state,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem(key, JSON.stringify(store.getState()));
});

export type TState = ReturnType<typeof reducer>;
export * from "./basic";
