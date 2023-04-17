import { createSlice } from '@reduxjs/toolkit';


interface createHabitState{
   categoryList: {
      isOpen: boolean,
   }
}




export const createHabitSlice = createSlice({
   name: 'createHabit',
   initialState: {
      categoryList: {
         isOpen: false,
      }
   } as createHabitState,
   reducers: {

      openCategoryList: (state, action) => {
         state.categoryList.isOpen = action.payload;
      }
   }
})


export const { openCategoryList } = createHabitSlice.actions;

export const createHabitReducer = createHabitSlice.reducer;