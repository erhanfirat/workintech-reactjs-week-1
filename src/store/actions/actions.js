import { COUNTER_ACTIONS } from "../reducers/counterReducer";
import { TITLE_ACTIONS } from "../reducers/titleReducer";

export const updateTitleAction = (title) => ({
  type: TITLE_ACTIONS.UPDATE,
  payload: title,
});

// COUNTER ACTIONS

export const countIncreaseAction = {
  type: COUNTER_ACTIONS.increase,
};
export const countDecreaseAction = {
  type: COUNTER_ACTIONS.decrease,
};
export const countPlusAction = (payload) => ({
  type: COUNTER_ACTIONS.plus,
  payload,
});
export const countAssignAction = (payload) => ({
  type: COUNTER_ACTIONS.assign,
  payload,
});
