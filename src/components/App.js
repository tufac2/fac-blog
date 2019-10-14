import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostList from './PostList';
import SiteBar from './SiteBar/SiteBar';
import Pagination from './PageCounter/PageCounter';
import { Sidebar, Segment } from 'semantic-ui-react';
import PageCounter from './PageCounter/PageCounter';

// pages
import contacPage from '../pages/contact'

import '../styles/app.scss'

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <SiteBar>
          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <PostList />
            </div>
            <PageCounter />
          </div>
        </SiteBar>
        <Route path="/contact" exact component={contacPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;