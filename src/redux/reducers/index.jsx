import { combineReducers } from "redux";
import { productReducer, productDetailsReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: productDetailsReducer
})

export default reducers;

