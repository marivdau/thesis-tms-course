import { PropsCart } from "#ui/cart-item/cart-item";
import { createSlice } from "@reduxjs/toolkit";

export type BookmarkItem = {
  item: PropsCart,
}

type State = {
  favourites: BookmarkItem[],
}

const favouritesSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    favourites: [],
  } as State,

  reducers: {
    markItem(state, action) {
      state.favourites.push({
        item: action.payload, 
      })      
    },
    unMarkItem(state, action) {
      const index = state.favourites.findIndex(item => item.item.isbn13 === action.payload);
      state.favourites.splice(index, 1);
    },
  },
});

export const {
  actions: { markItem, unMarkItem },
  reducer: favouritesReducer,
} = favouritesSlice;
