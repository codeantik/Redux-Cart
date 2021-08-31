import { actionTypes } from "../constants/actionTypes";

export const setCartProducts = (cart) => {
    return {
        type: actionTypes.SET_CART_PRODUCTS,
        payload: cart,
    }
}

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId,
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId,
        }
    }
}

export const adjustItemQty = (itemId, qty) => {
    return {
        type: actionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: itemId,
            qty,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
}