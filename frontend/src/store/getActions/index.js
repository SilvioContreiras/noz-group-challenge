import api from '../../services/api';
import axios from 'axios';
import { 
    getComments, 
    getCommentsSuccess, 
    getCommentsFailure 
} from '../ducks/comments';

import { getPost, getPostSuccess, getPostFailure } from '../ducks/post';
import { getPosts, getPostsSuccess, getPostsFailure } from '../ducks/posts';
import { login } from '../ducks/auth';

export function fetchComments(postId) {
    return async dispatch => {
      dispatch(getComments())
  
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        )
        const data = await response.data
  
        dispatch(getCommentsSuccess(data))
      } catch (error) {
        dispatch(getCommentsFailure())
      }
    }
  }


export function fetchPost(id) {
    return async dispatch => {
      dispatch(getPost())
  
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`
        )
        const data = response.data;
  
        dispatch(getPostSuccess(data))
      } catch (error) {
        dispatch(getPostFailure())
      }
    }
  }

  export function fetchPosts() {
    return async dispatch => {
      dispatch(getPosts())
  
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = response.data;
  
        dispatch(getPostsSuccess(data))
      } catch (error) {
        dispatch(getPostsFailure());
        console.log(error, 'teste');
      }
    }
  }

export const authLogin = (user) => {
    return (dispatch) => {
        api.post('/login', user).then((res) => {
            localStorage.setItem('token', res.data.token);
            dispatch(login());

            window.location.pathname = '/home';
        }).catch((error) => {
            const { message } = error.response.data;
            console.log(message);
        })
    }
}

