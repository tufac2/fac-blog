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

export const fetchPosts = (limit=3, activePage=1) => {
  debugger
  const limitPost = activePage * limit
  const first = (activePage * limit) - limit
  const last = first + (limit - 1)
  const payload = {
    activePage: activePage,
    firstIndex: first,
    lastIndex: last
  }
  return async (dispatch, getState) => {
    const response = await axios.get(`https://us-central1-fac-blog.cloudfunctions.net/getPosts?limit=${limitPost}`)    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
    dispatch({ type: 'SET_ACTIVE_PAGE',
      payload: payload});
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

export const setActivePage = (activePage) => {
  return dispatch => {
    dispatch({ type: 'SET_ACTIVE_PAGE', payload: activePage })
  }
}