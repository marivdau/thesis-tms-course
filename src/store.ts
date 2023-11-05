import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './sagas';
import { newBooksReducer } from '#features/new-books/new-books.slice';
import { bookPreviewReducer } from '#features/book-preview/book-preview.slice';
import { searchReducer } from '#features/search/search.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const allReducers = {};

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookPreview: bookPreviewReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
