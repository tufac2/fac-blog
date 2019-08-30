import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import SideHeader from './SideHeader/SideHeader.js';

import { Sidebar, Segment } from 'semantic-ui-react';

const App = () => {
  return(
    <div>
      <SideHeader>
        <div className="ui vertical stripe quote segment">
          <div className="ui equal width stackable internally celled grid">
            <PostList />
          </div>
        </div>
      </SideHeader>
    </div>
  );
};

export default App;