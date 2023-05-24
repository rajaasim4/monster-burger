import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  cart: [],
  totalQuantity: "",
  totalPrice: "",
};
const CartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cart.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          quantity: 1,
          price: newItem.price,
          subTotal: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.subTotal = existingItem.price * existingItem.quantity;
      }

      // state.totalPrice = state.cart
      //   .map((val) => val.subTotal)
      //   .reducer((x, y) => x + y);
    },
    decrementItem(state, action) {
      const newItem = action.payload;
      const existedItem = state.cart.find((item) => item.id === newItem);

      if (existedItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== existedItem.id);
      } else {
        existedItem.quantity--;
        existedItem.subTotal = existedItem.price * existedItem.quantity;
      }
    },
    deleteItem(state, action) {
      const newItem = action.payload;
      state.cart = state.cart.filter((item) => item.id !== newItem);
    },
  },
});

export default CartSlice;
export const { addToCart, deleteItem, decrementItem } = CartSlice.actions;
