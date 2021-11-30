import { call, put, takeLatest } from '@redux-saga/core/effects';

import { fetchComments, postComment } from '../../../api/comments';
import { CommentActions } from './actions';
import { addComment, setComments, setError, setLoading } from './slice';

function* getCommentsSaga() {
  try {
    yield put(setLoading(true));
    const response = yield call(fetchComments);
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
