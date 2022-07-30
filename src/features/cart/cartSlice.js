import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
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
        return resp.data;
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
            const item = current(state.allProducts).find((item) => item.id === action.payload.id);
            const cartItem = current(state.cartItems).find((i) => i.id === action.payload.id);

            // const item = state.allProducts?.find((item) => console.log(item.title));
            // console.log(state.allProducts);
            // console.log(current(state.allProducts))
            // const item = state.allProducts.find((item) => console.log(item));
            // console.log(item);
            // console.log(action);

            if (!cartItem) {
                // item.amount = item.amount + 1;
                state.cartItems.push(item);
                state.totalItems++;
                // console.log(item);
                console.log(current(state.cartItems));

            } else if (!!cartItem) {
                state.totalItems++;
            }
        }
    },
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.allProducts = payload.products;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        }

    }
})



export const { clearCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;