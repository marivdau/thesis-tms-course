import { call, put, takeLatest } from 'typed-redux-saga';
import { getAllBooks, getAllBooksSuccess, getAllBooksFailure } from "./all-books.slice";
import { api } from "./api";

export function* allBooksSaga() {
  yield takeLatest(getAllBooks, function* activateHandler({ payload }) {
    try {
      const data = yield* call(api.getAllBooks, payload);
      yield put(getAllBooksSuccess({ data }));
    } catch {
      yield put(getAllBooksFailure({ error: 'Data error' }));
    }
  });
}
