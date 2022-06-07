import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart-slice";
import uiReducer from "./ui-slice";
import productsReducer from "./products-slice";
import authReducer from "./auth/auth-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
  },
});

export default store;
