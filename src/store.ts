import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './sagas';
import { newBooksReducer } from '#features/new-books/new-books.slice';
import { bookPreviewReducer } from '#features/book-preview/book-preview.slice';
import { searchReducer } from '#features/search/search.slice';
import { orderReducer } from '#features/order/order.slice';
import { favouritesReducer } from '#features/bookmark/bookmark.slice';
import { subscribeReducer } from '#features/subscribe/subscribe.slice';
import { allBooksReducer } from '#features/all-books/all-books.slice';
import { authorizationReducer } from '#features/auth/authorization.slice';
import { signUpFormReducer } from '#features/sign-up-form/sign-up-form.slice';
import { registrationReducer } from '#features/auth/registration.slice';
import { forgotPasswordReducer } from '#features/auth/reset-password.slice';
import { themeModeReducer } from '#features/theme-mode-switcher/theme-mode-switcher.slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const allReducers = {};

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookPreview: bookPreviewReducer,
    search: searchReducer,
    order: orderReducer,
    favourites: favouritesReducer,
    subscribtion: subscribeReducer,
    allBooks: allBooksReducer,
    authorization: authorizationReducer,
    signUpForm: signUpFormReducer,
    registration: registrationReducer,
    forgotPassword: forgotPasswordReducer,
    themeMode: themeModeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
