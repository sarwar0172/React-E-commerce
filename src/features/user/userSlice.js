import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchLoggedInUserOrder, updateUser,fetchLoggedInUser } from './userAPI';

const initialState = {
  userOrders:[] ,
  status: 'idle',
  userInfo:null,//this will have more info
};


export const fetchLoggedInUserOrderAsync = createAsyncThunk(
  'user/fetchLoggedInUserorders',
  async (id) => {
    const response = await fetchLoggedInUserOrder(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  'user/updateUser',
  async (id) => {
    const response = await updateUser(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchLoggedInUserAsync = createAsyncThunk(
  'user/fetchloggedinUser',
  async (id) => {
    const response = await fetchLoggedInUser(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    increment: (state) => {
   
      state.value += 1;
    },
  
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // this info can be different or more from loggedin user
        state.userOrders = action.payload;
      }).addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // this info can be different or more from loggedin user
        state.userOrders = action.payload;
      }).addCase(fetchLoggedInUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // this info can be different or more from loggedin user
        state.userInfo = action.payload;
      });
  },
});

export const { increment } = userSlice.actions;

export const selectuserOrders=(state)=>state.userOrder.userOrders
export const selectuserinfo=(state)=>state.userOrder.userInfo

export default userSlice.reducer;
