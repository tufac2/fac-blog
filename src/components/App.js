import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import SideHeader from './SideHeader/SideHeader.js';

const App = () => {
  return(
    <div className="pusher">
      <SideHeader />
      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <PostList />
        </div>
        <div className="column eight wide">
          <PostDetail />
        </div>
      </div>
    </div>
  );
};

export default App;