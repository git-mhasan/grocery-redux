import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }

})

export default cartSlice.reducer;