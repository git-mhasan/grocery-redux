import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    isLoading: false,
    errorMessage: null,
}

const productUrl = "https://dummyjson.com/products";

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    try {
        const resp = await axios(productUrl);
        return resp;
    } catch (error) {
        return error.message;
    }
}
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.totalItems = 0;
        }
    },
    extraReducers: {
        [getCartItems.padding]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        }

    }
})



export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;