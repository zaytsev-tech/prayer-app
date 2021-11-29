import { call, put, takeLatest } from '@redux-saga/core/effects';

import { getComments, postComment } from '../../../api/comments';
import { setError, setLoading } from '../auth/slice';
import { CommentActions } from './actions';
import { addComment, setComments } from './slice';

function* getCommentsSaga() {
  try {
    yield put(setLoading(true));
    const response = yield call(getComments);
    yield put(setComments(response.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* setCommentSaga(value) {
  try {
    yield put(setLoading(true));
    const response = yield call(postComment, value.payload);
    yield put(addComment(response.data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    } else {
      console.log('Error: ', e);
      yield put(setError('unknown message'));
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* watcherComments() {
  yield takeLatest(CommentActions.commentsRequest, getCommentsSaga);
  yield takeLatest(CommentActions.setCommentRequest, setCommentSaga);
}
