import { newBooksSaga } from '#features/new-books/new-books.sagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    newBooksSaga(),
  ]);
}
