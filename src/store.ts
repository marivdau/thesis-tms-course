import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const allReducers = {};

export const store = configureStore({
  reducer: {
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
