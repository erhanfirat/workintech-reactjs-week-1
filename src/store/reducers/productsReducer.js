const productsInitial = {
  products: [],
};

export const productsReducer = (state = productsInitial, action) => {
  switch (action.type) {
    case "SAMPLE":
      return {};
    default:
      return state;
  }
};
