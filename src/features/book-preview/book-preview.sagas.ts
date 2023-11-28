import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getBookPreview,
  getBookPreviewFailure,
  getBookPreviewSuccess,
} from './book-preview.slice';
import { api } from './api';

export function* bookPreviewSaga() {
  yield takeLatest(getBookPreview, function* activateHandler({ payload }) {
    try {
      const data = yield* call(api.getBookPreview, payload);
      yield put(getBookPreviewSuccess({ data }));
    } catch {
      yield put(getBookPreviewFailure({ error: 'Data error' }));
    }
  });
}
