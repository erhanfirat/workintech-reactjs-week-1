export const TITLE_ACTIONS = Object.freeze({
  UPDATE: "UPDATE_TITLE",
});

const titleInitialState = {
  title: "Merhaba Redux!",
};

export const titleReducer = (state = titleInitialState, action) => {
  switch (action.type) {
    case TITLE_ACTIONS.UPDATE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};
