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
  return async dispatch => {
    debugger
    const response = await db.collection("posts").get();
    dispatch({ type: 'FETCH_POSTS', payload: response });
  }

};