import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    productList: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productsRedux: (state, action) => {
            state.productList = [...action.payload]
        }
    }
})



export const { productsRedux } = productSlice.actions
export default productSlice.reducer