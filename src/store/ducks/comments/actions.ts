import { createAction } from '@reduxjs/toolkit';

export enum CommentActions {
  commentsRequest = 'COMMENTS/GET',
  setCommentRequest = 'COMMENT/POST',
}

export const commentsRequest = createAction(CommentActions.commentsRequest);
export const setCommentRequest = createAction<string>(CommentActions.setCommentRequest);
