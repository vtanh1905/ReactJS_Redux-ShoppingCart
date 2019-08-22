import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import notify from './notify'

const reducers = combineReducers({
    products,
    cart,
    notify
});

export default reducers