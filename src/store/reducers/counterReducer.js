export const COUNTER_ACTIONS = Object.freeze({
  increase: "COUNT_INCREASE",
  decrease: "COUNT_DECREASE",
  plus: "COUNT_PLUS",
  assign: "COUNT_ASSIGN",
});

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_ACTIONS.increase:
      return state + 1;
    case COUNTER_ACTIONS.decrease:
      return state - 1;
    case COUNTER_ACTIONS.plus:
      return state + action.payload;
    case COUNTER_ACTIONS.assign:
      return action.payload;
    default:
      return state;
  }
};
