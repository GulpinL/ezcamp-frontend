import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        firstInput: "",
        secondInput: "",
    },
    create: {
        username: "",
        password: "",
        confirm: "",
        email: "",
        address: "",
        phone: "",
    },
    phoneRegex: "[+]{0,1}[0-9]{10}",
    emailRegex: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload
        },
        setCreate: (state, action) => {
            state.create = action.payload
        }
    }
})

export const {
    setLogin,
    setCreate } = authenticationSlice.actions
export default authenticationSlice.reducer;