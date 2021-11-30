import { createSlice } from '@reduxjs/toolkit';

import { commentsState } from './state';

export const commentReducer = createSlice({
  name: 'comments',
  initialState: commentsState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.isError = true;
      state.error = action.payload;
    },
    setComments(state, action) {
      state.isError = false;
      state.error = null;
      state.data = action.payload.reduce((obj, curr) => {
        obj[curr.id] = curr;
        return obj;
      }, {} as Record<string, Comment>);
    },
    addComment(state, action) {
      const { id } = action.payload;
      state[id] = action.payload;
    },
  },
});

export const { setComments, setLoading, setError, addComment } = commentReducer.actions;
