import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../redux/slices/CounterSlice"

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
    },
})