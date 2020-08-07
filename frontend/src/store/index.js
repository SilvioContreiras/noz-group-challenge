// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './ducks/auth';
import commentsReducer from './ducks/comments';
import postReducer from './ducks/post';
import postsReducer from './ducks/posts';

export default configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        posts: postsReducer,
        comments: commentsReducer,
    }
});