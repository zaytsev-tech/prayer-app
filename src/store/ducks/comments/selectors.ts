import { createSelector } from 'reselect';

export const commentsSelector = (state) => state.comments;

export const commentsArraySelector = createSelector(commentsSelector, (commentsState) => {
  return Object.values(commentsState || {});
});
