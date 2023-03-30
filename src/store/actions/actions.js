import axios from "axios";

import { COUNTER_ACTIONS } from "../reducers/counterReducer";
import { PRODUCT_ACTIONS } from "../reducers/productsReducer";
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

// PRODUCT ACTIONS
const productsEndpoint =
  "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products";

export const getProductsActionCreator = () => (dispatch) => {
  dispatch({ type: PRODUCT_ACTIONS.fetchStart });
  axios
    .get(productsEndpoint)
    .then((res) =>
      dispatch({
        type: PRODUCT_ACTIONS.fetchSuccess,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: PRODUCT_ACTIONS.fetchError,
        payload: err.data,
      })
    );
};
