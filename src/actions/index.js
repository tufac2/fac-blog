import * as firebase from 'firebase/app';
import db from '../apis/firebase';
import axios from 'axios';

import { async } from 'q';

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post
  };
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://us-central1-fac-blog.cloudfunctions.net/getPosts?limit=1")    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  }
}

export const fetchUser = (id) => {
  return async dispatch => {
    const response = await db.collection("users")
      .where('userId', '==', `id`).get()
    dispatch({ type: 'FETCH_USER', payload: response.docs});
  }
}

export const setSideHeader = (status) => {
  return dispatch => {
    dispatch({ type: 'SET_SIDE_HEADER', payload: status})
  }
}

export const changePage = (page) => {
  return dispatch => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page })
  }
}