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

        // addToCart: (state, action) => {
        //     const item = current(state.allProducts).find((item) => item.id === action.payload.id);
        //     const newItem = { ...item };
        //     const cartItem = current(state.cartItems).find((i) => i.id === action.payload.id);
        //     // const cartItem = current(state.cartItems).find((i) => i.id === action.payload.id);

        //     // const item = state.allProducts?.find((item) => console.log(item.title));
        //     // console.log(state.allProducts);
        //     // console.log(current(state.allProducts))
        //     // const item = state.allProducts.find((item) => console.log(item));
        //     // console.log(item);

        //     if (!cartItem) {
        //         newItem.amount = 1;
        //         // console.log(newItem);

        //         state.cartItems.push(newItem);
        //         // state.totalItems++;
        //         // console.log(current(state.cartItems));

        //     } else if (cartItem) {
        //         console.log(cartItem);
        //         cartItem.amount = cartItem.amount + 1;
        //         // state.cartItems
        //     }

        //     // state.totalItems = state.cartItems.reduce(({prevVal}, currentVal) => prevVal.amount + currentVal.amount, 0)
        // },

        addToCart: (state, action) => {
            const item = state.allProducts.find((item) => item.id === action.payload.id);
            // const newItem = { ...item };
            const cartItem = state.cartItems.find((i) => i.id === action.payload.id);


            if (!cartItem) {
                item.amount = 1;
                // console.log(newItem);

                state.cartItems.push(item);
                // state.totalItems++;
                // console.log(current(state.cartItems));

            } else if (cartItem) {
                // console.log(cartItem);
                cartItem.amount = cartItem.amount + 1;
                // state.cartItems
            }

            // state.totalItems = state.cartItems.reduce(({prevVal}, currentVal) => prevVal.amount + currentVal.amount, 0)
        },
        removeItem: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload);
        },

        incrementQuantity: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload);
            cartItem.amount++;
        },
        decrementQuantity: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload);
            cartItem.amount--;
        },

        calculateTotal: (state) => {
            // state.totalItems = state.cartItems.reduce((prevVal, currentVal) => prevVal.amount + currentVal.amount, 0)
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.totalItems = amount;
            state.totalPrice = total;
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



export const { clearCart, addToCart, removeItem, incrementQuantity, decrementQuantity, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;