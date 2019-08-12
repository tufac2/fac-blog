import * as firebase from 'firebase/app';
import 'firebase/firestore';
import db from '../apis/firebase';

import { async } from 'q';

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post
  };
};

export const fetchPosts = () => {
  return {
    type: 'FETCH_POSTS'
  };
};