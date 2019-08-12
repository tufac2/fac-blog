import { combineReducers } from 'redux';

const postsReducer = () => {
  return [
    { title: 'Post1', description: 'Description1' },
    { title: 'Post2', description: 'Description2' },
    { title: 'Post3', description: 'Description3' },
    { title: 'Post4', description: 'Description4' }
  ];
};

const selectedPostReducer = (selectedPost = null, action) => {
  if (action.type === 'POST_SELECTED') {
    return action.payload;
  }
  return selectedPost;
}

export default combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer
});