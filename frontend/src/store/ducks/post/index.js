import { createAction, createReducer } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
    post: {},
    loading: true,
    hasErrors: false,
};

export const getPost = createAction('GET_POST');
export const getPostSuccess = createAction('GET_POST_SUCCESS');
export const getPostFailure = createAction('GET_POST_FAILURE');

export default createReducer(INITIAL_STATE, {
    [getPost.type]: (state, action) => ({ ...state, loading: true }),
    [getPostSuccess.type]: (state, action) => ({  post: action.payload, loading: false, hasErrors: false }),
    [getPostFailure.type]: (state, action) => ({ ...state, loading: false, hasErrors: true })
});