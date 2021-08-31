import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: [],
    cart: [],
    currentItem: null,
  };

export const cartReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_CART_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case actionTypes.ADD_TO_CART:
            // get item data from products array
            const item = state.products.find(product => product.id === payload.id)
            // check if item is already in cart
            const inCart = state.cart.find(item => item.id === payload.id ? true : false)

            return {
                ...state,
                cart: inCart
                ? state.cart.map(item => 
                        item.id === payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                : [...state.cart, { ...item, qty: 1 }],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            }
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map(item => 
                        item.id === payload.id 
                        ? { ...item, qty: +payload.qty}
                        : item
                    ),
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: payload,
            }
        default:
            return state
    }
} 
