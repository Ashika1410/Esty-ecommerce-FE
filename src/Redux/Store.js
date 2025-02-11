import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/CartSlice';
import wishlistReducer from '../Redux/WishlistSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store;