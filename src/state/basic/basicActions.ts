export const CHANGE_ID = "CHANGE_ID";
export const TOGGLE_ACTIVE_PAGE = "TOGGLE_ACTIVE_PAGE";

export type BasicActionType = "CHANGE_ID" | "TOGGLE_ACTIVE_PAGE";

export type BasicAction = {
  type: BasicActionType;
  payload?: any;
};

export const changeId = (payload: string) => ({
  type: CHANGE_ID,
  payload,
});

export const CONVERSATIONS_KEY = "conversations";
export const CONTACTS_KEY = "contacts";
export type ToggleActivePagePayload = "conversations" | "contacts";
export const toggleActivePage = (payload: ToggleActivePagePayload) => ({
  type: TOGGLE_ACTIVE_PAGE,
  payload,
});
