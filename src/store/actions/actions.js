import { TITLE_ACTIONS } from "../reducers/titleReducer";

export const updateTitleAction = (title) => ({
  type: TITLE_ACTIONS.UPDATE,
  payload: title,
});
