import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import SideHeader from './SideHeader/SideHeader';
import Pagination from './PageCounter/PageCounter';
import { Sidebar, Segment } from 'semantic-ui-react';
import PageCounter from './PageCounter/PageCounter';

import '../styles/app.scss'

const App = () => {
  return(
    <SideHeader>
      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <PostList />
        </div>
        <PageCounter />
      </div>
    </SideHeader>
  );
};

export default App;