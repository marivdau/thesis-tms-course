import { call, put, takeLatest } from 'typed-redux-saga';
import { getNewBooks, getNewBooksFailure, getNewBooksSuccess } from "./new-books.slice";
import { api } from "./api";

export function* newBooksSaga() {
  yield takeLatest(getNewBooks, function* activateHandler({ payload }) {
    try {
      const data = yield* call(api.getNewBooks, payload);
      yield put(getNewBooksSuccess({ data }));
    } catch {
      yield put(getNewBooksFailure({ error: 'Data error' }));
    }
  });
}