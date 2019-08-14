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
    const response = await db.collection("posts")
      .where('userId', '==', 'ntq9HSlD9voYa9ZeodPt').get();
    dispatch({ type: 'FETCH_POSTS', payload: response.docs });
  }

};

export const fetchUser = (id) => {
  return async dispatch => {
    db.collection("users")
      .get().then(doc => {
        if (!doc){
          console.log('No such document exist')
        }
        else{
          dispatch({ type: 'FETCH_USER', payload: doc });
        }
      });
  }
}