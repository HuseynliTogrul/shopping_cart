import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const existingProduct = state.find(item => item.id === action.payload.id)
            if (existingProduct) {
                existingProduct.count += 1
            } else {
                state.push({ ...action.payload, count: 1 })
            }
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer