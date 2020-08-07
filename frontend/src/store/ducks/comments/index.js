import { createAction, createReducer } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  comments: [],
  loading: false,
  hasErrors: false,
};

export const getComments = createAction('GET COMMENTS');
export const getCommentsSuccess = createAction('GET_COMMENTS_SUCCESS');
export const getCommentsFailure = createAction('GET_COMMENTS_FAILURE');


export default createReducer(INITIAL_STATE, {
    [getComments.type]: (state, action) => ({...state, loading: false}),
    [getCommentsSuccess.type]: (state, action) => ({ ...state, comments: action.payload, loading: false, hasErrors: false }),
    [getCommentsFailure.type]: (state, action) => ({ ...state, loading: false, hasErrors: true })
});