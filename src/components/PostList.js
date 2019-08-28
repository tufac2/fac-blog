import React from 'react';
import { connect } from 'react-redux';

import { selectPost, fetchPosts, fetchUser } from '../actions'
import PostCard from './PostCard';
import { log } from 'util';

class PostList extends React.Component {
  
  componentDidMount(){
    this.props.fetchPosts();
  }
  
  getUser(id) {
    return this.props.userId === id
  }
  renderList(){
    return this.props.posts.map((data) => {
      // const data = post.data()
      return (
        <div className="column" key={data.title}>
          <PostCard post={ data } />
        </div>
      );
    });
  }
  render(){
    return(
      <div className="center aligned row">
        {this.renderList()}
      </div>
    )
  }
}


// Take the State, make the logic and set in this component's props
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    users: state.users
  }
}

export default connect(mapStateToProps, {
  selectPost, fetchPosts
})(PostList);