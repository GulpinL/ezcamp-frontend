import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer, userReducer, authenticationReducer } from "./features";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        user: userReducer,
        authentication: authenticationReducer,
    }
})