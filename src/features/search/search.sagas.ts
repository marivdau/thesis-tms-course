import { call, put, takeLatest } from 'typed-redux-saga';
import { searchApi } from './api';
import {
  searchBooks,
  searchBooksFailure,
  searchBooksSuccess,
} from './search.slice';

export function* searchSaga() {
  yield takeLatest(searchBooks, function* registerHandler({ payload }) {
    try {
      const response = yield* call(searchApi.search, payload);
      yield put(searchBooksSuccess(response));
    } catch {
      yield put(searchBooksFailure());
    }
  });
}
