import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { titleReducer } from "./titleReducer";

export const reducers = combineReducers({
  titleState: titleReducer,
  productsState: productsReducer,
});




/*

store = {
    titleState: {
        title: "Merhaba Redux!",
    },
    productsState: {
        products: [],
    }
}
*/