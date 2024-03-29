import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  cartStatus: false, //necessary for sending or receving cart to server
  subTotalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.subTotalPrice = action.payload.subTotalPrice;
    },
    addItemToCartWithQuantity(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.cartStatus = true;
      if (!existingItem) {
        state.totalQuantity += newItem.quantity;
        state.subTotalPrice += newItem.quantity * newItem.price;
        newItem.totalPrice = newItem.quantity * newItem.price;
        state.items.push(newItem);
      } else if (existingItem.quantity !== newItem.quantity) {
        state.totalQuantity =
          state.totalQuantity - existingItem.quantity + newItem.quantity;
        state.subTotalPrice +=
          newItem.quantity * existingItem.price - existingItem.totalPrice;
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice = newItem.quantity * newItem.price;
      }
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity += 1;
      state.subTotalPrice += newItem.price;
      state.cartStatus = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
          quantity: 1,
          rating: newItem.rating,
        });
      } else {
        //array mutating but not important with IMMUR
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const itemId = action.payload;
      console.log(itemId);
      const existingItem = state.items.find((item) => item.id === itemId);
      if (!existingItem) return state;
      else {
        state.cartStatus = true;
        state.totalQuantity -= existingItem.quantity;
        state.subTotalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
