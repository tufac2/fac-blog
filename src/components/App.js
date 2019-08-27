import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import SideHeader from './SideHeader/SideHeader.jsx';

const App = () => {
  return(
    <div className="ui container grid">
      <SideHeader />
      <div className="ui row">
        <div className="column eight wide">
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