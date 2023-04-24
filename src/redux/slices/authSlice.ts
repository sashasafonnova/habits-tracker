import { createSlice } from '@reduxjs/toolkit';


interface AuthState {
   isAuth: boolean;
}




export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      isAuth: true,
   } as AuthState,
   reducers: {

   }
})


export const { } = authSlice.actions;

export default authSlice.reducer;