import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/product-list/ProductSlice'
import authReducer from '../features/Auth/authSlice'
import CartReducer from '../features/Cart/CartSlice'
import OrderReducer from '../features/order/orderSlice'
import userOrderReducer from  '../features/user/userSlice'
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    user:authReducer,
    cart:CartReducer,
    order:OrderReducer,
    userOrder:userOrderReducer
  },
});
