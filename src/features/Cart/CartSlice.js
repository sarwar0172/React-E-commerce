import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddToCart,fetchItemsByUserID, updateCart,deleteItemFromCart, resetCart } from './CartApi';

const initialState = {
  items: [],
  status: 'idle',
};


export const AddToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await AddToCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchItemByuserIdAsynce = createAsyncThunk(
  'cart/fetchItemsByUserID',
  async (userId) => {
    const response = await fetchItemsByUserID(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const updateItemAsynce = createAsyncThunk(
  'cart/updateItem',
  async (update) => {
    const response = await updateCart(update);
    return response.data;
  }
);


export const DeleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItem',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const resetCartAsync = createAsyncThunk(
  'cart/resetCart',
  async (userId) => {
    const response = await resetCart(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const CartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    increment: (state) => {
   
      state.value += 1;
    },
  
  },

  extraReducers: (builder) => {
    builder
      .addCase(AddToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(AddToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(fetchItemByuserIdAsynce.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemByuserIdAsynce.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=action.payload;
      }).addCase(updateItemAsynce.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateItemAsynce.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex(item=>item.id===action.payload.id)
        state.items[index]=action.payload;
      }).addCase(DeleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(DeleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index=state.items.findIndex(item=>item.id===action.payload.id)
        state.items.splice(index,1)
      }).addCase(resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items=[]
      })
  },
});

export const { increment } = CartSlice.actions;


export const selectedItemsbyId = (state) => state.cart.items;



export default CartSlice.reducer;
