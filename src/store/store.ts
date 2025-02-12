import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import blogSlice from "./blogSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    blogs: blogSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
