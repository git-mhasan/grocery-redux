import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    allProducts: [],
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    isLoading: false,
    errorMessage: null,
}

const productUrl = "https://dummyjson.com/products";

export const getAllProducts = createAsyncThunk('cart/getAllProducts', async () => {
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
            state.allProducts = [];
            state.totalItems = 0;
        },

        addToCart: (state, action) => {
            const item = state.allProducts.find((item) => item.id === action.payload);
            if (!item) {
                state.cartItems.push(item);
            }
            state.totalItems++;
        }
    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.allProducts = payload.data.products;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        }

    }
})



export const { clearCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;