import { createSlice } from "@reduxjs/toolkit";
import { SearchResponce } from "./types";

const searchedBooksSlice = createSlice({
  name: 'searchedBooksSlice',
  initialState: {
    searchedBooks: {} as SearchResponce,
    searchedBooksPage: 1,
    searchedBooksTotal: 1,
    searchedBooksLoading: false,
    searchedBooksKeyword: '',
  },

  reducers: {
    searchBooks(state, action: { payload: { search: string, page: number } }) {
      state.searchedBooksLoading = true;
      state.searchedBooksPage = action.payload.page;
      state.searchedBooksKeyword = action.payload.search;
    },

    searchBooksSuccess(state, action: { payload: SearchResponce }) {
      state.searchedBooksLoading = false;
      const data = action.payload;
      state.searchedBooks = data;
    },

    searchBooksFailure(state) {
      state.searchedBooksLoading = false;
    },

    resetBooks(state, action) {
      state.searchedBooksKeyword = '';
      state.searchedBooks.books = [];
    },
  },
});

export const { searchBooks, searchBooksSuccess, searchBooksFailure, resetBooks } =
  searchedBooksSlice.actions;

export const searchReducer = searchedBooksSlice.reducer;
