import { createSlice } from "@reduxjs/toolkit";

const RestaurantSlice = createSlice({
    name: "Restaurant",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearitem: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearitem} = RestaurantSlice.actions;
export default RestaurantSlice.reducer;