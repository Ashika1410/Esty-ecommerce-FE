import { createSlice } from "@reduxjs/toolkit";

const loadWishlistFromStorage = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: loadWishlistFromStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    clearWishlist: (state) => {
      state.items = [];
      localStorage.removeItem("wishlist");
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;