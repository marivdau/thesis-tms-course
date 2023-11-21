import { createSlice } from "@reduxjs/toolkit";
import { Books, SearchResponce } from "./types";

const searchedBooksSlice = createSlice({
  name: 'searchedBooksSlice',
  initialState: {
    searchedBooks: [] as Books,
    searchedBooksPage: 1,
    searchedBooksTotal: 1,
    searchedBooksLoading: false,
    searchedBooksKeyword: '',
  },

  reducers: {
    searchBooks(state, action: { payload: { search: string, page: number } }) {
      state.searchedBooksLoading = true;
      state.searchedBooksPage = action.payload.page;
    },

    searchBooksSuccess(state, action: { payload: SearchResponce }) {
      state.searchedBooksLoading = false;
      state.searchedBooks = action.payload.books;
    },

    searchBooksFailure(state) {
      state.searchedBooksLoading = false;
    },

    resetBooks(state, action) {
      state.searchedBooksKeyword = '';
      state.searchedBooks = [];
    },
  },
});

export const { searchBooks, searchBooksSuccess, searchBooksFailure, resetBooks } =
  searchedBooksSlice.actions;

export const searchReducer = searchedBooksSlice.reducer;
