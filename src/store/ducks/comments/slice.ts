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
      return {
        ...state,
        error: null,
        isError: false,
        data: action.payload.reduce((obj, curr) => {
          obj[curr.id] = curr;
          return obj;
        }, {}),
      };
    },
    addComment(state, action) {
      const { id } = action.payload;
      state[id] = action.payload;
      // return { ...state, [action.payload.id]: action.payload };
    },
  },
});

export const { setComments, addComment } = commentReducer.actions;
