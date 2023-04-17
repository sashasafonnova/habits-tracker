import { configureStore } from "@reduxjs/toolkit";

import {createHabitReducer} from "../modules/CreateHabit"


export const store = configureStore({
   reducer: {
      createHabitReducer,
   },
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;