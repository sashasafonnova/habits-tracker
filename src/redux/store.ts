import { configureStore } from "@reduxjs/toolkit";


import authSlice from './slices/authSlice';
import habitsSlice from './slices/habitsSlice';



export const store = configureStore({
   reducer: {
      authSlice,
      habitsSlice
   },
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;