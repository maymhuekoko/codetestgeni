import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      login : false,
      user: '',
    },
    reducers: {
       loginSuccess:(state) => {
        state.login = true;
       },
       addUser:(state,action) => {
        state.user = action.payload;
       },
       logoutSuccess:(state) => {
        state.login = false;
        state.user = '';
       }
    }
})

export const{loginSuccess,addUser,logoutSuccess} = userSlice.actions
export default userSlice.reducer;