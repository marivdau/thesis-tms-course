import { allBooksSaga } from '#features/all-books/all-books.sagas';
import { bookPreviewSaga } from '#features/book-preview/book-preview.sagas';
import { newBooksSaga } from '#features/new-books/new-books.sagas';
import { searchSaga } from '#features/search/search.sagas';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    newBooksSaga(),
    bookPreviewSaga(),
    searchSaga(),
    allBooksSaga(),
  ]);
}
