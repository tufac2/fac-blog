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
  return function(dispatch, getState){
    const promise = db.collection("posts").get()
    debugger
    return {
      type: 'FETCH_POSTS',
      payload: promise
    };
  }

};