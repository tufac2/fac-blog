import React from 'react';
import { Link } from  'react-router-dom';
import PostList from '../components/PostList';
import SiteBar from '../components/SiteBar/SiteBar';
import Pagination from '../components/PageCounter/PageCounter';
import PageCounter from '../components/PageCounter/PageCounter';
import { Sidebar, Segment } from 'semantic-ui-react';

const HomePage = () => {
  return(
    <div>
      <SiteBar>
        <div className="ui vertical stripe quote segment">
          <div className="ui equal width stackable internally celled grid">
            <PostList />
          </div>
          <PageCounter />
        </div>
      </SiteBar>
    </div>
  )
}

export default HomePage