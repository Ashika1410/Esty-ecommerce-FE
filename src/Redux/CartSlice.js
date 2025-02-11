import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }
      localStorage.setItem("cart", JSON.stringify(state.items)); 
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items)); 
    },
    updateItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity; 
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, removeItem, updateItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
