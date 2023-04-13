import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { productsReducer } from "./productsReducer";
import { titleReducer } from "./titleReducer";

export const reducers = combineReducers({
  titleState: titleReducer,
  productsState: productsReducer,
  counterState: counterReducer,
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


/***
 * Store Data Struture: 
 * { 
 *  titleState: { 
 *      title: String
 *  }
 * }
 */