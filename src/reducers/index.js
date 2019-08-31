import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import sideHeaderReducer from './sideHeaderReducer';
import pageCounterReducer from './pageCounterReducer';

const selectedPostReducer = (selectedPost = null, action) => {
  if (action.type === 'POST_SELECTED') {
    return action.payload;
  }
  return selectedPost;
}

export default combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer,
  users: usersReducer,
  sideHeaderStatus: sideHeaderReducer,
  pageCounter: pageCounterReducer
});