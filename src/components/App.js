import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import SideHeader from './SideHeader/SideHeader.js';

import { Sidebar, Segment } from 'semantic-ui-react';

const App = () => {
  return(
    <div>
      <SideHeader>
        <Sidebar.Pusher>
          <Segment basic>
            <div className="ui vertical stripe quote segment">
              <div className="ui equal width stackable internally celled grid">
                <PostList />
              </div>
              <div className="column eight wide">
                <PostDetail />
              </div>
            </div>
          </Segment>
        </Sidebar.Pusher>
      </SideHeader>
    </div>
  );
};

export default App;