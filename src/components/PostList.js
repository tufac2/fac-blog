import React from 'react';
import { connect } from 'react-redux';

import { selectPost, fetchPosts, fetchUser, fetchPostsAndUsers } from '../actions'
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
        <div
          className="ui card"
          key={post.id}
          onClick={() => this.props.selectPost(post)}
        >
          <div className="image">
            <img src="" />
          </div>
          <div className="content">
            <a className="header">
              {data.title}
            </a>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
              {data.description}
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
            </a>
          </div>
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