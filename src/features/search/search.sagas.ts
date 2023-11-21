import { call, put, takeLatest } from 'typed-redux-saga';
import { search, searchFailure, searchSuccess } from './search.slice';
import { searchApi } from './api';

export function* searchSaga() {
  yield takeLatest(search, function* registerHandler({ payload }) {
    const data = yield* call(searchApi.search, payload);
    if (data) {
      yield put(searchSuccess(data));
    } else {
      yield put(searchFailure());
    }
  });
}