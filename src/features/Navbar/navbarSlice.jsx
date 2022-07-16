import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false
}

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setIsSidebarOpen: (state,action) => {
            state.isSidebarOpen = action.payload
        }
    }
})

export const { setIsSidebarOpen } = navbarSlice.actions
export default navbarSlice.reducer;