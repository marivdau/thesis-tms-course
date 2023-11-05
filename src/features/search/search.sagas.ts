import { call, put, takeLatest } from 'typed-redux-saga';
import { search, searchFailure, searchSuccess } from './search.slice';
import { searchsApi } from './api';

export function* searchSaga() {
  yield takeLatest(search, function* registerHandler({ payload }) {
    const data = yield* call(searchsApi.search, payload);

    if (data) {
      yield put(searchSuccess(data));
    } else {
      yield put(searchFailure());
    }
  });
}