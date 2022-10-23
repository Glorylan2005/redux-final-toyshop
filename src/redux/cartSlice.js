import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();

            state.cartItems.push({
                id: timeId,
                toyId: action.payload.toy.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity*action.payload.toy.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemID
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce ((total, cartItems) => {
        return cartItems.totalPrice+total
    }, 0)
}

export const getTotalItems = state => {
    return state.cart.cartItems.reduce ((total, cartItems) => {
        return cartItems.quantity+total
    }, 0)
}


export const getCartItems = state => state.cart.cartItems;
export const {addItemToCart, removeItemFromCart} = slice.actions;
export default slice.reducer;
