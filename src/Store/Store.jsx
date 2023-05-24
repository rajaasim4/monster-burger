import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Shopping/CartSlice";

export const store = configureStore({
  reducer: {
    cartData: CartSlice.reducer,
  },
});
