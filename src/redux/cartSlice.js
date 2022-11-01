import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        quantity: 0,
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();

            const existingIndex = state.cartItems.findIndex(
                (item) => item.toyId === action.payload.toy.id
            );
        
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                quantity: state.cartItems[existingIndex].quantity + 1,
                };
                toast.info("Increased product quantity", {
                    position: "bottom-left",
                });
            } else {
                
            state.cartItems.push({
                id: timeId,
                toyId: action.payload.toy.id,
                quantity: 1,
                price: action.payload.toy.price
            })
            toast.success("Product added to cart", {
                position: "bottom-left",
            });
            }
        },
        increaseCart: (state, action) => {
                const existingIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.cartItemID
            );
                if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                quantity: state.cartItems[existingIndex].quantity + 1,
                };
            } else {
                state.cartItems.push({
                toyId: action.payload.toy.id,
                quantity: 1,
            })
            }
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.cartItemID
            );
            if (state.cartItems[itemIndex].quantity > 1) {
            state.cartItems[itemIndex].quantity -= 1;
            } else if (state.cartItems[itemIndex].quantity === 1) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.cartItemID
            );
            state.cartItems = nextCartItems;
            toast.error("Product removed from cart", {
                position: "bottom-left",
            });
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemID
            )
            toast.error("Product removed from cart", {
                position: "bottom-left",
            });
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += quantity;

                return cartTotal;
            },
            {
                total: 0,
                quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
})

export const getCartItems = state => state.cart.cartItems;
export const {addItemToCart, removeItemFromCart, decreaseCart, increaseCart, getTotals} = slice.actions;
export default slice.reducer;
