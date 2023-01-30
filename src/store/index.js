import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import ui from "./ui";
const store = configureStore({
  reducer: { cart: cart.reducer, ui: ui.reducer },
});

export default store;
