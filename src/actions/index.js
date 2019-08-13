import * as firebase from 'firebase/app';
import db from '../apis/firebase';

import { async } from 'q';

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post
  };
};

export const fetchPosts = () => {
  debugger
  return async dispatch => {
    const response = await db.collection("posts").get();
    dispatch({ type: 'FETCH_POSTS', payload: response });
  }

};