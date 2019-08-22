import * as types from './../constants/constants'

/**
|--------------------------------------------------
| Cart
|--------------------------------------------------
*/
export const addCard = (item, quantity) => ({
    type  : types.ADD_CART,
    item,
    quantity
})

export const deleteCart = (id) => ({
    type  : types.DELETE_CART,
    id
})

export const updateCart = (item, quantity) => ({
    type  : types.UPDATE_CART,
    item,
    quantity
})



/**
|--------------------------------------------------
| Notify
|--------------------------------------------------
*/

export const changeNotify = (message) => ({
    type  : types.CHANGE_NOTIFY,
    message
})