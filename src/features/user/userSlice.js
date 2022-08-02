import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: {},
    loggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export const { } = userSlice.actions;
export default userSlice.reducer;