import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';
import { RootState } from '../store';
import { AxiosError } from 'axios';



export interface UserData {
   email: string,
   firstName: string,
   token: string,
   _id: string,
};



interface AuthState {
   userData: UserData | null,
   fetch: {
      status: 'loading' | 'loaded' | 'error',
      message: string | null
   }
}


interface fetchUserDataParams {
   path: string,
   firstName?: string,
   email: string,
   password: string,
}



export const fetchUserData = createAsyncThunk<UserData, fetchUserDataParams, { rejectValue: string }>('fetchRegistrationLogin', async (params, thunkApi) => {
   
   const { path, ...fetchParams } = params;

   try {
      const {data} = await axios.post<UserData>(path, { ...fetchParams })
      return data
   } catch (err: unknown) {

      if (err instanceof AxiosError && err.response){
         return thunkApi.rejectWithValue(err.response.data.message)
      }

      return thunkApi.rejectWithValue('Неизвестная ошибка')
   }    
})   



export const fetchUserIsAuth = createAsyncThunk<UserData>('fetchIsAuth', async () => {
   const { data } = await axios.get<UserData>('/account');
   return data;
})



export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      userData: null,
      fetch: {
         status: 'loaded',
         message: null,
      }
   } as AuthState,


   reducers: {
      
      logOut: ((state) => {
         state.userData = null;
         axios.interceptors.request.clear();
      }),

      clearFetchMessage : ((state) => {
         state.fetch.message = null;
      })
   },


   extraReducers: (builder) => {

      builder.addCase(fetchUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
         state.userData = action.payload;
         state.fetch.status = "loaded";
         
         if (action.payload.token){
            axios.interceptors.request.use((config) => {
               config.headers.Authorization = action.payload.token;
               return config
            })
         } 
      })

      builder.addCase(fetchUserData.pending, (state) => {
         state.fetch.status = "loading";
      })

      builder.addCase(fetchUserData.rejected, (state, action) => {
         state.fetch.status = "error";
         state.userData = null;


         if (action.payload){
            state.fetch.message = action.payload;
         }
      })



      builder.addCase(fetchUserIsAuth.fulfilled, (state, action: PayloadAction<UserData>) => {
         state.userData = action.payload;
         state.fetch.status = "loaded";
      })

      builder.addCase(fetchUserIsAuth.pending, (state) => {
         state.fetch.message = null;
         state.fetch.status = "loading";
      })

      builder.addCase(fetchUserIsAuth.rejected, (state) => {
         state.fetch.status = "error";
         state.userData = null;      
   
      })
   },
})


export const userDataSelector = ((state: RootState) => state.authSlice.userData)
export const fetchStatusSelector = ((state: RootState) => state.authSlice.fetch.status)
export const fetchMessageSelector = ((state: RootState) => state.authSlice.fetch.message)





export const { logOut, clearFetchMessage } = authSlice.actions;

export default authSlice.reducer;

