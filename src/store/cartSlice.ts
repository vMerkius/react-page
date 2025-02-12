import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../types/item";

interface CartState {
  items: Array<{ item: IItem; count: number }>;
  sum: number;
}

const initialState: CartState = {
  items: [],
  sum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.item.id === newItem.id
      );
      state.sum += newItem.price - newItem.discount;
      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ item: newItem, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const id = item.id;
      const existingItem = state.items.find((item) => item.item.id === id);
      if (existingItem) {
        state.sum -= existingItem.item.price;
        if (existingItem.count === 1) {
          state.items = state.items.filter((item) => item.item.id !== id);
        } else {
          existingItem.count--;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.sum = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
