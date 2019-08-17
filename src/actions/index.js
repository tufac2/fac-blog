import * as firebase from 'firebase/app';
import db from '../apis/firebase';

import { async } from 'q';

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post
  };
};

export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const userIds = (getState().posts).map(post => {
      return post.data().userId
    });
    userIds.forEach(id => dispatch(fetchUser(id)));
    // console.log(users);
    
  }
}

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await db.collection("posts").get();
    dispatch({ type: 'FETCH_POSTS', payload: response.docs });
  }
};

export const fetchUser = (id) => {
  return async dispatch => {
    const response = await db.collection("users")
      .get()
    dispatch({ type: 'FETCH_USER', payload: response.docs});
  }
}