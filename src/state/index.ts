import { combineReducers, createStore, applyMiddleware } from "redux";
import _ from "lodash";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { basicReducer } from "./basic";

export type InitialState = object;
export const initialState: InitialState = {};

const reducer = combineReducers({
  basic: basicReducer,
});

const key = "whatsapp-clone-app";
const localState = localStorage.getItem(key);
const state = localState ? JSON.parse(localState) : initialState;

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  const state = _.cloneDeep(store.getState());
  delete state.basic.socket;
  localStorage.setItem(key, JSON.stringify(state));
});

export type TState = ReturnType<typeof reducer>;
export * from "./basic";
