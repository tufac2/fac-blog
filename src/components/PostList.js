import React from 'react';
import { connect } from 'react-redux';

import { selectPost, fetchPosts, fetchUser, fetchPostsAndUsers } from '../actions'
import PostCard from './PostCard';
import { log } from 'util';

class PostList extends React.Component {
  
  componentDidMount(){
    this.props.fetchPostsAndUsers();
    // this.props.fetchUser();
  }
  
  getUser(id) {
    return this.props.userId === id
  }
  renderList(){
    return this.props.posts.map((post) => {
      const data = post.data()
      return (
        <div key={post.id}>
          <PostCard post={ data } />
        </div>
      );
    });
  }
  render(){
    return(
      <div>
        {this.renderList()}
      </div>
    )
  }
}


// Take the State, make the logic and set in this component's props
const mapStateToProps = (state, ownProps) => {
  state.users.forEach(element => {
    console.log(element);
    
  });
  return {
    posts: state.posts,
    users: state.users
  }
}

export default connect(mapStateToProps, {
  selectPost, fetchPostsAndUsers
})(PostList);