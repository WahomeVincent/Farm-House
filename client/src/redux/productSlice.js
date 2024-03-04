import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState  = {
    productList: [],
    cartItem: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productsRedux: (state, action) => {
            state.productList = [...action.payload]
        },

        addCartItem: (state, action) => {    
            const check  = state.cartItem.some(item => item._id === action.payload._id)

            if(!check){
                let total = action.payload.price
                state.cartItem = [...state.cartItem, {...action.payload, quantity: 1, total: total  }]
                toast.success(`${action.payload.name} added to cart`)
            } else{
                toast('Item already in Cart')
            }
        },

        deleteCartItem: (state, action) => {
            const itemDeleted = (action.payload[1])
            toast(itemDeleted + ' is removed.')
            const index = state.cartItem.findIndex((item) => item === item._id)
            state.cartItem.splice(index)
        },

        increaseItemNo: (state, action) => {
                // 1. Find the index of the item.
                const index = state.cartItem.findIndex(item => item._id === action.payload)
                // 2. Get its quantity and place it in a variable
                let quantity = state.cartItem[index].quantity
                // 3. Increase the quantity every time the function runs
                let quantityIncrease = ++quantity
                // 4. Assign the quantity increase to the new state
                state.cartItem[index].quantity = quantityIncrease

                const price = state.cartItem[index].price
                let totalPrice = price * quantityIncrease

                state.cartItem[index].total = totalPrice 
        },

        decreaseItemNo : (state, action) => {
            const index = state.cartItem.findIndex(item => item._id === action.payload)
            let quantity = state.cartItem[index].quantity
            if(quantity > 1){
                let quantityDescrease = --quantity
                state.cartItem[index].quantity = quantityDescrease
                const price = state.cartItem[index].price
                console.log(quantityDescrease);
                let totalPrice = price * quantityDescrease
                state.cartItem[index].total = totalPrice
            }

        }
    }
})



export const { productsRedux, addCartItem, deleteCartItem, increaseItemNo, decreaseItemNo } = productSlice.actions
export default productSlice.reducer