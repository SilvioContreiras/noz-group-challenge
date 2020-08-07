import { createAction, createReducer } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
    posts: {},
    loading: true,
    hasErrors: false,
};

export const getPosts = createAction('GET_POSTS');
export const getPostsSuccess = createAction('GET_POSTS_SUCCESS');
export const getPostsFailure = createAction('GET_POSTS_FAILURE');

export default createReducer(INITIAL_STATE, {
    [getPosts.type]: (state) => ({ ...state, loading: true }),
    [getPostsSuccess.type]: (state) => ({...state, loading: false, hasErrors: false }),
    [getPostsFailure.type]: (state) => ({ ...state, loading: false, hasErrors: true })
});