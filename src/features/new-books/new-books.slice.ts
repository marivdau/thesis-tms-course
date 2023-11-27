import { createSlice } from '@reduxjs/toolkit';
import { NewBooksResponse } from './types';

const newBooksSlice = createSlice({
  name: 'newBooksSlice',
  initialState: {
    newBooks: {} as NewBooksResponse,
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    getNewBooks(state) {
      state.isLoading = true;
    },
    getNewBooksSuccess(state, action: { payload: { data: NewBooksResponse } }) {
      state.isLoading = false;
      const data = action.payload.data;
      state.newBooks = data;
    },
    getNewBooksFailure(state, error: { payload: unknown }) {
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
  },
});

export const {
  actions: { getNewBooks, getNewBooksSuccess, getNewBooksFailure },
  reducer: newBooksReducer,
} = newBooksSlice;
