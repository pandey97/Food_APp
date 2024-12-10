import { configureStore } from "@reduxjs/toolkit";
import RestaurantSlice from "./slice/RestaurantSlice";

const store = configureStore({
    reducer: {
        restaurant: RestaurantSlice
    }
});

export default store;