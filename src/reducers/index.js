import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const selectedPostReducer = (selectedPost = null, action) => {
  if (action.type === 'POST_SELECTED') {
    return action.payload;
  }
  return selectedPost;
}

export default combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer,
  users: usersReducer
});