import { createSlice } from '@reduxjs/toolkit';
import { BookPreviewResponse } from './types';

const bookPreviewSlice = createSlice({
  name: 'bookPreviewSlice',
  initialState: {
    bookPreview: {} as BookPreviewResponse,
    isLoading: false,
    error: null as Error | null,
    isbn13: null,
  },
  reducers: {
    getBookPreview(state, action: { payload: number }) {
      state.isLoading = true;
    },
    getBookPreviewSuccess(
      state,
      action: { payload: { data: BookPreviewResponse } }
    ) {
      state.isLoading = false;
      const data = action.payload.data;
      state.bookPreview = data;
    },
    getBookPreviewFailure(state, error: { payload: unknown }) {
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
  actions: { getBookPreview, getBookPreviewSuccess, getBookPreviewFailure },
  reducer: bookPreviewReducer,
} = bookPreviewSlice;
