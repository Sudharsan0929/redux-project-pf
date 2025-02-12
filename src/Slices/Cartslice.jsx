import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalQuantity: 0,
        totalPrice:0
    },
    reducers: {
        addProduct(state, action) {
            const newProduct = action.payload
            const existingProduct = state.products.find((product) => product.id === newProduct.id)
            state.totalQuantity++
            if (!existingProduct) {
                state.products.push({
                    id: newProduct.id,
                    image:newProduct.image,
                    name: newProduct.title,
                    price: newProduct.price,
                    quantity: 1,
                    totalPrice: newProduct.price
                })
                
            } else {
                existingProduct.quantity++
                existingProduct.totalPrice += newProduct.price
            }
            state.totalPrice += newProduct.price
        },

        removeProduct(state, action) {
            const id = action.payload
            const existingProduct = state.products.find((product) => product.id === id)
            if (existingProduct) {
                state.totalQuantity -= existingProduct.quantity
                state.totalPrice -= existingProduct.totalPrice
                state.products = state.products.filter((product) => product.id !== id)
            }
        },

        updateQuantity(state, action) {
            const { id, quantity } = action.payload
            const existingProduct = state.products.find((product) => product.id === id)
            if (existingProduct) {
                const quantityDifference = quantity - existingProduct.quantity
                existingProduct.quantity = quantity
                existingProduct.totalPrice = existingProduct.price * quantity
                state.totalQuantity += quantityDifference
                state.totalPrice += quantityDifference * existingProduct.price
            }
        },

        clearCart(state) {
            state.products = []
            state.totalQuantity = 0
            state.totalPrice = 0
        }
    }
})



export const { addProduct, removeProduct, updateQuantity, clearCart } = cartSlice.actions
const cartReducer = cartSlice.reducer
export default cartReducer
