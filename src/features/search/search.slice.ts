import { createSlice } from "@reduxjs/toolkit";
import { SearchResponce } from "./types";

const initialState = {
  searchedBooks: {
    error: '0',
    total: 8071,
    page: 1,
    books: []
  } as SearchResponce,

  isInProgress: false,
  isCompleted: false,
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: initialState,

  reducers: {
    search(state, action: { payload: string }) {
      state.isInProgress = true;
    },

    searchSuccess(state, action: { payload: SearchResponce }) {
      state.isInProgress = false;
      state.isCompleted = true;
      state.searchedBooks = action.payload;
    },

    searchFailure(state) {
      state.isInProgress = false;
    },

    reset(state) {
      state.searchedBooks = initialState.searchedBooks;
    },
  },
});

export const { search, searchSuccess, searchFailure, reset } =
  searchSlice.actions;

export const searchReducer = searchSlice.reducer;
