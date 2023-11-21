import { createSlice } from "@reduxjs/toolkit";
import { SearchResponce } from "./types";

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    searchedBooks: {} as SearchResponce,
    isInProgress: false,
    isCompleted: false,
    searchedPhrase: '',
  },

  reducers: {
    search(state, action) {
      state.isInProgress = true;
      state.searchedPhrase = action.payload.phrase;
    },
    getSearchedBooks(state, action) {
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

    reset(state, action) {
      state.searchedPhrase = '';
      state.searchedBooks = action.payload;
    },
  },
});

export const { search, getSearchedBooks, searchSuccess, searchFailure, reset } =
  searchSlice.actions;

export const searchReducer = searchSlice.reducer;
