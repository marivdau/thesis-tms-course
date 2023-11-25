import { createSlice } from "@reduxjs/toolkit";
import { AllBooksResponse } from "./types";

const allBooksSlice = createSlice({
  name: 'allBooksSlice',
  initialState: {
    allBooks: {} as AllBooksResponse,
    isLoading: false,
    error: null as Error | null,
    page: 1,
  },
  reducers: {
    getAllBooks(state, action) {
      state.isLoading = true;
    },
    getAllBooksSuccess(state, action: { payload: { data: AllBooksResponse } }) {
      state.isLoading = false;
      const data = action.payload.data;
      state.allBooks = data;
    },
    getAllBooksFailure(state, error: { payload: unknown }) {
      if (
        typeof error.payload === 'object' &&
        error.payload &&
        'message' in error.payload &&
        typeof error.payload.message === 'string'
      ) {
        state.error = { name: 'Error', message: error.payload.message };
      }
      state.error = { name: 'Error', message: String(error) };
    },
  }
});

export const {
  actions: { getAllBooks, getAllBooksSuccess, getAllBooksFailure },
  reducer: allBooksReducer,
} = allBooksSlice;
