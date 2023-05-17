import { SELECTED_PRODUCT, SET_PRODUCTS } from "../actions/productActions";

const initialState = {
    products:[]
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            
            return ({
                ...state, products: action.payload
            })

        case SELECTED_PRODUCT:

            return ({
                ...state, products:action.payload
            })
    
        default:

            return state;

            
    }
}
