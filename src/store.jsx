import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./features";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
    }
})