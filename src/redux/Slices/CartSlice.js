import { createSlice } from "@reduxjs/toolkit";

// generic syntax
export const CartSlice = createSlice({
    name: "cart", // name of the slice
    initialState: [], // initial state is an empty array
    reducers: {
        add: (state, action) => {
            state.push(action.payload); // adding item to the state
        },
        remove: (state, action) => {
            // removing item based on id
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const { add, remove } = CartSlice.actions; // exporting actions
export default CartSlice.reducer; // exporting the reducer
