import { ADD_TO_CART } from '../src/constants'

export const addToCartClick = (item) => ({
    type: ADD_TO_CART,
    payload: item
})