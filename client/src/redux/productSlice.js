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
        }
    }
})



export const { productsRedux, addCartItem, deleteCartItem } = productSlice.actions
export default productSlice.reducer