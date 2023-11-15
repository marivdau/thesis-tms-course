import { PropsCart } from "#ui/cart-item/cart-item";
import { createSlice } from "@reduxjs/toolkit";

export type BasketItem = {
  item: PropsCart,
  quantity: number,
}

type State = {
  basket: BasketItem[],
}

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    basket: [],
  } as State,
  reducers: {
    addItem(state, action) {
      state.basket.push({
        item: action.payload,
        quantity: 1,
      })
    },
    deleteItem(state, action) {
      const index = state.basket.findIndex(item => item.item.isbn13 === action.payload);
      state.basket.splice(index, 1);
    },
    increaseItemQuantity(state, action) {
      const index = state.basket.findIndex(item => item.item.isbn13 === action.payload);
      state.basket[index].quantity++;
    },
    decreaseItemQuantity(state, action) {
      const index = state.basket.findIndex(item => item.item.isbn13 === action.payload);
      if (state.basket[index].quantity === 1) {
        state.basket.splice(index, 1)
      } else {
        state.basket[index].quantity--;
      }
    },
    clearCart(state) {
      state.basket = [];
    }
  },
});

export const {
  actions: { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart },
  reducer: orderReducer,
} = orderSlice;
