import React from 'react';
import { Route } from 'react-router-dom';
import PostList from './PostList';
import SiteBar from './SiteBar/SiteBar';
import Pagination from './PageCounter/PageCounter';
import { Sidebar, Segment } from 'semantic-ui-react';
import PageCounter from './PageCounter/PageCounter';

import '../styles/app.scss'

const App = () => {
  return(
    <SiteBar>
      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <PostList />
        </div>
        <PageCounter />
      </div>
    </SiteBar>
  );
};

export default App;