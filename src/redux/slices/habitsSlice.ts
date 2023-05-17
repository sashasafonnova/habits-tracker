import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';
import { RootState } from '../store';



export interface HabitsData {
   author: string,
   _id: string,
   category: string,
   title: string,
   habitLength: number,
   progress: number
   dateCreated: string,
   lastUpdated: string,
   status: string
};



interface HabitsSliceState {
   habitsData: HabitsData[] | HabitsData | null,
   fetch: {
      status: 'loading' | 'loaded' | 'error',
      message: string | null
   }
}



interface fetchCreateHabitParams {
   category: string,
   title: string,
   habitLength: number,
   dateCreated: string,
   lastUpdated: string
}




export const fetchHabits = createAsyncThunk<HabitsData[] | HabitsData, { id?: string }> ('fetchHabits', async (params) => {

   const {id} = params;
   const idParam = id ? `/${id}` : '';

   const { data } = await axios.get(`/habits${idParam}`);
   return data
})



export const fetchRemoveHabit = createAsyncThunk<null, { id: string }>('fetchRemoveHabit', async (params) => {

   const { id } = params;

   const { data } = await axios.delete(`/habits/${id}`);
   return data
})




export const fetchCreateHabit = createAsyncThunk<null, fetchCreateHabitParams>('fetchCreateHabit', async (params) => {
   
   const { data } = await axios.post(`/habits`, params);
   return data;
})



export const habitsSlice = createSlice({
   name: 'habits',
   initialState: {
      habitsData: null,
      fetch: {
         status: 'loaded',
         message: null,
      }
   } as HabitsSliceState,


   reducers: {

      clearHabits: ((state) => {
         state.habitsData = null;
      }),
   },


   extraReducers: (builder) => {

      builder.addCase(fetchHabits.fulfilled, (state, action: PayloadAction<HabitsData[] | HabitsData>) => {
         state.habitsData = action.payload;
         state.fetch.message = null;
         state.fetch.status = "loaded";
      })

      builder.addCase(fetchHabits.pending, (state) => {
         state.fetch.message = null;
         state.fetch.status = "loading";
      })

      builder.addCase(fetchHabits.rejected, (state) => {
         state.fetch.status = "error";
         state.habitsData = null;
         state.fetch.message = 'Не удалось получить данные';
      })



      builder.addCase(fetchRemoveHabit.fulfilled, (state) => {
         state.habitsData = null;
         state.fetch.status = "loaded";
         state.fetch.message = 'Трек успешно удален';
      })

      builder.addCase(fetchRemoveHabit.pending, (state) => {
         state.fetch.message = null;
         state.fetch.status = "loading";
      })

      builder.addCase(fetchRemoveHabit.rejected, (state) => {
         state.fetch.status = "error";
         state.habitsData = null;
         state.fetch.message = 'Не удалось удалить трек';
      })



      builder.addCase(fetchCreateHabit.fulfilled, (state) => {
         state.fetch.status = "loaded";
         state.fetch.message = 'Трек успешно создан';
      })

      builder.addCase(fetchCreateHabit.pending, (state) => {
         state.fetch.message = null;
         state.fetch.status = "loading";
      })

      builder.addCase(fetchCreateHabit.rejected, (state) => {
         state.fetch.status = "error";
         state.fetch.message = 'Не удалось создать трек';  
   
      })
   },
})


export const habitsSelector = ((state: RootState) => state.habitsSlice.habitsData)
export const fetchStatusSelector = ((state: RootState) => state.habitsSlice.fetch.status)
export const fetchMessageSelector = ((state: RootState) => state.habitsSlice.fetch.message)


export const { clearHabits } = habitsSlice.actions;

export default habitsSlice.reducer;

