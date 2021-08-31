import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartProducts: cartReducer,
})

export default reducers;