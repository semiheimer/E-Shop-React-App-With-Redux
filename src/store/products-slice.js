import { createSlice } from "@reduxjs/toolkit";

const initialproductsState = {
  products: [],
  isLoading: false,
  isError: false,
  message: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialproductsState,
  reducers: {
    fetchedProducts(state, action) {
      const newItem = action.payload;
      state.products = newItem.products;
      state.isLoading = newItem.isLoading;
      state.isError = newItem.isError;
      state.message = newItem.message;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
