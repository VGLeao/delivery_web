import { ADD_TO_CART } from "../src/constants";

const initialState = {
    cart: [{}],
};

export const addToCart = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state, {
                cart: [...state.cart, action.payload],
            });
        default:
            return state;
    }
};
