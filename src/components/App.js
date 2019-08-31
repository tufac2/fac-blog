import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import SideHeader from './SideHeader/SideHeader';
import Pagination from './PageCounter/PageCounter';
import { Sidebar, Segment } from 'semantic-ui-react';
import PageCounter from './PageCounter/PageCounter';

const App = () => {
  return(
    <div>
      <SideHeader>
        <div className="ui vertical stripe quote segment">
          <div className="ui equal width stackable internally celled grid">
            <PostList />
          </div>
          <PageCounter />
        </div>
      </SideHeader>
    </div>
  );
};

export default App;